import { create, all } from 'mathjs'
const config = {
  number: 'BigNumber' // 可选值： number BigNumber
}
const math = create(all, config)
const res = math.evaluate('0.1 + 0.2')
console.log(`res`, String(res))
console.log(typeof res, res)

// console.log(math.evaluate('0.1 + 0.2'))
console.log(math.evaluate('5 * 16.49'))

