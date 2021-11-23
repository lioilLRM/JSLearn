/**
 构造函数
 1.构造函数和普通函数有什么区别？
 从直观上看，通过对函数使用操作符new 就能够让普通函数变成构造函数。

唯一的区别就是调用方式不同：
任何函数只要使用 new 操作符调用就是构造函数
不使用 new 操作符调用的函数就是普通函数
 2.构造函数创建实例的步骤是什么？

 3.构造函数的问题？
构造函数里面定义的每个方法都会在实例上创建一遍。如sayName方法，浪费了空间和消耗了时间。

如何解决？
  通过在构造函数外部定义函数sayName，然后在在构造函数内将外部的sayName赋值给bisSellBabyName
  属性。

  虽然解决了上面的问题相同逻辑函数重复定义的问题；
  但是引出了新的问题：
    1. 全局作用域搞乱了。
    2.对象需要多个方法的话，全部定义在全局作用域中，代码不太好聚合在一起

  如何解决？
  使用原型模式
 */

function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  // 构造函数里面定义的每个方法都会在实例上创建一遍。浪费了空间和消耗了时间。
  // this.sayName = function() {
  //   console.log(this.name)
  // }

  //
  this.sayName = sayName
}

function sayName() {
  console.log(this.name)
}

const person1 = new Person('小米', 22, '工程师')
const person2 = new Person('红米', 23, '工程师2号')

// console.log(`person1.prototype`, person1)
// console.log(person2)

console.log(person1.sayName === person2.sayName)

console.log(`person1.constructor`, person1.constructor)

// Person('小蜜', 22, 'VIP')
// console.log(`global`, global)
const obj = {}
Person.call(obj, '占山为王', 22, 'VIP')
obj.sayName()
// 跨平台搬运：
// 百科和词典：例子：测评；优雅的插入自家的产品；
// 涛哥推书：输出力
