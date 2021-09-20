// 改变函数声明之把参数改为属性

function inNewEngland(aCustomer) {
// 先提炼变量
  // const stateCode = aCustomer.address.state
  // return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state)
  // 将提取的变量内联回去
  return xxNEWinNewEngland(aCustomer.address.state)
}

// 在提炼函数创建新的函数
function xxNEWinNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode)
}

const aNewEnglandCustomer = {
  address: {
    state: 'CT'
  }
}

const someCustomers = [aNewEnglandCustomer]

const newEnglandCustomers = someCustomers.filter(c => inNewEngland(c.address.state))
