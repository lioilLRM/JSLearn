/**
 * 列表转树的思路：
 * 关键之：列表转化为对象形式、
 * 1.列表转为对象， 将列表的id作键，列表项作为值；
 *
 * @param {*} list
 * @returns
 */

function listToTree(list) {
  const obj = list.reduce((acc, cur) => {
    acc[cur.id] = cur
    cur.children = []
    return acc
  }, {})
  console.log(`obj：`, obj)

  const result = list.filter((node) => {
    // 简洁版本
    // obj[node.pid] && obj[node.pid].children.push(node)
    if (obj[node.pid]) {
      obj[node.pid].children.push(node)
    }
    return !node.pid
  })
  console.log(`result：`, result)
  return result
}

const list = [
  {
    id: '1000',
    label: '湖北省'
  },
  {
    id: '1001',
    pid: '1000',
    label: '武汉'
  },
  { id: '100101', pid: '1001', label: '洪山区' },
  { id: '100102', pid: '1001', label: '武昌区' },
  { id: '100103', pid: '1001', label: '汉阳区' },
  { id: '1020', pid: '1000', label: '咸宁' },
  { id: '1022', pid: '1000', label: '孝感' },
  { id: '1034', pid: '1000', label: '襄阳' },
  { id: '1003', pid: '1000', label: '宜昌' },
  {
    id: '1200',
    value: '江苏省',
    label: '江苏省'
  },
  { id: '1201', pid: '1200', label: '南京' },
  { id: '1202', pid: '1200', label: '苏州' },
  { id: '1204', pid: '1200', label: '扬州' }
]

const res = listToTree(list)
console.log(`JSON.stringify：`, JSON.stringify(res))

const a = [
  {
    id: '1000',
    label: '湖北省',
    children: [
      {
        id: '1001',
        pid: '1000',
        label: '武汉',
        children: [
          { id: '100101', pid: '1001', label: '洪山区', children: [] },
          { id: '100102', pid: '1001', label: '武昌区', children: [] },
          { id: '100103', pid: '1001', label: '汉阳区', children: [] }
        ]
      },
      { id: '1020', pid: '1000', label: '咸宁', children: [] },
      { id: '1022', pid: '1000', label: '孝感', children: [] },
      { id: '1034', pid: '1000', label: '襄阳', children: [] },
      { id: '1003', pid: '1000', label: '宜昌', children: [] }
    ]
  },
  {
    id: '1200',
    value: '江苏省',
    label: '江苏省',
    children: [
      { id: '1201', pid: '1200', label: '南京', children: [] },
      { id: '1202', pid: '1200', label: '苏州', children: [] },
      { id: '1204', pid: '1200', label: '扬州', children: [] }
    ]
  }
]

const arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 }
]

const res2 = listToTree(arr)
console.log(`res2`, JSON.stringify(res2))
const res3 = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      { id: 2, name: '部门2', pid: 1, children: [] },
      {
        id: 3,
        name: '部门3',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门4',
            pid: 3,
            children: [{ id: 5, name: '部门5', pid: 4, children: [] }]
          }
        ]
      }
    ]
  }
]

function listToTreeV2(list) {
  const result = []
  const itemMap = {}

  for (const item of list) {
    const id = item.id
    const pid = item.pid

    if (!itemMap[id]) {
      itemMap[id] = { children: [] }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }

    const treeItem = itemMap[id]
    if (pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}
