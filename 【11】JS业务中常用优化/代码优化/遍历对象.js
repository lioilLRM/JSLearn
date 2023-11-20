const nval = {
  'thirdPlan': {},
  'fourPlan': {},
  'sevenPlan': {
    'planIds': [
      18619
    ],
    'planNames': [
      '10.77013.050.1FK1-完工检验'
    ],
    'control': '1'
  }
}
function test(nval) {
  if (Object.keys(nval).length) {
    Object.keys(nval).forEach(key => {
      if (nval[key] && Object.keys(nval[key]).length) {
        if (nval[key].planIds && nval[key].planIds.length && !nval[key].planIdsStr) {
          nval[key].planIdsStr = nval[key].planIds.toString()
        }
      }
    })
  }
  console.log(`nval：`, nval)
}

test(nval)
赞
秀
施
曝
求
慢
破
察
