const systemFields = [
  {
    'field': 'dataTitle',
    'noSentToServer': true,
    'label': '数据标题',
    'hideCondition': 'onlyList',
    'type': 'dataTitle',
    'fieldId': 'dataTitle'
  },
  {
    'icon': 'card',
    'name': '卡片分组',
    'label': '基础信息',
    'type': 'card',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'fieldId': 'input_1592637908122'
  },
  {
    'moduleCode': 'custom_form_inventoryfile',
    'defaultValue': '',
    'rules': [
      {
        'required': true,
        'message': '物料编码必填',
        'trigger': 'blur'
      }
    ],
    'readOnly': false,
    'label': '物料编码',
    'forbid': false,
    'type': 'input',
    'required': true,
    'hover': false,
    'field': 'bInventoryFile$materialNo',
    'disabledCondition': 'isEdit',
    'name': '物料编码',
    'tip': '（系统字段-物料编码）',
    'isJudgeRepeat': true,
    'placeholder': '请输入物料编码',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'norepeat': false,
    'fieldType': 0,
    'fieldId': 'materialNo'
  },
  {
    'defaultValue': '',
    'rules': [
      {
        'required': true,
        'message': '物料名称必填',
        'trigger': 'blur'
      }
    ],
    'readOnly': false,
    'label': '物料名称',
    'forbid': false,
    'type': 'input',
    'required': true,
    'hover': false,
    'field': 'bInventoryFile$name',
    'name': '物料名称',
    'tip': '（系统字段-物料名称）',
    'placeholder': '请输入物料名称',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'norepeat': false,
    'fieldType': 0,
    'fieldId': 'name'
  },
  {
    'defaultValue': '',
    'rules': [
      {
        'required': true,
        'message': '物料规格必填',
        'trigger': 'blur'
      }
    ],
    'readOnly': false,
    'label': '物料规格',
    'forbid': false,
    'type': 'input',
    'required': true,
    'hover': false,
    'field': 'bInventoryFile$specs',
    'name': '物料规格',
    'tip': '（系统字段-物料规格）',
    'placeholder': '请输入物料规格',
    'hideCondition': true,
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'norepeat': false,
    'fieldType': 0,
    'fieldId': 'specs'
  },
  {
    'label': '尺寸',
    'name': '尺寸',
    'fieldId': 'extProperty1',
    'field': 'bInventoryFile$extProperty1',
    'type': 'input',
    'placeholder': '请输入尺寸',
    'required': false,
    'fieldType': 0,
    'regexp': '',
    'isStockProperty': true,
    'disabledSort': false
  },
  {
    'label': '螺纹标准',
    'name': '螺纹标准',
    'fieldId': 'extProperty2',
    'field': 'bInventoryFile$extProperty2',
    'type': 'input',
    'placeholder': '请输入螺纹标准',
    'required': false,
    'fieldType': 0,
    'regexp': 'positiveIntegerH_OR_empty',
    'isStockProperty': true,
    'disabledSort': false
  },
  {
    'label': '沉头深度',
    'name': '沉头深度',
    'fieldId': 'extProperty3',
    'field': 'bInventoryFile$extProperty3',
    'type': 'single-select',
    'placeholder': '请选择沉头深度',
    'required': false,
    'fieldType': 0,
    'regexp': '',
    'isStockProperty': true,
    'disabledSort': false,
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
    ]
  },
  {
    'label': '螺纹深',
    'name': '螺纹深',
    'fieldId': 'extProperty4',
    'field': 'bInventoryFile$extProperty4',
    'type': 'single-select',
    'placeholder': '请选择螺纹深',
    'required': false,
    'fieldType': 0,
    'regexp': '',
    'isStockProperty': true,
    'disabledSort': false,
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
    ]
  },
  {
    'label': '产地',
    'name': '产地',
    'fieldId': 'extProperty5',
    'field': 'bInventoryFile$extProperty5',
    'type': 'input',
    'placeholder': '请输入产地',
    'required': false,
    'fieldType': 0,
    'regexp': '',
    'isStockProperty': true,
    'disabledSort': false
  },
  {
    'rules': [
      {
        'required': true,
        'message': '物料类别必填',
        'trigger': 'blur'
      }
    ],
    'readOnly': true,
    'label': '物料类别',
    'forbid': false,
    'type': 'tree',
    'required': true,
    'props': {
      'label': 'typeName'
    },
    'hover': false,
    'field': 'bInventoryFile$modeTypes',
    'name': '物料类别',
    'tip': '（系统字段-物料类别）',
    'placeholder': '请选择',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'norepeat': false,
    'fieldType': 0,
    'table': 'materiel',
    'fieldId': 'modeTypes'
  },
  {
    'defaultValue': '',
    'rules': [
      {
        'required': true,
        'message': '物料属性必填',
        'trigger': 'blur'
      }
    ],
    'readOnly': false,
    'label': '物料属性',
    'forbid': false,
    'type': 'checkbox',
    'required': true,
    'eventname': 'changeMrpType',
    'hover': false,
    'field': 'bInventoryFile$property',
    'name': '物料属性',
    'options': [
      {
        'itemName': '自制件',
        'itemValue': '1'
      },
      {
        'itemName': '外购件',
        'itemValue': '2'
      },
      {
        'itemName': '外协件',
        'itemValue': '3'
      }
    ],
    'tip': '（系统字段-物料属性）',
    'placeholder': '请选择物料属性',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'norepeat': false,
    'fieldType': 0,
    'fieldId': 'property'
  },
  {
    'rules': [
      {
        'required': true,
        'message': '主单位必填',
        'trigger': 'blur'
      }
    ],
    'readOnly': true,
    'label': '主单位',
    'forbid': false,
    'type': 'unit-dialog',
    'required': true,
    'field': 'bInventoryFile$mainUnit',
    'disabledCondition': 'isEdit',
    'name': '主单位',
    'tip': '（系统字段-主单位）',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'norepeat': false,
    'fieldType': 0,
    'fieldId': 'mainUnit'
  },
  {
    'rules': [
      {
        'required': true,
        'message': '存货仓库必填',
        'trigger': 'blur'
      }
    ],
    'label': '存货仓库',
    'type': 'tree',
    'params': {
      'current': 1,
      'size': 500,
      'systemFields': [
        {
          'field': 'modeCode',
          'method': 'like',
          'type': 'text',
          'value': [
            'storehouse_class'
          ]
        },
        {
          'field': 'addType',
          'method': 'like',
          'type': 'text',
          'value': [
            '0'
          ]
        }
      ],
      'sort': [
        {
          'mode': 'desc',
          'field': 'createTime'
        }
      ]
    },
    'required': true,
    'props': {
      'label': 'typeName'
    },
    'field': 'bInventoryFile$controlWarehouse',
    'name': '存货仓库',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'table': 'warehouse',
    'pprops': {
      'itemName': 'typeName',
      'itemValue': 'id'
    },
    'fieldId': 'controlWarehouse'
  },
  {
    'field': 'bInventoryFile$matType',
    'defaultValue': '1',
    'name': '发料方式',
    'options': [
      {
        'itemName': '领用',
        'itemValue': '1'
      },
      {
        'itemName': '倒冲',
        'itemValue': '3'
      }
    ],
    'rules': [
      {
        'required': true,
        'message': '发料方式必填',
        'trigger': 'blur'
      }
    ],
    'label': '发料方式',
    'type': 'select',
    'noListed': true,
    'required': true,
    'fieldId': 'matType'
  },
  {
    'field': 'bInventoryFile$status',
    'defaultValue': '0',
    'name': '有效状态',
    'options': [
      {
        'itemName': '生效',
        'itemValue': '0'
      },
      {
        'itemName': '失效',
        'itemValue': '1'
      }
    ],
    'rules': [
      {
        'required': true,
        'message': '有效状态必填',
        'trigger': 'blur'
      }
    ],
    'label': '有效状态',
    'type': 'select',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'fieldType': 0,
    'required': true,
    'fieldId': 'status'
  },
  {
    'icon': 'card',
    'name': '卡片分组',
    'label': '高级设置',
    'type': 'card',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'fieldId': 'input_1592637908123'
  },
  {
    'field': 'bInventoryFile$batch',
    'defaultValue': true,
    'validates': [
      'required'
    ],
    'icon': 'fxk',
    'name': '批次管理',
    'label': '批次管理',
    'type': 'switch',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'fieldId': 'batch',
    'validate': ''
  },
  {
    'fieldName': 'batchPropertySet',
    'label': '批次属性',
    'forbid': false,
    'type': 'batchProperty-multi-select',
    'params': {
      'type': 0
    },
    'props': {
      'children': 'roles',
      'label': 'propertyName'
    },
    'hover': false,
    'titleName': 'groupName',
    'field': 'bInventoryFile$batchPropertySet',
    'name': '批次属性设置',
    'placeholder': '请选择批次属性',
    'hideCondition': '{"type":"and","conditions":[{"relation":"==","field":"isSysOpenBatchProperty","dvalue":"true"},{"relation":"==","field":"batch","dvalue":"true"}]}',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'table': 'batchProperty',
    'fieldId': 'batchPropertySet'
  },
  {
    'field': 'bInventoryFile$isOpenFurnaceNumber',
    'defaultValue': false,
    'validates': [
      'required'
    ],
    'icon': 'fxk',
    'name': '炉号管理',
    'label': '炉号管理',
    'hideCondition': '{"type":"and","conditions":[{"relation":"==","field":"isConfigFunaceNumber","dvalue":"true"},{"relation":"==","field":"batch","dvalue":"true"},{"relation":"indexOf","field":"property","dvalue":"2"}]}',
    'type': 'furnace-number-switch',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'fieldType': 0,
    'fieldId': 'isOpenFurnaceNumber',
    'validate': ''
  },
  {
    'regexp': 'positiveIntegerH_OR_empty',
    'field': 'bInventoryFile$productBulk',
    'name': '生产批量',
    'inputtype': 'number',
    'label': '生产批量',
    'placeholder': '请输入生产批量',
    'hideCondition': '{"type":"and","conditions":[{"relation":"indexOf","field":"property","dvalue":"1"}]}',
    'type': 'number',
    'fieldType': 0,
    'fieldId': 'productBulk'
  },
  {
    'field': 'bInventoryFile$productDepId',
    'name': '生产部门',
    'label': '生产部门',
    'placeholder': '请输入生产部门',
    'hideCondition': '{"type":"and","conditions":[{"relation":"indexOf","field":"property","dvalue":"1"}]}',
    'type': 'tree',
    'fieldType': 0,
    'table': 'department',
    'fieldId': 'productDepId'
  },
  {
    'labelTip': '允许超出订单的入库量',
    'overageStoreTypeField': 'bInventoryFile$overageStoreType',
    'field': 'bInventoryFile$overageStore',
    'overageStoreTypeFieldId': 'overageStoreType',
    'name': '超额入库',
    'label': '超额入库',
    'placeholder': '请输入超额入库',
    'type': 'overageStore',
    'fieldType': 0,
    'fieldId': 'overageStore'
  },
  {
    'labelTip': '出入库业务严格按照先进先出逻辑进行强管控。谨慎开启。',
    'field': 'bInventoryFile$fifo',
    'defaultValue': false,
    'icon': 'fxk',
    'name': '先进先出',
    'label': '先进先出',
    'hideCondition': '{"relation":"==","field":"batch","dvalue":"true"}',
    'type': 'switch',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'fieldId': 'fifo'
  },
  {
    'field': 'bInventoryFile$stockWarn',
    'validates': [
      'required'
    ],
    'icon': 'fxk',
    'name': '库存预警',
    'label': '库存预警',
    'hideCondition': '',
    'type': 'switch',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'fieldId': 'stockWarn',
    'validate': ''
  },
  {
    'inputtype': 'number',
    'label': '库存下限',
    'hideCondition': '{"relation":"indexOf","field":"stockWarn","dvalue":"trueor1"}',
    'type': 'input',
    'noListed': true,
    'fieldType': 0,
    'fieldId': 'stockLimit'
  },
  {
    'inputtype': 'number',
    'label': '库存上限',
    'hideCondition': '{"relation":"indexOf","field":"stockWarn","dvalue":"trueor1"}',
    'type': 'input',
    'noListed': true,
    'fieldType': 0,
    'fieldId': 'stockTop'
  },
  {
    'field': 'bInventoryFile$inCheck',
    'defaultValue': false,
    'name': '入厂检验',
    'label': '入厂检验',
    'hideCondition': '{"type":"and","conditions":[{"relation":"indexOf","field":"property","dvalue":"2or3"}]}',
    'type': 'switch',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'fieldType': 0,
    'fieldId': 'inCheck'
  },
  {
    'field': 'bInventoryFile$outCheck',
    'defaultValue': false,
    'name': '出厂检验',
    'label': '出厂检验',
    'type': 'switch',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'fieldId': 'outCheck'
  },
  {
    'field': 'bInventoryFile$validity',
    'name': '有效期',
    'label': '有效期',
    'hideCondition': '{"relation":"==","field":"batch","dvalue":"true"}',
    'type': 'validity',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'fieldId': 'validity'
  },
  {
    'mrpPrefix': '天',
    'field': 'bInventoryFile$leadTime',
    'name': '提前期',
    'inputtype': 'number',
    'label': '提前期',
    'type': 'number-auto',
    'fieldType': 0,
    'required': false,
    'fieldId': 'leadTime'
  },
  {
    'field': 'bInventoryFile$subUnit',
    'isSwitch': true,
    'name': '辅单位',
    'label': '辅单位',
    'type': 'sub-unit-new',
    'fieldType': 0,
    'fieldId': 'subUnit'
  },
  {
    'hide': true,
    'field': 'bInventoryFile$conversionRate',
    'name': '换算率',
    'label': '换算率',
    'type': 'conversion-rate',
    'fieldType': 0,
    'fieldId': 'conversionRate'
  },
  {
    'noAuto': true,
    'replaceIds': true,
    'validates': [
      'required',
      'norepeat'
    ],
    'label': '替代料',
    'type': 'multi-relation',
    'params': {
      'status': '0'
    },
    'required': false,
    'eventname': 'processroute_produceBom',
    'field': 'bInventoryFile$replaceIds',
    'name': '替代料',
    'hideCondition': '',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'fieldType': 0,
    'table': 'custom_form_inventoryfile',
    'fieldId': 'replaceIds',
    'validate': ''
  },
  {
    'field': 'bInventoryFile$annexIds',
    'name': '附件',
    'label': '附件',
    'placeholder': '请输入',
    'type': 'multi-relation',
    'fields': [
      {
        'type': 'input',
        'title': '标题',
        'value': 'label'
      }
    ],
    'noListed': true,
    'fieldType': 0,
    'table': 'custom_form_workfiles',
    'required': false,
    'fieldId': 'annexIds'
  }

]
const customFields = systemFields.filter((item) => {
  const reg = /^extProperty\d$/
  if (reg.test(item.fieldId)) return true
})

const defaultSystemFields = systemFields.filter((item) => {
  const reg = /^extProperty\d$/
  if (!reg.test(item.fieldId)) return true
})

console.log(customFields)
console.log(defaultSystemFields)
