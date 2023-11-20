function Cat(age = 0) {
  console.log(`Name：${this.name},  age: ${age}`)
}

Cat()
Cat.call({ name: '大喵喵' }, 12)
const _Cat = Cat.bind(null, 12)
_Cat()

// 也就是说：bind 函数可以作为拓展函数进行使用
function add(a, b, c) {
  const result = a + b + c
  console.log(result)

  return result
}

const _add = add.bind(null, 10)
_add(20, 30, 40)

function indroduce(name, age) {
  console.log(`my name is：${name}, age:${age}`)
}

// 求参数里面的最大值
const max = Math.max(4, 5, 8, 12, 33, 1)
console.log(`max:`, max)
// 如何使用Math.max求得一个数组的里面的最大数值呢？
// ES5：使用函数的apply方法进行传值，apply 的第一个参数为 this，第二个参数是数组参数
const es5Max = Math.max.apply(null, [4, 5, 8, 12, 33, 1])
console.log(`es5Max:`, es5Max)

// ES6：使用拓展运算符展开数组变成max所需要的参数
const es6Max = Math.max(...[4, 5, 8, 12, 33, 1])
console.log(`es6Max:`, es6Max)

// 实现继承
function People(name) {
  this.name = name
  this.showName = function() {
    console.log(`this.name:`, this.name)
  }
}

function Student(name) {
  People.call(this, name)
}

const xiaomi = new Student('晓敏')
xiaomi.showName()

// 数组追加
const numberArr = [1, 2, 3, 4]
const strArr = ['小李飞刀']
Array.prototype.push.apply(numberArr, strArr)
console.log(`numberArr:`, numberArr)

// 借用方法
function Cat() {}
Cat.prototype = {
  food: 'fish',
  say() {
    console.log(`I love:`,  this.food);
  }
}
const tomCat = new Cat()
tomCat.say()
// 有个 whiteDog = {food: 'bone}，不想重新定义 say 方法，如何做呢？
const whiteDog = {food: 'bone'}
tomCat.say.call(whiteDog)
// 所以，可以看出call和apply是为了动态改变this而出现的，
// 当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作

// 将类数组转为数组
// 返回的是类数组的数据，没有数组的pop,push 方法。想要使用数组的pop,push方法怎么办？
const tags = document.getElementsByTagName('tr') 
// 数组原型上的slice方法会返回一个新的数组，通过这个方式将非数组转为数组，就能够使用pop,push 方法了。
const arrTags = Array.prototype.slice.call(tags)

//5. 重写函数或方法
// 我们有一个需求，页面在调试阶段，所有的console.log生效，而production环境，去除所有的console.log。
// ;(function(){
//   const _log = console.log
//   console.log = function() {
//     // console.log('打印前————')
//     _log.apply(console, arguments)
//     // console.log('打印后————')
//   }
// }())

function request(config) {
  console.log(`config:`, config);
}

let arr = [{url: 'www.baidu.com', name: '哈哈哈'}]
request.apply(null, arr)