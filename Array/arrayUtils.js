// 数组工具类拓展
const arrayUtils = {
  append(array, ...elements) {
    array.push(...elements)
    return array
  },
  prepend(array, ...elements) {
    array.unshift(...elements)
    return array
  },
  insert(array, index, ...elements) {
    array.splice(index, 0, ...elements)
    return array
  },
  remove(array, index) {
    array.splice(index, 1)
    return array
  },
  sum(array) {
    return array.reduce((pre, cur) => {
      return pre + cur
    })
  },
  multi(array) {
    return array.reduce((pre, cur) => {
      return pre * cur
    })
  }

}

const array = [1, 2, 3, 4]
// arrayUtils.prepend(array, -1, 0)
// arrayUtils.append(array, 4, 5, 6)
// arrayUtils.insert()
// arrayUtils.remove(array, 0)
const addres = arrayUtils.sum(array)
const multiRes = arrayUtils.multi(array)
// console.log('array', array)
console.log('addres', addres)
console.log('multiRes', multiRes)

