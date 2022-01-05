// 数字分割：123345.233==>123,345.233
const num1 = 1233456.233
const res = num1.toLocaleString()

console.log(`res：`, res)

// 数字转化为百分比
const num2 = 0.12
const res2 = num2.toLocaleString('zh', { style: 'percent' })
console.log(`res2：`, res2)
// 人民币表示
const num3 = 10000000000
const res3 = num3.toLocaleString('zh', { style: 'currency', currency: 'cny' })
console.log(`res3：`, res3)
console.log(num3.toLocaleString('zh', { style: 'currency', currency: 'cny', currencyDisplay: 'code' }))
console.log(num3.toLocaleString('zh', { style: 'currency', currency: 'cny', currencyDisplay: 'name' }))

const date = new Date()
console.log(`date：`, date.toLocaleString('zh', { hour24: true }))

