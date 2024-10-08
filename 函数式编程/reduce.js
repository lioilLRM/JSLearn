const arr = [1, 2, 3]

const add1 = (num) => num + 1

const newArr = arr.map(add1)

console.log(`newArr`, newArr)

const mapFn = (arr, callback) => {
  const length = arr.length
  const newArr = []

  for (let i = 0; i < length; i++) {
    newArr.push(callback(arr[i]))
  }
  return newArr
}

const newArr2 = mapFn(arr, add1)
console.log(`newArr2`, newArr2)

// 用reduce() 推倒出map()

function add1AndPush(previousVlaue, currentValue) {
  previousVlaue.push(currentValue + 1)
  return previousVlaue
}

const newReduceArray = arr.reduce(add1AndPush, [])
console.log(`newReduceArray`, newReduceArray)
