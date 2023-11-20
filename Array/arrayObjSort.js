// 数组对象排序

const arrayObj = [
  {
    dateType: 3,
    prefix: 'XSDD',
    incNumLength: 4,
    dateDesc: 'yyMMdd',
    type: 11,
    isEnable: 0,
    typeName: '销售订单编码',
    sort: 3
  },
  {
    dateType: 2,
    prefix: 'CGDD',
    incNumLength: 4,
    dateDesc: 'yyMM',
    type: 12,
    isEnable: 0,
    typeName: '采购订单编码',
    sort: 0
  },
  {
    dateType: 3,
    prefix: 'WWGD',
    incNumLength: 4,
    dateDesc: 'yyMMdd',
    type: 13,
    isEnable: 0,
    typeName: '委外订单编码',
    sort: 1
  },
  {
    dateType: 3,
    prefix: 'DXY',
    incNumLength: 4,
    dateDesc: 'yyMMdd',
    type: 14,
    isEnable: 0,
    typeName: '发货任务单号',
    sort: 7
  },
  {
    dateType: 2,
    prefix: 'dxy',
    incNumLength: 4,
    dateDesc: 'yyMM',
    type: 15,
    isEnable: 1,
    typeName: '采购到货批号',
    sort: 4
  },
  {
    dateType: 2,
    prefix: 'DXYb',
    incNumLength: 4,
    dateDesc: 'yyMM',
    type: 16,
    isEnable: 0,
    typeName: '委外到货批号',
    sort: 5
  },
  {
    dateType: 3,
    prefix: 'SCDD',
    incNumLength: 4,
    dateDesc: 'yyMMdd',
    type: 17,
    isEnable: 0,
    typeName: '生产订单编码',
    sort: 2
  },
  {
    dateType: 3,
    prefix: 'SCPC',
    incNumLength: 3,
    dateDesc: 'yyMMdd',
    type: 18,
    isEnable: 0,
    typeName: '生产批次编码',
    sort: 6
  }
]

function compare(p) {
  // 这是比较函数
  return function(m, n) {
    var a = m[p]
    var b = n[p]
    return a - b // 升序
  }
}
// js 数组根据特定规则排序
const sortRows = [
  '物料编码',
  '物料名称',
  '物料规格',
  '物料图号',
  '补充描述',
  '物料属性',
  '物料类别',
  '主单位',
  '保留小数位',
  '取整规则',
  '存货仓库',
  '批次管理',
  '生成备料任务'
]
function sortRowsByName(rows) {
  const sortNameRows = [
    '物料编码',
    '物料名称',
    '物料规格',
    '物料图号',
    '补充描述',
    '物料属性',
    '物料类别',
    '主单位',
    '保留小数位',
    '取整规则',
    '存货仓库',
    '批次管理',
    '生成备料任务'
  ]
  rows = rows.filter((row) => sortNameRows.includes(row.label))
  console.log('filter rows: ', rows)
  rows.sort((a, b) => {
    return sortNameRows.indexOf(a.label) - sortNameRows.indexOf(b.label)
  })
  return rows
}

const rows = [
  {
    label: '物料编码',
    value: '30A0201020B1'
  },
  {
    label: '物料名称',
    value: '横球销毛坯'
  },
  {
    label: '物料规格',
    value: 'MQB B-SUV'
  },
  {
    label: '电子标签',
    value: 'IF2021060100045'
  },
  {
    label: '物料属性',
    value: '自制件'
  },
  {
    label: '物料类别',
    value: '连接杆球销'
  },
  {
    label: '主单位',
    value: '支'
  },
  {
    label: '保留小数位',
    value: '0'
  },
  {
    label: '取整规则',
    value: '去尾法'
  },
  {
    label: '存货仓库',
    value: '毛坯库-沙门厂区'
  },
  {
    label: '有效状态',
    value: '生效'
  },
  {
    label: '批次管理',
    value: '是'
  },
  {
    label: '序列号管理',
    value: '是'
  },
  {
    label: '生成备料任务',
    value: '是'
  },
  {
    label: '单重管理',
    value: '否'
  },
  {
    label: '标准值',
    value: 0
  },
  {
    label: '库存预警',
    value: '否'
  },
  {
    label: '出厂检验',
    value: '否'
  }
]

const sortList = [
  {
    'hanghao': 1,
    'itemSeq': '1',
    'idNames': '888007 | 铝扣板007'
  },
  {
    'hanghao': 3,
    'itemSeq': '3',
    'idNames': '888009 | 铝扣板009'
  },
  {
    'hanghao': 2,
    'itemSeq': '2',
    'idNames': '888010 | 铝扣板010'
  }
]
console.log('🚀 ~ file: arrayObjSort.js:226 ~ sortList:', sortList)
const sortRes = sortList.sort((a, b) => {
  console.log('🚀 ~ file: arrayObjSort.js:228 ~ sortList:', sortList)
  return a.itemSeq - b.itemSeq
})
console.log(`sortRes:`, sortRes)
