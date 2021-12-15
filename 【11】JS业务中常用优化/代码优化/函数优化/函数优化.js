// 来源：https://juejin.cn/post/6956236646698188814
// 使用默认参数去代替短路操作或条件赋值
function setName(name) {
  const newName = name || 'Juan Palomo'
  return newName
}

function newSetName(name = 'Juan Palomo') {
  const newName = name
  return newName
}

// 函数参数(理想情况下不多于 2 个)
/*
当一个函数有很多参数时，可以把这些参数组合在一起构成一个对象。
 */
// 缺点：固定参数；得按顺序传参；不灵活
function newBurger(name, price, ingredients, vegan) {
  // ...
}
// 好处：使用对象作为参数，将基本参数整合到对象中。但是不确定用到了什么参数
function newBergerV2(berger) {
  // ...
}
// 好处；只需要传一个对象，对对象进行解构赋值；
function newBergerV3({ name, price, ingredients, vegan }) {
  // ...
}

const burger = {
  name: 'Chicken',
  price: 1.25,
  ingredients: ['chicken'],
  vegan: false
}
newBergerV3(burger)

// 函数应该只做一件事

function emailCustomers(customers) {
  const database = []
  const client = ''
  customers.forEach((customer) => {
    const customerRecord = database.find(customer)
    if (customerRecord.isActive) {
      email(client)
    }
  })

  function email() {
    // ...
  }
}

function emailActiveCustomer(customers) {
  customers
    .filter(isActiveCustomer(customers))
    .forEach(email)
}
function isActiveCustomer(customers) {
  const customerRecord = database.find(customer)
  return customerRecord.isActive
}

// 优先考虑函数式编程而不是命令式编程
// 命令式编程
const items = [
  { name: 'Coffe', price: 500 },
  { name: 'Ham', price: 1500 },
  { name: 'Bread', price: 150 },
  { name: 'Donuts', price: 1000 }
]

let total = 0
for (let i = 0; i < items.length; i++) {
  total += items[i].price
}

// 函数式编程
const totalPrice = items
  .map(({ price }) => price)
  .reduce((total, price) => total + price)
console.log(`total, totalPrice：`, total, totalPrice)

// 链式调用
class Car {
  constructor({ make, model, color } = car) {

  }
  setMake(make) {
    this.make = make
    return this
  }
}
const car = new Car('WV', 'Jetta', 'gray')
car.setColor('red')
car.save()
