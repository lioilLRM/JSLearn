const fs = require('fs')
const clipboardy = require('clipboardy')

const filePath = 'E:/company/guniu/web3.0/frontend/2023年04月03日09时52分-350-custom-3522-1-dist.zip'

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  clipboardy.writeSync(data)
  console.log(`File contents copied to clipboard.`)
})
