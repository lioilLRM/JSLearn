// 数组对象排序

let arrayObj = [
    {
        "dateType": 3,
        "prefix": "XSDD",
        "incNumLength": 4,
        "dateDesc": "yyMMdd",
        "type": 11,
        "isEnable": 0,
        "typeName": "销售订单编码",
        "sort": 3
    },
    {
        "dateType": 2,
        "prefix": "CGDD",
        "incNumLength": 4,
        "dateDesc": "yyMM",
        "type": 12,
        "isEnable": 0,
        "typeName": "采购订单编码",
        "sort": 0
    },
    {
        "dateType": 3,
        "prefix": "WWGD",
        "incNumLength": 4,
        "dateDesc": "yyMMdd",
        "type": 13,
        "isEnable": 0,
        "typeName": "委外订单编码",
        "sort": 1
    },
    {
        "dateType": 3,
        "prefix": "DXY",
        "incNumLength": 4,
        "dateDesc": "yyMMdd",
        "type": 14,
        "isEnable": 0,
        "typeName": "发货任务单号",
        "sort": 7
    },
    {
        "dateType": 2,
        "prefix": "dxy",
        "incNumLength": 4,
        "dateDesc": "yyMM",
        "type": 15,
        "isEnable": 1,
        "typeName": "采购到货批号",
        "sort": 4
    },
    {
        "dateType": 2,
        "prefix": "DXYb",
        "incNumLength": 4,
        "dateDesc": "yyMM",
        "type": 16,
        "isEnable": 0,
        "typeName": "委外到货批号",
        "sort": 5
    },
    {
        "dateType": 3,
        "prefix": "SCDD",
        "incNumLength": 4,
        "dateDesc": "yyMMdd",
        "type": 17,
        "isEnable": 0,
        "typeName": "生产订单编码",
        "sort": 2
    },
    {
        "dateType": 3,
        "prefix": "SCPC",
        "incNumLength": 3,
        "dateDesc": "yyMMdd",
        "type": 18,
        "isEnable": 0,
        "typeName": "生产批次编码",
        "sort": 6
    }
]

function compare(p) { // 这是比较函数
  return function(m, n) {
    var a = m[p]
    var b = n[p]
    return a - b // 升序
  }
}