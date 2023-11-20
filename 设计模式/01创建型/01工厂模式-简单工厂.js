
// 构造器函数创建用户类
function User(name, age, career) {
  this.name = name
  this.age = age
  this.career = career
}

const user = new User('李梅', 123, '工程师')
console.log(`user:`, user)

// 创建一个user 过程中；谁变了？
// user的属性没有变；User 的值变化了

// 简单工厂模式
function Coder(name, age) {
  this.name = name
  this.age = age
  this.career = 'coder'
  this.work = ['写代码', '写系分', '修Bug']
}
function ProductManager(name, age) {
  this.name = name
  this.age = age
  this.career = 'product manager'
  this.work = ['订会议室', '写PRD', '催更']
}

function Factory(name, age, career) {
  switch (career) {
    case 'coder':
      return new Coder(name, age)

    case 'product manager':
      return new ProductManager(name, age)
  }
}

function NewUser(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}
function NewFactory(name, age, career) {
  let work
  switch (career) {
    case 'corder':
      work = ['写代码', '写系分', '修Bug']
      break
    case 'product manager':
      work = ['写代码', '写系分', '修Bug']
      break

    case 'boos':
      work = ['写代码', '写系分', '修Bug']
      break
  }
  return new NewUser(name, age, career, work)
}
