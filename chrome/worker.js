// addEventListener('message', function(event) {
//   console.log(`event：`, event)
//   let total = 0
//   const num = event.data
//   for (let i = 0; i < num; i++) {
//     total += i
//   }
//   postMessage(total)
// })

onmessage = function(event) {
  console.log(`event：`, event)
  console.time('处理时间')

  const num = event.data
  const res = testArray(num)

  postMessage(res)
  console.timeEnd('处理时间')
}

// function handleData(num) {
//   let total = 0

//   for (let i = 0; i < num; i++) {
//     total += i
//   }
//   return total
// }

function testArray() {
  console.log(`testArray：`)

  const arr = new Array(2000).fill(0)
  const list = arr.map((item, index) => {
    return {
      id: index,
      name: 'aaaaaaaaaaaaaa' + index,
      color: 'red',
      label: '12334512312313123',
      value: '1233' + index
    }
  })

  const arr2 = new Array(200).fill(1)
  let list2 = arr2.map((item, index) => {
    return {
      id: index,
      materialLabe: '水水水水水水水',
      locationName: '工作中心@integer(60, 100)@natural',
      locationTime: '2021-04-02T14:55:07',
      locationTimeStr: '04-02 14:55:07',
      labelNumber: 1,
      unit: '件#0#round',
      inventoryFileInfo: 1,
      stagnateAge: '55.79天'
    }
  })
  const diffLength = list.length - list2.length

  const diffValue = list.length - list2.length // 最大长度和当前项的差值
  if (diffValue <= list2.length) {
    const sliceValue = list2.slice(0, diffValue)
    list2 = [...list2, ...sliceValue]
  } else {
    console.log(`差值大于数组的位数，填充数组的前${diffValue}位`)
    const repeatNum = parseInt(diffValue / list2.length) // 取整
    const remainder = diffValue % list2.length // 余数
    for (let index = 0; index < repeatNum; index++) {
      const sliceValue = list2.slice(0, list2.length)
      // console.log('sliceValue', sliceValue);

      list2 = [...list2, ...sliceValue]
    }
    const newSliceValue = list2.slice(0, remainder)
    // console.log('newSliceValue', newSliceValue);

    list2 = [...list2, ...newSliceValue]
  }

  console.log(`diffLength：`, diffLength)
  console.log(`list2：`, list2)
}
