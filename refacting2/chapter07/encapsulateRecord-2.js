import { _ } from 'lodash'
let customerData = {
  '1920': {
    name: 'martin',
    id: '1920',
    usages: {
      '2016': {
        '1': 50,
        '2': 55
        // remaining months of the year
      },
      '2015': {
        '1': 70,
        '2': 63
        // remaining months of the year
      }
    }
  }
}
const customerID = '1920'
const year = '2016'
const month = '1'
const amount = 100
// 更新数据
// customerData[customerID].usages[year][month] = amount
getRawDataOfCustomers()[customerID].usages[year][month] = amount

// 读取数据
function compareUsage(customerID, laterYear, month) {
  // const later = customerData[customerID].usages[laterYear][month]
  // const earlier = customerData[customerID].usages[laterYear - 1][month]
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month]
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month]
  return {
    laterAmount: later, change: later - earlier
  }
}

// 变量封装
function getRawDataOfCustomers() { return customerData }
// function setRawDataOfCustomers(arg) { customerData = arg }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg) }
function getCustomerData() { return customerData }

class CustomerData {
  constructor(data) {
    this._data = data
  }

  get rawData() {
    return _.cloneDeep(this._data)
  }
}

