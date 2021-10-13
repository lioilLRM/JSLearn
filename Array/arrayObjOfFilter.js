const staff = [
  { name: 'April', job: 'programmer', age: '18', hobby: 'study' },
  { name: 'Shawn', job: 'student', age: '8', hobby: 'study' },
  { name: 'Leo', job: 'teacher', age: '28', hobby: 'play' },
  { name: 'Todd', job: 'programmer', age: '19', hobby: 'sleep' },
  { name: 'Scoot', job: 'cook', age: '38', hobby: 'paintting' }
]

// 单条件精准查找
function searchByKeyValue(list, key, value) {
  return list.filter(item => item[key] === value)
}
// 单条件模糊查找
function searchByKeyValueOfFuzzy(list, key, value) {
  const reg = new RegExp(value, 'i')
  return list.filter(item => reg.test(item[key]))
}

const res = searchByKeyValue(staff, 'job', 'cook')
// console.log('res searchByKeyValue', res)

// console.log('FuzzyRes', searchByKeyValueOfFuzzy(staff, 'job', 'o'))

// 多条件精准查找
function searchByMultiKeysValue(list, filters) {
  const keys = Object.keys(filters)
  const result = list.filter(item => {
    const res = keys.find(key => item[key] === filters[key])
    console.log(res)
    return res
  })
  console.log('result', result)

  return result
}
const filters = { name: 'A', age: '18' }
// searchByMultiKeysValue(staff, filters)

// 多条件多值精准查找
function searchByMultiKeysMultiValue(list, filters) {
  const result = []
  list.filter(item => {
    for (const key in filters) {
      for (const keyValue of filters[key]) {
        if (item[key] === keyValue) {
          result.push(item)
        }
      }
      // break
    }
  })
  console.log('多条件filters res:', result)
  return result
}

const multiFilters = {
  age: ['18', '0'],
  name: ['Leo1']
}
searchByMultiKeysMultiValue(staff, multiFilters)
