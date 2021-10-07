function priceOrder(product, quantity, shippingMethod) {
  // const basePrice = product.basePrice * quantity
  // const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
  // const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase
  // const shippingCost = quantity * shippingPerCase
  // const price = basePrice - discount + shippingCost
  // const priceData = { basePrice, quantity, discount }
  const priceData = calculatePricingData(product, quantity)
  // const price = applyShipping(priceData, shippingMethod)

  // return price
  return applyShipping(priceData, shippingMethod)
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase
  const shippingCost = priceData.quantity * shippingPerCase
  const price = priceData.basePrice - priceData.discount + shippingCost
  return price
}

function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
  return { basePrice, quantity, discount }
}
