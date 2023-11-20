// 1. Promise.resolve()介绍
// 说明：静态方法 Promise.resolve返回一个解析过的Promise对象。
// 语法：Promise.resolve(value)
// 参数：
// value {Object | Promise}：如果 value参数 是一个 Promise ，那么将返回这个 Promise ；否则 value参数 作为下一个then()的传入参数。
// 返回值：返回一个Promise对象
// 有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。
// resolve()本质作用
// resolve()是用来表示promise的状态为fullfilled，相当于只是定义了一个有状态的Promise，但是并没有调用它；
// promise调用then的前提是promise的状态为fullfilled；
// 只有promise调用then的时候，then里面的函数才会被推入微任务中;

// 1. value 参数是一个Promise对象
const promiseFn1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(' promise fn1')
    resolve()
  }, 3000)
})

Promise.resolve(promiseFn1).then(() => {
  console.log('value 参数是一个Promise对象')
})

// 2. value参数已调用过then()方法
const promiseThenCall = new Promise((reslove, reject) => {
  setTimeout(() => {
    console.log('setTimeout func1')
    reslove()
  }, 1000)
}).then(() => {
  console.log(2)
})
Promise.resolve(promiseThenCall).then(() => {
  console.log('value参数已调用过then()方法')
})

const welcomeSay = {
  word: 'Happy new Year!',
  time: '2023-01-22'
}
// value参数为对象或参数，作为后续then 方法传入的参数
Promise.resolve(welcomeSay).then(res => {
  console.log(`res:`, res)
})
