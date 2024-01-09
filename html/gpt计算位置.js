const rectangles = [
  {
    'name': 'undefined-1',
    'ptId': 'B68C2D1918CF20BC0063C7F9B385FA18',
    'seq': 1,
    'preSeqs': '',
    'nextSeqs': [
      2
    ],
    'prePtId': '',
    'nextPtId': 'B9F00E78502723C9169B747A96ACE8E3',
    'position': {
      'x': 100,
      'y': 60
    }
  },
  {
    'name': '工序2-2',
    'ptId': 'B9F00E78502723C9169B747A96ACE8E3',
    'seq': 2,
    'preSeqs': [
      1
    ],
    'nextSeqs': [
      3
    ],
    'prePtId': 'B68C2D1918CF20BC0063C7F9B385FA18',
    'nextPtId': '49DD9EBA976B287BA2CA597D416657C8',
    'position': {
      'x': 250,
      'y': 60
    }
  },
  {
    'name': '工序3-3',
    'ptId': '49DD9EBA976B287BA2CA597D416657C8',
    'seq': 3,
    'preSeqs': [
      2
    ],
    'nextSeqs': '',
    'prePtId': 'B9F00E78502723C9169B747A96ACE8E3',
    'nextPtId': '',
    'position': {
      'x': 400,
      'y': 60
    }
  }
]

const newRectangles = rectangles.map((item, index) => {
  return {
    processName: '工序' + (index + 1),
    position: item.position,
    size: {
      width: 88,
      height: 38
    },
    edgeLength: 62
  }
})

function insertRectangle(newRectangles, index) {
  if (index < 0 || index > newRectangles.length) {
    console.error('Invalid index for insertion.')
    return
  }

  const edgeLength = 62
  const width = 88
  const height = 38

  // 计算新矩形的x轴位置，确保不与相邻矩形重叠
  let newPositionX
  if (index === 0) {
    newPositionX = newRectangles[0].position.x - edgeLength - width
  } else if (index === newRectangles.length) {
    newPositionX = newRectangles[newRectangles.length - 1].position.x +
      edgeLength +
      width
  } else {
    const leftX = newRectangles[index - 1].position.x +
      newRectangles[index - 1].size.width +
      edgeLength
    const rightX = newRectangles[index].position.x - edgeLength - width
    newPositionX = (leftX + rightX) / 2
  }

  // 创建新的矩形对象
  const newRectangle = {
    position: { x: newPositionX, y: 60 },
    size: { width, height },
    edgeLength
  }

  // 在指定位置插入新的矩形
  newRectangles.splice(index, 0, newRectangle)

  // 更新插入位置之后的矩形的x轴位置
  const shiftAmount = newRectangle.size.width + newRectangle.edgeLength
  for (let i = index + 1; i < newRectangles.length; i++) {
    newRectangles[i].position.x += shiftAmount
  }

  return newRectangles
}

const copyRectangles = JSON.parse(JSON.stringify(newRectangles))
const modifiedRectangles = insertRectangle(newRectangles, 1)
console.log('🚀 原始的:', copyRectangles)
console.log('结算结果：', modifiedRectangles)
