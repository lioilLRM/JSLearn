const row = {
  specs: '600*50 | M5',
  matIdNames: '回测生产件 | HC003',
  lastTatuo: 0,
  depCodes: 'P1307239998869344258P1567073484364861442',
  id: 386,
  matName: '回测生产件',
  creator: '1331423929641730049',
  bomId: 182,
  types: 0,
  produceBom35VO: {
    produceBomDetaList: [
      {
        pUnit: 'PCS#1#floor',
        mid: 182,
        pUsages: 1,
        matUseMode: 1,
        rate: 0,
        depCodes: 'P1307239998869344258P1687037733899411457',
        id: 7304,
        usages: 3,
        seq: '0',
        matName: '回测委外件 | HC002',
        issueMaterialsCtr: 0,
        creator: '1331423929641730049',
        isDelete: 0,
        updateTime: '2023-11-30 09:37:27',
        warehouse: '3273',
        matType: '1',
        unit: 'PCS#2#floor',
        updatorNames: '王磊',
        creatorNames: '张坤',
        createTime: '2022-11-01 11:27:26',
        matId: 383,
        hasChild: true,
        updator: '1332213907665760258',
        warehouseNames: 'ROLEDS',
        matCode: 'HC002',
        status: 0
      }
    ],
    define4: '否',
    specs: '600*50 | M5',
    matIdNames: '回测生产件 | HC003 | M5 | 600*50',
    id: 182,
    matUnit: 'PCS#1#floor',
    matName: '回测生产件',
    version: '1',
    isDefault: 0,
    matId: 384,
    dataTitle: '',
    matCode: 'HC003',
    produceBomAppendList: [],
    status: 0
  },

  routeDeta35VOList: [
    {
      mid: 386,
      seqMatching: 0,
      processName: '下料',
      sevenPlan: {},
      depCodes: 'P1307239998869344258P1567073484364861442',
      id: 1046,
      processType: '1',
      jobFile: ['1162', '1159'],
      seq: 1,
      isChangeMatLabel: 0,
      fixedUsages: 0,
      creator: '1331423929641730049',
      sourceList: [],
      inventorys: [
        {
          pUnit: 'PCS#1#floor',
          mid: 182,
          pUsages: 1,
          matUseMode: 1,
          rate: 0,
          depCodes: 'P1307239998869344258P1687037733899411457',
          id: 7304,
          usages: 1,
          seq: '0',
          matName: '回测委外件 | HC002',
          issueMaterialsCtr: 0,
          creator: '1331423929641730049',
          isDelete: 0,
          updateTime: '2023-11-30 09:37:27',
          warehouse: '3273',
          matType: '1',
          unit: 'PCS#2#floor',
          updatorNames: '王磊',
          creatorNames: '张坤',
          createTime: '2022-11-01 11:27:26',
          matId: 383,
          hasChild: true,
          updator: '1332213907665760258',
          warehouseNames: 'ROLEDS',
          matCode: 'HC002',
          status: 0,
          usagesObj: {
            mainUnit: 'PCS#1#floor',
            mainUsage: 1,
            subUnit: 'PCS#2#floor',
            subUsage: 1
          }

        }
      ],
      isDelete: 0,
      meter: { unit: '', Num: 1, time: '秒', cycle: '分钟' },
      prefixName: '1/3',
      updateTime: '2023-11-15 09:32:10',
      thirdPlan: {},
      workCenter: ['566'],
      fourPlan: {},
      updatorNames: '张坤',
      creatorNames: '张坤',
      linkSeqMode: 0,
      piecePrice: {},
      createTime: '2023-02-13 15:00:28',
      jobFileNames: [
        '修改名称.pdf',
        'SD-D35000 FR2C2-JUC1 机架式配线箱 产品规格书(中英) REV.01.pdf'
      ],
      defaultNum: 1,
      processCode: 'RO01',
      outSourceList: [],
      updator: '1566673395171532802',
      reportRatio: 1,
      workCenterNames: ['排程工作组1'],
      status: 0,
      operationType: '自制',
      qualityTest: { thirdPlan: {}, fourPlan: {}, sevenPlan: {}},
      showInventory: true,
      seqMatching_disabled: false,
      isChangeMatLabel_disabled: false,
      qid: 1046,
      useful: 'yes',
      isSingleWeight: 0,
      singleWeightStandard: '',
      finishedDisabled: false,
      outLabel: 7304
    },
    {
      mid: 386,
      seqMatching: 0,
      processName: '红冲',
      sevenPlan: {},
      depCodes: 'P1307239998869344258P1567073484364861442',
      id: 1122,
      processType: '1',
      seq: 2,
      isChangeMatLabel: 1,
      fixedUsages: 0,
      creator: '1331423929641730049',
      sourceList: [],
      inventorys: [
        {
          fixedUsages: 0,
          rate: 0,
          id: 'up',
          matType: '1',
          issueMaterialsCtr: 0,
          usagesObj: { mainUnit: '', mainUsage: 0, subUnit: '', subUsage: 0 }
        },
        {
          qid: 1701411964590,
          fixedUsages: '0',
          matType: '1',
          issueMaterialsCtr: 0,
          id: 7304,
          rate: 0,

          matId: 383,
          pUnit: 'PCS#1#floor',
          mid: 182,
          pUsages: 1,
          matUseMode: 1,
          depCodes: 'P1307239998869344258P1687037733899411457',
          usages: 4,
          seq: '0',
          matName: '回测委外件 | HC002',
          creator: '1331423929641730049',
          isDelete: 0,
          updateTime: '2023-11-30 09:37:27',
          warehouse: '3273',
          unit: 'PCS#2#floor',
          updatorNames: '王磊',
          creatorNames: '张坤',
          createTime: '2022-11-01 11:27:26',
          hasChild: true,
          updator: '1332213907665760258',
          warehouseNames: 'ROLEDS',
          matCode: 'HC002',
          status: 0,
          usagesObj: {
            mainUnit: 'PCS#1#floor',
            mainUsage: 1,
            subUnit: 'PCS#2#floor',
            subUsage: 4
          },
          fullDir: ''
        }
      ],
      isDelete: 0,
      meter: { unit: '', Num: '1', time: '秒', cycle: '分钟' },
      prefixName: '2/3',
      updateTime: '2023-11-15 09:32:10',
      thirdPlan: {},
      workCenter: ['567'],
      fourPlan: {},
      updatorNames: '张坤',
      creatorNames: '张坤',
      linkSeqMode: 0,
      piecePrice: {},
      createTime: '2023-02-24 11:47:39',
      defaultNum: 1,
      processCode: 'RO02',
      outSourceList: [],
      updator: '1566673395171532802',
      reportRatio: 1,
      workCenterNames: ['排程工作组2'],
      status: 0,
      operationType: '自制',
      qualityTest: { thirdPlan: {}, fourPlan: {}, sevenPlan: {}},
      showInventory: true,
      seqMatching_disabled: false,
      isChangeMatLabel_disabled: false,
      qid: 1122,
      useful: 'yes',
      isSingleWeight: 0,
      singleWeightStandard: '',
      finishedDisabled: false,
      sendisabled: true,
      outLabel: 'up'
    },
    {
      mid: 386,
      seqMatching: 0,
      processName: '切边',
      sevenPlan: {},
      depCodes: 'P1307239998869344258P1567073484364861442',
      id: 1123,
      processType: '1',
      seq: 3,
      isChangeMatLabel: 0,
      fixedUsages: 0,
      creator: '1331423929641730049',
      sourceList: [],
      inventorys: [
        {
          fixedUsages: 0,
          rate: 0,
          id: 'up',
          matType: '1',
          issueMaterialsCtr: 0,
          usagesObj: { mainUnit: '', mainUsage: 0, subUnit: '', subUsage: 0 }
        }
      ],
      isDelete: 0,
      meter: { Num: '2', time: '秒', cycle: '分钟' },
      prefixName: '3/3',
      updateTime: '2023-11-15 09:32:10',
      thirdPlan: {},
      workCenter: ['568'],
      fourPlan: {},
      updatorNames: '张坤',
      creatorNames: '张坤',
      linkSeqMode: 0,
      piecePrice: {},
      createTime: '2023-02-24 16:49:19',
      defaultNum: 1,
      processCode: 'RO03',
      outSourceList: [],
      updator: '1566673395171532802',
      reportRatio: 1,
      workCenterNames: ['排程工作组3'],
      status: 0,
      operationType: '自制',
      qualityTest: { thirdPlan: {}, fourPlan: {}, sevenPlan: {}},
      showInventory: true,
      seqMatching_disabled: false,
      isChangeMatLabel_disabled: false,
      qid: 1123,
      useful: 'yes',
      isSingleWeight: 0,
      singleWeightStandard: ''
    }
  ],

  routeDeta: [
    {
      mid: 386,
      seqMatching: 0,
      processName: '下料',
      sevenPlan: {},
      depCodes: 'P1307239998869344258P1567073484364861442',
      id: 1046,
      processType: '1',
      jobFile: ['1162', '1159'],
      seq: 1,
      isChangeMatLabel: 0,
      fixedUsages: 0,
      creator: '1331423929641730049',
      sourceList: [],
      inventorys: [
        {
          pUnit: 'PCS#1#floor',
          mid: 182,
          pUsages: 1,
          matUseMode: 1,
          rate: 0,
          depCodes: 'P1307239998869344258P1687037733899411457',
          id: 7304,
          usages: 1,
          seq: '0',
          matName: '回测委外件 | HC002',
          issueMaterialsCtr: 0,
          creator: '1331423929641730049',
          isDelete: 0,
          updateTime: '2023-11-30 09:37:27',
          warehouse: '3273',
          matType: '1',
          unit: 'PCS#2#floor',
          updatorNames: '王磊',
          creatorNames: '张坤',
          createTime: '2022-11-01 11:27:26',
          matId: 383,
          hasChild: true,
          updator: '1332213907665760258',
          warehouseNames: 'ROLEDS',
          matCode: 'HC002',
          status: 0,
          usagesObj: {
            mainUnit: 'PCS#1#floor',
            mainUsage: 1,
            subUnit: 'PCS#2#floor',
            subUsage: 1
          }

        }
      ]

    },
    {
      mid: 386,
      seqMatching: 0,
      processName: '红冲',
      sevenPlan: {},
      depCodes: 'P1307239998869344258P1567073484364861442',
      id: 1122,
      processType: '1',
      seq: 2,
      isChangeMatLabel: 1,
      fixedUsages: 0,
      creator: '1331423929641730049',
      sourceList: [],
      inventorys: [
        {
          fixedUsages: 0,
          rate: 0,
          id: 'up',
          matType: '1',
          issueMaterialsCtr: 0,
          usagesObj: { mainUnit: '', mainUsage: 0, subUnit: '', subUsage: 0 }
        },
        {
          qid: 1701411964590,
          fixedUsages: '0',
          matType: '1',
          issueMaterialsCtr: 0,
          id: 7304,
          rate: 0,

          matId: 383,
          pUnit: 'PCS#1#floor',
          mid: 182,
          pUsages: 1,
          matUseMode: 1,
          depCodes: 'P1307239998869344258P1687037733899411457',
          usages: 4,
          seq: '0',
          matName: '回测委外件 | HC002',
          creator: '1331423929641730049',
          isDelete: 0,
          updateTime: '2023-11-30 09:37:27',
          warehouse: '3273',
          unit: 'PCS#2#floor',
          updatorNames: '王磊',
          creatorNames: '张坤',
          createTime: '2022-11-01 11:27:26',
          hasChild: true,
          updator: '1332213907665760258',
          warehouseNames: 'ROLEDS',
          matCode: 'HC002',
          status: 0,
          usagesObj: {
            mainUnit: 'PCS#1#floor',
            mainUsage: 1,
            subUnit: 'PCS#2#floor',
            subUsage: 4
          },
          fullDir: ''
        }
      ],
      isDelete: 0,
      meter: { unit: '', Num: '1', time: '秒', cycle: '分钟' },
      prefixName: '2/3',
      updateTime: '2023-11-15 09:32:10',
      thirdPlan: {},
      workCenter: ['567'],
      fourPlan: {},
      updatorNames: '张坤',
      creatorNames: '张坤',
      linkSeqMode: 0,
      piecePrice: {},
      createTime: '2023-02-24 11:47:39',
      defaultNum: 1,
      processCode: 'RO02',
      outSourceList: [],
      updator: '1566673395171532802',
      reportRatio: 1,
      workCenterNames: ['排程工作组2'],
      status: 0,
      operationType: '自制',
      qualityTest: { thirdPlan: {}, fourPlan: {}, sevenPlan: {}},
      showInventory: true,
      seqMatching_disabled: false,
      isChangeMatLabel_disabled: false,
      qid: 1122,
      useful: 'yes',
      isSingleWeight: 0,
      singleWeightStandard: '',
      finishedDisabled: false,
      sendisabled: true,
      outLabel: 'up'
    },
    {
      mid: 386,
      seqMatching: 0,
      processName: '切边',
      sevenPlan: {},
      depCodes: 'P1307239998869344258P1567073484364861442',
      id: 1123,
      processType: '1',
      seq: 3,
      isChangeMatLabel: 0,
      fixedUsages: 0,
      creator: '1331423929641730049',
      sourceList: [],
      inventorys: [
        {
          fixedUsages: 0,
          rate: 0,
          id: 'up',
          matType: '1',
          issueMaterialsCtr: 0,
          usagesObj: { mainUnit: '', mainUsage: 0, subUnit: '', subUsage: 0 }
        }
      ],
      isDelete: 0,
      meter: { Num: '2', time: '秒', cycle: '分钟' },
      prefixName: '3/3',
      updateTime: '2023-11-15 09:32:10',
      thirdPlan: {},
      workCenter: ['568'],
      fourPlan: {},
      updatorNames: '张坤',
      creatorNames: '张坤',
      linkSeqMode: 0,
      piecePrice: {},
      createTime: '2023-02-24 16:49:19',
      defaultNum: 1,
      processCode: 'RO03',
      outSourceList: [],
      updator: '1566673395171532802',
      reportRatio: 1,
      workCenterNames: ['排程工作组3'],
      status: 0,
      operationType: '自制',
      qualityTest: { thirdPlan: {}, fourPlan: {}, sevenPlan: {}},
      showInventory: true,
      seqMatching_disabled: false,
      isChangeMatLabel_disabled: false,
      qid: 1123,
      useful: 'yes',
      isSingleWeight: 0,
      singleWeightStandard: ''
    }
  ],

  bomData: {
    produceBomDetaList: [
      {
        pUnit: 'PCS#1#floor',
        mid: 182,
        pUsages: 1,
        matUseMode: 1,
        rate: 0,
        depCodes: 'P1307239998869344258P1687037733899411457',
        id: 7304,
        usages: 3,
        seq: '0',
        matName: '回测委外件 | HC002',
        issueMaterialsCtr: 0,
        creator: '1331423929641730049',
        isDelete: 0,
        updateTime: '2023-11-30 09:37:27',
        warehouse: '3273',
        matType: '1',
        unit: 'PCS#2#floor',
        updatorNames: '王磊',
        creatorNames: '张坤',
        createTime: '2022-11-01 11:27:26',
        matId: 383,
        hasChild: true,
        updator: '1332213907665760258',
        warehouseNames: 'ROLEDS',
        matCode: 'HC002',
        status: 0,
        usagesObj: {
          mainUnit: 'PCS#1#floor',
          mainUsage: 1,
          subUnit: 'PCS#2#floor',
          subUsage: 3
        }
      }
    ]

  }
}

const rowV2 = {
  routeDeta: [
    {
      inventorys: [
        {
          id: 7304,
          matName: '回测委外件 | HC002',
          usagesObj: {
            mainUnit: 'PCS#1#floor',
            mainUsage: 1,
            subUnit: 'PCS#2#floor',
            subUsage: 1
          }
        }
      ]
    },
    {
      inventorys: [
        {
          fixedUsages: 0,
          rate: 0,
          id: 'up',
          matType: '1',
          issueMaterialsCtr: 0,
          usagesObj: { mainUnit: '', mainUsage: 0, subUnit: '', subUsage: 0 }
        },
        {
          id: 7304,
          matName: '回测委外件 | HC002',
          usagesObj: {
            mainUnit: 'PCS#1#floor',
            mainUsage: 1,
            subUnit: 'PCS#2#floor',
            subUsage: 1
          }
        }
      ]
    },
    {
      inventorys: [
        {
          fixedUsages: 0,
          rate: 0,
          id: 'up',
          matType: '1',
          issueMaterialsCtr: 0,
          usagesObj: { mainUnit: '', mainUsage: 0, subUnit: '', subUsage: 0 }
        },
        {
          id: 7304,
          matName: '回测委外件 | HC002',
          usagesObj: {
            mainUnit: 'PCS#1#floor',
            mainUsage: 1,
            subUnit: 'PCS#2#floor',
            subUsage: 2
          }
        }
      ]
    }
  ],

  bomData: {
    produceBomDetaList: [
      {
        id: 7304,
        matName: '回测委外件 | HC002',
        usagesObj: {
          mainUnit: 'PCS#1#floor',
          mainUsage: 1,
          subUnit: 'PCS#2#floor',
          subUsage: 1
        }
      }
    ]
  }

}

function checkUsageObjIsOverByKey(row) {
  /**
   * 计算逻辑：
   * 物料清单子母件比例：1/1
   * 工序中的投料比例：1/2  1/3  7/10
   * 最小公倍数：30
   * 物料清单子母件比例：1/1 * 30 = 30/30
   * 工序中的投料比例：1/2 * 30 = 15/30  1/3 * 30 = 10/30  7/10 * 30 = 21/30
   * 工序在投料子件总比例：15/30 + 10/30 + 21/30 = 46/30
   * 投料子件总比例与物料清单子件比例不相等，说明投料子件总比例不等于物料清单子件比例
   */
  const materialBillSonMaterials = row.bomData.produceBomDetaList
  if (row.routeDeta && row.routeDeta.length) {
    for (let i = 0; i < materialBillSonMaterials.length; i++) {
      // 物料清单中的子件
      const billSonMaterial = materialBillSonMaterials[i]
      const matchFeedingMaterials = []
      row.routeDeta.forEach(route => {
        let matchInventorys = []
        if (route.inventorys && route.inventorys.length) {
          matchInventorys = route.inventorys.filter(inventory => inventory.id === billSonMaterial.id)
          matchFeedingMaterials.push(...matchInventorys)
        }
      })
      // 物料清单中的子件的用量
      const billSonMaterialSubUsage = billSonMaterial.usagesObj.subUsage
      const billSonMaterialMainUsage = billSonMaterial.usagesObj.mainUsage

      let feedingMaterialSubUsageTotal = 0
      let feedingMaterialMainUsageTotal = 0

      const feedingMaterialMainUsageArr = [billSonMaterialMainUsage]
      matchFeedingMaterials.forEach(matchFeedingItem => {
        if (matchFeedingItem.usagesObj && matchFeedingItem.usagesObj.mainUsage) {
          feedingMaterialMainUsageArr.push(matchFeedingItem.usagesObj.mainUsage)
        }
      })

      const feedingMaterialMainUsageLCM = getArrLCMV3(feedingMaterialMainUsageArr)
      console.log('🚀 最小公倍数LCM:', feedingMaterialMainUsageLCM)

      matchFeedingMaterials.forEach(matchFeedingItem => {
        if (matchFeedingItem.usagesObj && matchFeedingItem.usagesObj.mainUsage) {
          const mainRadio = feedingMaterialMainUsageLCM / matchFeedingItem.usagesObj.mainUsage
          let newSubUsage = matchFeedingItem.usagesObj.subUsage
          const newMainUsage = matchFeedingItem.usagesObj.mainUsage * mainRadio
          if (mainRadio > 1) {
            newSubUsage = newSubUsage * mainRadio
          }
          console.log('🚀 ~  ~ mainRadio:', mainRadio, newSubUsage, newMainUsage)
          feedingMaterialSubUsageTotal += newSubUsage
          feedingMaterialMainUsageTotal += newMainUsage
        }
      })
      const isMatherRadioEqualFeedingMaterialMainRadio = feedingMaterialMainUsageTotal / matchFeedingMaterials.length

      const billSonMaterialMainRadio = feedingMaterialMainUsageLCM / billSonMaterialMainUsage

      const newbillSonMaterialSubUsage = billSonMaterialSubUsage * billSonMaterialMainRadio
      const newbillSonMaterialMainUsage = billSonMaterialMainUsage * billSonMaterialMainRadio

      console.log(`
      物料清单子件原比例：${billSonMaterialSubUsage} *  ${billSonMaterialMainRadio} = ${newbillSonMaterialSubUsage}
      物料清单母件原比例：${billSonMaterialMainUsage} *  ${billSonMaterialMainRadio} = ${newbillSonMaterialMainUsage}
      投料的子件总比例:${feedingMaterialSubUsageTotal}
      投料的母件总比例:${isMatherRadioEqualFeedingMaterialMainRadio}

     `)

      if (feedingMaterialSubUsageTotal !== newbillSonMaterialSubUsage) {
        console.log(`【${billSonMaterial.matName}】的子件用量不等于物料清单设置的子件用量`)
        return true
      }

      if (isMatherRadioEqualFeedingMaterialMainRadio !== newbillSonMaterialMainUsage) {
        console.log(`【${billSonMaterial.matName}】的母件底数不等于物料清单设置的母件底数`)
        return true
      }

      return false
    }
  }
}
// 获取数组的最小公倍数
function getArrLCM(arr) {
  // 最大公约数
  const gcd = (x, y) => {
    var max, min, temp
    max = x > y ? x : y
    min = x < y ? x : y
    if (x === 0 || y === 0) {
      return max
    }
    while (max % min) {
      temp = max % min
      max = min
      min = temp
    }
    return min
  }
  // 最小公倍数
  const lrm = (x, y) => {
    return x * y / gcd(x, y)
  }

  const createArrLCM = (arr) => {
    var midNum = 1
    for (var i = 0; i < arr.length; i++) {
      midNum = lrm(arr[i], midNum)
    }
    return midNum
  }

  const result = createArrLCM(arr)
  console.log('🚀 ~ file: processBom.test.js:723 ~ getArrLCM ~ result:', result)

  return result
}

function getArrLCMV2(arr) {
  // 计算两个数的最大公约数 (GCD)
  const euclideanAlgorithm = (originalA, originalB) => {
    const a = Math.abs(originalA)
    const b = Math.abs(originalB)

    return (b === 0) ? a : euclideanAlgorithm(b, a % b)
  }

  const leastCommonMultiple = (a, b) => {
    return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b)
  }

  const lcm = (arr) => {
    if (arr.length === 0) {
      return 0
    }

    let multiple = arr[0]
    for (let i = 1; i < arr.length; i++) {
      multiple = leastCommonMultiple(multiple, arr[i])
    }
    return multiple
  }
  const result = lcm(arr)
  console.log('🚀 ~ file: processBom.test.js:723 ~ getArrLCM ~ result:', result)
  return result
}

// function minComMulti() {
//   var args = [].slice.call(arguments)
//   var len = args.length
//   if (len < 1) return
//   if (len === 1) return args[0]
//   if (len === 2) {
//     // minTwoMulti();
//     var max = Math.max.apply(Math, args)
//     var min = Math.min.apply(Math, args)
//     for (var i = 1; ; i++) {
//       if (max * i % min === 0) {
//         return max * i
//       }
//     }
//   }
//   return minComMulti(minComMulti.apply(null, args.slice(1)), args[0])
// }

// console.log(arrGbs([1, 2, 3, 10]))// 336

// console.log(` getLCM([2,5,10])`, getLCM([2, 5, 10]))

// checkFeedingSubUsageIsOver()
// checkFeedingMainUsageIsOver()

function getArrLCMV3(arr) {
  const arrayLcm = arr => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y))
    const lcm = (x, y) => x * y / gcd(x, y)
    return arr.reduce((a, b) => lcm(a, b))
  }

  const result = arrayLcm(arr)
  console.log('🚀 ~ file: processBom.test.js:723 ~ getArrLCM ~ result:', result)
  return result
}

describe('最小公倍数', () => {
  it('0-1demo', () => {
    const arr = [1, 2, 3, 10]
    const expectRes = 30
    const res = getArrLCMV3(arr)
    expect(res).toBe(expectRes)
  })

  it('0-2demo', () => {
    const arr = [1, 2, 5, 10]
    const expectRes = 10
    const res = getArrLCMV3(arr)
    expect(res).toBe(expectRes)
  })

  it('0-3demo', () => {
    const arr = [1, 1, 1, 1]
    const expectRes = 1
    const res = getArrLCMV3(arr)
    expect(res).toBe(expectRes)
  })

  it('0-4demo', () => {
    const arr = [12, 18]
    const expectRes = 36
    const res = getArrLCMV3(arr)
    expect(res).toBe(expectRes)
  })

  it('0-5demo', () => {
    const arr = [9, 15, 21]
    const expectRes = 315
    const res = getArrLCMV3(arr)
    expect(res).toBe(expectRes)
  })

  it('0-6demo', () => {
    const arr = [7, 14, 21, 28]
    const expectRes = 84
    const res = getArrLCMV3(arr)
    expect(res).toBe(expectRes)
  })

  it('0-7demo', () => {
    const arr = [13, 19, 26, 38]
    const expectRes = 494
    const res = getArrLCMV3(arr)
    expect(res).toBe(expectRes)
  })
})

describe('processBom', () => {
  it('0-1demo', () => {
    const copyRowV2 = JSON.parse(JSON.stringify(rowV2))
    copyRowV2.routeDeta[0].inventorys[0].usagesObj.subUsage = 1
    copyRowV2.routeDeta[0].inventorys[0].usagesObj.mainUsage = 5

    copyRowV2.routeDeta[1].inventorys[1].usagesObj.subUsage = 1
    copyRowV2.routeDeta[1].inventorys[1].usagesObj.mainUsage = 3

    copyRowV2.routeDeta[2].inventorys[1].usagesObj.subUsage = 9
    copyRowV2.routeDeta[2].inventorys[1].usagesObj.mainUsage = 15

    copyRowV2.bomData.produceBomDetaList[0].usagesObj.subUsage = 17
    copyRowV2.bomData.produceBomDetaList[0].usagesObj.mainUsage = 15

    // console.log('🚀 ~ file: processBom.test.js:627 ~ checkUsageObjIsOverByKey ~ copyRowV2:', copyRowV2)

    const expectRes = false
    const res = checkUsageObjIsOverByKey(copyRowV2)
    expect(res).toBe(expectRes)
  })

  it('0-2demo', () => {
    const copyRowV2 = JSON.parse(JSON.stringify(rowV2))
    copyRowV2.routeDeta[0].inventorys[0].usagesObj.subUsage = 1
    copyRowV2.routeDeta[0].inventorys[0].usagesObj.mainUsage = 1

    copyRowV2.routeDeta[1].inventorys[1].usagesObj.subUsage = 2
    copyRowV2.routeDeta[1].inventorys[1].usagesObj.mainUsage = 3

    copyRowV2.routeDeta[2].inventorys[1].usagesObj.subUsage = 1
    copyRowV2.routeDeta[2].inventorys[1].usagesObj.mainUsage = 1

    copyRowV2.bomData.produceBomDetaList[0].usagesObj.subUsage = 3
    copyRowV2.bomData.produceBomDetaList[0].usagesObj.mainUsage = 1

    // console.log('🚀 ~ file: processBom.test.js:627 ~ checkUsageObjIsOverByKey ~ copyRowV2:', copyRowV2)

    const expectRes = false
    const res = checkUsageObjIsOverByKey(copyRowV2)
    expect(res).toBe(expectRes)
  })

  it('0-3-demo', () => {
    const copyRowV2 = JSON.parse(JSON.stringify(rowV2))
    copyRowV2.routeDeta[0].inventorys[0].usagesObj.subUsage = 1
    copyRowV2.routeDeta[0].inventorys[0].usagesObj.mainUsage = 2

    copyRowV2.routeDeta[1].inventorys[1].usagesObj.subUsage = 1
    copyRowV2.routeDeta[1].inventorys[1].usagesObj.mainUsage = 5

    copyRowV2.routeDeta[2].inventorys[1].usagesObj.subUsage = 1
    copyRowV2.routeDeta[2].inventorys[1].usagesObj.mainUsage = 10

    copyRowV2.bomData.produceBomDetaList[0].usagesObj.subUsage = 1
    copyRowV2.bomData.produceBomDetaList[0].usagesObj.mainUsage = 1

    // console.log('🚀 ~ file: processBom.test.js:627 ~ checkUsageObjIsOverByKey ~ copyRowV2:', copyRowV2)

    const expectRes = true
    const res = checkUsageObjIsOverByKey(copyRowV2)
    expect(res).toBe(expectRes)
  })

  it('0-4-demo', () => {
    const copyRowV2 = JSON.parse(JSON.stringify(rowV2))
    copyRowV2.routeDeta[0].inventorys[0].usagesObj.subUsage = 1
    copyRowV2.routeDeta[0].inventorys[0].usagesObj.mainUsage = 2

    copyRowV2.routeDeta[1].inventorys[1].usagesObj.subUsage = 1
    copyRowV2.routeDeta[1].inventorys[1].usagesObj.mainUsage = 3

    copyRowV2.routeDeta[2].inventorys[1].usagesObj.subUsage = 7
    copyRowV2.routeDeta[2].inventorys[1].usagesObj.mainUsage = 10

    copyRowV2.bomData.produceBomDetaList[0].usagesObj.subUsage = 1
    copyRowV2.bomData.produceBomDetaList[0].usagesObj.mainUsage = 1

    // console.log('🚀 ~ file: processBom.test.js:627 ~ checkUsageObjIsOverByKey ~ copyRowV2:', copyRowV2)

    const expectRes = true
    const res = checkUsageObjIsOverByKey(copyRowV2)
    expect(res).toBe(expectRes)
  })
})
