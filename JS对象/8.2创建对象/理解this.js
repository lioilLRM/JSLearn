// 2022年2月12日：小野前端 JavaScript深度指南

/**
 * 理解this
 * 课程思路：
 * 1.
 */

(function() {
  function Car() {
    this.color = 'red'
    console.log(`this：`, this)
  }
  try {
    console.log(`this：`, this)
    console.log('Car 函数执行的话，生成AO对象，AO对象里面存在有this,其中this指向window')
    // this在没有实例化的时候 执行window，一旦实例化构造函数以后，this指向实例化的对象。
    Car()
  } catch (e) {
    console.log(`e：`, e)
  }
}())
;(function() {
  console.log('如何证明this指向实例化的对象？')
  // new Car 执行，执行的时候，AO产生
  // const AO = {
  //   this: {
  //     color: color,
  //     brand: brand,
  //   }
  // }
  function Car(options) {
    //   this: {
  //     color: color,
  //     brand: brand,
  //   }
    this.color = options.color
    this.brand = options.brand
    console.log(`this 指向实例化的对象：`, this)
    // return this
  }
  const car1 = new Car({ color: 'red', brand: '明' })
  const car2 = new Car({ color: 'green', brand: '五菱宏光' })
  console.log(`car1.color, car2.color：`, car1.color, car2.color)
}())
;(function() {
  console.log('能否改变构造函数默认的返回值')
  // 构造函数如果没有返回值的话，默认return this
  // 如果return 返回值会发生什么？
  // 如果return 原始值的话，返回无效。return 引用值的话，可以正常返回引用值（对象，函数）。
  function Car() {
    this.color = 'red'
    this.brand = 'WUling'
    // return 122 //
    return {}
  }

  var car = new Car()
  console.log(`car：`, car)
}())
