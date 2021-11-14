const batchPropertyList = [
  {
    'label': '厚度（mm）',
    'value': '350',
    'fieldId': 'batchProperty1',
    'type': 'number',
    'placeholder': '请输入厚度（mm）'
  },
  {
    'label': '厚度（mm）',
    'value': '330',
    'fieldId': 'batchProperty1',
    'type': 'number',
    'placeholder': '请输入厚度（mm）'
  },
  {
    'label': '尺寸规格',
    'value': '超小号',
    'fieldId': 'batchProperty2',
    'type': 'picker',
    'placeholder': '请选择尺寸规格',
    'key': 0,
    'optionList': [
      '超小号',
      '小号',
      '中号',
      '大号',
      '超大号'
    ]
  },
  {
    'label': '尺寸规格',
    'value': '小号',
    'fieldId': 'batchProperty2',
    'type': 'picker',
    'placeholder': '请选择尺寸规格',
    'key': 1,
    'optionList': [
      '超小号',
      '小号',
      '中号',
      '大号',
      '超大号'
    ]
  },
  {
    'label': '执行标准',
    'value': 'GB_20014',
    'fieldId': 'batchProperty4',
    'type': 'text',
    'placeholder': '请输入执行标准'
  },
  {
    'label': '执行标准',
    'value': 'GB_17701',
    'fieldId': 'batchProperty4',
    'type': 'text',
    'placeholder': '请输入执行标准'
  },
  {
    'label': '质量等级',
    'value': '特等级',
    'fieldId': 'batchProperty5',
    'type': 'picker',
    'placeholder': '请选择质量等级',
    'key': 0,
    'optionList': [
      '特等级',
      '一等级',
      '二等级',
      '三等级',
      '废品（这是一个比较长得选择内容DDD斤斤计较急急急急急急123计算机）'
    ]
  },
  {
    'label': '质量等级',
    'value': '三等级',
    'fieldId': 'batchProperty5',
    'type': 'picker',
    'placeholder': '请选择质量等级',
    'key': 3,
    'optionList': [
      '特等级',
      '一等级',
      '二等级',
      '三等级',
      '废品（这是一个比较长得选择内容DDD斤斤计较急急急急急急123计算机）'
    ]
  }
]

function getNotRepeatBatchProperty(batchPropertyList) {
  const labelList = batchPropertyList.map(item => item.label)
  const onlyLabelList = Array.from(new Set(labelList))
  const result = []
  for (let i = 0; i < onlyLabelList.length; i++) {
    const label = onlyLabelList[i]
    const row = { label, value: '' }
    for (let j = 0; j < batchPropertyList.length; j++) {
      const batchItem = batchPropertyList[j]
      // console.log(`label, batchItem.label`, label, batchItem.label)

      if (label === batchItem.label) {
        row.value += batchItem.value + ';'
        result.push(row)
      }
    }
  }
  // console.log(`result`, result)
  const onlyOneLabelResult = Array.from(new Set(result))
  // console.log(`onlyOneLabelResult`, onlyOneLabelResult)
  return onlyOneLabelResult
}

function getNotRepeatBatchPropertyV2(batchPropertyList) {
  const labelList = batchPropertyList.map(item => item.label)
  const onlyLabelList = Array.from(new Set(labelList))
  const result = batchPropertyList.reduce((pre, cur, index) => {
    console.log(`cur.label`, cur.label, onlyLabelList[index])

    if (onlyLabelList[index] === cur.label) {
      pre.push({ label: cur.label, value: cur.value })
    }
    return pre
  }, [])
  console.log(`result`, result)
}

getNotRepeatBatchPropertyV2(batchPropertyList)
