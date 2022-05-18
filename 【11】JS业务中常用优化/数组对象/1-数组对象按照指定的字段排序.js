// 关联的排序算法还有哪些？前端常用的排序算法有哪些？
/**
 1. 冒泡排序
 2. 选择排序
 3. 插入排序
 4. 快速排序
 */
/**
数组对象按照指定的字段进行排序
来源：
1. 查看标签详情的时候需要按照指定的字段进行排序
2. 看板的按照配置的工作中心进行的排序

 */

const waitingSortList = [
  { label: '英雄属性', value: '火' },
  { label: '英雄武器', value: '法杖' },
  { label: '英雄技能', value: '火球' },
  { label: '英雄等级', value: 'Lv1' },
  { label: '英雄勋章', value: '初级术士' },
  { label: '英雄名字', value: '魔法师' }
]

const labelSortOrder = ['英雄名字', '英雄属性', '英雄武器', '英雄技能', '英雄等级', '英雄勋章']

function sortByOrder(list, order, property) {
  list.sort((a, b) => {
    const first = order.indexOf(a[property])
    const second = order.indexOf(b[property])
    const res = first - second
    console.log(`res：`, first, second, res, a[property], b[property])

    return res
  })
  return list
}

console.log(`sortByOrder(waitingSortList, labelSortOrder, 'label'：`, sortByOrder(waitingSortList, labelSortOrder, 'label'))

/**
 1. sort函数的用法？依据什么来排序的？
sort方法默认用法针对数组里面的元素的unicode值进行排序。
进阶用法：sort(compareFunction)，提供了可选的比较函数
V8引擎对sort的实现应用了不同的排序方式：小于10条的数据使用了插入排序；大于的话使用了快速排序
 */
const numArr = [1, 2, 10, 11, 20]
numArr.sort((a, b) => {
  console.log(`a, b：`, a, b)

  return a - b
})
console.log(`numArr：`, numArr)

const strArr = ['1', '2', '10', '11', '20']
strArr.sort()
console.log(`strArr：`, strArr)
// 上面的排序方式只能排序number，对于排序字符串不生效；
// arr.sort(function(a,b){return a.localeCompare(b)})来进行排序
// 但中文排序时发现不是我们想要的 可以通过加参数的方法 a.localeCompare(b,'zh-CN')

;(function() {
  const numbers = [
    'IDBD-867',
    'IPX-871',
    'IPX-837',
    'ADN-381',
    'IPX-817',
    'ATID-495']

  const sortRes = numbers.sort((a, b) => {
    return b - a
  })
  // 排序无效
  console.log(`sortRes：`, sortRes)

  const sortResV2 = numbers.sort((a, b) => {
    return a.localeCompare(b)
  })
  console.log(`sortResV2：`, sortResV2)
}())

