// 原来
// AQL抽检
function AQLCheck() {
  if(this.plan.method ==3){
    if(this.allMaterialNumber>=2&&this.allMaterialNumber<=8){
      this.plan.checkNumber =2
    }else if( this.allMaterialNumber>=9&&this.allMaterialNumber<=15){
      this.plan.checkNumber =3
    }else if( this.allMaterialNumber>=16&&this.allMaterialNumber<=25){
      this.plan.checkNumber =5
    }else if( this.allMaterialNumber>=26&&this.allMaterialNumber<=50){
      this.plan.checkNumber =8
    }else if( this.allMaterialNumber>=51&&this.allMaterialNumber<=90){
      this.plan.checkNumber =13
    }else if( this.allMaterialNumber>=91&&this.allMaterialNumber<=150){
      this.plan.checkNumber =20
    }else if( this.allMaterialNumber>=151&&this.allMaterialNumber<=280){
      this.plan.checkNumber =32
    }else if( this.allMaterialNumber>=281&&this.allMaterialNumber<=500){
      this.plan.checkNumber =50
    }else if(this.allMaterialNumber>=501&&this.allMaterialNumber<=1200){
      this.plan.checkNumber =80
    }else if(this.allMaterialNumber>=1201&&this.allMaterialNumber<=3200){
      this.plan.checkNumber =125
    }else if(this.allMaterialNumber>=3201&&this.allMaterialNumber<=10000){
      this.plan.checkNumber =200
    }else if(this.allMaterialNumber>=10001&&this.allMaterialNumber<=35000){
      this.plan.checkNumber =315
    }else if(this.allMaterialNumber>=35001&&this.allMaterialNumber<=150000){
      this.plan.checkNumber =500
    }else if(this.allMaterialNumber>=150001&&this.allMaterialNumber<=500000){
      this.plan.checkNumber =800
    }else if(this.allMaterialNumber>=500001){
      this.plan.checkNumber =1250
    }
  }
}
// 新的优化：来源：https://www.zhihu.com/question/37943171
function newAQLCheck(allMaterialNumber) {
  let plan = {method: 3, checkNumber: ''}
  let ranges = {
    2: [2, 8],
    3: [9, 15],
    5: [26, 50],
    1250: [500001, Infinity]
  }
  Object.keys(ranges).forEach(key => {
    if(allMaterialNumber>=ranges[key][0] && allMaterialNumber<=ranges[key][1]) {
      plan.checkNumber = key
    }
  })
  console.log(plan.checkNumber)

}