// 来源：https://github.com/mqyqingfeng/Blog/issues/30

var class2Type = {}
// class2Type.toString ===Object.prototype.toString
var toString = class2Type.toString
var hasOwn = class2Type.hasOwnProperty

const emptyNoPropertyOfObj = Object.create(null)
// console.log(`emptyNoPropertyOfObj：`, emptyNoPropertyOfObj)

function isPlainObject(obj) {
  var proto, Ctor

  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }

  // 获取对象的原型
  proto = Object.getPrototypeOf(obj)
  // Object.create(null) 创建的对象是{}，他的__proto__ 是 null
  if (!proto) {
    return true
  }
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor

  return typeof Ctor === 'function' && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
}

function isEmptyObject(obj) {
  var name
  // for in 能够遍历原型上的属性
  for (name in obj) {
    console.log('name', name)

    return false
  }
  if (getDataType(obj) === 'object') {
    return true
  }
}
function getDataType(obj) {
  const class2Type = {}
  // 生成class2type映射
  'Boolean Number String Function Array Date RegExp Object Error Null Undefined Set Map Symbol'.split(' ').map(function(item, index) {
    class2Type['[object ' + item + ']'] = item.toLowerCase()
  })

  if (obj == null) return obj + ''

  let dataType = ''

  if (typeof obj === 'object' || typeof obj === 'function') {
    dataType = class2Type[Object.prototype.toString.call(obj)] || 'object'
  } else {
    dataType = typeof obj
  }
  console.log(`dataType：`, dataType)

  return dataType
}

console.log(isEmptyObject({ key: 1 }))

// Window 对象作为客户端 JavaScript 的全局对象，它有一个 window 属性指向自身
function isWindow(obj) {
  return obj !== null && obj === obj.window
}

function isArrayLike(obj) {
  const length = !!obj && 'length' in obj && obj.length

  console.log(`lengh：`, length)
  const typeRes = getDataType(obj)
  if (typeRes === 'function' || isWindow(obj)) return false

  return typeRes === 'array' || length === 0 ||
   length === 'number' && length > 0 && (length - 1) in obj
}

function Person() {}
Person.prototype.name = '人类'

const person = new Person()
console.log(`isEmptyObject(person)：`, isEmptyObject(person))
