const Big = require('big.js')
// 使用bigjs解决小数位计算的bug
function add(num1, num2) {
  const res = new Big(num1).add(num2)
  return Number(res.toString())
}

function minus(num1, num2) {
  const res = new Big(num1).minus(num2)
  return Number(res.toString())
}

/** 乘法
 * @param {Object} a
 * @param {Object} b
 */
function mul(num1, num2) {
  const res = new Big(num1).times(num2)
  return Number(res.toString())
}
/** 除法
 * @param {Object} a
 * @param {Object} b
 */
function div(num1, num2) {
  const res = new Big(num1).div(new Big(num2))
  return Number(res.toString())
}

console.log(add(0.1, 0.2))
console.log(minus('20.7', '15'))
console.log(mul(0.57, 100))

console.log(div(2, 3))

