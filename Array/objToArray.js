import _ from 'lodash'
// 对象转数组
const person = {
  'name': 'Chaoyang Gan',
  'title': 'Engineer',
  'subject': 'Maths'
}

const keys = Object.keys(person)
console.log(keys)

const list = keys.map(key => {
  return {
    key,
    name: person[key]
  }
})

// console.log(list)

const pairs = _.toPairs(person)
// console.log(pairs)?

const newPerson = _.fromPairs(pairs)
// console.log(newPerson)?

// Row-base dataset
const rDataset = [
  { name: 'iwillwen', gender: 'male' },
  { name: 'rrrruu', gender: 'female', age: 12 },
  { name: 'sss', gender: 'man' },
  { name: '1111' }

]
function getKeys(array) {
  const keys = []

  const itemKeyLength = array.map(item => {
    return Object.keys(item).length
  })

  // let maxKeysItem = array.find(item => {
  //   return Object
  // })

  // for(let i = 0;i<array.length; i++) {
  //   let item = array[i]
  //   if()
  // }
}
// const columnKeys = []
// rDataset.map(item => {
//   const keys = Object.keys(item)
//   columnKeys.push(...keys)
// })
// console.log(columnKeys)

// Row--->Column

// Column-base dataset
const cDataset = {
  name: ['iwillwen', 'rrrruu'],
  gender: ['male', 'female']
}
