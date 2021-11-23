/**
  工厂模式：创建对象
 解决了什么问题：创建多个类似对象的问题
 缺点：无法判断新创建的对象属于什么类型。

 */

function createPerson(name, age, job) {
  const obj = {
    name: name,
    age: age,
    job: job
  }
  obj.sayName = function() {
    console.log(this.name)
  }
  return obj
}
const person1 = createPerson('Key', 22, 'engineer')
console.log(`person1.constructor`, person1.constructor)
console.log(`Object.prototype.toString.call(person1)：`, Object.prototype.toString.call(person1))
