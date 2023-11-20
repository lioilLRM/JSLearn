
// 如何实现单例模式？
// 如何保证一个类只有一个实例对象？

class SingleDog {
  show() {
    console.log(`我是一个单例对象`)
  }
  // 需要构造函数具备判断自己是否已经创建过一个实例的能力
  static getInstance() {
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog()
    }
    return SingleDog.instance
  }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()
console.log(`s1 === s2:`, s1 === s2)

function SingleCat() {

}
SingleCat.getInstance = (function() {
  let instance = null

  return function() {
    if (!instance) {
      instance = new SingleCat()
    }
    return instance
  }
})()

const cat1 = SingleCat.getInstance()
const cat2 = SingleCat.getInstance()

console.log(`cat1 === cat2:`, cat1 === cat2)
