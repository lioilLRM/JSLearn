import Mock from 'mockjs'

const list = Mock.mock({
  'list|10': [
    {
      'name': '@cname',
      'age|+1': 1,
      'color': '@color',
      'image': Mock.Random.image(),
      'birthday': '@date("yyyy-MM-dd")' + ' ' + '@time("HH:mm:ss")',
      'number': /\d{5,10}/,
      'bomLevel|1': 1 + /[0-3]/
    }
  ]
})

console.log(list)

