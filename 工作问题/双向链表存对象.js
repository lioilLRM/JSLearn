class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  add(data) {
    const newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  remove(data) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === data) {
        if (currentNode === this.head && currentNode === this.tail) {
          this.head = null
          this.tail = null
        } else if (currentNode === this.head) {
          this.head = this.head.next
          this.head.prev = null
        } else if (currentNode === this.tail) {
          this.tail = this.tail.prev
          this.tail.next = null
        } else {
          currentNode.prev.next = currentNode.next
          currentNode.next.prev = currentNode.prev
        }
        break
      }
      currentNode = currentNode.next
    }
  }

  size() {
    let counter = 0
    let currentNode = this.head
    while (currentNode) {
      counter++
      currentNode = currentNode.next
    }
    return counter
  }

  insert(index, data) {
    if (index < 0) {
      throw new Error('Index should be non-negative.')
    }

    if (index === 0) {
      this.head = new Node(data)
      if (this.tail === null) {
        this.tail = this.head
      }
    } else if (index === this.size()) {
      this.tail.next = new Node(data)
      this.tail = this.tail.next
    } else {
      let currentNode = this.head
      let previousNode
      let i = 0

      while (i < index) {
        previousNode = currentNode
        currentNode = currentNode.next
        i++
      }

      previousNode.next = new Node(data)
      currentNode.prev = previousNode
    }
  }

  print() {
    let currentNode = this.head
    while (currentNode) {
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
  }
}

// Example usage:
const list = new DoublyLinkedList()
list.add({ id: 1, name: 'John' })
list.add({ id: 2, name: 'Jane' })
list.add({ id: 3, name: 'Jake' })
console.log(`list.size()`, list.size())
list.insert(1, { id: 4, name: 'Jill' })
console.log(`list.size()`, list.size())
list.print()
// list.remove({ id: 2, name: 'Jane' })
// list.print()
