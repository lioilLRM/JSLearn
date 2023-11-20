function testFn(p1, p2) {
  console.log(p1, p2)
}

const cat = {
  name: '大喵喵',
  say(p1, p2) {
    console.log(`${this.name} 叫了喵喵喵~,要吃 ${p1} ${p2}`)
  },
  child: {
    name: '小喵喵',
    eatMilk(p1, p2) {
      console.log(`${this.name} 叫了喵~,要吃 ${p1} ${p2}`)
    }
  }
}

// cat.child.say()
cat.child.eatMilk.call(cat.child, '喝奶', '🐂')
cat.child.eatMilk.call(cat, '喝奶', '🐂')
cat.child.eatMilk.call(Array, '数组', '🐂')
cat.child.eatMilk.call(Function, '函数', '🐂')

// cat.child.eatMilk.call('', '喝奶', '🐂')

// testFn('测试', '参数')
// testFn.call(undefined, '测试', '参数')

