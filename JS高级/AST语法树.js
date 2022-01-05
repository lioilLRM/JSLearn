// 来源：https://segmentfault.com/a/1190000016231512 AST抽象语法树
import * as recast from 'recast'

// const astTree = {
//   identifier: {
//     name: 'add',
//     type: 'Identifier'
//   },
//   params: [{ name: 'a', type: 'Identifier' }, { name: 'b', type: 'Identifier' }],
//   body: {}
// }

const code = `
  function add(a, b) {
    return a + b
  }
`
const ast = recast.parse(code)
const addBody = ast.program.body[0]
// console.log(`ast：`, ast)
console.log(`addBody：`, addBody)

console.log(`addBody.params[0]：`, addBody.params[0])
