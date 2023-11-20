let res = require('./mockData.js')
const { pickedUpList, pickedUpList_Test5, pickedUpList_Test7, pickedUpList_Test7_1, pickedUpList_Test8 } = res
// console.log(`res`, pickedUpList_Test8)

function createSubmitDetails(list) {
  let submitDetails = []


  for (let i = 0; i < list.length; i++) {
    let materialItem = list[i]
    if (materialItem.sonPageRow.details.length === 1) {
      singleStockHandle(materialItem.sonPageRow.details, materialItem, submitDetails)
    }
    if (materialItem.sonPageRow.details.length > 1) {
      multiStockHandle(materialItem.sonPageRow.details, materialItem, submitDetails)
    }


  }

  // console.log("🚀 ~ file: handleData.js:51 ~ createSubmitDetails ~ submitDetails:", submitDetails)
  let printData = submitDetails.map(item => {
    return {
      storeNumber: item.storeNumber,
      locationIdNames: item.locationIdNames,
      materialId: item.materialId
    }
  })
  console.log(`printData`, printData)

  return submitDetails
}
// 单个库位的处理
function singleStockHandle(sonPageRowDetails, materialItem, submitDetails) {
  for (let j = 0; j < sonPageRowDetails.length; j++) {
    let faliaoDetail = sonPageRowDetails[j]
    if (+faliaoDetail.storeNumber) {



      for (let mergeIndex = 0; mergeIndex < materialItem.beforeMergeList.length; mergeIndex++) {
        let mergeItem = materialItem.beforeMergeList[mergeIndex]
        let submitDetail = {
          locationId: faliaoDetail.locationId,
          locationIdNames: faliaoDetail.locationName,

          materialId: faliaoDetail.materialId || materialItem.materialId,
          materialIdNames: faliaoDetail.materialIdNames || materialItem.materialIdNames,
          batchProperty1: faliaoDetail.batchProperty1,
          batchProperty2: faliaoDetail.batchProperty2,
          batchProperty3: faliaoDetail.batchProperty3,
          batchProperty4: faliaoDetail.batchProperty4,
          batchProperty5: faliaoDetail.batchProperty5,

          remarks: materialItem.sonPageRow.remarks
        }


        if (+faliaoDetail.storeNumber >= +mergeItem.needCount) {
          let storeNumber = Math.min(+faliaoDetail.storeNumber, +mergeItem.needCount)
          faliaoDetail.storeNumber = sub(+faliaoDetail.storeNumber, +mergeItem.needCount)

          submitDetail.orderItemId = mergeItem.id
          submitDetail.storeNumber = storeNumber

        } else {
          let storeNumber = Math.min(+faliaoDetail.storeNumber, +mergeItem.needCount)
          faliaoDetail.storeNumber = 0

          submitDetail.orderItemId = mergeItem.id
          submitDetail.storeNumber = storeNumber
        }

        if (faliaoDetail.materialHeatNo) {
          submitDetail.materialHeatNo = faliaoDetail.materialHeatNo
        }
        if (faliaoDetail.materialBatch) {
          submitDetail.materialBatch = faliaoDetail.materialBatch
        }

        if (['boxCode'].includes(faliaoDetail.scanCodeType)) {
          submitDetail.boxId = faliaoDetail.boxId
          submitDetail.boxCode = faliaoDetail.boxCode
        }
        if (faliaoDetail.scanCodeType === 'tuoCode') {
          submitDetail.palletId = faliaoDetail.tuoId
          submitDetail.palletCode = faliaoDetail.tuoCode
        }


        if (submitDetail.storeNumber > 0) {
          submitDetails.push(submitDetail)
        }

      }

    }


  }
}

function multiStockHandle(sonPageRowDetails, materialItem, submitDetails) {
  let materialLackNum = 0; // 缺料数量
  for (let i = 0; i < sonPageRowDetails.length; i++) {
    let faliaoDetail = sonPageRowDetails[i]
    let mergeIndexStep = 0
    if (+faliaoDetail.storeNumber) {
      for (let mergeIndex = mergeIndexStep; mergeIndex < materialItem.beforeMergeList.length; mergeIndex++) {
        let mergeItem = materialItem.beforeMergeList[mergeIndex]
        mergeItem.totalStoreNumber = submitDetails.filter(item => item.orderItemId == mergeItem.id).reduce((cur, next) => {
          return add(cur, next.storeNumber)
        }, 0)
        if (+mergeItem.totalStoreNumber >= +mergeItem.needCount) {
          continue
        }

        if (materialLackNum > 0) {
          console.log("🚀 检查到有缺料~ materialLackNum:", materialLackNum)
          let storeNumber = materialLackNum
          if (+faliaoDetail.storeNumber >= materialLackNum) {
            faliaoDetail.storeNumber = sub(faliaoDetail.storeNumber, materialLackNum)
            
          } else {
            storeNumber = Math.min(+faliaoDetail.storeNumber, materialLackNum)
          }
          // if (+faliaoDetail.storeNumber < materialLackNum) {
          // }

          console.log("🚀 ~ file: handleData.js:109 ~ multiStockHandle ~ storeNumber:", storeNumber)
          // storeNumber = Math.min(+faliaoDetail.storeNumber, +faliaoDetail.storeNumber)
          submitDetail = createSubmitDetail({ materialItem, faliaoDetail, mergeItem, storeNumber })
          if (submitDetail.storeNumber > 0) {
            submitDetails.push(submitDetail)
          }
          materialLackNum = 0
          continue
        }


        if (+faliaoDetail.storeNumber >= +mergeItem.needCount) {
          let storeNumber = Math.min(+faliaoDetail.storeNumber, +mergeItem.needCount)
          faliaoDetail.storeNumber = sub(+faliaoDetail.storeNumber, +mergeItem.needCount)
          submitDetail = createSubmitDetail({ materialItem, faliaoDetail, mergeItem, storeNumber })

          if (submitDetail.storeNumber > 0) {
            submitDetails.push(submitDetail)
          }



        } else {
          let storeNumber = Math.min(+faliaoDetail.storeNumber, +mergeItem.needCount)
          materialLackNum = sub(+mergeItem.needCount, +faliaoDetail.storeNumber)
          console.log("🚀 库存小于需求量:", storeNumber, materialLackNum)
          faliaoDetail.storeNumber = 0
          submitDetail = createSubmitDetail({ materialItem, faliaoDetail, mergeItem, storeNumber })
          if (submitDetail.storeNumber > 0) {
            submitDetails.push(submitDetail)
          }
          if (materialLackNum > 0) {
            mergeIndexStep++
            break
          }

        }

      }
    }

  }
}

function createSubmitDetail({ materialItem, faliaoDetail, mergeItem, storeNumber }) {
  let submitDetail = {
    locationId: faliaoDetail.locationId,
    locationIdNames: faliaoDetail.locationName,

    orderItemId: mergeItem.id,
    storeNumber: storeNumber,

    materialId: faliaoDetail.materialId || materialItem.materialId,
    materialIdNames: faliaoDetail.materialIdNames || materialItem.materialIdNames,
    batchProperty1: faliaoDetail.batchProperty1,
    batchProperty2: faliaoDetail.batchProperty2,
    batchProperty3: faliaoDetail.batchProperty3,
    batchProperty4: faliaoDetail.batchProperty4,
    batchProperty5: faliaoDetail.batchProperty5,

    remarks: materialItem.sonPageRow.remarks
  }

  if (faliaoDetail.materialHeatNo) {
    submitDetail.materialHeatNo = faliaoDetail.materialHeatNo
  }
  if (faliaoDetail.materialBatch) {
    submitDetail.materialBatch = faliaoDetail.materialBatch
  }

  if (['boxCode'].includes(faliaoDetail.scanCodeType)) {
    submitDetail.boxId = faliaoDetail.boxId
    submitDetail.boxCode = faliaoDetail.boxCode
  }
  if (faliaoDetail.scanCodeType === 'tuoCode') {
    submitDetail.palletId = faliaoDetail.tuoId
    submitDetail.palletCode = faliaoDetail.tuoCode
  }

  return submitDetail
}
// createSubmitDetails(pickedUpList)


// createSubmitDetails(pickedUpList_Test6)
// createSubmitDetails(pickedUpList_Test7)
createSubmitDetails(pickedUpList_Test7_1)


// createSubmitDetails(pickedUpList_Test8)


 
/**优化后的加减乘除（解决js浮点数计算bug）
 * @param {Object} a
 * @param {Object} b
 */
function add(a, b) {
	if(typeof a === 'string' && a) {
		a = Number(a)
	}
	if(typeof b === 'string' && b) {
		b = Number(b)
	}
	var c, d, e;
	try {
		c = a.toString().split(".")[1].length;
	} catch (f) {
		c = 0;
	}
	try {
		d = b.toString().split(".")[1].length;
	} catch (f) {
		d = 0;
	}
	return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}

function sub(a, b) {
	if(typeof a === 'string' && a) {
		a = Number(a)
	}
	if(typeof b === 'string' && b) {
		b = Number(b)
	}
	var c, d, e;
	try {
		c = a.toString().split(".")[1].length;
	} catch (f) {
		c = 0;
	}
	try {
		d = b.toString().split(".")[1].length;
	} catch (f) {
		d = 0;
	}
	return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}

/**乘法
 * @param {Object} a
 * @param {Object} b
 */
function mul(a, b) {
	if(typeof a === 'string' && a) {
		a = Number(a)
	}
	if(typeof b === 'string' && b) {
		b = Number(b)
	}
	var c = 0,
		d = a.toString(),
		e = b.toString();
	try {
		c += d.split(".")[1].length;
	} catch (f) {}
	try {
		c += e.split(".")[1].length;
	} catch (f) {}
	return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
/**除法
 * @param {Object} a
 * @param {Object} b
 */
function div(a, b) {
	if(typeof a === 'string' && a) {
		a = Number(a)
	}
	if(typeof b === 'string' && b) {
		b = Number(b)
	}
	var c, d, e = 0,
		f = 0;
	try {
		e = a.toString().split(".")[1].length;
	} catch (g) {}
	try {
		f = b.toString().split(".")[1].length;
	} catch (g) {}
	return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10,
		f - e));
}


 

 



 