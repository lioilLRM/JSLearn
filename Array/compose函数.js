
// JS高阶编程技巧--COMPOSE函数
const addTenFn = x => x + 10
const mulTenFn = x => x * 10
const divTenFn = x => x / 10

// 输出多层函数嵌套的结果：这种方式的好处是减少了临时变量
const res = divTenFn(addTenFn(mulTenFn(addTenFn(6))))

console.log(`addTen：`, res)

// 也可以这么写
let computeRes = addTenFn(6)
computeRes = mulTenFn(computeRes)
computeRes = addTenFn(computeRes)
computeRes = divTenFn(computeRes)

console.log(`computeRes：`, computeRes)

// 想用一个函数解决这种问题，形如：
// compose(fn1, fn2, fn1, fn3)(6);

// compose 是什么？
// 函数调用的扁平化，即把层级嵌套的那种函数调用(一个函数的运行结果当作实参传给下一个函数的这种操作)扁平化

function compose(...fns) {
  console.log(`fns：`, fns)
  return function proxy(...args) {
    console.log(`args：`, args)
    const len = fns.length
    if (len === 0) return args[0]
    if (len === 1) return fns[0](...args)

    return fns.reduce((x, y, index) => {
      console.log(`index：`, index)

      if (typeof x === 'function') {
        console.log(`y.name, x.name：`, y.name, x.name)

        return y(x(...args))
      } else {
        console.log(`y.name：`, y.name)

        return y(x)
      }
      // return typeof x === 'function' ? y(x(...args)) : y(x)
    })
  }
}
// reduce 的默认值是什么来着？如果没有指定默认值的话？
// previousValue：上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，
// 其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。
const composeRes = compose(addTenFn, mulTenFn, addTenFn, divTenFn)(6)
const composeRes2 = compose()(6)
const composeRes3 = compose(addTenFn)(6)

console.log(`composeRes：`, composeRes, composeRes2, composeRes3)

// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，
// 这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

// rest参数代替 arguments 的例子
function sortNumbers() {
  return Array.from(arguments).sort()
}
const sortNumbersByRestArgs = (...numbers) => numbers.sort()
console.log(`sortNumbers(3,2,45,1)：`, sortNumbers(3, 2, 45, 1))
console.log(`sortNumbersByRestArgs(4,5,2,1)：`, sortNumbersByRestArgs(4, 5, 2, 1))
