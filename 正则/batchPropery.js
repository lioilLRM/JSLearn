let obj ={
  "is_batchProperty1": true,
  "batchProperty1Label": "质量等级",
  "batchProperty1_isRequired": 0,
  "is_batchProperty2": true,
  "batchProperty2Label": "材质",
  "batchProperty2_isRequired": 0,
  "is_batchProperty3": true,
  "batchProperty3Label": "物料号",
  "batchProperty3_isRequired": 0,
  "is_batchProperty4": true,
  "batchProperty4Label": "执行标准",
  "batchProperty4_isRequired": 1,
  "batchProperty1": "一级品质、二级品",
  "batchProperty4": "Q/HB04- -2008、GB/T 2520、JIS G3303、DIN EN10202",
  "batchProperty2": "12",
  "batchProperty3": "33"
}

// let regBatchProperty = /^batchProperty\d+$/;
// Object.keys(obj).forEach(key => {
//   if(regBatchProperty.test(key)) {
//     console.log(key)
//   }
// })

function createBatchPropertyParam(detail, param) {
  param.batchProperty= {}
  for (let key in detail) {
    if (regBatchProperty.test(key) && typeof detail[key] != 'object') {
      param.batchProperty[key] = detail[key]
    }
  }
  console.log("🚀 ~ file: batchPropery.js:32 ~ createBatchPropertyParam ~ param:", param)
}
// createBatchPropertyParam(obj, {})

let arr = [1,2,3,4]

arr.forEach((item, index) => {
  if(item === 2) return
  console.log(`item`, item)
})