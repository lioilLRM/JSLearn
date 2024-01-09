
const list = [
  {
    prePtId: -1,
    ptId: 1,
    nextPtId: 2,

    seq: 1,
    preSeqs: [-1],
    nextSeqs: [2],
    processName: '装配'
  },
  // {
  //   seq: 1+1,
  //   preSeqs: [-1],
  //   nextSeqs: [2],
  //   processName: '装配'  // 工序+seq
  // },
  {
    prePtId: 1,
    ptId: 2,
    nextPtId: 3,
    seq: 2,
    preSeqs: [1],
    nextSeqs: [3],
    processName: '上色'
  },
  // {
  //   seq: 2+1,
  //   preSeqs: [1],
  //   nextSeqs: [3],
  //   processName: '上色'
  // },
  {
    prePtId: 2,
    ptId: 3,
    nextPtId: -1,
    seq: 3,
    preSeqs: [2],
    nextSeqs: [4],
    processName: '清洗'
  }

  // {
  //   seq: 3+1,
  //   preSeqs: [2],
  //   nextSeqs: [4],
  //   processName: '清洗'
  // }
]

function createNewNode({ clickNode, list }) {
  const node = {
    prePtId: -1,
    ptId: list.length + 1,
    nextPtId: clickNode.nextPtId,
    seq: clickNode.seq + 1,
    preSeqs: clickNode.preSeqs,
    nextSeqs: clickNode.nextSeqs,
    processName: `工序${clickNode.seq + 1}`
  }
  return node
}

function updateList(list, newNode, insertIndex) {
  console.log('🚀  newNode:', newNode)

  const updateSeq = (list, newNode) => {
    list.forEach(item => {
      if ((item.seq >= newNode.seq) && item.ptId !== newNode.ptId) {
        item.seq = item.seq + 1
      }
    })
  }
  //
  const updatePreSeqs = (list) => {
    list.forEach(item => {
      if (item.nextPtId !== -1) {
        const matchNextPtIdItem = list.find(sitem => sitem.ptId === item.nextPtId)
        if (matchNextPtIdItem) {
          item.nextSeqs = [matchNextPtIdItem.seq]
        }
      } else {
        item.nextSeqs = [-1]
      }
    })
  }

  const updateNextSeqs = (list) => {
    list.forEach(item => {
      if (item.prePtId === -1) {
        item.preSeqs = [-1]
      } else {
        const filterEqualNextPtIds = list.filter(sitem => sitem.nextPtId === item.ptId)
        if (filterEqualNextPtIds.length > 0) {
          item.preSeqs = filterEqualNextPtIds.map(sitem => sitem.seq)
        }
        if (item.preSeqs.length === 0) {
          item.preSeqs = [-1]
        }
      }
    })
  }

  // list.splice(1, 0, newNode)
  if (newNode) {
    list.splice(insertIndex, 0, newNode)
    updateSeq(list, newNode)
    updatePreSeqs(list)
    updateNextSeqs(list)
    // console.log('🚀  ~ list:', list)
  }
  return list
}

const newNode = createNewNode({
  clickNode: list[0],
  list
})
updateList(list, newNode, 1)
// console.log()

const newNode2 = createNewNode({
  clickNode: list[1],
  list
})
updateList(list, newNode2, 2)
// console.log()
const newNode3 = createNewNode({
  clickNode: list[3],
  list
})

updateList(list, newNode3, 4)

console.log(list)
