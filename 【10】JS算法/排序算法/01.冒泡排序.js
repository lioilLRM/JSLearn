// 冒泡排序：参考：https://zhuanlan.zhihu.com/p/268699657
/*
原理是什么：首先我们需要从后往前遍历待排序数组，然后重复这个步骤，
1. 从尾部开始比较相邻的两个元素，如果尾部的元素比前面的大，就交换两个元素的位置。
2. 往前对每个相邻的元素都做这样的比较、交换操作，这样到数组头部时，第 1 个元素会成为最大的元素。
3. 重新从尾部开始第 1、2 步的操作，除了在这之前头部已经排好的元素。
4. 继续对越来越少的数据进行比较、交换操作，直到没有可比较的数据为止，排序完成。
*/
// 继续遍历剩下的待排序的数列，这样我们就需要一个双重循环去完成这个算法。

// 遇到的难点是：如何跳过已经排序过的数据
// 排序结果：从大到小；从尾部开始，要跳过已经头部排序好的数据
function bubbleSort(arr) {
  const len = arr.length
  let loopNum = 0
  for (let i = len - 1; i > 0; i--) {
    let flag = true
    // j>len - 1 -i 循环的结束条件：对于已经排序好的数据不再参加比较；
    for (let j = len - 1; j > len - 1 - i; j--) {
      loopNum++
      if (arr[j] > arr[j - 1]) {
        // const temp = arr[j]
        // arr[j] = arr[j - 1]
        // arr[j - 1] = temp

        // 优化
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        flag = false // // 只要有一次相邻交换，说明数组还没排好序
      }
      // 如果遍历了一遍，都没发生相邻交换，说明排序完成
      if (flag) {
        break
      }
    }
  }
  console.log(loopNum)

  return arr
}

const testArr = [12, 35, 99, 18, 76, 110]

console.log(`bubbleSort(testArr：`, bubbleSort(testArr))

// 排序结果：从小到大；跳过尾部已经排序好的数据
function bubbleSortSmallToBigger(arr) {
  const len = arr.length
  let loopNum = 0
  for (let i = 0; i < len; i++) {
    // 如何跳过已经排序好的数据？
    for (let j = 0; j < len - i; j++) {
      loopNum++
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log(`loopNum：`, loopNum)

  return arr
}
// console.log(`bubbleSortSmallToBigger(testArr：`, bubbleSortSmallToBigger(testArr))
