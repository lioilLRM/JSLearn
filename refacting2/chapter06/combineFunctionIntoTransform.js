
function base(aReading) {
  console.log('aReading')
}
function taxableCharge(aReading) {
  console.log('aReading')
}



const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

// 客户端一
// const aReading = acquireReading()
const rawReading = acquireReading();
const aReading = enrichReading(rawReading)

// const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity
const baseCharge = aReading.baseCharge

// 客户端二
// const aReading = acquireReading();
const rawReading = acquireReading();
const aReading = enrichReading(rawReading)

// const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
// const base = aReading.baseCharge
// const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
const taxableCharge = aReading.taxableCharge


// const aReading = acquireReading();
const rawReading = acquireReading();
const aReading = enrichReading(rawReading)
// const basicChargeAmount = calculateBaseCharge(aReading);
const basicChargeAmount = aReading.baseCharge
function calculateBaseCharge(aReading) {
return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function acquireReading() {
  const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }
  return reading
}

function enrichReading(original) {
  const result = _.cloneDeep(original)
  result.baseCharge = calculateBaseCharge(result)
  result.taxableCharge =  Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result
}