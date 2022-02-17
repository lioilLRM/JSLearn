// let a = 1
// a++
// // console.log(`a++：`, a++)
// console.log(`a：`, a)

let num1 = 2
const num2 = 20

const num3 = num1-- + num2
const num4 = num1 + num2
console.log(`num3, num4：`, num3, num4)

/**
 * 一元操作符加和减用于类型转换：类似Number()进行转换
 */
function unaryAddAndSub() {
  const s1 = '01'
  const s2 = '1.1'
  const s3 = 'z'
  const b = false
  const f = 1.1
  const obj = { valueOf() { return -1 } }
  const obj2 = {}

  console.log(`s1：`, +s1, -s1)
  console.log(`s2：`, +s2, -s2)
  console.log(`b：`, +b, -b)
  console.log(`f：`, +f, -f)
  console.log(`obj：`, +obj, -obj)

  console.log(`Null：`, +null)

  console.log(`undefined：`, +undefined)
  console.log(`NaN：`, +NaN)
  console.log(`obj2：`, +obj2, -obj2)
  console.log(`s3：`, +s3, -s3)
}

unaryAddAndSub()

// 注意这里的幂运算符 (**)
console.log(!!' ' + !!'' - !!false || '未通过')
