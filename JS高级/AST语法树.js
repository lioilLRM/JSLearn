// 来源：https://segmentfault.com/a/1190000016231512
function add(a, b) {
  return a + b
}

const astTree = {
  identifier: {
    name: 'add',
    type: 'Identifier'
  },
  params: [{ name: 'a', type: 'Identifier' }, { name: 'b', type: 'Identifier' }],
  body: {}
}
