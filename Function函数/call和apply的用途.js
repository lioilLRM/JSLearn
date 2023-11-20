// 例子来源：Javascript 设计模式与开发实践

// 改变 this 指向

const obj1 = {
  name: '赛文'
}

const obj2 = {
  name: '迪迦'
}

window.name = 'Window'

const getName = function() {
  console.log(this.name)
}

getName()
getName.call(obj1)
getName.call(obj2)

// 实现一个原生的 bind 函数
Function.prototype.myBind = function(context) {
  const self = this
  return function() {
    return self.apply(context, arguments)
  }
}

const func = function() {
  console.log(this.name)
}.myBind(obj1)

func()
