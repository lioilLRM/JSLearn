const arrobjs = [
  {
    field: 'bProductionTask$status',
    name: '任务状态',
    options: [
      {
        itemName: '未开始',
        itemValue: '0'
      },
      {
        itemName: '执行中',
        itemValue: '1'
      },
      {
        itemName: '已结束',
        itemValue: '3'
      }
    ],
    label: '任务状态',
    placeholder: '请输入',
    type: 'select',
    fieldId: 'status',
    selected: true
  },
  {
    field: 'bProductionTask$orderCode',
    name: '工单编码',
    label: '工单编码',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'orderCode',
    selected: true
  },
  {
    field: 'bProductionOrder$materialCode',
    name: '产品编码',
    label: '产品编码',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'materialCode',
    selected: true
  },
  {
    field: 'bProductionOrder$materialName',
    name: '产品名称',
    label: '产品名称',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'materialName',
    selected: true
  },
  {
    field: 'bInventoryFile$specs',
    name: '产品规格',
    label: '产品规格',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'specs',
    selected: true
  },
  {
    field: 'bDispatchProcessJob$processName',
    name: '工序名称',
    label: '工序名称',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'processName',
    selected: true
  },
  {
    field: 'resourceIdNames',
    name: '生产工位',
    label: '生产工位',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'resourceIdNames',
    selected: true
  },
  {
    field: 'bProductionOrder$depIdNames',
    name: '生产部门',
    label: '生产部门',
    placeholder: '请输入',
    type: 'tree',
    table: 'department',
    fieldId: 'depIdNames',
    selected: true
  },
  {
    field: 'operatorIdNames',
    name: '作业人员',
    label: '作业人员',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'operatorIdNames',
    selected: true
  },
  {
    dateType: 'yyyy-MM-dd HH:mm:ss',
    field: 'bProductionTask$taskStartTime',
    name: '开始时间',
    label: '开始时间',
    placeholder: '请输入',
    type: 'datetime',
    fieldId: 'taskStartTime',
    selected: true
  },
  {
    dateType: 'yyyy-MM-dd HH:mm:ss',
    field: 'bProductionTask$taskEndTime',
    name: '结束时间',
    label: '结束时间',
    placeholder: '请输入',
    type: 'datetime',
    fieldId: 'taskEndTime',
    selected: true
  },
  {
    field: 'bProductionTaskResource$creatorNames',
    name: '创建人员',
    label: '创建人员',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'creatorNames',
    selected: true
  },
  {
    dateType: 'yyyy-MM-dd HH:mm:ss',
    field: 'bProductionTaskResource$createTime',
    name: '创建时间',
    label: '创建时间',
    placeholder: '请输入',
    type: 'datetime',
    fieldId: 'createTime',
    selected: true
  },
  {
    field: 'bProductionOrder$materialCode',
    name: '产品编码',
    label: '产品编码',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'materialCode',
    ISCROSS: true,
    selected: true
  },
  {
    field: 'bProductionOrder$materialName',
    name: '产品名称',
    label: '产品名称',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'materialName',
    ISCROSS: true,
    selected: true
  },
  {
    defaultValue: '',
    readOnly: false,
    label: '物料规格',
    forbid: false,
    type: 'input',
    required: true,
    hover: false,
    field: 'bInventoryFile$specs',
    name: '物料规格',
    tip: '（系统字段-物料规格）',
    placeholder: '请输入物料规格',
    fields: [
      {
        type: 'input',
        title: '标题',
        value: 'label'
      }
    ],
    norepeat: false,
    fieldType: 0,
    fieldId: 'specs',
    ISCROSS: true,
    selected: true
  },
  {
    field: 'bInventoryFile$specs',
    name: '产品规格',
    label: '产品规格',
    placeholder: '请输入',
    type: 'input',
    fieldId: 'specs',
    ISCROSS: true,
    selected: true
  }
]

const obj = {}
const newList2 = arrobjs.reduce((acc, cur) => {
  // console.log("acc, cur: ",acc, cur);
  if (!obj[cur.field]) {
    obj[cur.field] = cur.field
    acc.push(cur)
  }
  return acc
}, [])
// console.log("newList2: ",newList2);

function uniqueArrayObjByKey(arrObjs, key) {
  const uniqueIds = []
  const unique = arrObjs.filter(item => {
    const isDuplicate = uniqueIds.includes(item[key])
    if (!isDuplicate) {
      uniqueIds.push(item[key])
      return true
    }
    return false
  })
  console.log(`unique：`, unique)
}
const testArrayObjList = [
  { id: 1, name: '寒月刀' },
  { id: 1, name: '寒月刀' },
  { id: 2, name: '紫龙草' },
  { id: 2, name: '紫龙草' }
]

uniqueArrayObjByKey(testArrayObjList, 'name')
uniqueArrayObjByKey(testArrayObjList, 'id')

/**
 * 数组对象根据key 去重
 * @param {Array} arrayObjs
 * @param {String} key
 * @return {Array}
 */
function uniqueArrayObjByKeyV2(arrayObjs, key) {
  const uniqueIds = []
  const uniqueArrayObjs = arrayObjs.filter(obj => {
    const isExist = uniqueIds.includes(obj[key])
    if (!isExist) {
      uniqueIds.push(obj[key])
      return true
    }
    return false
  })
  console.log(`uniqueArrayObjs：`, uniqueArrayObjs)
}

uniqueArrayObjByKeyV2(testArrayObjList, 'id')

/**
 * 使用Set的方式根据key 去重数组对象
 * @param {*} arrayObjs
 * @param {*} key
 */
function uniqueArrayObjsByKeyUseSet(arrayObjs, key) {
  const uniqueIds = new Set()
  const uniques = arrayObjs.filter(obj => {
    const isDuplicate = uniqueIds.has(obj[key])
    uniqueIds.add(obj[key])
    // if(!isDuplicate) return true

    // return false
    return !isDuplicate
  })
}

uniqueArrayObjsByKeyUseSet(testArrayObjList, 'id')

const GEMSongs = [
  { name: '多远都要在一起', id: 1 },
  { name: '多远都要在一起', id: 1 },
  { name: '光年之外', id: 2 },
  { name: '泡沫', id: 3 },
  { name: '泡沫', id: 3 }
]

/**
 *使用map 根据key 对数组对象进行去重
 * @param {*} arrayObjs
 * @param {*} key
 */
function uniqueArrayObjsByKeyUseMap(arrayObjs, key) {
  const map = new Map()
  arrayObjs.forEach(obj => {
    map.set(obj[key], obj)
  })
  console.log(`map：`, map)

  const unique = map.values()
  const keys = map.keys()
  console.log(`keys, unique：`, keys, unique)
  const res = [...unique]
  console.log(`res：`, res)
}

uniqueArrayObjsByKeyUseMap(GEMSongs, 'name')

// 查找重复的物料并合并
function findRepeatLabelCodeAndMerger(arr) {
  const map = {}; const newArr = []
  for (let i = 0; i < arr.length; i++) {
    const arrItem = arr[i]
    const materialData = arr[i].materialData
    console.log(arrItem)
    if (!map[materialData.id]) {
      newArr.push(arrItem)
      map[materialData.id] = arrItem
    } else {
      for (let j = 0; j < newArr.length; j++) {
        const newArrItem = newArr[j]
        if (newArrItem.materialData.id == materialData.id) {
          newArrItem.needCount = utils.add(newArrItem.needCount, arrItem.needCount)
          newArrItem.sentCount = utils.add(newArrItem.sentCount, arrItem.sentCount)
          break
        }
      }
    }
  }
  console.log('去重合并后：', newArr)
  return newArr
}
// 数组对象根据key合并对象，对某些值进行累加或者合并操作

