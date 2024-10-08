// 数据分组引发的思考

const peoples = [
  { name: 'Alice', age: 21, group: 'Dynamics', sex: 'Female' },
  { name: 'Bob', age: 22, group: 'Dynamics', sex: 'Male' },
  { name: 'Charlie', age: 23, group: 'Dynamics', sex: 'Male' },
  { name: 'David', age: 23, group: 'Dynamics', sex: 'Male' },
  { name: 'Eve', age: 23, group: 'Dynamics', sex: 'Female' },
  { name: 'Frank', age: 23, group: 'Dynamics', sex: 'Male' },
  { name: 'Grace', age: 23, group: 'Dynamics', sex: 'Female' },
  { name: 'Henry', age: 23, group: 'Dynamics', sex: 'Male' },
  { name: 'Isabella', age: 21, group: 'Dynamics', sex: 'Female' },
  { name: 'Jack', age: 21, group: 'Dynamics', sex: 'Male' },
  { name: 'Kate', age: 21, group: 'Dynamics', sex: 'Female' },
  { name: 'Lily', age: 22, group: 'Dynamics', sex: 'Female', address: {
    province: '广东',
    city: '广州'
  }}
]

// 如何根据年龄或者性别对上面的数据进行分组？
const expectRes = {
  21: [],
  22: [],
  23: []
}

const groupBy = (arr, propName) => {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    // const obj = arr[i]
    const key = arr[i][propName]
    if (!res[key]) {
      res[key] = []
    }
    // res[key].push(obj)
    res[key].push(arr[i])
  }
  return res
}

// console.log(groupBy(peoples, 'name'))
// console.log(groupedBySex)
// console.log(groupBy(peoples, 'sex'))

// 这样子的代码就能够满足需求了吗 ？
// 1、如果有一天他要传入的 不是一个数组对象， 而是一个数字数组或者是字符串数组的话，该怎么办 ？
// 2、如果对象里面有的一个地址,按照地址的省份进行分组 要怎么处理呢 ?
// 3、如果他要按照年龄加性别进行分组 ，要怎么处理呢 ？
// 业务值钱，但是业务代码并不值钱 因为市面上一抓一大把 。

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const expectNumberResult = {
  '奇数': [],
  '偶数': []
}
const strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const expectAgeWithSexResult = {
  '21-女': [],
  '21-男': []
}

const newGroupBy = (arr, generateKey) => {
  // 参数归一化
  if (typeof generateKey === 'string') {
    const propName = generateKey
    generateKey = (item) => item[propName]
  }
  const result = {}
  for (let i = 0; i < arr.length; i++) {
    const key = generateKey(arr[i])
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(arr[i])
  }
  return result
}

// console.log(newGroupBy(numberArr, num => num % 2 === 0 ? '偶数' : '奇数'))

const getExpectAgeWithSexResult = newGroupBy(peoples, people => {
  const sexMapping = { Male: '男', Female: '女' }
  return `${people.age}-${sexMapping[people.sex]}`
})
// console.log(getExpectAgeWithSexResult)

const getResultOfStringPropName = newGroupBy(peoples, 'address.province')
console.log(getResultOfStringPropName)
