
function supply(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
  // 条件 1: 水果存在
  if (fruit) {
    // 条件 2: 属于红色水果
    if (redFruits.includes(fruit)) {
      console.log('红色水果')
      // 条件 3: 水果数量大于 10 个
      if (quantity > 10) {
        console.log('数量大于 10 个')
      }
    }
  } else {
    throw new Error('没有水果啦!')
  }
}
// 优化后的代码：如果提前 return 掉无效条件，将 if else的多重嵌套层次减少到一层，更容易理解和维护。
function supplyV2(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
  if (!fruit) throw new Error('没有水果啦！') // 条件 1: 当 fruit 无效时，提前处理错误
  if (!redFruits.includes(fruit)) return // 条件 2: 当不是红色水果时，提前 return
  console.log('红色水果')

  if (quantity > 10) {
    console.log('数量大于10个')
  }
}

// supply('apple', 10)
supply('apple', 11)
supplyV2('apple', 110)

