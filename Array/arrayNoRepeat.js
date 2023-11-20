var arr = [0.1, 0.0, 0, 3, 1, 1.0, 1.1, 1.11, 2, 1, '1', '2', 1]
// 数组去重
function unique(array) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    for (var j = 0; j < result.length; j++) {
      console.log(j)

      if (item === result[j]) {
        console.log('iii')

        break
      }
    }
    if (j === result.length) {
      result.push(item)
    }
  }
  return result
}
// const res = unique(arr)
// console.log(res)

function uniqueByIndexOf(array) {
  const result = []
  array.forEach(item => {
    // if (result.indexOf(item) === -1) result.push(item)
    if (!result.includes(item)) result.push(item)
  })
  return result
}

const resIndexOf = uniqueByIndexOf(arr)
// console.log(resIndexOf)

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
function uniqueByFilter(array) {
  const result = array.filter((item, index, array) => {
    // console.log('arr', array, item, index)
    const temp = array.indexOf(item) === index
    console.log('temp', temp)

    return temp
  })
  return result
}

console.log(uniqueByFilter(arr))

// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
function uniqueBySort(array) {
  const result = array.concat().sort()
  console.log('uniqueBySort', result, array)
  const res = result.filter((item, index, arr) => {
    return !index || item !== arr[index - 1]
  })
  return res
}

console.log(uniqueBySort(arr))

