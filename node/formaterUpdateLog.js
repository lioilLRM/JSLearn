const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const filePath = path.join(__dirname, './updateLog.md')
const outPutPath = path.join(__dirname, './updateLogFormater.md')

handleContent()

async function handleContent() {
  const newContent = await createNewContent()
  console.log('🚀 ~ file: formaterUpdateLog.js:13 ~ handleContent ~ newContent:', newContent)
  writeContentToLocalFile(newContent)
}

function createNewContent() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', async(err, data) => {
      if (err) {
        console.error('Error reading file:', err)
        return
      }

      const content = data

      // 正则表达式匹配下划线加4位数字的格式
      const matchCustomPattern = /[\u4e00-\u9fa5\w-]+_\d+/g
      const matchSysRegex = /#custom_[a-zA-Z0-9_]+\b/
      let customFiles = []
      let systemFiles = []

      // 分割文本内容，按照自定义模板和系统模板分类
      const files = content.split('\n')

      for (const file of files) {
        const match = file.match(matchCustomPattern)
        if (match) {
          customFiles.push(file)
        } else if (file.match(matchSysRegex)) {
          systemFiles.push(file)
        }
      }
      customFiles = removeIndex(customFiles)
      systemFiles = removeIndex(systemFiles)

      customFiles = arrayDuplicateRemoval(customFiles)
      systemFiles = arrayDuplicateRemoval(systemFiles)

      const customSorted = sortByContentLenght(customFiles)
      const systemSorted = sortByContentLenght(systemFiles)
      console.log('🚀 ~ file: formaterUpdateLog.js:37 ~ fs.readFile ~ systemSorted:', systemSorted, customSorted)
      //       const mergedCustom = customSorted.reduce((acc, curr, currentIndex) => acc + '\n' + `${currentIndex + 1}、${curr}`, '')
      //       const mergedSystem = systemSorted.reduce((acc, curr, currentIndex) => acc + '\n' + `${currentIndex + 1}、${curr}`, '')
      //       const branchName = await getCurrentBranchName()
      //       // 重新排序并输出结果
      //       const sortedResult = `
      // 当前分支：${branchName}\n
      // 🤖更新：系统模板
      //     ${mergedSystem}\n
      // 🚀更新：自定义模板
      //     ${mergedCustom}`

      // resolve(sortedResult)
    })
  })
}

function removeIndex(contents) {
  const indexReg = /(\d+)\、/
  if (Array.isArray(contents)) {
    return contents.map((item, index) => {
      const replaceRes = item.replace(indexReg, '')
      return replaceRes.trim()
    })
  } else {
    return contents.replace(indexReg, '')
  }
}

function arrayDuplicateRemoval(contents) {
  if (Array.isArray(contents)) {
    return [...new Set(contents)]
  }
  return contents
}

function sortByContentLenght(contents) {
  if (Array.isArray(contents)) {
    return contents.sort((a, b) => {
      return a.length - b.length
    })
  }
  return contents
}

function getCurrentBranchName() {
  return new Promise((resolve, reject) => {
    let newDistName = 'Git'
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      }

      if (typeof stdout === 'string') {
        newDistName = stdout.trim()
        console.log(`The branch is `, newDistName)
      }
      resolve(newDistName)
    })
  })
}

function writeContentToLocalFile(content) {
  fs.writeFile(outPutPath, content, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('😀更新了日志文件！')
  })
}

