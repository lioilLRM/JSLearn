// 封装变量

// 重构前
let defaultOwner = {
  firstName: 'Martin',
  lastName: 'Fowler'
}

// // 使用方式
// const spaceship = {}
// spaceship.owner = defaultOwner

// spaceship.owner = getDefaultOwner()

// // 更新数据
// defaultOwner = { firstName: 'Rober', lastName: 'Kay' }
// defaultOwner = setDefaultOwner({ firstName: 'Rober', lastName: 'Kay' })

// 重构后
export function getDefaultOwner() {
  return defaultOwner
}

export function setDefaultOwner(arg) {
  defaultOwner = arg
}
