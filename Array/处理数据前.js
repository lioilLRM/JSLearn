let handleDataBefore = [
  {
    "sampleSeq": 1,
    "itemSeq": 1,
    "result": 1,
    "itemId": 1683618182376,
    "itemName": "色差校验",
    "unit": ""
  },
  {
    "upperValue": "111",
    "sampleSeq": 1,
    "standardValue": "",
    "actualValue": "14",
    "lowerValue": "14",
    "itemSeq": 2,
    "result": 1,
    "itemId": 1683618183872,
    "itemName": "平整度检查",
    "unit": "mm"
  },
  {
    "sampleSeq": 2,
    "itemSeq": 1,
    "result": 1,
    "itemId": 1683618182376,
    "itemName": "色差校验",
    "unit": ""
  },
  {
    "upperValue": "111",
    "sampleSeq": 2,
    "standardValue": "",
    "actualValue": "15",
    "lowerValue": "14",
    "itemSeq": 2,
    "result": 1,
    "itemId": 1683618183872,
    "itemName": "平整度检查",
    "unit": "mm"
  }
]

let mergeByName = {
  '色差校验': [
    {
      sampleSeq: 1,
      itemSeq: 1,
      result: 1,
      itemId: 1683618182376,
      itemName: '色差校验',
      unit: ''
    },
    {
      sampleSeq: 2,
      itemSeq: 1,
      result: 1,
      itemId: 1683618182376,
      itemName: '色差校验',
      unit: ''
    }
  ],
  '平整度检查': [
    {
      upperValue: '111',
      sampleSeq: 1,
      standardValue: '',
      actualValue: '14',
      lowerValue: '14',
      itemSeq: 2,
      result: 1,
      itemId: 1683618183872,
      itemName: '平整度检查',
      unit: 'mm'
    },
    {
      upperValue: '111',
      sampleSeq: 2,
      standardValue: '',
      actualValue: '15',
      lowerValue: '14',
      itemSeq: 2,
      result: 1,
      itemId: 1683618183872,
      itemName: '平整度检查',
      unit: 'mm'
    }
  ]
}