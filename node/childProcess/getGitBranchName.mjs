import { exec } from 'child_process'
import { execSync } from 'child_process'
import path from 'path'

import fs from 'fs'
const __dirname = path.resolve()

function getBranchName() {
  return new Promise((resolve, reject) => {
    const result = {}
    const cp = exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
      if (err) {
        console.error('error: ', err)
        reject(err)
        return
      }
      if (stdout) {
        result.stdout = stdout.trim()
        resolve(result)
      }
    })
    cp.on('exit', (code, signal) => {
      console.log(`exit：`)

      result.code = code
      result.signal = signal
      if ('stdout' in result) {
        resolve(result)
      }
    })
  })
}

function reName(branchName) {
  return new Promise((resolve, reject) => {
    // console.log(`path：I:\代码库\JavaScript\JS学习\node\childProcess\testName.txt`)
    // const newName = branchName + `-${getCnCurrentDate()}.txt`
    // const oldFileName = path.resolve(__dirname, './node/childProcess/git.txt')
    // const newFileName = path.resolve(__dirname, `./node/childProcess/${newName}`)
    const newName = branchName + `-${getCnCurrentDate()}.md`
    const oldFileName = path.resolve(__dirname, './rename.md')
    const newFileName = path.resolve(__dirname, `./${newName}`)

    fs.rename(oldFileName, newFileName, (error) => {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('重命名成功！')
        resolve('ok')
      }
    })
  })
}
function getCnCurrentDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  console.log(`year, month, day：`, year, month, day)
  return `${year}年${month}月${day}日`
}
getCnCurrentDate()
getBranchName().then(name => {
  console.log(`name：`, name.stdout)
  reName(name.stdout).then(res => {
    console.log(`res：`, res)
  })
})

