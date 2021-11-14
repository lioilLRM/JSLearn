
/**
 *  toString()是Oject.prototype对象下的方法，在JS中，每个类都是Object的实例对象，
 所以都继承了toString方法。
 1. 为什么直接使用toString()来打印基本数据类型变量和引用类型变量输出的是变量的值呢？
  a: 因为所有类在继承Object的时候，重写toString()方法。
 而只有Object原型上的方法是可以输出数据类型的。因此我们想判断数据类型时，也只能使用原始方法。
 继而有了此方法：Object.prototype.toString.call(obj)
 */
console.log(`Object.prototype`, Object.prototype.toString(1))
const [isBoolean, num, str, arr, obj, date, fn, math] = [false, 100, 'JS', [1, 2, 3], {}, new Date(), function fn() {}, Math]

console.log('\n')

// console.log(`isBoolean.toString()：`, isBoolean.toString())
// console.log(`num.toString()：`, num.toString())
// console.log(`str.toString()：`, str.toString())
// console.log(`arr.toString()：`, arr.toString())
// console.log(`obj.toString()：`, obj.toString())
toStringTest(isBoolean)
toStringTest(num)
toStringTest(str)
toStringTest(arr)
toStringTest(obj)
toStringTest(date)
toStringTest(fn)
toStringTest(math)

function toStringTest(dateType) {
  console.log(`${dateType}.toString()：`, dateType.toString())
}

console.log('\n')
console.log('<==================>')
newTypeOf(isBoolean)
newTypeOf(num)
newTypeOf(str)
newTypeOf(arr)
newTypeOf(obj)

// console.log(`toString.call(isBoolean)：`, toString.call(isBoolean))
// console.log(`toString.call(num)：`, toString.call(num))
// console.log(`toString.call(str)：`, toString.call(str))
// console.log(`toString.call(arr)：`, toString.call(arr))
// console.log(`toString.call(obj)：`, toString.call(obj))



function newTypeOf(dataType) {
  const result = Object.prototype.toString.call(dataType)
  console.log(`newTypeOf：`, result)
  // const reg = /^[object \w+/g
  // TODO: use RegExp 提取对象类型出来
}
console.log('\n')
console.log('rewrite toString()')

function Dog(name, breed, color, sex) {
  this.name = name
  this.breed = breed
  this.color = color
  this.sex = sex
}
// Dog[Symbol.toStringTag] = 'Dog'
// 重写了toString()
// Dog.prototype.toString = function dogToString() {
//   return `Dog ${this.name} is a ${this.sex} ${this.breed} ${this.color}`
// }

const dog = new Dog('Key', 'breed', 'red', 'female')
// 通过Symbol.toStringTag 设置对象的类型为Dog类
dog[Symbol.toStringTag] = 'Dog'
console.log(dog.toString())

newTypeOf(dog)
// TODO:如何 禁止某个对象上的方法被重写呢？
// Number.prototype.toString = function() {
//   return `this is a Number`
// }

