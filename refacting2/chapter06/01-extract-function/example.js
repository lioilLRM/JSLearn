function beforePrintOwing(invoice) {
  let outstanding = 0
  console.log('***********************')
  console.log('**** Customer Owes ****')
  console.log('***********************')
  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount
  }
  // record due date
  const today = Clock.today
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
  // print details
  console.log(`name: ${invoice.customer}`)
  console.log(`amount: ${outstanding}`)
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
}

export function afterPrintOwing(invoice, Clock) {
  printBanner()
  const outstanding = calculateOutstanding(invoice)
  recordDueDate(Clock, invoice)
  printDetail(invoice, outstanding)
}

function calculateOutstanding(invoice) {
  let result = 0
  for (const o of invoice.orders) {
    result += o.amount
  }
  return result
}

function recordDueDate(Clock, invoice) {
  const today = Clock.today
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
}

function printDetail(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`)
  console.log(`amount: ${outstanding}`)
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
}

function printBanner() {
  console.log('***********************')
  console.log('**** Customer Owes ****')
  console.log('***********************')
}
