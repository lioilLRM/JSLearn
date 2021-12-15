/**
 1. 正则中的位置是什么?
    位置指的是相邻字符之间的位置。
    例子:  hello之间的位置:==>  ~h~e~l~l~o~
    其中~代表的就是相邻字符间的位置。

 2. 有哪些位置？
  ^: 匹配行的开头
  $: 匹配行的结尾

 3. 位置能干啥？
 4. 有哪些例子？

 */

const price = '123456789'
const priceReg = /(?=)/

const reg = /(?=.*\d)/
// 这个正则的意思是，匹配的是一个位置，这个位置需要满足`任意数量的符号，紧跟着是个数字`，注意它最终得到的是个位置，而不是数字或者是数字前面有任意的东西

console.log(reg.test('hello')) // false
console.log(reg.test('hello1')) // true
console.log(reg.test('hel2lo')) // true

// 其他类型同理

