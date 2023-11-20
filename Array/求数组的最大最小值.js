
// Math.max() 函数返回一组数中的最大值
// 如果有任一参数不能被转换为数值，则结果为 NaN。
// 如果没有参数，则结果为 -Infinity (注意是负无穷大)
Math.max(true, 0) // 1
Math.max(true, '2', null) // 2
Math.max(1, undefined) // NaN
Math.max(1, {}) // NaN
console.log(Math.max(true, 0))
console.log(Math.max(true, '2', null))
console.log(Math.max(1, undefined))
console.log(Math.max(1, {}))
console.log(Math.max())
console.log(Math.min())
const min = Math.min()
const max = Math.max()
console.log(min > max)

const testArray = [6, 4, 1, 8, 2, 11, 23, null, false, '100']
// 求数组的最大值；使用for 循环
function originalMaxFn(arr) {
  if (arr.length === 0) return 0

  let result = arr[0]
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    result = Math.max(result, item)
  }
  console.log(`result：`, result)
}

// 使用reduce 计算最大值
function MaxUseReduce(arr) {
  if (arr.length === 0) return 0

  const result = arr.reduce((pre, current) => {
    return Math.max(pre, current)
  })
  console.log(`result：`, result)
}
// 使用sort 的方式进行排序后取最后一个值
function maxNumberBySort(arr) {
  if (arr.length === 0) return 0

  arr.sort((a, b) => {
    return a - b
  })
  const result = arr[arr.length - 1]
  console.log(`arr：`, arr, result)
}
// 使用apply 来获取数组的最大值。
function maxNumberByApply(arr) {
  if (arr.length === 0) return 0

  const max = Math.max.apply(null, arr)
  console.log(`arr：`, max)
}
maxNumberByApply(testArray)

// originalMaxFn(testArray)
// MaxUseReduce(testArray)
// const maxNumber = Math.max(...testArray)
// console.log(`maxNumber：`, maxNumber)

maxNumberBySort(testArray)
