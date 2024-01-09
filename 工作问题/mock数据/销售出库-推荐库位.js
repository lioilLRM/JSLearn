
const Mock = require('mockjs')

const stockVOList = Mock.mock({
  'stockVOList|100': [

    {
      'employAmount': 0,
      'qualityStatus': 1,
      'id|+1': 2837,
      'unitPrice': 0,
      'materialUnit': 'PCS#0#ceil##进一法',
      'creatorNames': '谈文',
      'updatorNames': '谈文',
      'locationCode': 'A8871100911',
      'status': 0,
      'totalPrice': 0,
      'recommendedNum|+1': 40,
      'batchProperty1': '二级品',
      'batchProperty2': '塑料',
      'batchProperty3': '33580',
      'locationId': 33167,
      'batchProperty4': 'GB/T 2520',
      'creator': '1331848333144129537',
      'amount|+1': 80,
      'locationName': '衢州库位',
      'isDelete': 0,
      'containerType': 0,
      'updateTime': '2023-12-11 14:24:21',
      'labelNumber': 0,
      'locationDataTitle': function() {
        return 'A8871100911 | 衢州库位' + Mock.Random.natural(1, 100)
      },
      'createTime': '2023-10-09 16:18:18',
      'stockId': 5745,
      'updator': '1331848333144129537'
    }

  ]

})
// console.log(`stockVOList`, stockVOList)

const res = {
  'code': 200,
  'data': {
    'salesOrderId': '',
    'creator': '1331848333144129537',
    'orderNo': 'FH--23120017',
    'isDelete': 0,
    'templateData': {
      'orderNo': 'FH--23120017',
      'customerIdNames': '49001 | 德国采埃孚',
      'customerId': 823,
      'taskItems': [
        {
          'needCount': 40,
          'materialIdNames': '铝扣板014（这就是以恶搞查急急急急急急急急急急急急急急急急急急哈哈哈哈哈哈哈哈哈哈哈哈啊哈啊啊啊啊啊啊啊啊啊啊） | 888014 | 190*120 | 15.5 | M4 | L20',
          'hanghao': '',
          'materialId': '263',
          'salesOrderId_disabled': true,
          'qid': 1703734904075,
          'seq': 1,
          'itemSeq': 1,
          'materialData': {
            'bInventoryFile$id': '263',
            'bInventoryFile$replaceIdsDetail': [
              {
                'creator': '1331848333144129537',
                'creatorNames': '谈文',
                'updatorNames': '谈文',
                'replaceId': 250,
                'createTime': '2023-12-28 10:32:56',
                'isDelete': 0,
                'updator': '1331848333144129537',
                'updateTime': '2023-12-28 10:32:56',
                'id': 340,
                'materialId': 263,
                'replaceIdNo': '888001',
                'status': false
              }
            ],
            'bInventoryFile$extProperty4': 'L20',
            'modeTypesNames': '铝扣件',
            'bInventoryFile$extProperty2': '15.5',
            'bInventoryFile$extProperty3': 'M4',
            'bInventoryFile$extProperty1': '190*120',
            'bInventoryFile$define2': '选项一',
            'bInventoryFile$define1': '123123123',
            'bInventoryFile$modeTypes': '3268',
            'bInventoryFile$define4': '',
            'bInventoryFile$define3': '单个',
            'bInventoryFile$define6': '紫色,红色',
            'bInventoryFile$mainUnit': 'PCS#0#ceil',
            'bInventoryFile$define5': '2023-12-15',
            'bInventoryFile$define8': '否',
            'bInventoryFile$define7': 'DDD',
            'bInventoryFile$name': '铝扣板014（这就是以恶搞查急急急急急急急急急急急急急急急急急急哈哈哈哈哈哈哈哈哈哈哈哈啊哈啊啊啊啊啊啊啊啊啊啊）',
            'bInventoryFile$materialNo': '888014',
            'bInventoryFile$status': '0',
            'bInventoryFile$property': '1,2,3',
            'bInventoryFile$controlWarehouse': '3334',
            'bInventoryFile$matType': '1',
            'dataTitle': '铝扣板014（这就是以恶搞查急急急急急急急急急急急急急急急急急急哈哈哈哈哈哈哈哈哈哈哈哈啊哈啊啊啊啊啊啊啊啊啊啊） | 888014 | 190*120 | 15.5 | M4 | L20',
            'warehouseNames': '浙江仓库'
          },
          'orderHanghao': ''
        }
      ],
      'startTime': '2023-12-28',
      'customData': {
        'companyCode': '49001',
        'creator': '1331848333144129537',
        'isDelete': 0,
        'companyName': '德国采埃孚',
        'updateTime': '2022-08-18 13:59:50',
        'companyAttribute': '客户',
        'lineNo': 16,
        'creatorNames': '007001 谈文',
        'createTime': '2022-08-18 13:59:51',
        'updator': '1331848333144129537',
        'dataTitle': '49001 | 德国采埃孚',
        'rfId': 'CO2022081800016',
        'id': 823,
        'status': 0
      },
      'customerName': '',
      'status': '0'
    },
    'updateTime': '2023-12-28 11:41:59',
    'customerName': '49001 | 德国采埃孚',
    'updatorNames': '谈文',
    'creatorNames': '谈文',
    'createTime': '2023-12-28 11:41:59',
    'customerId': 823,
    'updator': '1331848333144129537',
    'startTime': '2023-12-28',
    'id': 689,
    'deliveryTaskItemList': [
      {
        'controlWarehouseId': '3334',
        'needCount': '40',
        'overOrderStorage': 0,
        'sentCount': '0',
        'specs': '190*120 | 15.5 | M4 | L20',
        'id': 1168,
        'materialId': 263,
        'materialUnit': 'PCS#0#ceil',
        'materialName': '铝扣板014（这就是以恶搞查急急急急急急急急急急急急急急急急急急哈哈哈哈哈哈哈哈哈哈哈哈啊哈啊啊啊啊啊啊啊啊啊啊）',
        'stockVOList': stockVOList.stockVOList,
        'updatorNames': '谈文',
        'creatorNames': '谈文',
        'status': 0,
        'materialIdNames': '铝扣板014（这就是以恶搞查急急急急急急急急急急急急急急急急急急哈哈哈哈哈哈哈哈哈哈哈哈啊哈啊啊啊啊啊啊啊啊啊啊） | 888014 | 190*120 | 15.5 | M4 | L20',
        'creator': '1331848333144129537',
        'isDelete': 0,
        'updateTime': '2023-12-28 11:41:59',
        'materialCode': '888014',
        'itemSeq': '1',
        'createTime': '2023-12-28 11:41:59',
        'updator': '1331848333144129537',
        'taskId': 689
      }
    ],
    'status': 0
  },
  'msg': '操作成功',
  'rCode': 0,
  'time': 2590961
}
console.log(`res`, res)
