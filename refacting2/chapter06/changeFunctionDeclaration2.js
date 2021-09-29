
import { assert } from 'chai'

export { Book }
// 添加参数
class Book {
  constructor() {
    this._reservations = []
  }
  addReservation(customer) {
    // this._reservations.push(customer)
    this.zz_addReservation(customer, false)
  }
  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false)
    this._reservations.push(customer)
  }
}
