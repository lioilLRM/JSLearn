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
// 递归实现：深度优先遍历
// 好处：表达性好，容易理解 缺点：层级过深的话，容易导致栈溢出
let loopCountV1 = 0

const dfsTransFn = (tree, func) => {
  tree.forEach(node => {
    // func(node)
    loopCountV1++
    console.log(`${node.id}....${node.label}`)

    if (node.children && node.children.length) {
      dfsTransFn(node.children, func)
    }
  })
  console.log(`loopCountV1：`, loopCountV1)

  return tree
}

dfsTransFn(provinceList, (node) => {
  console.log(`${node.id}....${node.label}`)
})

// 栈实现：深度优先遍历(待实现)
const dfsStackFn = (tree, func) => {
  let node
  const stack = [... tree]

  while ((node = stack.shift())) {
    func(node)

    // node.children && stack.unshift(...node.children)
    if (node.children) {
      stack.unshift(...node.children) // 把下一级的插入到数组的首位
    }
  }
}

dfsStackFn(provinceList, (node) => {
  console.log(`${node.id}--${node.label}：`)
})

// 广度优先遍历：基于栈的实现
// 步骤：1. 将树形结构的数组展开
const bfsTransFn = (tree, func) => {
  let node
  const stack = [...tree]
  let loopCount = 0
  while ((node = stack.shift())) {
    loopCount++
    func(node)
    if (node.children) {
      stack.push(...node.children) // 把下一级的插入到数组的尾部
    }
  }
  console.log(`loopCount：`, loopCount)
}

bfsTransFn(provinceList, node => {
  console.log(`${node.id}-->${node.label}`)
})

// 如何取出数组的第一个；最后一个
const arr = [123, 22, 333, 444]
let res = arr.pop() // 取出最后一个
res = arr.shift() // 取首位的数据
arr.unshift(23333) // 在数组的首位插入
console.log(`res：`, res, arr)

// 测试的树
const node = {
  name: 'A',
  children: [{
    name: 'B',
    children: [{
      name: 'C'
    }, {
      name: 'D'
    }]
  }, {
    name: 'E',
    children: [{
      name: 'F'
    }, {
      name: 'G'
    }]
  }, {
    name: 'L'
  }, {
    name: 'M'
  }]
}

// // 深度优先遍历的递归写法
// const nodeList = []
// function deepTraversal(node) {
// if (node) {
// nodeList.push(node.name)
//   let children = node.children ? node.children : []
//   for (let i = 0;i < children.length; i++) {
//     deepTraversal(children[i])
//   }
// }
// return nodeList.join(',')
// }
// console.log(deepTraversal(node))

// 深度优先遍历的非递归写法
function deepTraversal(node) {
  const nodes = []
  if (node) {
    const stack = []
    // 同时存放将来要访问的节点
    stack.push(node)
    while (stack.length) {
      const item = stack.pop()
      // 正在访问的节点
      nodes.push(item.name)
      const children = item.children ? item.children : []
      for (let i = children.length - 1; i >= 0; i--) {
      // 将现在访问的节点的子节点存入 stack，供将来访问
        stack.push(children[i])
      }
    }
  }
  return nodes.join(',')
}
console.log(deepTraversal(node))
