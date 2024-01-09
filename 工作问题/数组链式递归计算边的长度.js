const { get } = require('jquery')

const linkArray = [
  {
    name: '装配-1',
    ptId: 1,
    seq: 1,
    preSeqs: [-1],
    nextSeqs: [3],
    prePtId: -1,
    nextPtId: 2,
    position: {
      x: 100,
      y: 60
    }
  },
  {
    name: '工序2-2',
    ptId: 4,
    seq: 2,
    preSeqs: [-1],
    nextSeqs: [3],
    prePtId: -1,
    nextPtId: 2,
    position: {
      x: 100,
      y: 155
    }
  },
  {
    name: '上色-3',
    ptId: 2,
    seq: 3,
    preSeqs: [1, 2],
    nextSeqs: [5],
    prePtId: 1,
    nextPtId: 3,
    position: {
      x: 250,
      y: 60
    }
  },
  {
    name: '工序4-4',
    ptId: 5,
    seq: 4,
    preSeqs: [-1],
    nextSeqs: [5],
    prePtId: -1,
    nextPtId: 3,
    position: {
      x: 250,
      y: 155
    }
  },
  {
    name: '清洗-5',
    ptId: 3,
    seq: 5,
    preSeqs: [3, 4],
    nextSeqs: [-1],
    prePtId: 2,
    nextPtId: -1,
    position: {
      x: 400,
      y: 60
    }
  }
]

const linkArray2 = [
  {
    'name': '装配-1',
    'ptId': 1,
    'seq': 1,
    'preSeqs': [
      -1
    ],
    'nextSeqs': [
      4
    ],
    'prePtId': -1,
    'nextPtId': 2,
    'position': {
      'x': 100,
      'y': 60
    }
  },
  {
    'name': '工序2-2',
    'ptId': 4,
    'seq': 2,
    'preSeqs': [
      -1
    ],
    'nextSeqs': [
      4
    ],
    'prePtId': -1,
    'nextPtId': 2,
    'position': {
      'x': 100,
      'y': 155
    }
  },
  {
    'name': '工序3-3',
    'ptId': 7,
    'seq': 3,
    'preSeqs': [
      -1
    ],
    'nextSeqs': [
      4
    ],
    'prePtId': -1,
    'nextPtId': 2,
    'position': {
      'x': 100,
      'y': 250
    }
  },
  {
    'name': '上色-4',
    'ptId': 2,
    'seq': 4,
    'preSeqs': [
      1,
      2,
      3
    ],
    'nextSeqs': [
      7
    ],
    'prePtId': 1,
    'nextPtId': 3,
    'position': {
      'x': 250,
      'y': 60
    }
  },
  {
    'name': '工序5-5',
    'ptId': 5,
    'seq': 5,
    'preSeqs': [
      -1
    ],
    'nextSeqs': [
      7
    ],
    'prePtId': -1,
    'nextPtId': 3,
    'position': {
      'x': 250,
      'y': 155
    }
  },
  {
    'name': '工序6-6',
    'ptId': 6,
    'seq': 6,
    'preSeqs': [
      -1
    ],
    'nextSeqs': [
      7
    ],
    'prePtId': -1,
    'nextPtId': 3,
    'position': {
      'x': 250,
      'y': 250
    }
  },
  {
    'name': '清洗-7',
    'ptId': 3,
    'seq': 7,
    'preSeqs': [
      4,
      5,
      6
    ],
    'nextSeqs': [
      -1
    ],
    'prePtId': 2,
    'nextPtId': -1,
    'position': {
      'x': 400,
      'y': 60
    }
  }
]

const firstComputeEdge = null

// console.log('数组链式递归计算边的长度', linkArray)
function addWidthAndHeight(linkArray) {
  linkArray.forEach(item => {
    item.width = 88
    item.height = 38
  })
}

function getEdgeLength(linkArray) {
  for (let i = 0; i < linkArray.length; i++) {
    const link = linkArray[i]
    if (link.preSeqs && link.preSeqs.length > 1) {
      console.log(`初始值:link`, link)
      const preLinkNode = linkArray.find(item => item.ptId === link.prePtId)
      if (preLinkNode) {
        if (!link.firstEdgeWidth) {
          const edgeWidth = getTwoNodesEdgeWidth(preLinkNode, link)
          if (edgeWidth > 0) {
            link.firstEdgeWidth = edgeWidth
            link.maxFirstEdgeWidth = edgeWidth * 2
            link.position.x = link.position.x + edgeWidth
          } else {
            link.firstEdgeWidth = preLinkNode.firstEdgeWidth
            link.maxFirstEdgeWidth = preLinkNode.maxFirstEdgeWidth
            link.position.x = link.position.x + preLinkNode.firstEdgeWidth
          }

          console.log('🚀 新的位置:', link)
        } else {
          const newEdgeWidth = getTwoNodesEdgeWidth(preLinkNode, link)
          if (newEdgeWidth < link.maxFirstEdgeWidth) {
            continue
          }
        }
      }
    }
  }
}

function getTwoNodesEdgeWidth(nodeA, nodeB) {
  const edgeWidth = nodeB.position.x - (nodeA.position.x + nodeA.width)
  console.log(`edgeWidth`, edgeWidth)
  return edgeWidth
}

addWidthAndHeight(linkArray2)
getEdgeLength(linkArray2)
