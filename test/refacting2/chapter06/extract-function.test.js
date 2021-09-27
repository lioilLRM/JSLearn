import { expect } from 'chai'
import { afterPrintOwing } from '../../../refacting2/chapter06/example.js'

const Clock = {
  today: {
    getFullYear() { return 2020 },
    getMonth() { return 1 },
    getDate() { return 1 }
  }
}

describe('chapter06: demo 01 extract-function', function() {
  it('提取函数', function() {
    const invoice = {
      orders: [{ amount: 1 }],
      customer: '神州'
    }
    afterPrintOwing(invoice, Clock)
    // console.log('测试');
  })
})
