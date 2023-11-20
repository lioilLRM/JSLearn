const customFields = [
  {
    'regexp': '',
    'label': '尺寸',
    'type': 'input',
    'isStockProperty': true,
    'required': false,
    'disabledSort': false,
    'field': 'bInventoryFile$extProperty1',
    'columnConfigSortIndex': 2,
    'columnConfigIsFixed': false,
    'name': '尺寸',
    'placeholder': '请输入尺寸',
    'searchConfigSortIndex': 2,
    'fieldType': 0,
    'fieldId': 'extProperty1'
  },
  {
    'regexp': 'positiveIntegerH_OR_empty',
    'label': '螺纹标准',
    'type': 'input',
    'isStockProperty': true,
    'required': false,
    'disabledSort': false,
    'field': 'bInventoryFile$extProperty2',
    'columnConfigSortIndex': 1,
    'columnConfigIsFixed': false,
    'name': '螺纹标准',
    'placeholder': '请输入螺纹标准',
    'searchConfigSortIndex': 3,
    'fieldType': 0,
    'fieldId': 'extProperty2'
  },
  {
    'regexp': '',
    'label': '沉头深度',
    'type': 'single-select',
    'isStockProperty': true,
    'required': false,
    'disabledSort': false,
    'field': 'bInventoryFile$extProperty3',
    'columnConfigSortIndex': 5,
    'columnConfigIsFixed': false,
    'name': '沉头深度',
    'options': [
      {
        'itemName': 'M3',
        'itemValue': 'M3'
      },
      {
        'itemName': 'M4',
        'itemValue': 'M4'
      },
      {
        'itemName': 'M5',
        'itemValue': 'M5'
      },
      {
        'itemName': 'M6',
        'itemValue': 'M6'
      },
      {
        'itemName': 'M8',
        'itemValue': 'M8'
      }
    ],
    'placeholder': '请选择沉头深度',
    'searchConfigSortIndex': 5,
    'fieldType': 0,
    'fieldId': 'extProperty3'
  },
  {
    'regexp': '',
    'label': '螺纹深',
    'type': 'single-select',
    'isStockProperty': true,
    'required': false,
    'disabledSort': false,
    'field': 'bInventoryFile$extProperty4',
    'columnConfigSortIndex': 6,
    'columnConfigIsFixed': false,
    'name': '螺纹深',
    'options': [
      {
        'itemName': 'L1',
        'itemValue': 'L1'
      },
      {
        'itemName': 'L2',
        'itemValue': 'L2'
      },
      {
        'itemName': 'L10',
        'itemValue': 'L10'
      },
      {
        'itemName': 'L20',
        'itemValue': 'L20'
      },
      {
        'itemName': 'L30',
        'itemValue': 'L30'
      }
    ],
    'placeholder': '请选择螺纹深',
    'searchConfigSortIndex': 1,
    'fieldType': 0,
    'fieldId': 'extProperty4'
  },
  {
    'regexp': '',
    'label': '产地',
    'type': 'input',
    'isStockProperty': true,
    'required': false,
    'disabledSort': false,
    'field': 'bInventoryFile$extProperty5',
    'columnConfigSortIndex': 7,
    'columnConfigIsFixed': false,
    'name': '产地',
    'placeholder': '请输入产地',
    'searchConfigSortIndex': 6,
    'fieldType': 0,
    'fieldId': 'extProperty5'
  }
]

const defaultSystemFields = [
  'bInventoryFileSmaterialNo',
  'bInventoryFileSname',
  'bInventoryFileSproperty',
  'bInventoryFilesstatus',
  'bInventoryFileSmodeTypes',
  'bInventoryFile$controlWarehouse',
  'bInventoryFile$matType'
]

let searchSortIndex = customFields.map(item => item.searchConfigSortIndex)
searchSortIndex = searchSortIndex.sort((a, b) => a - b)
console.log(`searchSortIndex:`, searchSortIndex)
searchSortIndex.forEach(sortIndex => {
  const customField = customFields.find(item => item.searchConfigSortIndex === sortIndex)
  if (customField) {
    defaultSystemFields.splice(sortIndex, 0, customField.field)
  }
})
console.log(defaultSystemFields)

