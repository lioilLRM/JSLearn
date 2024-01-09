// 定义一个节点类
class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.previous = null
  }
}

// 双向链表类
class DoubleLinked {
  constructor() {
    this.size = 0
    this.head = new Node('head')
    this.currentNode = '' // 当前节点指针
  }

  // 获取链表长度
  getLength() {
    return this.size
  }

  // 判断链表是否为空
  isEmpty() {
    return this.size === 0
  }

  // 显示当前节点
  showNode() {
    console.log(this.currentNode.data)
  }

  // 遍历
  displayList() {
    let str = ''
    let currentNode = this.head // 打印结果带head值
    // var currentNode=this.head.next  打印结果不带head值
    while (currentNode) {
      str += currentNode.data
      currentNode = currentNode.next
      if (currentNode) {
        str += '-->'
      }
    }
    console.log(str)
  }

  // 倒序遍历链表
  lastDisplay() {
    let str = ''
    let currentNode = this.findLast()
    while (currentNode) {
      str += currentNode.data
      currentNode = currentNode.previous
      if (currentNode) {
        str += '-->'
      }
    }
    console.log(str)
  }

  // 查找某一个元素
  findNode(data) {
    let currentNode = this.head
    while (currentNode && (currentNode.data != data)) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // 头插法 在headh结点后添加结点(与insertNextNode()方法类似)
  headAppend(data) {
    const newNode = new Node(data)
    newNode.next = this.head.next
    this.head.next.previous = newNode
    newNode.previous = this.head
    this.head.next = newNode
    this.size++
  }
  // 获取最后一个节点
  findLast() {
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // 尾插法 在尾部添加节点
  append(data) {
    const currentNode = this.findLast()
    const newNode = new Node(data)
    currentNode.next = newNode
    newNode.next = null
    newNode.previous = currentNode
    this.size++
  }

  // 插入节点   表示将element值插入到data值之后
  insertNextNode(data, element) {
    const currentNode = this.findNode(data)
    // 如果data不存在
    if (!currentNode) {
      return
    }
    const newNode = new Node(element)

    newNode.next = currentNode.next
    currentNode.next.previous = newNode
    // newNode.next.previous=newNode
    newNode.previous = currentNode
    currentNode.next = newNode
    this.size++
  }

  // 插入节点   表示将element值插入到data值之前
  insertPreNode(data, element) {
    const currentNode = this.findNode(data)
    if (!currentNode) {
      return
    }
    const newNode = new Node(element)

    newNode.previous = currentNode.previous
    currentNode.previous.next = newNode
    // newNode.previous.next=newNode
    newNode.next = currentNode
    currentNode.previous = newNode
    this.size++
  }

  // 删除一个节点
  deleteNode(data) {
    const currentNode = this.findNode(data)
    // 如果删除的节点是最后一个节点
    if (currentNode.next == null) {
      currentNode.previous.next = null
    } else {
      currentNode.previous.next = currentNode.next
      currentNode.next.previous = currentNode.previous
    }
    this.size--
  }
}

// 创建一个空链表
const doubleList = new DoubleLinked()
// 判断是否为空
console.log(doubleList.isEmpty())
// 尾插法依次插入数组序列
const arr = [{ name: '工序1' }, { name: '工序2' }, { name: '工序3' }]
for (let i = 0; i < arr.length; i++) {
  doubleList.append(arr[i])
}
// 遍历双向链表
doubleList.displayList()
// 指定结点后插入新结点
// doubleList.insertNextNode(3, 4)
// // 指定结点前插入结点
// doubleList.insertPreNode(3, 2)
// doubleList.displayList()
// // 删除指定结点
// doubleList.deleteNode(5)
// doubleList.displayList()
// // 前插法 在头元素后插入结点
// doubleList.headAppend(20)
// doubleList.headAppend(100)
// doubleList.displayList()
// // 倒序遍历
// doubleList.lastDisplay()
