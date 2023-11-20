// 来源
// https://juejin.cn/post/6844903615476269064

// 泡咖啡
// 把水煮沸
// 用沸水冲泡咖啡
// 把咖啡倒进杯子
// 加糖和牛奶

// 泡茶
// 把水煮沸
// 用沸水浸泡茶叶
// 把茶水倒进杯子
// 加柠檬

// 抽象父类:
// javascript没有类型检查，我们需要让子类必须实现brew, pourInup和addCondiments，因此这里通过抛出异常来提醒编写者。
const Beverage = function() {}
Beverage.prototype.boilWater = function() {
  console.log('煮沸水')
}
Beverage.prototype.brew = function() {
  throw new Error('子类必须重学 brew 方法')
}

Beverage.prototype.pourInCup = function() {
  throw new Error('子类必须重学 pourInCup 方法')
}

Beverage.prototype.addCondiments = function() {
  throw new Error('子类必须重写 addCondiments 方法')
}

Beverage.prototype.customWantsConiments = function() {
  return true
}

// 模板方法。内部封装了子类的算法框架，它作为一个算法的模板，知道子类以何种顺序执行哪些方法
Beverage.prototype.init = function() {
  this.boilWater()
  this.brew()
  this.pourInCup()
  if (this.customWantsConiments()) {
    this.addCondiments()
  }
}

const Coffee = function() {}
Coffee.prototype = new Beverage()

Coffee.prototype.brew = function() {
  console.log(`用沸水冲泡咖啡`)
}
Coffee.prototype.pourInCup = function() {
  console.log(`把咖啡倒进杯子`)
}
Coffee.prototype.addCondiments = function() {
  console.log(`加糖和牛奶`)
}

const coffee = new Coffee()
coffee.init()

// tea和Coffee都继承了Beverage
const Tea = function() {}
Tea.prototype = new Beverage()

Tea.prototype.brew = function() {
  console.log(`用沸水浸泡茶叶`)
}
Tea.prototype.pourInCup = function() {
  console.log(`把茶水倒进杯子`)
}
Tea.prototype.addCondiments = function() {
  console.log(`加柠檬`)
}

const tea = new Tea()
tea.init()
