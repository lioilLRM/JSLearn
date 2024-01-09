const systemFields = [
  { 'field': 'status', 'value': ['1'], 'type': 'text', 'method': 'in' },
  { 'field': 'code', 'value': ['0'], 'type': 'text', 'method': 'in' }
]

const defaultFields = [
  { 'field': 'status', 'value': ['0'], 'type': 'text', 'method': 'in' },
  { 'field': 'man', 'value': ['1'], 'type': 'text', 'method': 'in' }
]

// 1. 两个数组合并，对相同的field进行合并，不同的field进行追加
// 2. 合并后的数组，如果field相同，value也相同，则删除其中一个, 保留一个
// 3. 合并后的数组，如果field相同，value不同，则合并value

// 对两个数据进行合并，然后根据field进行去重，保留一个
function merge(systemFields, defaultFields, propName = 'field') {
  const result = []
  const map = {}
  const fields = systemFields.concat(defaultFields)
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]
    if (map[field[propName]]) {
      continue
    } else {
      map[field[propName]] = field
    }
  }
  Object.keys(map).forEach(key => {
    result.push(map[key])
  })
  console.log('🚀 ~ file: 数组合并.js:29 ~ merge ~ result:', result)
  return result
}

merge(systemFields, defaultFields)
