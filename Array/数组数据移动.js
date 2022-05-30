
const arr = [1, 2, 3, 4, 5]

function swipeItem(arr, fromIndex, toIndex) {
  // const delItem = arr.splice(fromIndex, 1)
  // arr.splice(fromIndex, 0, arr[toIndex])
  // arr[toIndex] = delItem[0]
  arr[toIndex] = arr.splice(fromIndex, 1, arr[toIndex])[0]
  console.log(`arr：`, arr)

  return arr
}

// swipeItem(arr, 1, 2)

function moveUpItem(arr, index) {
  if (index === 0) return
  const res = swipeItem(arr, index, index - 1)
  console.log(`moveUpItem res：`, res)
}
// moveUpItem(arr, 1)

function downOneItem(arr, index) {
  if (index === 0) return
  const res = swipeItem(arr, index, index + 1)
  console.log(`downOneItem res：`, res)
}
// downOneItem(arr, 3)
// export {
//   swipeItem
// }
const arr2 = [1, 2, 3, 4, 5]

// fromIndex: 当前元素所在位置索引
var moveItemToFirst = function(array, fromIndex) {
  if (fromIndex === 0) return array
  let item
  for (const index of array) {
    console.log(`k：`, index)

    item = array[index]
    if (index === fromIndex) {
      console.log(`匹配：`)

      array.splice(index, 1)
      break
    }
  }
  array.unshift(item)
  console.log(`moveItemToFirst array：`, array)
  return array
}
moveItemToFirst(arr2, 3)
