
function observe(target) {
  if (target && typeof target === 'object') {
    Object.keys(target).forEach(key => {
      defineReactive(target, key, target[key])
    })
  }
}

function defineReactive(target, key, val) {
  const dep = new Dep()

  observe(val)
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: false,
    get() {
      return val
    },
    set(value) {
      console.log(`${target}属性的${key}属性从${val}值变成了了${value}`)
      val = value

      dep.update()
    }
  })
}

// 订阅者类
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
