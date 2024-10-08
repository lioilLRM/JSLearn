const rows = [
  {
    qid: 1709538281648,
    isStation: '1',
    isChangeMatLabel: '0',
    seqMatching: 0,
    outAutoTran: '0',
    operationType: '',
    useful: 'yes',
    reportRatio: 1,
    inventorys: [],
    sendisabled: true,
    outLabel: 'up',
    linkSeqMode: 0,
    seqMatching_disabled: false,
    isChangeMatLabel_disabled: false,
    isSingleWeight: 0,
    singleWeightStandard: '',
    seq: 1,
    _index: 0,
    nextSeqs: [4],
    finishedDisabled: false,
    parallel: [
      [
        {
          qid: 1709538285776,
          isStation: '1',
          isChangeMatLabel: '0',
          seqMatching: 0,
          outAutoTran: '0',
          operationType: '',
          useful: 'yes',
          reportRatio: 1,
          inventorys: [],
          seq: 2,
          _index: 0,
          nextSeqs: [4],
          canChange: true,
          sendisabled: true,
          outLabel: 'up',
          linkSeqMode: 0,
          seqMatching_disabled: false,
          isChangeMatLabel_disabled: false,
          isSingleWeight: 0,
          singleWeightStandard: ''
        }
      ],
      [
        {
          qid: 1709538289443,
          isStation: '1',
          isChangeMatLabel: '0',
          seqMatching: 0,
          outAutoTran: '0',
          operationType: '',
          useful: 'yes',
          reportRatio: 1,
          inventorys: [],
          seq: 3,
          _index: 0,
          nextSeqs: [4],
          seqMatching_disabled: false,
          isChangeMatLabel_disabled: false,
          canChange: true,
          sendisabled: true,
          outLabel: 'up',
          linkSeqMode: 0,
          isSingleWeight: 0,
          singleWeightStandard: ''
        }
      ]
    ]
  },
  {
    qid: 1709538283649,
    isStation: '1',
    isChangeMatLabel: '0',
    seqMatching: 0,
    outAutoTran: '0',
    operationType: '',
    useful: 'yes',
    reportRatio: 1,
    inventorys: [
      {
        id: 'up',
        matType: '1',
        issueMaterialsCtr: '0',
        rate: 0,
        fixedUsages: 0
      }
    ],
    seq: 4,
    preSeqs: [1, 2, 3],
    canChange: true,
    sendisabled: true,
    outLabel: 'up',
    linkSeqMode: 0,
    seqMatching_disabled: false,
    isChangeMatLabel_disabled: false,
    isSingleWeight: 0,
    singleWeightStandard: '',
    nextSeqs: [5],
    finishedDisabled: false
  },
  {
    qid: 1709538284594,
    isStation: '1',
    isChangeMatLabel: '0',
    seqMatching: 0,
    outAutoTran: '0',
    operationType: '',
    useful: 'yes',
    reportRatio: 1,
    inventorys: [
      {
        id: 'up',
        matType: '1',
        issueMaterialsCtr: '0',
        rate: 0,
        fixedUsages: 0
      }
    ],
    seq: 5,
    preSeqs: [4],
    canChange: true,
    sendisabled: true,
    outLabel: 'up',
    linkSeqMode: 0,
    seqMatching_disabled: false,
    isChangeMatLabel_disabled: false,
    isSingleWeight: 0,
    singleWeightStandard: ''
  }
]

// 2、卡控如果上序多道工序，上序工序必须是工单产出
// 3、分叉不支持外协
// 4、分叉上序投料设置：上序产出物料3/4粗车

function handleRouteTreeBomBusinessLogic(routeRows) {
  // 2、卡控如果上序多道工序，上序工序必须是工单产出
  const setIsChangeMatLabelToNotAndDisabled = (
    multiInputProcessItems,
    rows
  ) => {
    const loopFind = (rows, preSeq) => {
      return rows.find(row => {
        if (row.seq === preSeq) {
          row.isChangeMatLabel = '0'
          row.isChangeMatLabel_disabled = true
          return true
        }
        if (!row.parallel) return

        if (row.parallel) {
          return row.parallel.find(parallelRows => {
            return loopFind(parallelRows, preSeq)
          })
        }
      })
    }

    multiInputProcessItems.forEach(item => {
      if (item.preSeqs && item.preSeqs.length) {
        item.preSeqs.forEach(preSeq => {
          loopFind(rows, preSeq)
        })
      }
    })
  }

  // 获取交叉节点工序项
  const getMultiInputProcessItems = rows => {
    const result = []
    rows.forEach(item => {
      if (item.preSeqs && item.preSeqs.length > 1) {
        result.push(item)
      }
      if (item.parallel) item.parallel.forEach(getMultiInputProcessItems)
    })
    return result
  }

  // 设置交叉节点工序的投料设置
  const setMultiInputProcessItemsInventorys = rows => {
    // 默认上道工序产出
    const upProcessOut = {
      id: 'up',
      matType: '1',
      issueMaterialsCtr: '0',
      rate: 0,
      fixedUsages: 0
    }
    let treeBomRowsLength = 1
    let seq = 1
    // 计算树形BOM的工序数量
    const count = rows => {
      rows.forEach(item => {
        treeBomRowsLength = seq++
        if (item.parallel) item.parallel.forEach(rows => count(rows))
      })
    }

    const createMultiInputPointInventorys = (routeRows, routeItem) => {
      const inventorys = []

      routeItem.preSeqs.forEach(preSeq => {
        // const matchRow = routeRows.find(sitem => sitem.seq === preSeq)
        const matchRow = findRowBySeq(rows, preSeq)

        if (matchRow) {
          const upOutputMatName = `${matchRow.seq || ''} / ${treeBomRowsLength} ${matchRow.processName || ''}`

          const inventory = JSON.parse(JSON.stringify(upProcessOut))
          inventory.preSeq = preSeq
          inventory.preSeqName = upOutputMatName
          inventory.options = [{ itemName: upOutputMatName, itemValue: preSeq }]
          inventory.canDelRow = false
          inventorys.push(inventory)
        }
      })
      // console.log('🚀 ~ createMultiInputPointInventorys ~ inventorys:', inventorys)
      return inventorys
    }

    const loop = rows => {
      rows.forEach(routeItem => {
        if (routeItem.preSeqs) {
          if (routeItem.preSeqs.length === 1) {
            routeItem.inventorys = [upProcessOut]
          }
          if (routeItem.preSeqs.length > 1) {
            console.log('🚀 ~ loop ~ 交叉节点投料:', routeItem.preSeqs)
            routeItem.inventorys = createMultiInputPointInventorys(rows, routeItem)
            console.log('🚀 ~ loop ~ 交叉节点投料结果:', routeItem.inventorys)
          }
        }

        if (routeItem.parallel) {
          routeItem.parallel.forEach(parallelRows => {
            loop(parallelRows)
          })
        }
      })
    }

    count(rows)
    console.log('🚀 ~ count ~ treeBomRowsLength:', treeBomRowsLength)

    loop(rows)
  }

  updateRouteTreeBomSeq(routeRows)
  const multiInputProcessItems = getMultiInputProcessItems(routeRows)
  setIsChangeMatLabelToNotAndDisabled(multiInputProcessItems, routeRows)
  // setMultiInputProcessItemsNotSupportOutHelp(rows)
  setMultiInputProcessItemsInventorys(routeRows)
}

function updateRouteTreeBomSeq(routeDeta) {
  // 拉平
  let seq = 1
  const loop = rows => {
    let preItem
    rows.forEach(item => {
      item.seq = seq++
      item.prefixName = `工序-${item.seq}`
      item.processName = item.prefixName
      if (preItem) {
        preItem.nextSeqs = [item.seq]
        item.preSeqs = [preItem.seq]
        if (preItem.parallel) {
          preItem.parallel.forEach(rows => {
            const lastItem = rows[rows.length - 1]
            if (!lastItem) return
            lastItem.nextSeqs = [item.seq]
            item.preSeqs.push(lastItem.seq)
          })
        }
      } else {
        item._index = 0
        delete item.preSeqs
      }
      preItem = item

      if (item.parallel) item.parallel.forEach(rows => loop(rows))
    })
  }
  loop(routeDeta)
}

const findRowBySeq = (rows, seq) => {
  let matchRow

  const loopFind = (rows) => {
    return rows.find((row) => {
      if (row.seq === seq) {
        matchRow = row
        return true
      }
      if (row.parallel) {
        row.parallel.forEach((parallelRows) => {
          return loopFind(parallelRows)
        })
      }
    })
  }
  loopFind(rows)

  // console.log('🚀 ~ findRowBySeq ~ matchRow:', matchRow)
  return matchRow
}

function printSimple(rows) {
  const result = []

  const loop = rows => {
    rows.forEach(row => {
      const obj = {
        seq: row.seq,
        prefixName: row.prefixName,
        inventorys: row.inventorys,
        isChangeMatLabel: row.isChangeMatLabel,
        isChangeMatLabel_disabled: row.isChangeMatLabel_disabled

      }
      result.push(obj)
      if (row.parallel) {
        row.parallel.forEach(loop)
      }
    })
  }
  loop(rows)
  console.log('🚀 ~ printSimple ~ rows:', result)
}

describe('业务逻辑测试', () => {
  it('测试1:测试有一个交叉节点时的投料设置和产出标签结果', () => {
    const copyRows = JSON.parse(JSON.stringify(rows))
    handleRouteTreeBomBusinessLogic(copyRows)
    // setMultiInputProcessItemsInventorys(rows)
    printSimple(copyRows)
  })

  it('findRowBySeq', () => {
    handleRouteTreeBomBusinessLogic(rows)
    const res = findRowBySeq(rows, 5)
    console.log('🚀 ~ it ~ res:', res)
  })

  it('测试2:测试删除交叉节点后,投料设置和产出标签结果', () => {
    const copyRows = JSON.parse(JSON.stringify(rows))

    copyRows.forEach(row => {
      if (row.parallel) {
        delete row.parallel
      }
    })

    console.log('🚀 ~ it ~ copyRows:', copyRows)
    handleRouteTreeBomBusinessLogic(copyRows)
    printSimple(copyRows)
  })
})

