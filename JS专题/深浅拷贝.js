// 数组的拷贝

// 使用 slice, concat 进行拷贝

const arr = ['old', 1, true, null, undefined]
const copy_arr = arr.concat()
const copyArrSlice = arr.slice()
copy_arr[0] = 'new'
copyArrSlice[0] = 'newSlice'

console.log(`arr：`, arr)
console.log(`copy_arr：`, copy_arr)
console.log(`copyArrSlice：`, copyArrSlice)

// 数组对象拷贝: slice 和 concat 是浅拷贝
const arrObj = [{ old: 'old' }, ['old']]
const newArrObj = arrObj.concat()
newArrObj[0].old = 'new'
newArrObj[1][0] = 'new'

console.log(`arrObj, newArrObj：`, arrObj, newArrObj)

// 数组对象深拷贝： 使用JSON.parse(JSON.stringify())
// 缺点： 不能拷贝函数
const arrFn = [
  function() {}, {
    b: function() {
      console.log('b')
    }
  },
  { value: null }
]
const copyArrFn = JSON.parse(JSON.stringify(arrFn))
console.log(copyArrFn)

// 浅拷贝的实现
function shallowCopy(obj) {
  if (typeof obj !== 'object') return

  const newObj = obj instanceof Array ? [] : {}

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

const person = {
  name: '李白'
}

const newPerson = shallowCopy(person)
newPerson.name = '李太白'
console.log(`newPerson：`, person, newPerson)

function deepCopy(obj) {
  if (typeof obj !== 'object') return

  const newObj = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }

  return newObj
}

const copyArrFnByDeepCopy = deepCopy(arrFn)
console.log(copyArrFnByDeepCopy)
