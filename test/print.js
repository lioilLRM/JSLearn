// 物料标签
function temp1(config) {
  const printData = [
    '! 0 200 200 696 1',
    '!U1 PAGE-WIDTH 551',
    'LEFT',
    'SETBOLD 2',
    'SETMAG 2 2',
    'TEXT 4 0 152 10  物料标签',
    'SETMAG 1 1',
    'BARCODE QR 154 100 M 2 U 11',
    'MA,{{url}}',
    'ENDQR',
    'SETBOLD 0',
    'TEXT 4 0 110 350  {{name}}',
    'TEXT 7 0 0 420  物料编码：{{materialno}}',
    'TEXT 7 0 0 460  物料名称：{{materialname}}',
    'TEXT 7 0 0 500  物料规格：{{materialspec}}',
    'TEXT 7 0 0 540  产品图号：{{tuhao}}',
    'TEXT 7 0 0 580  操作人员：{{person}}',
    'TEXT 7 0 0 620  操作时间：{{time}}',
    'FORM'

  ]
  if (config.batchProperyInsertBefore) {
    insertPropertyToPrintLabel(printData, config)
  }
  // console.log(`printData:`, printData)

  // return printData.join('\r\n')
}
function insertPropertyToPrintLabel(printData, config) {
  let copyPrintData = JSON.parse(JSON.stringify(printData))
  const insertIndex = copyPrintData.findIndex(print => print.indexOf(config.batchProperyInsertBefore) > -1)

  const printLabelRowHeight = 40
  if (insertIndex > -1) {
    const insertBeforeItem = copyPrintData[insertIndex - 1]
    console.log(`insertBeforeItem:`, insertBeforeItem.split(' ')[4])
    const insertBeforeRowHeight = insertBeforeItem.split(' ')[4]

    const InsertBatchPropertyPrintList = []
    if (config.printBatchPropertyRows && config.printBatchPropertyRows.length) {
      config.printBatchPropertyRows.forEach((row, index) => {
        const newRowHeight = Number(insertBeforeRowHeight) + (printLabelRowHeight * (index + 1))
        const newRow = `TEXT 7 0 0 ${newRowHeight}  ${row.label}：{{${row.fieldId}}}`
        InsertBatchPropertyPrintList.push(newRow)
      })
    }
    console.log(`InsertBatchPropertyPrintList:`, InsertBatchPropertyPrintList)

    let indexCount = 0
    copyPrintData = copyPrintData.map((printItem, index) => {
      if (index >= insertIndex && printItem.includes('：')) {
        const newRowHeight = Number(insertBeforeRowHeight) + (config.printBatchPropertyRows.length * printLabelRowHeight) + (printLabelRowHeight * (indexCount + 1))
        const newPrintItem = printItem.split(' ')
        newPrintItem[4] = String(newRowHeight)
        printItem = newPrintItem.join(' ')
        console.log(`newRowHeight:`, printItem)
        indexCount++
      }
      return printItem
    })
    copyPrintData.splice(insertIndex, 0, ...InsertBatchPropertyPrintList)
    console.log(`copyPrintData:`, copyPrintData)
  }
  console.log(`copyPrintData:`, copyPrintData)
}
const config = {
  batchProperyInsertBefore: '操作人员',
  printBatchPropertyRows: [
    {
      'label': '厚度（mm）',
      'value': '12',
      'fieldId': 'batchProperty1',
      'type': 'number',
      'placeholder': '请输入厚度（mm）',
      'isRequired': false
    },
    {
      'label': '尺寸规格',
      'value': '中号',
      'fieldId': 'batchProperty2',
      'type': 'picker',
      'placeholder': '请选择尺寸规格',
      'isRequired': false,
      'key': 2,
      'optionList': [
        '小号',
        '大号',
        '中号',
        '超大大大大大号水水水水水顶顶顶顶123顶顶顶顶顶顶顶顶23232',
        '超大号'
      ]
    }
  ]
}
temp1(config)
