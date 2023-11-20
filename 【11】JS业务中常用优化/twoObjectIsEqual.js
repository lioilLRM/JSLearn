// 比较两个对象是否一致

const searchValue = '123123'

const whereFields = [
  ...(() => {
    if (!searchValue) return []
    return [
      {
        field: 'rProductionProgress.searchText',
        method: 'like',
        type: 'text',
        value: [searchValue.trim()]
      }
    ]
  })(),
  233
]
console.log(whereFields)

