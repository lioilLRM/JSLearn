// 数组对象去重

const list1 = [
  { id: 0, name: 'xiaomin' },
  { id: 1, name: 'xiaohong' }
]

const list2 = [
  { id: 0, name: 'xiaomin' },
  { id: 1, name: 'xiaohong' },
  { id: 3, name: 'xiaomin' },
  { id: 4, name: 'xiaohong' }
]
// 如果追求性能，可以采用空间换时间的做法，在JS中最常见的处理方式就是构建Object，因为Object查找key的时间复杂度是O(1)，而数组是O(n)
// 获取两个数组对象里面不重复的项
function getArrayObjNotRepeatItems(list1, list2, key = 'id') {
  const listIdSet = list1.reduce((pre, cur) => {
    pre[cur[key]] = true
    return pre
  }, {})
  console.log(listIdSet)
  const result = list2.filter(item => !listIdSet[item.id])
  console.log('getArrayObjNotRepeatItems', result)
}

function getArrayObjNotRepeatItemsV2(list1, list2) {
  var result = list2.filter(function(item1) {
    return list1.every(function(item2) {
      return item2.id !== item1.id
    })
  })
  console.log(result)
}

// 获取两个数组对象里面不重复的项
function getArrayObjRepeatItems(list1, list2, key = 'id') {
  const listIdSet = list1.reduce((pre, cur) => {
    pre[cur[key]] = true
    return pre
  }, {})
  console.log(listIdSet)
  const result = list2.filter(item => listIdSet[item.id])
  console.log('getArrayObjRepeatItems', result)
}

getArrayObjNotRepeatItems(list1, list2)
getArrayObjRepeatItems(list1, list2)
