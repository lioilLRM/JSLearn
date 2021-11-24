###新增修改 节拍单价
POST http://{{host}}:8083/construction/meter-price/savaOrUpdate
mes-token:{{token}}
Content-Type: application/json

{
  "materialId": 55898,
  "processId": 817,
  "piecePrice": 12,
  "meter": 22
}



### 获取节拍单价列表
POST http://{{host}}:8083/construction/meter-price/getPageListByParams
mes-token:{{token}}
Content-Type: application/json

{"current":1,"size":20,"sort":[{"field":"createTime","mode":"desc"}],
  "systemFields":[
    {"field":"processIds","value":[817],"type":"text","method":"in"}

  ],"customFields":[]
}



### 根据节拍单价id 查询详情
GET http://{{host}}:8083/construction/meter-price/detail?id=1
mes-token:{{token}}


### 删除节拍单价
POST http://{{host}}:8083/construction/meter-price/delLogic

[1]