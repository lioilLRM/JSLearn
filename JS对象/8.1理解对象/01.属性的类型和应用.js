/**

属性的特征
1. 对象有属性，属性的有哪些内部的特性来控制属性的行为？例如控制是否能够删除属性，遍历属性，修改属性，设置属性的默认值？
  writable，value，configurable, Enumerable
2. 数据属性和访问器属性有什么区别？
3. 可以用哪个方法可以修改属性的默认特性？
4. Object.defineProperty方法在vue中是如何应用的？他是如何实现数据响应的功能？有什么缺点？和Proxy相比有什么缺陷？
5. Proxy 是什么？是干啥用的？在什么情况下可以使用？
 *
 */

const person = {}
Object.defineProperty(person, 'name', {
  writable: false,
  value: '孙悟空'
})
console.log(`person.name：`, person.name)
// person.name = '六耳猕猴'
console.log(`person.name：`, person.name)

/**
访问器属性：set()在给属性赋值的时候调用。由此可得：想监听对象属性的变化，就是对对象里面的所有属性进行遍历。
 然后通过Object.defineProperty设置对象的属性set函数。
 问题：
 1. 如何遍历一个对象的属性？
 2.对于对象的嵌套属性；如何遍历？
 3. 发布订阅模式
 */
const book = { _year: 2021, edition: 1, name: 'JS高级程序设计', version: 4 }
// , author: { name: 'Matt Frisbie', age: 22 }
Object.defineProperty(book, 'year', {
  get() {
    return this._year
  },
  set(nValue) {
    console.log(`设置的新的nValue：`, nValue)

    if (nValue > 2021) {
      this._year = nValue
      this.edition = nValue - 2021
    }
  }

})

book.year = 2022
console.log(`book：`, book)

function setFn(obj) {
  const keys = Object.keys(obj)
  console.log(`keys：`, keys)
  keys.forEach(key => {
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        return this[key]
      },
      set(nval) {
        // this[key] = nval
        console.log(`obj.key设置新值：`, nval)
      }
    })
  })
}

setFn(book)
book.version = 5

// 这是将要被劫持的对象
const data = {
  name: ''
}

function say(name) {
  if (name === '古天乐') {
    console.log('给大家推荐一款超好玩的游戏')
  } else if (name === '渣渣辉') {
    console.log('戏我演过很多,可游戏我只玩贪玩懒月')
  } else {
    console.log('来做我的兄弟')
  }
}

// 遍历对象,对其属性值进行劫持
Object.keys(data).forEach(function(key) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      console.log('get')
      return ''
    },
    set: function(newVal) {
      // 当属性值发生变化时我们可以进行额外操作
      console.log(`大家好,我系${newVal}`)
      say(newVal)
    }
  })
})

data.name = '渣渣辉'
// 大家好,我系渣渣辉
// 戏我演过很多,可游戏我只玩贪玩懒月
