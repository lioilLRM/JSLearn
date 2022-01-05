
const testArr = [12, 35, 99, 18, 76, 110]

function selectionSort(arr) {
  const length = arr.length
  let loopNum = 0
  let temp, minIndex
  for (let i = 0; i < length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < length; j++) {
      loopNum++
      if (arr[j] > arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.log(`loopNum：`, loopNum)

  return arr
}

console.log(`selectionSort(testArr)：`, selectionSort(testArr))
