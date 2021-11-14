import Mock from 'mockjs'
// 本次要解决的问题是：1.获取一个对象，将对象中的label属性和已存在的数组对象中的label属性的属性值的是否重复的问题。
// 2.后台返回的数组对象中有重复的数据，按照对象里的重复的label值进行合并。
// 学习内容： 比较JS中的各种循环方式：
// for, for in ,for of ,map, forEach, find, findIndex, filter,some, every，reduce
var mockObj = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'materialLabel|1': ['202103100001', '202103100002'],
    'labelNum|1-20': 10
  }]
})
console.log('mockObj: ', mockObj)
const obj = {}
// 要求：过滤出标签为唯一值
// let newList = mockObj.list.reduce((acc, cur, index, src)=> {
// 	console.log("acc, cur: ",acc, cur);
// 	obj[cur.materialLabel]?"":obj[cur.materialLabel]=true &&acc.push(cur)
// 	return acc
// }, [])
// console.log("newList: ",newList);

const newList2 = mockObj.list.reduce((acc, cur) => {
  console.log('acc, cur: ', acc, cur)
  if (!obj[cur.materialLabel]) {
    obj[cur.materialLabel] = cur.materialLabel
    acc.push(cur)
  }
  return acc
}, [])
console.log('newList2: ', newList2)

