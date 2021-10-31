// 多元判断时：将condition拼接成字符串存到Object里
// 多元判断时：将condition拼接成字符串存到Map里
// 多元判断时：将condition存为Object存到Map里
// 多元判断时：将condition写作正则存到Map里

// 我们需要把问题升级一下，以前按钮点击时候只需要判断status，现在还需要判断用户的身份：
/**
 * 按钮点击事件
 * @param {number} status 活动状态：1开团进行中 2开团失败 3 开团成功 4 商品售罄 5 有库存未开团
 * @param {string} identity 身份标识：guest客态 master主态
 */
const onButtonClickByBaseIf = (status, identity) => {
  if (identity === 'guest') {
    if (status === 1) {
      // do sth
    } else if (status === 2) {
      // do sth
    } else if (status === 3) {
      // do sth
    } else if (status === 4) {
      // do sth
    } else if (status === 5) {
      // do sth
    } else {
      // do sth
    }
  } else if (identity === 'master') {
    if (status === 1) {
      // do sth
    } else if (status === 2) {
      // do sth
    } else if (status === 3) {
      // do sth
    } else if (status === 4) {
      // do sth
    } else if (status === 5) {
      // do sth
    } else {
      // do sth
    }
  }
}

const mapActionsV2 = new Map([
  ['guest_1', (params) => {
    console.log('mapActionsV2被调用', this, params)
    sendLog('mapActionsV2 processing')
    jumpTo('mapActionsV2 IndexPage')
  }],
  ['guest_2', () => { /* do sth*/ }],
  ['guest_3', () => { /* do sth*/ }],
  ['guest_4', () => { /* do sth*/ }],
  ['guest_5', () => { /* do sth*/ }],
  ['master_1', () => { /* do sth*/ }],
  ['master_2', () => { /* do sth*/ }],
  ['master_3', () => { /* do sth*/ }],
  ['master_4', () => { /* do sth*/ }],
  ['master_5', () => { /* do sth*/ }],
  ['default', () => { /* do sth*/ }]
])

/**
 * 按钮点击事件
 * @param {string} identity 身份标识：guest客态 master主态
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 开团成功 4 商品售罄 5 有库存未开团
 */
const onButtonClickByMapV2 = (identity, status) => {
  const action = mapActionsV2.get(`${identity}_${status}`) || mapActionsV2.get('default')
  action.call(this, 123) // TODO:为啥要使用call()方法
}

onButtonClickByMapV2('guest', 1)

const objActions = {
  'guest_1': () => { /* do sth*/ },
  'guest_2': () => { /* do sth*/ }
  // ....
}

const onButtonClickByObject = (identity, status) => {
  const action = objActions[`${identity}_${status}`] || objActions['default']
  action.call(this)
}
onButtonClickByObject('guest', 1)

// 用Map对象，以Object对象作为key
// Map与Object的区别，Map可以用任何类型的数据作为key
const actions = new Map([
  [{ identity: 'guest', status: 1 }, () => { /* do sth*/ }],
  [{ identity: 'guest', status: 2 }, () => { /* do sth*/ }]
  // ...
])

const onButtonClickByMapObj = (identity, status) => {
  const action = [...actions].filter(([key, value]) => (key.identity === identity && key.status === status))
  action.forEach(([key, value]) => value.call(this))
}

// onButtonClickByMapObj('guest', 1)

const newActions = [...actions]
console.log(`newActions`, newActions)

// 假如guest情况下，status1-4的处理逻辑都一样怎么办，最差的情况是这样：
const actionsByMultiOptions = new Map([
  [{ identity: 'guest', status: 1 }, () => { /* functionA */ }],
  [{ identity: 'guest', status: 2 }, () => { /* functionA */ }],
  [{ identity: 'guest', status: 3 }, () => { /* functionA */ }],
  [{ identity: 'guest', status: 4 }, () => { /* functionA */ }],
  [{ identity: 'guest', status: 5 }, () => { /* functionB */ }]
  // ...
])

// 好一点的写法是将处理逻辑函数进行缓存：
const actionsByMultiCacheFn = () => {
  const functionA = () => { /* do sth*/ }
  const functionB = () => { /* do sth*/ }
  return new Map([
    [{ identity: 'guest', status: 1 }, functionA],
    [{ identity: 'guest', status: 2 }, functionA],
    [{ identity: 'guest', status: 3 }, functionA],
    [{ identity: 'guest', status: 4 }, functionA],
    [{ identity: 'guest', status: 5 }, functionB]
    // ...
  ])
}

const onButtonClick = (identity, status) => {
  const action = [...actionsByMultiCacheFn()].filter(([key, value]) => (key.identity === identity && key.status === status))
  action.forEach(([key, value]) => value.call(this))
}

/**
 *
 * 上面重写了4次functionA还是有点不爽，假如判断条件变得特别复杂，
 * 比如identity有3种状态，status有10种状态，那你需要定义30条处理逻辑，
 * 而往往这些逻辑里面很多都是相同的，这似乎也是笔者不想接受的，那可以这样实现
 * Map的优势更加凸显，可以用正则类型作为key了
 * 这样就有了无限可能，假如需求变成，
 * 凡是guest情况都要发送一个日志埋点，不同status情况也需要单独的逻辑处理，那我们可以这样写:
 */

const actionsByReg = () => {
  const functionA = () => { /* do sth*/ }
  const functionB = () => { /* do sth*/ }
  const functionC = () => { /* send log*/ }
  return new Map([
    [/^guest_[1-4]$/, functionA],
    [/^guest_5$/, functionB],
    [/^guest_.*$/, functionC]
    // ...
  ])
}

const onButtonClickByReg = (identity, status) => {
  const action = [...actionsByReg()].filter(([key, value]) => (key.test(`${identity}_${status}`)))
  action.forEach(([key, value]) => value.call(this))
}

function sendLog(log) {
  console.log(`log：`, log)
}

function jumpTo(page) {
  console.log('to page：', page)
}
