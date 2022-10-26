// 来源：https://fangyinghang.com/this-in-js/

// 函数的三种调用方式
// func(arg1, arg2) 等价于 func.call(undefined, arg1, arg2)
// obj.child.method(arg1, arg2) 等价于 obj.child.method.call(obj.child, arg1, arg2)
// func.call(context, arg1, arg2)
function say() {
  console.log(`this：`, this)
}

// say()
const person = {
  say: function() {
    console.log(`this：`, this)
  }
}
// person.say()
// person.say.call(person)

// say.call(person)

const boy = person.say
// 等价于 person.say.call(person)
person.say()

// 等价于 boy.call() ==> boy.call(undefined) ==> 浏览器规则 如果call 的第一个参数为空的话；this 指向window ;node 则指向 global
// boy()

