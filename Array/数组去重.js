
var array = [1, 1, '1', '1', 2, 3, 4, 1, 1, 3, 4, 2]

// 数组去重第一版：最先想到的使用 Set的唯一性
function arrayNoRepeatV1() {
  return [...new Set(array)]
}

function uniqueV2() {
  const res = []
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (array[i] === res[j]) {
        break
      }
    }
    if (j === res.length) {
      res.push(array[i])
    }
  }
  return res
}
// 使用indexOf 去重；类似的可以使用 includes
function uniqueV3(array) {
  const res = []
  for (var i = 0, len = array.length; i < len; i++) {
    const item = array[i]
    if (res.indexOf(item) === -1) {
      res.push(item)
    }
  }
  return res
}

function uniqueV4(array) {
  const res = []
  const sortResArray = array.concat().sort((a, b) => {
    return a - b
  })
  console.log(`sortRes：`, sortResArray)
  let preItem
  for (let i = 0, len = sortResArray.length; i < len; i++) {
    // 什么情况下push数据？
    // 是第一个元素 或者 相邻元素不一致的时候
    if (!i || preItem !== sortResArray[i]) {
      res.push(sortResArray[i])
    }
    preItem = sortResArray[i]
  }
  return res
}

console.log(`arrayNoRepeatV1：`, uniqueV4(array))
