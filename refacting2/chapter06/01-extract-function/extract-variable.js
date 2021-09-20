// 重构手法：提炼变量，提取变量； demo在《重构2》的180页

function getPrice(order) {
  return order.quantity * order.itemPrice -
　Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
　Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

function afterGetPrice(order) {
  const basePrice = order.quantity * order.itemPrice
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
  const shipping = Math.min(basePrice * 0.1, 100)
  return basePrice - quantityDiscount + shipping
}

class Order {
  constructor(aRecord) {
    this._data = aRecord
  }
  get quantity() { return this._data.quantity }
  get itemPrice() { return this._data.itemPrice }

  // 将getPrice里面的表达式提取成方法
  get basePrice() { return this.quantity * this.itemPrice }
  get quantityDiscount() { return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 }
  get shipping() { return Math.min(this.quantity * this.itemPrice * 0.1, 100) }

  // 提取变量重构后
  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping
  }

  // 重构前
  getPrice() {
    return this.quantity * this.itemPrice -
　　　Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
　　　Math.min(this.quantity * this.itemPrice * 0.1, 100)
  }
}
