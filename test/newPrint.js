// 物料标签
function temp1(config) {
  let printData = [
    'SIZE 75 mm, 90 mm',
    'GAP 3 mm, 0 mm',
    'CLS',
    'SPEED 4',
    'DENSITY 7',
    'DIRECTION 0',
    'TEXT 210,36,"TSS24.BF2",0,2,2,"物料标签"',
    'TEXT 140,360,"TSS24.BF2",0,2,2,"{{url}}"',
    'TEXT 36,420,"TSS24.BF2",0,1.1,1.1,"物料编码：{{materialno}}"',
    'TEXT 36,460,"TSS24.BF2",0,1.2,1.2,"物料名称：{{materialname}}"',
    'TEXT 36,500,"TSS24.BF2",0,1.3,1.3,"物料规格：{{materialspec}}"',
    'TEXT 36,540,"TSS24.BF2",0,1.4,1.4,"图    号：{{tuhao}}"',
    'TEXT 36,580,"TSS24.BF2",0,1.4,1.4,"批次信息：{{batch}}"',
    'TEXT 36,620,"TSS24.BF2",0,1.5,1.5,"操作人员：{{person}}"',
    'TEXT 36,660,"TSS24.BF2",0,1.5,1.5,"操作时间：{{time}}"',
    'QRCODE 170,100,H,11,A,0,1,1,"{{url}}"',
    'PRINT 1,1 \r\n'
  ]
  if (config.batchProperyInsertBefore) {
    const newPrintData = insertPropertyToPrintLabel(printData, config)
    printData = newPrintData
  }
  return printData.join('\r\n')
}

function insertPropertyToPrintLabel(printData, config) {
  let copyPrintData = JSON.parse(JSON.stringify(printData))
  const insertIndex = copyPrintData.findIndex(print => print.indexOf(config.batchProperyInsertBefore) > -1)

  const printLabelRowHeight = 40
  if (insertIndex > -1) {
    const insertBeforeItem = copyPrintData[insertIndex - 1]
    const regMatchHeight = /\d{3}/
    const insertBeforeRowHeight = insertBeforeItem.match(regMatchHeight)[0]
    console.log(`insertBeforeRowHeight:`, insertBeforeRowHeight)

    const InsertBatchPropertyPrintList = []
    if (config.printBatchPropertyRows && config.printBatchPropertyRows.length) {
      config.printBatchPropertyRows.forEach((row, index) => {
        const newRowHeight = Number(insertBeforeRowHeight) + (printLabelRowHeight * (index + 1))
        // const newRow = `TEXT 7 0 0 ${newRowHeight}  ${row.label}：{{${row.fieldId}}}`
        const newRow = `TEXT 36,${newRowHeight},"TSS24.BF2",0,1.4,1.4,"${row.label}：{{${row.fieldId}}}"`
        InsertBatchPropertyPrintList.push(newRow)
      })
    }

    let indexCount = 0
    copyPrintData = copyPrintData.map((printItem, index) => {
      if (index >= insertIndex && printItem.includes('：')) {
        const newRowHeight = Number(insertBeforeRowHeight) + (config.printBatchPropertyRows.length * printLabelRowHeight) + (printLabelRowHeight * (indexCount + 1))

        console.log(`newRowHeight:`, newRowHeight)

        const regMatchHeight = /\d{3}/
        const newPrintItem = printItem.replace(regMatchHeight, newRowHeight)
        printItem = newPrintItem
        indexCount++
      }
      return printItem
    })
    copyPrintData.splice(insertIndex, 0, ...InsertBatchPropertyPrintList)
  }
  console.log(`copyPrintData:`, copyPrintData)

  return copyPrintData
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
