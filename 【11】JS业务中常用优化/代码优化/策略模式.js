const mouldCodeMapApi = new Map([
  ['out_stock_record', [downlowdOutLogPrintTemplate]],
  ['in_stock_record', [downlowdInStockLogPrintTemplate]]
])
const mouldCode = 'in_stock_record'
const reqApi = mouldCodeMapApi.get(mouldCode)
console.log(`reqApi：`, reqApi[0])
reqApi[0]()
function downlowdOutLogPrintTemplate() {
  console.log(`出库单：`)
}

function downlowdInStockLogPrintTemplate() {
  console.log(`入库单`)
}
