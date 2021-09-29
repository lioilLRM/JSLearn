const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

class Reading{
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity
    this._month = data.month
    this._year = data.year
  }

  get customer() { return this._customer }
  get quantity() { return this._quantity }
  get month() { return this._month }
  get year() { return this._year }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;

  }
  get taxableCharge() {
    return  Math.max(0, this.baseCharge - taxThreshold(this.year));
  }

}
// 客户端1
// const aReading = acquireReading()
const rawReading = acquireReading();
cosnt aReading = new Reading(rawReading)

// const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity
const baseCharge = aReading.baseCharge

// 客户端2
// const aReading = acquireReading();
const rawReading  = acquireReading()
cosnt aReading = new Reading(rawReading)

// const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
// const base = aReading.baseCharge
// const taxableCharge =taxableChargeFn(aReading)
const taxableCharge = aReading.taxableCharge



// 客户端3
const rawReading = acquireReading();
// const basicChargeAmount = calculateBaseCharge(aReading);
cosnt aReading = new Reading(rawReading)
// const basicChargeAmount = aReading.baseCharge;

// function calculateBaseCharge(aReading) {
// return baseRate(aReading.month, aReading.year) * aReading.quantity;
// }

function taxableChargeFn(aReading) {
  return  Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}


