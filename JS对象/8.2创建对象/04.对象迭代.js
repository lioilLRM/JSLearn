/**
 1. 如何获取对象全部的键？
 2. 如何获取对象全部的值？
 3. 如何获取对象全部的键值对？
 4. 静态方式是什么来着？
    类class 相当于实例的原型，所有在原型上定义的方法都会被实例继承。
    静态方法就是在方法前面加上static 关键字，表示该方法不会被实例继承。
    然后通过类来调用。

    静态方法可以被子类继承。

  5. 对象还有哪些静态方法？


 */

const obj = {
  foo: 'bar',
  baz: 1,
  qux: {}
}

const keys = Object.keys(obj)
console.log(`keys：`, keys)
const values = Object.values(obj)
console.log(`values：`, values)

const keyValues = Object.entries(obj)
console.log(`keyValues：`, keyValues)



