//  6.4　内联变量（Inline Variable）

function basePrice(anOrder) {
  const basePrice = anOrder.basePrice
  return (basePrice * 100)
}

function afterBasePrice(anOrder) {
  return (anOrder.basePrice * 100)
}
