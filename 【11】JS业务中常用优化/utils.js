function warning(checker, complainer) {
  if (!checker()) {
    const message = ['[Vue-Treeselect Warning]'].concat(complainer())
    // eslint-disable-next-line no-console
    console.error(...message)
  }
}

function getNode(nodeId) {
  warning(
    () => nodeId != null,
    () => `Invalid node id: ${nodeId}`,
  )
  console.log(`nodeId:`, nodeId)
}

getNode(null)

const forest = {
  nodeMap: {
    a: {},
    b: {}
  }
}
console.log('a' in forest.nodeMap)