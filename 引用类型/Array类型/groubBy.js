const persons = [
  {name: '小Alice', age: 21, sex: 'male'},
  {name: '小Bob', age: 22, sex: 'male'},
  {name: '小Cindy', age: 22, sex: 'female'},
  {name: '小Dave', age: 21, sex: 'male'},
  {name: '小Eva', age: 23, sex: 'female'},
]

groupByAge(persons)
groupBySex(persons)
groupByPropName(persons, 'age')
groupByPropName(persons, 'sex')

function groupByAge(list) {

  let result = {}
  for(let item of list) {
    if(!result[item.age]) {
      result[item.age] = []
    }
    result[item.age].push(item)
  }

  console.log(`groupByAge result`, result)

}

function groupBySex(list) {
  let result = {}

  for(let item of list) {
    if(!result[item.sex]) {
      result[item.sex] = []
    }
    result[item.sex].push(item)
  }

  console.log(`groupBySex result`, result)

}

function groupByPropName(list, propName) {
  let result = {}

  for(let item of list) {
    if(!result[item[propName]]) {
      result[item[propName]] = []
    }
    result[item[propName]].push(item)
  }

  console.log(`groupByPropName result`, result)
}