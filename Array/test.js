const selectValues = [
  {
    'no': '8880001',
    'isNegative': 1,
    'addType': 0,
    'modeCode': 'storehouse_class',
    'typeName': '热处理仓库',
    'id': 3269,
    'sort': 0,
    'locationBatch': true,
    'parentId': 0,
    'status': 0
  },
  {
    'no': '5557771',
    'isNegative': 0,
    'addType': 0,
    'modeCode': 'storehouse_class',
    'typeName': '陕西仓库',
    'id': 3363,
    'sort': 0,
    'locationBatch': true,
    'parentId': 0,
    'status': 0
  },
  {
    'no': '7776661',
    'isNegative': 0,
    'addType': 0,
    'modeCode': 'storehouse_class',
    'typeName': '吉林仓库',
    'id': 3362,
    'sort': 0,
    'locationBatch': true,
    'parentId': 0,
    'status': 0
  },
  {
    'no': 'CK001',
    'isNegative': 0,
    'addType': 0,
    'modeCode': 'storehouse_class',
    'typeName': 'A仓库001',
    'id': 3386,
    'sort': 0,
    'locationBatch': true,
    'parentId': 0,
    'status': 0
  }
]

const ids = [3345, 3269, 3362]

// 返回的数据里面没有包含ids的数据的话，将ids里面的没有包含的数据给删除掉
const selectDataIds = selectValues.map(item => item.id)
const noMatchItems = ids.filter(id => !selectDataIds.includes(id))
const finalRes = noMatchItems.filter(noMatchItem => !ids.includes(noMatchItem))
console.log(`noMatchItems:`, noMatchItems, finalRes)
