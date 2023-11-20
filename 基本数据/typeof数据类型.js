
// 思路：typeof 判断基本数据类型，但是对Null 和 具体的对象类型判断不出来；只能获得一个对象；一个比喻：
// 引出 Object ;
// const date = new Date()
// const error = new Error()
// console.log(`typeof 'a'：`, typeof 'a')
// console.log(`typeof null：`, typeof null)
// console.log(`typeof ：`, typeof date)
// console.log(`typeof error：`, typeof error)

// // Object.protoype.toString()
// // 问题？为什么要加上call方法来调用？
// getType(date)
// getType(error)
// getType(null)
// getType(undefined)
// function getType(obj) {
//   const type = Object.prototype.toString.call(obj)
//   const typeNoCall = Object.prototype.toString(obj)

//   console.log(`obj：`, type)
//   console.log(`typeNoCall`, typeNoCall)
// }

var und = undefined // [object Undefined]
var nul = null // [object Null]
var boolean = true // [object Boolean]
var number = 1 // [object Number]
var string = '123' // [object String]

var obj = { a: 1 } // [object Object]
var array = [1, 2, 3] // [object Array]
var date = new Date() // [object Date]
var error = new Error() // [object Error]
var reg = /a/g // [object RegExp]
var func = function a() {} // [object Function]
const symbol = Symbol()
const map = new Map()
function checkType() {
  for (let i = 0; i < arguments.length; i++) {
    const item = arguments[i]
    console.log(`Object.prototype.toString.call(item)：`, Object.prototype.toString.call(item))
  }
}
// checkType(und, nul, boolean, number, string, obj, array, date, error, reg, func)

function getDataType(obj) {
  const class2Type = {}
  // 生成class2type映射
  'Boolean Number String Function Array Date RegExp Object Error Null Undefined Set Map Symbol'.split(' ').map(function(item, index) {
    class2Type['[object ' + item + ']'] = item.toLowerCase()
  })

  if (obj == null) return obj + ''

  let dataType = ''

  if (typeof obj === 'object' || typeof obj === 'function') {
    dataType = class2Type[Object.prototype.toString.call(obj)] || 'object'
  } else {
    dataType = typeof obj
  }
  console.log(`dataType：`, dataType)

  return dataType
}

console.log(`getDataType(func)：`, getDataType({}))

// getDataType(func)

function isFunction(obj) {
  return getDataType(obj) === 'function'
}

// console.log(`isFunction(func)：`, isFunction(reg))
