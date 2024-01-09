function insertRectangle(newRectangles, insertIndex) {
  if (insertIndex < 0 || insertIndex > newRectangles.length) {
    console.error('Invalid index for insertion.')
    return
  }

  const edgeLength = 62
  const width = 88
  const height = 38

  // 计算新矩形的x轴位置，确保不与相邻矩形重叠
  let newPositionX
  if (insertIndex === 0) {
    newPositionX = newRectangles[0].position.x - edgeLength - width
  } else if (insertIndex === newRectangles.length) {
    newPositionX = newRectangles[newRectangles.length - 1].position.x +
      newRectangles[newRectangles.length - 1].size.width +
      edgeLength
  } else {
    const leftX = newRectangles[insertIndex - 1].position.x +
      newRectangles[insertIndex - 1].size.width +
      edgeLength
    const rightX = newRectangles[insertIndex].position.x - edgeLength
    newPositionX = (leftX + rightX) / 2
  }

  // 创建新的矩形对象
  const newRectangle = {
    position: { x: newPositionX, y: 60 },
    size: { width, height },
    edgeLength
  }

  // 在指定位置插入新的矩形
  newRectangles.splice(insertIndex, 0, newRectangle)

  // 更新插入位置之后的矩形的x轴位置
  const shiftAmount = newRectangle.size.width + edgeLength
  for (let i = insertIndex + 1; i < newRectangles.length; i++) {
    newRectangles[i].position.x += shiftAmount
  }

  return newRectangles
}

// 示例用法
const originalRectangles = [
  {
    position: { x: 100, y: 60 },
    size: { width: 88, height: 38 },
    edgeLength: 62
  },
  {
    position: { x: 250, y: 60 },
    size: { width: 88, height: 38 },
    edgeLength: 62
  },
  {
    position: { x: 400, y: 60 },
    size: { width: 88, height: 38 },
    edgeLength: 62
  }
]

// 在下标1插入新矩形
const modifiedRectangles = insertRectangle(originalRectangles, 1)
console.log(modifiedRectangles)
