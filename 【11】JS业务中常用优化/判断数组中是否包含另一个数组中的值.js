
// 判断arr 中是否包含 values 中的所有的值
const arr = ['one', 'two', 'three', 'four']
const values = ['one', 'two']
const otherValues = ['aaa', 'bbb']

function isArrayIncludesOtherArrayValue(arr, values) {
// 使用every 的特性，只有所有的值都为真的时候返回 true
  return values.every(value => {
    return arr.includes(value)
  })
}

console.log(`isArrayIncludesOtherArrayValue(arr, values)：`, isArrayIncludesOtherArrayValue(arr, values))
console.log(`isArrayIncludesOtherArrayValue(arr, otherValues)：`, isArrayIncludesOtherArrayValue(arr, otherValues))

