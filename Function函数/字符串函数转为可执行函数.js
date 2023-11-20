// 字符串函数转为可执行函数

function say(value) {
  console.log('这是一个函数', value)
}

const strSay = say.toString()

// console.log(strSay)

const excuteSay = new Function(`return  ${strSay}`)
excuteSay()('参数')
// console.log(excuteSay());

