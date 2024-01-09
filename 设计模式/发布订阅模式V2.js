/**
 * 定义一个类，类有哪些属性呢？
 * 属性
 * 行为
 *
 * 这是一个软件设计的时候的思考的思维模型？
 * 特质：
 * 行为：
 * 细心==》行为上如何表现？
 * 好奇==》行为上、语言上如何表现？
 * 夸奖==》行为上、语言、用词上如何表现？
 */

class Publisher {
  constructor() {
    this.observers = []
    console.log('发布者创建成功')
  }

  add(observer) {
    console.log('添加订阅者')
    this.observers.push(observer)
  }

  remove(observer) {
    console.log('移除订阅者')
    this.observers.forEach((item, index) => {
      if (item === observer) {
        this.observers.splice(index, 1)
      }
    })
  }

  notify() {
    console.log('通知订阅者')
    this.observers.forEach(observer => {
      observer.update(this)
    })
  }
}

class Subscriber {
  constructor() {
    this.name = '订阅者'
    console.log('订阅者创建成功')
  }

  update(publisher) {
    console.log('更新')
    console.log(publisher)
  }
}

class PrdPublisher extends Publisher {
  constructor() {
    super()
    this.prdState = null
    this.observers = []
    console.log('PRD发布者创建成功')
  }

  setState(state) {
    console.log('设置prd状态，通知开发开始工作了')
    this.prdState = state
    this.notify()
  }
  getState() {
    return this.prdState
  }
}

class DeveloperObserver extends Subscriber {
  constructor() {
    super()
    this.prdState = {}
    console.log('开发者观察者创建成功')
  }

  update(publisher) {
    console.log('开发者观察者更新')
    this.prdState = publisher.getState()
    this.work()
    console.log(publisher)
    console.log(publisher.getState())
  }
  work() {
    const prd = this.prdState
    console.log('开发者工作', prd)
  }
}

const fontendDeveloper = new DeveloperObserver()
const backendDeveloper = new DeveloperObserver()
const tester = new DeveloperObserver()

const Hanmeimei = new PrdPublisher()

const prd = {
  name: '第100次产品开发需求',
  version: 100
}

Hanmeimei.add(fontendDeveloper)
Hanmeimei.add(backendDeveloper)
Hanmeimei.add(tester)

Hanmeimei.setState(prd)
