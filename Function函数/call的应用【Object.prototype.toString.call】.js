// 但是到了Object.prototype.toString.call() 这里又是如何理解的呢？
// Object.prototype.toString() 的返回值是表示该对象的字符串

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

// JavaScript中，所有类都是Object的实例对象，因此toString()方法应该也被继承了
// 每个类都继承自Object，所以都拥有自己的toString()方法，然后重写了继承的toString()方法

function printToString() {
  console.log(boolean.toString(), number.toString(), string.toString(), obj.toString(), array.toString(), date.toString(), error.toString(), reg.toString(), func.toString())
}

function printPrototypeString() {
  const toString = Object.prototype.toString
  console.log(toString.call(boolean))
  console.log(toString.call(number))
  console.log(toString.call(string))
  console.log(toString.call(obj))
  console.log(toString.call(array))
  console.log(toString.call(date))
  console.log(toString.call(func))
  console.log(toString.call(error))
  console.log(toString.call(reg))
  console.log(toString.call())
  console.log(toString())
  console.log(toString.call(null))
}
printToString()
printPrototypeString()
