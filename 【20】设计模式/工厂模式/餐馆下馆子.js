/**
工厂模式
1.是什么？
通过一个工厂函数，快速批量地建立一系列相同的类。我们也可以用来创建对象、方法。
主要思想是将对象的创建与对象的实现分离。
2.为什么？

3. 怎么样应用？例子？
https://github.com/tangzhirong/form-constructor
如果你使用过 document.createElement 方法创建过 DOM 元素，那么你已经使用过工厂方法了，
使用的就是工厂方法的思想：访问者只需提供标签名（如 div、img），那么这个方法就会返回对应的 DOM 元素。
 */

function restaurant(menu) {
  switch (menu) {
    case '腐竹肉片':
      return new FuZhuRouPian()
    case '爆炒牛肉':
      return new Beef()
    default:
      throw new Error('本店没有这个菜~')
  }
}

function FuZhuRouPian() {
  this.type = '腐竹肉片'
}

FuZhuRouPian.prototype.eat = function() {
  console.log(`${this.type} 真好吃~`)
}

function Beef() {
  this.type = '爆炒牛肉'
}

Beef.prototype.eat = function() {
  console.log(`${this.type} 好吃到绝顶~`)
}

// const dish1 = restaurant('爆炒牛肉')
// dish1.eat()

// const dish2 = restaurant('红烧排骨')
// dish2.eat()

/**
 * ES6 版本
 */
class RestaurantES6 {
  static getMemu(menu) {
    switch (menu) {
      case '腐竹肉片':
        return new FuZhuRouPianES6()
      case '爆炒牛肉':
        return new BeefES6()
      default:
        throw new Error('本店没有这个菜~')
    }
  }
}

class FuZhuRouPianES6 {
  constructor() {
    this.type = '腐竹肉片'
  }
  eat() {
    console.log(`${this.type} 真好吃~`)
  }
}
class BeefES6 {
  constructor() {
    this.type = '爆炒牛肉'
  }
  eat() {
    console.log(`${this.type} 好吃到绝顶~`)
  }
}

const dish3 = RestaurantES6.getMemu('腐竹肉片')
dish3.eat()
