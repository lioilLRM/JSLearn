const beforeMergeList = [380, 11]

const sonPageRowDetails = [
  {
    storeNumber: 10, stockName: 'aaa'
  },
  {
    storeNumber: 105, stockName: 'bbb'
  },
  { storeNumber: 276, stockName: 'ccc' }
]

function multiAllocArr(beforeMergeList, sonPageRowDetails) {
  const submitDetails = []

  for (let i = 0; i < beforeMergeList.length; i++) {
    const needCount = beforeMergeList[i]
    let copyNeedCount = needCount
    let totalInput = 0
    let lackCount = 0
    for (let j = 0; j < sonPageRowDetails.length; j++) {
      const detailItem = sonPageRowDetails[j]
      if (!detailItem.hasOwnProperty('copyStockNumber')) {
        detailItem.copyStockNumber = detailItem.storeNumber
      }
      if (detailItem.copyStockNumber > 0) {
        const minValue = Math.min(detailItem.copyStockNumber, copyNeedCount)

        lackCount = copyNeedCount - minValue
        copyNeedCount -= minValue
        detailItem.copyStockNumber = detailItem.copyStockNumber - minValue
        totalInput += minValue
        if (minValue > 0 && totalInput <= needCount) {
          console.log(lackCount, totalInput)
          const copytDetailItem = JSON.parse(JSON.stringify(detailItem))
          copytDetailItem.newStoreNumber = minValue
          submitDetails.push(copytDetailItem)
        } else {
          break
        }
      } else {
        continue
      }
    }
  }
  console.log(`submitDetails`, submitDetails)
}

multiAllocArr(beforeMergeList, sonPageRowDetails)

function test2() {
  const beforeMergeList2 = [11, 380]
  const sonPageRowDetails2 = [
    {
      storeNumber: 10, stockName: 'aaa'
    },
    {
      storeNumber: 105, stockName: 'bbb'
    },
    { storeNumber: 276, stockName: 'ccc' }
  ]

  multiAllocArr(beforeMergeList2, sonPageRowDetails2)
}

test2()
