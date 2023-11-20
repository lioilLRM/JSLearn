var REGEX = new RegExp('{{([a-zA-Z.-_0-9]+)}}', 'g')
var TEMPLATE_OPEN = '{{'
/**
NOTE: I also wrote an implementation that does not use regex but it is actually slower
      in real world usage and this is easier to understand.

@param {String} input template.
@param {Object} view details.
*/
function replace(input, view) {
  // optimization to avoid regex calls (indexOf is strictly faster)
  if (input.indexOf(TEMPLATE_OPEN) === -1) return input
  var result
  var replaced = input.replace(REGEX, function(original, path) {
    console.log(`original, path:`, original, path)
    var value = path
    // var value = extractValue(path, view)
    if (undefined === value || value === null) {
      return original
    }

    if (typeof value === 'object') {
      result = value
      return
    }

    return value
  })
  return (undefined !== result) ? result : replaced
}
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/index.js\';'

replace(IMPORT_TEMPLATE, {
  name: 'componentName',
  package: 'name'
})

const pages = {
  'index': {
    '1': '网站快速成型工具',
    '2': 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
    '3': '指南',
    '4': '了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。',
    '5': '查看详情',
    '6': '组件',
    '7': '使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。',
    '8': '资源',
    '9': '下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。',
    '10': '主题',
    '11': '在线主题编辑器，可视化定制和管理站点主题、组件样式',
    '12': '主题定制功能上线',
    '13': '点击开始编辑',
    '14': '尝试您的新主题',
    'lang': 'zh-CN',
    'titleSize': '34',
    'paraSize': '18'
  },
  'component': {},
  'theme': {
    '1': '官方主题',
    '2': '我的主题',
    '3': '主题名称'
  },
  'theme-preview': {
    '1': '返回'
  },
  'theme-nav': {},
  'changelog': {
    '1': '更新日志',
    '2': 'zh-CN'
  },
  'design': {
    '1': '设计原则',
    '2': '一致',
    '3': 'Consistency',
    '4': '反馈',
    '5': 'Feedback',
    '6': '效率',
    '7': 'Efficiency',
    '8': '可控',
    '9': 'Controllability',
    '10': '一致性 Consistency',
    '11': '与现实生活一致：',
    '12': '与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
    '13': '在界面中一致：',
    '14': '所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
    '15': '反馈 Feedback',
    '16': '控制反馈：',
    '17': '通过界面样式和交互动效让用户可以清晰的感知自己的操作；',
    '18': '页面反馈：',
    '19': '操作后，通过页面元素的变化清晰地展现当前状态。',
    '20': '效率 Efficiency',
    '21': '简化流程：',
    '22': '设计简洁直观的操作流程；',
    '23': '清晰明确：',
    '24': '语言表达清晰且表意明确，让用户快速理解进而作出决策；',
    '25': '帮助用户识别：',
    '26': '界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。',
    '27': '可控 Controllability',
    '28': '用户决策：',
    '29': '根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；',
    '30': '结果可控：',
    '31': '用户可以自由的进行操作，包括撤销、回退和终止当前操作等。'
  },
  'guide': {
    '1': '设计原则',
    '2': '导航'
  },
  'nav': {
    '1': '导航',
    '2': '导航可以解决用户在访问页面时：在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2 种类型。',
    '3': '选择合适的导航',
    '4': '选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。',
    '5': '侧栏导航',
    '6': '可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，如搜索条、帮助按钮、通知按钮等。适用于中后台的管理型、工具型网站。',
    '7': '一级类目',
    '8': '适用于结构简单的网站：只有一级页面时，不需要使用面包屑。',
    '9': '二级类目',
    '10': '侧栏中最多可显示两级导航；当使用二级导航时，我们建议搭配使用面包屑，方便用户定位自己的位置和快速返回。',
    '11': '三级类目',
    '12': '适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。',
    '13': '顶部导航',
    '14': '顺应了从上至下的正常浏览顺序，方便浏览信息；顶部宽度限制了导航的数量和文本长度。',
    '15': '适用于导航较少，页面篇幅较长的网站。'
  },
  'resource': {
    '1': '资源',
    '2': '整理中',
    '3': 'Axure Components',
    '4': '通过在 Axure 中导入 Element 组件库，可以在交互设计阶段方便地调用常用的组件',
    '5': '下载',
    '6': 'Sketch Template',
    '7': '从 Element Template 快速调用常用组件，在提升设计效率的同时，保证统一的视觉风格',
    '8': '组件交互文档',
    '9': '进一步查看 Element 交互文档，从一个较为微观的角度详细地了解各个组件的交互细节',
    'paraHeight': '1.8',
    'placeholder1': '整理中',
    'placeholder2': '设计资源正在整理和完善中'
  }
}

let content = `
<div class="banner">
      <div class="banner-desc">
        <h1><%= 1 ></h1>
        <p><%= 2 ></p>
      </div>
    </div>
`

const pairs = pages['index']
Object.keys(pairs).forEach(key => {
  console.log(`key:`, pairs[key])
  content = content.replace(new RegExp(`<%=\\s*${key}\\s*`), pairs[key])
  // content = content.replace(new RegExp(`<%=\\s*${key}\\s*`), pairs[key])
})
console.log(`content2:`, content)

