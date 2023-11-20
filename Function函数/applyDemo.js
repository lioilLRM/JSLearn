
const array = ['a', 'b']
const elements = [0, 1, 2]

// array.push(elements)
// array.push.apply(array, elements)
array.push.call(array, ...elements)
console.log(`pushArr：`, array)

const firstObj = {
  name: '冰冰',
  say: function(a, b, c) {
    console.log(`this：`, this, a, b, c)
  }
}

firstObj.say('农夫', '山泉', '有点甜')

const sendObj = {
  name: '小艾'
}
// let sayFn = firstObj.say
// sayFn.apply(sendObj, ['A', 'B', 'C'])

// 借用函数
firstObj.say.apply(sendObj, ['A', 'B', 'C'])

// 应用场景1：继承

function Animal(name, weigth) {
  this.name = name
  this.weigth = weigth
}
// 在call中将this作为thisArgs参数传递
// Animal方法中的this就指向了Cat中的this
// 所以Animal中的this指向的就是cat对象
// 在Animal中定义了name和weight属性，就相当于在cat中定义了这些属性
// cat对象便拥有了Animal中定义的属性，从而达到了继承的目的

// 作者：小弟调调™
// 链接：https://juejin.cn/post/6844903444348665870
function Cat() {
  Animal.call(this, '小猫咪', 2)
  // Animal.apply(this, ['小狗狗', 4])
  this.say = function() {
    console.log(`嘿嘿：${this.name}，今年${this.weigth}KG`)
  }
}

var cat = new Cat()
cat.say()

// 应用场景2：原型扩展

function testPrototypeAddMethod() {
  console.log(`arguments：`, arguments, typeof arguments, arguments instanceof Array)

  console.log(`arguments.forEach：`, arguments.forEach)

  Array.prototype.forEach.call(arguments, function(item) {
    console.log(`item：`, item)
  })

  const res = Array.prototype.forEach.apply(arguments, [function(item) {
    console.log(`apply item：`, item)
  }])
  console.log(`res：`, res)
}

testPrototypeAddMethod(1, 2, 34)

// 应用场景3：判断数据类型
function isType(data, type) {
  const typeObj = {
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object Date]': 'date', // Object.prototype.toString.call(new Date())
    '[object RegExp]': 'regExp',
    '[object Map]': 'map',
    '[object Set]': 'set',
    '[object HTMLDivElement]': 'dom', // document.querySelector('#app')
    '[object WeakMap]': 'weakMap',
    '[object Window]': 'window', // Object.prototype.toString.call(window)
    '[object Error]': 'error', // new Error('1')
    '[object Arguments]': 'arguments'
  }
  const name = Object.prototype.toString.call(data) // 借用Object.prototype.toString()获取数据类型
  const typeName = typeObj[name] || '未知类型' // 匹配数据类型
  return typeName === type // 判断该数据类型是否为传入的类型
}
// console.log(
//   isType({}, 'object'), // true
//   isType([], 'array'), // true
//   isType(new Date(), 'object'), // false
//   isType(new Date(), 'date'), // true
// )
console.log(`new Date().toString()：`, new Date().toString())
