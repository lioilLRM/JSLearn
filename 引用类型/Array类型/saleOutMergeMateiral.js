  let res = require('./mockData.js')
  const {data, data2, pickedUpList} =res

  // 根据物料id进行合并相同的物料


     function mergeSelectedListByMaterialId(arrObj) {
  let map = {},mergeMaterialList = [];
  for(let i = 0; i < arrObj.length; i++){
    let arrItem = arrObj[i];
    let copyArrItem = JSON.parse(JSON.stringify(arrItem))
    arrItem.beforeMergeList = [copyArrItem]
   
    if(!map[arrItem.materialId]){
      mergeMaterialList.push(arrItem);
      map[arrItem.materialId] = arrItem;
    }else{
        for(let j = 0; j < mergeMaterialList.length; j++){
          let newArrItem = mergeMaterialList[j];
          if(newArrItem.materialId == arrItem.materialId){

              newArrItem.needCount =add(Number(newArrItem.needCount), Number(arrItem.needCount))
              newArrItem.sentCount = add(Number(newArrItem.sentCount), Number(arrItem.sentCount))
              newArrItem.overOrderStorage = add(Number(newArrItem.overOrderStorage), Number(arrItem.overOrderStorage))
              newArrItem.beforeMergeList.push(copyArrItem)

              if(newArrItem.stockVOList && newArrItem.stockVOList.length) {
                newArrItem.stockVOList.unshift(...arrItem.stockVOList)
              }
              break;
          } 
        }
    }
  };
  
  mergeRecommendStocks(mergeMaterialList)
   


  console.log('去重合并后：',mergeMaterialList);
  return mergeMaterialList
}




// 合并推荐库位
function mergeRecommendStocks(mergeMaterialList) {
  if(mergeMaterialList && mergeMaterialList.length) {
    for(let i  = 0;i< mergeMaterialList.length;i++) {
      let materialItem = mergeMaterialList[i]
      if(materialItem.stockVOList && materialItem.stockVOList.length) {
        let recommendStocks = []
        let map = {}
        for(let j = 0;j< materialItem.stockVOList.length;j++) {
          let stockItem = materialItem.stockVOList[j]
          if(!map[stockItem.id]) {
            recommendStocks.push(stockItem)
            map[stockItem.id] = stockItem
          } else {
            for(let k = 0; k < recommendStocks.length; k++) {
              let recommendStockItem = recommendStocks[k]
              if(recommendStockItem.id == stockItem.id) {
                recommendStockItem.recommendedNum = add(Number(recommendStockItem.recommendedNum), Number(stockItem.recommendedNum))
                break
              }
            }
          }
        }
        console.log(`recommendStocks`, recommendStocks)
        // 对推荐的库位的推荐数量进行处理，比较推荐数量和库存数量，取小的
        for(let k = 0; k < recommendStocks.length; k++) {
          let recommendStockItem = recommendStocks[k]
          recommendStockItem.recommendedNum = Math.min(recommendStockItem.recommendedNum, recommendStockItem.amount)
        }

        materialItem.stockVOList = recommendStocks
      }
    }
    console.log(`mergeMaterialList`, mergeMaterialList)
  }
}



let mergeMaterialList =  mergeSelectedListByMaterialId(data.deliveryTaskItemList)
// mergeRecommendStocks(mergeMaterialList)

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