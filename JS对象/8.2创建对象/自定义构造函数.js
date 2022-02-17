// 2022年2月12日：小野前端 JavaScript深度指南

/**
 * 讲课思路：
 * 1. 构造函数创建实例对象，构造出来的实例的属性都是一致的。
 * 2. 因此，想要需要构造出来的实例根据参数来变化，引出对构造函数进行传参。
 * 3.
 */

// 用大写字母：
// this指向是谁？this指向的是对象本身，Teacher是构造函数，和对象是两码事

(function() {
  console.log(`普通构造函数实例化，所以实例的属性都一致：`)
  function Teacher() {
    this.name = '张三'
    this.sex = '男'
    this.course = 'JS'
    this.weight = 120
    this.smoke = function() {
      this.weight--
      console.log(`I am smoking：`)
    }
    this.eat = function() {
      this.weight++
      console.log('I am eating')
    }
  }
  // 只有通过new 构造函数，才能构造出一个对象的实例。
  var teacher = new Teacher()
  var teacher2 = new Teacher()

  teacher2.name = '李四'
  console.log(`teacher：`, teacher, teacher2)
}())

;(function() {
  console.log(`通过传参的方式对构造函数里面的属性进行赋值，但是配置属性这种在开发中虽然简洁
  但是不容易拓展：`)

  function Teacher(name, sex, course, weight) {
    this.name = name
    this.sex = sex
    this.course = course
    this.weight = weight
    this.smoke = function() {
      this.weight--
      console.log(`this.weight：`, this.weight)
    }
    this.eat = function() {
      this.weight++
      console.log(`this.weight：`, this.weight)
    }
  }
  var t1 = new Teacher('张三', 'man', 'JS', '120')
  var t2 = new Teacher('lisi', 'man', 'JS', '121')
  console.log(`t1, t2：`, t1, t2)
}())

;(function() {
  console.log(`使用配置的方式构造函数的 参数进行拓展，灵活性好，可读性高，拓展性好：`)

  function Teacher(options) {
    this.name = options.name
    this.sex = options.sex
    this.course = options.course
    this.weight = options.weight
    this.smoke = function() {
      this.weight--
      console.log(`this.weight：`, this.weight)
    }
    this.eat = function() {
      this.weight++
      console.log(`this.weight：`, this.weight)
    }
  }
  var t1 = new Teacher({
    name: '张三', sex: '男', course: 'JS', weight: '120'
  })
  var t2 = new Teacher({ name: '王五', sex: '男', course: 'HTML', weight: '120' })
  console.log(`t1, t2：`, t1, t2)
}())

;(function() {
  // 作业: 写一个构造函数，接收数字类型的参数，
// 参数数量不定，完成参数相加和相乘的功能
  function Compute() {
    const arr = [].slice.call(arguments)
    let total = 0

    this.add = function() {
      loop('add')
      console.log(`total：`, total)
    }
    this.mul = function() {
      loop('mul')
      console.log(`total：`, total)
    }

    function loop(method, res) {
      arr.forEach(item => {
        if (method === 'add') {
          total += item
        } else if (method === 'mul') {
          total *= item
        }
      })
    }
  }
  const compute = new Compute(1, 2, 3)
  compute.add()
  compute.mul()

  function Car(options) {
    this.brand = options.brand
    this.color = options.color
    this.displacement = options.displacement
    this.introduce = function() {
      console.log(`this.brand, this.color, this.displacement：`, this.brand, this.color, this.displacement)
    }
  }

  function Customer(options) {
    this.name = options.name
    this.age = options.age
    this.income = options.income
    this.selectCar = function() {
      // 这个写法有问题；最好还是通过options来传参
      // const car = new Car(options)
      const myCar = new Car(options.carOptions)
      // console.log(`car.introduce：`, )
      myCar.introduce()
    }
  }
  const xiaomi = new Customer({ name: '小蜜', age: 21, income: 20000,
    carOptions: { brand: '奔驰', color: 'black', displacement: '1.2T' }})
  xiaomi.selectCar()
}())
