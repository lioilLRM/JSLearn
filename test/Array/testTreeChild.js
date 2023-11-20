const deepFilter = (item, searchValue) => {
  let bool = item.typeName.indexOf(searchValue) >= 0
  if (!bool && item.children && item.children.length) {
    bool = item.children.some((sitem) => deepFilter(sitem, searchValue))
  }
  return bool
}
// return this.data.filter(item => deepFilter(item))

const data = [
  {
    isNegative: 0,
    children: [
      {
        isNegative: 0,
        children: [],
        modeCode: 'inventory_class',
        typeName: '长球销',
        id: 3221,
        sort: 0,
        parentId: 3216,
        status: 0
      },
      {
        isNegative: 0,
        children: [],
        modeCode: 'inventory_class',
        typeName: '横球销',
        id: 3222,
        sort: 1,
        parentId: 3216,
        status: 0
      },
      {
        isNegative: 0,
        children: [],
        modeCode: 'inventory_class',
        typeName: '球铰链球销',
        id: 3223,
        sort: 2,
        parentId: 3216,
        status: 0
      },
      {
        isNegative: 0,
        children: [],
        modeCode: 'inventory_class',
        typeName: '控制臂球销',
        id: 3224,
        sort: 3,
        parentId: 3216,
        status: 0
      },
      {
        isNegative: 0,
        children: [],
        modeCode: 'inventory_class',
        typeName: '连接杆球销',
        id: 3225,
        sort: 4,
        parentId: 3216,
        status: 0
      },
      {
        isNegative: 0,
        children: [],
        modeCode: 'inventory_class',
        typeName: '衬套球销',
        id: 3226,
        sort: 5,
        parentId: 3216,
        status: 0
      }
    ],
    modeCode: 'inventory_class',
    typeName: '球销类',
    id: 3216,
    sort: 12,
    parentId: 0,
    status: 0
  }
]

const searchValue = '长球'
const res = data.filter((item) => deepFilter(item, searchValue))
console.log('🚀 ~ file: testTreeChild.js:86 ~ res:', res)
