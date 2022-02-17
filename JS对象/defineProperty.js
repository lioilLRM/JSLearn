// var a
var _default = 0
Object.defineProperty(window, 'a', {
  get() {
    console.log(`_default：`, _default)
    // _default
    return ++_default
  }
})
// console.log(`window：`, window)

// if (a === 0 && a === 1 && a === 2) {
//   console.log(`you win!：`)
// }
// console.log(`a：`, a)

// if (a > 0 && a > 1) {
//   console.log(`win win：`)
// }

var newObj = null

Object.defineProperty(window, 'print', {
  get() {
    return newObj
  },
  set(newVal) {
    console.log(`newVal：`, newVal)
    switch (newVal) {
      case 'Object':
      case 'Array':
        newObj = {
          type: newVal,
          length: newVal.length
        }
        break
      default:
        throw new TypeError('This type is valid')
    }
  }
})

print = 'Object'
console.log(`print：`, print)
print = 'Array'
console.log(`print：`, print)
// print = '123'
// console.log(`print：`, print)

var a_zMap = ['a', 'b', 'c', 'd', 'e', 'f']
var index = -1
Object.defineProperty(window, '_', {
  get() {
    // index++
    // return a_zMap[index]
    // console.log(`this：`, this)
    this._c = this._c || 'a'.charCodeAt(0)
    console.log(`this._c：`, this._c)
    var _ch = String.fromCharCode(this._c)
    console.log(`_ch：`, _ch)
    if (this._c >= 'a'.charCodeAt() + 26) return
    this._c++
    return _ch
  }
})

console.log(_ + _ + _ + _ + _ + _ + _ + _ + _ + _)
