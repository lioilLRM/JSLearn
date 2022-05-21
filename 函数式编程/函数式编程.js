
// 将JSlist转为 jsObj
const jsList = [
  'es5:forEach',
  'es5:map',
  'es5:filter',
  'es6:find',
  'es6:findIndex',
  'add'
]

const jsObj = {
  es5: ['forEach', 'map', 'filter'],
  es6: ['find', 'findIndex']
}

function jsListToJsObj(jsList) {
  const jsObj = {}
  for (let i = 0; i < jsList.length; i++) {
    const item = jsList[i]
    const [key, value] = item.split(':')
    console.log(`key, value：`, key, value)
    if (value) {
      if (!jsObj[key]) {
        jsObj[key] = []
      }
      jsObj[key].push(value)
    }
  }
  console.log(`jsObj：`, jsObj)
}
// jsListToJsObj(jsList)

function jsListToJsObjFP(jsList) {
  const res = jsList.map(item => item.split(':')).filter(item => item.length === 2).reduce((obj, item) => {
    const [version, apiName] = item
    console.log(`obj：`, obj)

    const res = {
      ...obj,
      [version]: [...(obj[version] || []), apiName]
    }
    console.log(`res：`, res)

    return res
  }, {})
  console.log(`res：`, res)
}
jsListToJsObjFP(jsList)

//

// 纯函数
// 纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。
// 提到纯函数，熟悉redux的同学可能再熟悉不过了，在redux中所有的修改都需要使用纯函数。纯函数具有以下特点：

// 无状态：函数的输出仅取决于输入，而不依赖外部状态；
// 无副作用：不会造成超出其作用域的变化，即不修改函数参数或全局变量等。
// 这个函数不是纯的，因为js对象传递的是引用地址，函数内部的修改会直接影响外部变量，最后产生了预料之外的结果.

function add(obj) {
  obj.num += 1
  obj.name = '纯函数？不是'
  return obj
}

const obj = { num: 1 }
const newObj = add(obj)
console.log(obj, newObj)
// { num: 2 }
// 这是一个纯函数：返回一个新的对象；原来对象的内容没有变更；
function pureAdd(obj) {
  const _obj = { ...obj }
  _obj.num += 1
  _obj.name = '我是一个纯粹的人'
  return _obj
}

const objNum = { num: 1 }
const newObjNum = pureAdd(objNum)
console.log(`objNum：`, objNum, newObjNum)

// 函数式编程实践
// 针对用户提交的表单数据做一定的处理：1. 清除空格；2. 全部转为大写。

// 首先我们站在函数式编程的思维上分析一下整个需求：

// 抽象：每个处理过程都是一个纯函数
// 组合：通过compose组合每一个处理函数
// 扩展：只需删除或添加对应的处理纯函数即可
// 接下来，我们看一下整体的实现：

// 用户提交数据如下：
const reqParams = {
  info: {
    name: ' asyncguo '
  },
  address: {
    province: 'beijing',
    city: 'beijing',
    area: 'haidian'
  }
}

function traverse(obj, handler) {
  if (typeof obj !== 'object') return handler(obj)
  const copyObj = {}
  Object.keys(obj).forEach(key => {
    copyObj[key] = traverse(obj[key], handler)
  })
  return copyObj
}

function toUpperCase(str) { return str.toUpperCase() }
function toTrim(str) { return str.trim() }
const copyObj = traverse(reqParams, () => {
  console.log(`111：`, 111)
})
console.log(`copyObj：`, copyObj)

