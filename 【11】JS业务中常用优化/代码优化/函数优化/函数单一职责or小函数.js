// 小函数
function before(age, number) {
  if (age > 0 && age < 18) {
    console.log(`小孩子：`, age)
  }

  if (number.length() === 11) {
    console.log('符合手机号')
  }
}

function after(age, number) {
  if (isChild(age)) {
    console.log(`小孩子：`, age)
  }
  if (isPhoneNumber(number)) {
    console.log('符合手机号')
  }
}

function isChild(age) {
  return age > 0 && age < 18
}

function isPhoneNumber(number) {
  return number.length === 11
}
