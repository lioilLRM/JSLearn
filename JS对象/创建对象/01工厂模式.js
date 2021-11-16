/**
  工厂模式：创建对象
 解决了什么问题：创建多个类似对象的问题
 缺点：无法判断新创建的对象属于什么类型。

 */

function createPerson(name, age, job) {
  const obj = {
    name: name,
    age: age,
    job: job
  }
  obj.sayName = function() {
    console.log(this.name)
  }
  return obj
}
const person1 = createPerson('Key', 22, 'engineer')
console.log(`person1.constructor`, person1.constructor)
console.log(`Object.prototype.toString.call(person1)：`, Object.prototype.toString.call(person1))

/**
工厂模式
1.是什么？
通过一个工厂函数，快速批量地建立一系列相同的类。我们也可以用来创建对象、方法。
2.为什么？

3. 怎么样应用？例子？
https://github.com/tangzhirong/form-constructor
 */

// demo1:跨域是前端开发中经常需要解决的问题，其中一种方式是增加 node 中间层，对每个接口做一次转发。
function getList() {
  const { ctx, config } = this
  const params = ctx.request.query
  const conf = {
    url: `${config.domain}/list`,
    method: 'get',
    params
  }

  ctx.fetch(conf)
    .then((res) => {
      ctx.body = res.data
    })
    .catch((err) => {
      ctx.body = err
    })
}
function getCount() {
  const { ctx, config } = this
  const params = ctx.request.query
  const conf = {
    url: `${config.domain}/count`,
    method: 'get',
    params
  }
  ctx.fetch(conf)
    .then((res) => {
      ctx.body = res.data
    })
    .catch((err) => {
      ctx.body = err
    })
}

function apiFactory(url) {
  return function() {
    const _self = this
    const { ctx, config: { domain }} = _self
    const params = ctx.request.query
    const conf = {
      url: `${domain}/${url}`,
      method: 'get',
      params
    }
    ctx.fetch(conf).then((res) => {
      ctx.body = res.data
    })
      .catch((err) => {
        ctx.body = err
      })
  }
}

const getListApi = apiFactory('list')
const getCountApi = apiFactory('count')
