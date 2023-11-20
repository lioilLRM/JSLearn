// var obj1 = {
//   a: 1,
//   b: { b1: 1, b2: 2 }
// }

// var obj2 = {
//   b: { b1: 3, b3: 4 },
//   c: 3
// }

// var obj3 = {
//   d: 4
// }
var obj1 = {
  a: 1,
  b: {
    c: 2
  }
}

var obj2 = {
  b: {
    c: [5]

  }
}
console.log(extendDeep(true, obj1, obj2))
// { a: 1, b: { b1: 3, b2: 2, b3: 4 }, c: 3, d: 4 }

// 知识点：
// 1. 不确定参数的处理方式，通过使用arguments对象来处理不确定参数
// 2. 递归调用
// 3. for in 遍历对象
function extendDeep() {
  var deep = false
  var name, options, src, copy
  var clone, copyIsArray

  var length = arguments.length

  var i = 1
  // 如果第一个参数不传 deep,那么第一个值就是target
  var target = arguments[0] || {}
  // 第一个是deep，那么第二个参数就是target，要复制的对象从第3个开始
  if (typeof target === 'boolean') {
    deep = target
    target = arguments[i] || {}
    i++
  }

  if (typeof target !== 'object' && !isFunction(target)) {
    target = {}
  }

  for (; i < length; i++) {
    options = arguments[i]
    if (options !== null) {
      for (name in options) {
        src = target[name]

        copy = options[name]

        // 解决循环引用
        if (target === copy) {
          continue
        }

        if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false
            clone = src && Array.isArray(src) ? src : []
          } else {
            clone = src && isPlainObject(src) ? src : {}
          }

          target[name] = extendDeep(deep, clone, copy)
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }
  return target
}

function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

function isPlainObject(obj) {
  var class2Type = {}
  var toString = class2Type.toString
  var hasOwn = class2Type.hasOwnProperty
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

console.log(`isPlainObjct({})：`, isPlainObject([]))
