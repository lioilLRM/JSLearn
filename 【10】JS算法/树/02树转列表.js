
const provinceList = [
  {
    id: '1000',
    label: '湖北省',
    children: [
      {
        id: '1001',
        pid: '1000',
        label: '武汉',
        children: [
          { id: '100101', pid: '1001', label: '洪山区' },
          { id: '100102', pid: '1001', label: '武昌区' },
          { id: '100103', pid: '1001', label: '汉阳区' }
        ]
      },
      { id: '1020', pid: '1000', label: '咸宁' },
      { id: '1022', pid: '1000', label: '孝感' },
      { id: '1034', pid: '1000', label: '襄阳' },
      { id: '1003', pid: '1000', label: '宜昌' }
    ]
  },
  {
    id: '1200',
    value: '江苏省',
    label: '江苏省',
    children: [
      { id: '1201', pid: '1200', label: '南京' },
      { id: '1202', pid: '1200', label: '苏州' },
      { id: '1204', pid: '1200', label: '扬州' }
    ]
  }
]
// 深度优先递归
function dfsTreeToList(tree, result = []) {
  if (tree && !tree.length) return []

  tree.forEach(node => {
    result.push(node)
    // console.log(`${node.id}-->${node.label}`)
    node.children && dfsTreeToList(node.children, result)
  })
  return result
}

const list = dfsTreeToList(provinceList)
console.log(`list：`, list)

/**
 * 广度优先递归
 * @param {*} tree
 * @param {*} result
 * @returns
 */
function bfsTreeToList(tree, result = []) {
  let node
  const stack = [...tree]
  while ((node = stack.shift())) {
    result.push({ label: node.label, value: node.id })
    node.children && stack.push(...node.children)
  }
  return result
}
const bfsListRes = bfsTreeToList(provinceList)
console.log(`bfsListRes：`, bfsListRes)

function treeToListByLoop(tree) {
  // let node
  const result = tree.map((node) => {
    node.level = 1
    return node
  })
  console.log(`result：`, result)
  for (let i = 0; i < result.length; i++) {
    if (!result[i].children) continue

    const list = result[i].children.map(node => {
      console.log(`node.label：`, node.label)

      return { label: node.label, value: node.id, level: result[i].level + 1 }
    })
    result.splice(i + 1, 0, ...list)
  }
  return result
}
const loopRes = treeToListByLoop(provinceList)
// console.log('loopRes：', loopRes)

