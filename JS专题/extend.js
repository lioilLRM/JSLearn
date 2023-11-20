function extend() {
  var key, options, copyValue

  var length = arguments.length
  var i = 1
  var target = arguments[0]

  for (; i < length; i++) {
    options = arguments[i]
    if (options !== null) {
      for (key in options) {
        copyValue = options[key]
        if (copyValue !== undefined) {
          target[key] = copyValue
        }
      }
    }
  }
  return target
}

var target = {
  a: 1,
  b: { b1: 1, b2: 2 }
}

var obj2 = {
  b: { b1: 3, b3: 4, bb: 'bb' },
  c: 3
}

var obj3 = {
  d: 4,
  c: 4
}
// 合并对象
const mergeObj = extend(target, obj2, obj3)
// 希望输出--》
console.log(`mergeObj：`, mergeObj)

const hopeRes = {
  a: 1,
  b: { b1: 3, b3: 4 },
  c: 3,
  d: 4
}
