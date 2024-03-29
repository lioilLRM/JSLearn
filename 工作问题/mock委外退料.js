// import Mock from 'mockjs'
const Mock = require('mockjs')

const list = Mock.mock({
  'list|10': [
    {
      'name': '@cname',
      'age|+1': 1,
      'color': '@color',
      'image': Mock.Random.image(),
      'birthday': '@date("yyyy-MM-dd")' + ' ' + '@time("HH:mm:ss")',
      'number': /\d{5,10}/,
      'bomLevel|1': function() {
        return Mock.Random.natural()
      }
    }
  ]
})

const recordList = Mock.mock({
  'code': 200,
  'data': {
    'supplierIdNames': '20001 | 苏州强新合金材料科技有限公司',
    'supplierId': 833,
    'issueRecordList|100': [
      {
        'materialIdNames': '委外子件1 | 0007001 | 1777*654 | M8 | L1',
        'orderCodeList': [
          'NB2401020000',
          'NB2401020000',
          'NB2401020000'
        ],
        'orderIdList': [
          14433,
          14433,
          14433
        ],
        'materialId|+1': 270,
        'materialUnit': 'PCS#1#floor',
        'issueRecordIdList': [
          3822,
          3846,
          3847
        ],
        // mock 生成 materialBatch 值
        'materialBatch|1': function() {
          return Mock.Random.natural()
        },
        'returnNum|+1': 3
      }
    ]
  },
  'msg': '操作成功',
  'rCode': 0,
  'time': 2589149

})

console.log(recordList)

const res = {
  'code': 200,
  'data': {
    'supplierIdNames': '20001 | 苏州强新合金材料科技有限公司',
    'supplierId': 833,
    'issueRecordList': [
      {
        'materialIdNames': '委外子件1 | 0007001 | 1777*654 | M8 | L1',
        'orderCodeList': [
          'NB2401020000',
          'NB2401020000',
          'NB2401020000'
        ],
        'orderIdList': [
          14433,
          14433,
          14433
        ],
        'materialId': 270,
        'materialUnit': 'PCS#1#floor',
        'issueRecordIdList': [
          3822,
          3846,
          3847
        ],
        'materialBatch': 'CG230811A5',
        'returnNum': 3
      },
      {
        'materialIdNames': '委外子件1 | 0007001 | 1777*654 | M8 | L1',
        'orderCodeList': [
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000',
          'NB2401020000'
        ],
        'orderIdList': [
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433,
          14433
        ],
        'materialId': 270,
        'materialUnit': 'PCS#1#floor',
        'issueRecordIdList': [
          3809,
          3810,
          3811,
          3812,
          3813,
          3814,
          3815,
          3816,
          3817,
          3818,
          3819,
          3820,
          3821,
          3823,
          3824,
          3825,
          3826,
          3827,
          3828,
          3829,
          3830,
          3831,
          3832,
          3833,
          3834,
          3836,
          3837,
          3838,
          3839,
          3840,
          3841,
          3842,
          3843,
          3844,
          3848,
          3849,
          3850,
          3851,
          3852,
          3853,
          3854,
          3855,
          3856,
          3857,
          3858,
          3859,
          3860,
          3861,
          3862,
          3863,
          3864,
          3865,
          3866,
          3867,
          3868,
          3869,
          3870,
          3871,
          3872,
          3873,
          3874,
          3875,
          3876,
          3877,
          3878,
          3879,
          3880,
          3881,
          3882,
          3883,
          3884,
          3885,
          3886,
          3887,
          3888,
          3889,
          3890,
          3891,
          3892,
          3893,
          3894,
          3895,
          3896,
          3897,
          3898,
          3899,
          3900,
          3901,
          3902,
          3903,
          3904,
          3905,
          3906,
          3907,
          3908
        ],
        'materialBatch': 'CG2308040003',
        'returnNum': 95
      },
      {
        'materialIdNames': '委外子件1 | 0007001 | 1777*654 | M8 | L1',
        'orderCodeList': [
          'NB2401020000',
          'NB2401020000'
        ],
        'orderIdList': [
          14433,
          14433
        ],
        'materialId': 270,
        'materialUnit': 'PCS#1#floor',
        'issueRecordIdList': [
          3835,
          3845
        ],
        'materialBatch': 'CG230811A3',
        'returnNum': 2
      }
    ]
  },
  'msg': '操作成功',
  'rCode': 0,
  'time': 2589149
}
