const [isBoolean, num, str, arr, obj, date, fn, math] = [false, 100, 'JS', [1, 2, 3], {}, new Date(), function fn() {}, Math]

console.log(`typeof 1：`, typeof 1)
console.log(`typeof undefined：`, typeof undefined)
console.log(`typeof null：`, typeof null)

console.log(`typeof Symbol('1')`, typeof Symbol('1'))
console.log(`typeof NaN：`, typeof NaN)

console.log(`typeof Object：`, typeof Object)
console.log(`typeof function `, typeof Function)
console.log(`typeof Array `, typeof Array)

console.log(`typeof {}：`, typeof {})
console.log(`typeof []：`, typeof [])
// typeof 去判断引用类型的，返回的都是 "object"

// instanceof 判断引用类型
// const date = new Date()
const reg = new RegExp()
console.log(`[] instanceof Array：`, [] instanceof Array)
console.log(`[] instanceof Object：`, [] instanceof Object)
console.log(`date instanceof Date：`, date instanceof Date)
console.log(`date instanceof Object：`, date instanceof Object)

console.log(`reg instanceof RegExp：`, reg instanceof RegExp)

// 存在什么缺陷？上面的instanceof判断

/** ****************************************************************************
     数据类型判断 - toString.call
     通用但很繁琐的方法：Object.prototype.toString的一个方法
     *******************************************************************************/
console.log('\n')

// const obj = new Object()
// const num = new Number()
console.log(`obj.toString()：`, obj.toString())
console.log(`num.toString()：`, num.toString())

console.log('\n')
console.log('数据类型判断 - toString.call')
console.log(`toString(1)：`, toString(1))
console.log(`toString(1)`, toString.call(Number(1)))
console.log(`toString(1)`, toString.call(Number(NaN)))
console.log(`Number(NaN)`, Number(NaN))
console.log(Number(1).toString())
console.log(`toString.call('字符串')：`, toString.call('字符串'))
console.log(`toString.call(String())`, toString.call(String()))

console.log('\n')
// Using toString() in this way is unreliable;
// objects can change the behavior of Object.prototype.toString() by defining a
// Symbol.toStringTag property, leading to unexpected
const myDate = new Date()
Object.prototype.toString.call(myDate) // [object Date]
myDate[Symbol.toStringTag] = 'myDate'
Object.prototype.toString.call(myDate) // [object myDate]

Date.prototype[Symbol.toStringTag] = 'prototype polluted'
Object.prototype.toString.call(new Date()) // [object prototype polluted]

// call, apply,
console.log(`[].constructor === Array：`, [].constructor === Array)

/** ****************************************************************************
     数据类型判断 - 根据对象的constructor判断： constructor
     *******************************************************************************/
//    根据对象的constructor判断： constructor

console.log('数据类型判断 - constructor')
console.log(isBoolean.constructor)
console.log(num.constructor)
console.log(str.constructor)
console.log(arr.constructor)
console.log(date.constructor)
console.log(fn.constructor)

/** 为什么能够通过constructor 来判断数据类型咧？
constructor主要是利用原型上的prototype.constructor指向实例的构造函数来进行判断的
先定义一个构造函数Animal, 并new一个实例dog
 */
const Animal = function(name) { this.name = name } // 声明一个构造函数
const dog = new Animal('dog') // 生成实例dog
console.log(`dog.prototype`, dog.prototype)
console.log(`dog.constructor`, dog.constructor)
