
function judge(fruit) {
  if (fruit === 'apple' || fruit === 'strawberry' || fruit === 'cherry' || fruit === 'cranberries') {
    console.log('red')
  }
}

// 将判断条件抽取成一个数组
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
function judgeV2(fruit) {
  if (redFruits.includes(fruit)) {
    console.log('red')
  }
}
judgeV2('apple1')
