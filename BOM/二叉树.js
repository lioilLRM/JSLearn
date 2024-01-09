// 定义二叉树节点
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// 二叉树类
class BinaryTree {
  constructor() {
    this.root = null
  }

  // 后序遍历递归函数
  _postorderTraversal(node, result) {
    if (node) {
      this._postorderTraversal(node.left, result)
      this._postorderTraversal(node.right, result)
      result.push(node.value)
    }
  }

  // 后序遍历
  postorderTraversal() {
    const result = []
    this._postorderTraversal(this.root, result)
    return result
  }

  // 向二叉树中插入节点
  insert(value) {
    const newNode = new TreeNode(value)
    if (!this.root) {
      this.root = newNode
    } else {
      // 实现插入逻辑
      // ...
      this._insertRecursive(this.root, newNode)
    }
  }

  // 递归插入节点
  _insertRecursive(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode
      } else {
        this._insertRecursive(currentNode.left, newNode)
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode
      } else {
        this._insertRecursive(currentNode.right, newNode)
      }
    }
  }
}

// 示例用法
const myTree = new BinaryTree()
myTree.insert(10)
myTree.insert(5)
myTree.insert(15)

const postorderResult = myTree.postorderTraversal()
console.log('后序遍历结果:', postorderResult)

const tree = {
  'val': '7',
  'left': {
    'val': 2,
    'left': null,
    'right': {
      'val': 5,
      'left': null,
      'right': null
    }
  },
  'right': {
    'val': 3,
    'left': {
      'val': 6,
      'left': null,
      'right': null
    },
    'right': {
      'val': 7,
      'left': null,
      'right': null
    }
  }
}
