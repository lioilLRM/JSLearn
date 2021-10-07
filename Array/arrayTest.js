/**
 *1.  将数组 `[ 1, 2, 3, 4, 5 ]` 转换为 `[ 'a1', 'a2', 'a3', 'a4', 'a5' ]`；
2.  将数组 `[ 1, 2, 3, 4, 5 ]` 转换为 `[ 'a1', 'b2', 'c3', 'd4', 'e5' ]`；
3.  将数组 `[ 1, 2, 3, 4, 5 ]` 转换为 `[ 1, 4, 9, 16, 25 ]`；
4.  查询 JavaScript 中 `Array.prototype.map` 方法的详细文档，并将数组 `[ 0, 0, 0, 0, 0 ]` 转换为 `[ 'A', 'B', 'C', 'D', 'E' ]`；
5.  提取数组 `[ 1, 2, 3, 4, 5 ]` 中的 `[ 2, 3, 4 ]`。
 */

const array = [1, 2, 3, 4, 5]
// demo1
// const res = array.map(item => {
//   return 'a' + item
// })

// demo2
// const letterMap = ['a', 'b', 'c', 'd', 'e']
// const res = array.map((item, index) => {
//   return letterMap[index] + item
// })

// const res = array.map((item, index) => {
//   return item * (index + 1)
// })

const res = array.slice(1, array.length - 1)

console.log('res', res)

