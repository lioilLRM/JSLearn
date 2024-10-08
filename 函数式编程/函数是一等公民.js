// JS 函数可以作为另外一个函数的返回值

function baseAdd(a) {
  return (b) => {
    return a + b
  }
}

const addWithOne = baseAdd(1)

// console.log(`addWithOne`, addWithOne())
const result = addWithOne(2)
console.log(`result`, result)

// undefined
// boolean
// number
// string
// Symbol
// null
// object
