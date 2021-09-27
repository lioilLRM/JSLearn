
// 变量改名
let tpHd = 'untitled'
let result = ''
const obj = { articleTitle: '文章标题' }
result += `<h1>${tpHd}</h1>`
tpHd = obj['articleTitle']

// 重构后

function title() {
  return tpHd
}

function setTitle(arg) { tpHd = arg }

result += `<h1>${title()}</h1>`
// tpHd = obj['articleTitle']
setTitle(obj['articleTitle'])
