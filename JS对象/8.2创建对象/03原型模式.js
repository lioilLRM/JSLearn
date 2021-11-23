/**
 原型模式：

1.使用原型的好处？
  在它上面定义的属性和方法可以被所有对象实例共享。
  例子：Array.prototype.push()

2. 如何确定两个对象之间的关系？他们是处于同一个类下面的么？
  使用 isPrototypeOf() 方法确定两个对象之间的这种关系.

3.如何判断某个属性或者方法是来自原型还是实例呢？
  使用hasOwnProperty() 方法
4. 如何屏蔽访问原型上的属性呢？如何解开屏蔽？
通过给实例赋值属性；
通过操作符 delete 删除实例上的属性后就能够访问原型上的属性。
 */

function Person(name, age, job) {
  Person.prototype.name = '人类'
  Person.prototype.age = age
  Person.prototype.job = job
  Person.prototype.type = '人类'
  Person.prototype.sayName = function() {
    console.log(`this.name`, this.name)
  }
}

function Animal() {
  Animal.prototype.type = '动物类'
  Animal.prototype.name = '动物'
  Animal.prototype.sayName = function() {
    console.log(`this.name`, this.name)
  }
}

const person1 = new Person('小米')
const person2 = new Person('红米')
person1.name = '克隆人'

const dog = new Animal('小狗')
const cat = new Animal('小猫')

// 使用isPrototypeOf 判断两个对象之间的关系；
// console.log('Person.prototype.isPrototypeOf(person1)：', Person.prototype.isPrototypeOf(person1))
// console.log('Person.prototype.isPrototypeOf(dog)：', Person.prototype.isPrototypeOf(dog))
// console.log(`Object.getPrototypeOf(dog)：\n`, Object.getPrototypeOf(dog))

// const arr = new Array()
// console.log(`Object.getPrototypeOf([])：\n`, Object.getPrototypeOf(arr))

person1.sayName()
person2.sayName()

// 使用hasOwnProperty() 方法判断某个属性或者方法是来自原型还是实例呢？
console.log(`person1.hasOwnProperty(name)：`, Object.prototype.hasOwnProperty.call(person1, 'name'))
console.log(`person2.hasOwnProperty(name)：`, Object.prototype.hasOwnProperty.call(person2, 'name'))

console.log(`person1.hasOwnProperty(toString)：`, Object.prototype.hasOwnProperty.call(person1, 'toString'))

console.log(`person1`, person1)
console.log(`Person.prototype`, Person.prototype)
console.log(`Person.prototype.constructor`, Person.prototype.constructor)

