class Publisher {
  constructor() {
    this.observers = []
    console.log('发布者创建')
  }

  add(observer) {
    console.log('添加订阅者')
    this.observers.push(observer)
  }

  remove(observer) {
    console.log('删除订阅者')
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

class Observer {
  constructor() {
    console.log('创建订阅者')
  }
  update() {
    console.log('更新订阅者')
  }
}

class PrdPublisher extends Publisher {
  constructor() {
    super()
    this.prdState = null

    console.log('PRD 发布者创建')
  }

  getState() {
    console.log('获取prd 的状态')

    return this.prdState
  }

  setState(state) {
    console.log('改变prd 状态')
    this.prdState = state

    this.notify()
  }
}

class DeveloperObserver extends Observer {
  constructor(name) {
    super()
    // 需求文档一开始还不存在，prd初始为空对象
    this.name = name
    this.prdState = {}
    console.log('DeveloperObserver created')
  }

  // 重写了update 的方法
  update(publisher) {
    console.log('更新订阅者')

    this.prdState = publisher.getState()

    this.work()
  }

  work() {
    const prd = this.prdState

    console.log(`${this.name}开始干活~`, prd)
  }
}

// 创建订阅者：前端开发李雷
const liLei = new DeveloperObserver('liLei')
// 创建订阅者：服务端开发小A（sorry。。。起名字真的太难了）
const xiaoA = new DeveloperObserver('xiaoA')
// 创建订阅者：测试同学小B
const xiaoB = new DeveloperObserver('xiaoB')
// 韩梅梅出现了
const hanMeiMei = new PrdPublisher()

// 需求文档出现了
const prd = {
  // 具体的需求内容
  orderFn: '订单功能',
  purchaseFn: '采购功能'
}
hanMeiMei.add(liLei)
hanMeiMei.add(xiaoA)
hanMeiMei.add(xiaoB)
hanMeiMei.setState(prd)
