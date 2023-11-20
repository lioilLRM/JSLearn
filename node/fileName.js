const fs = require('fs');
const path = require('path');

// 指定文件夹路径
const folderPath = './node';
let fileNames = [];
// 读取文件夹下的所有文件名
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('读取文件夹出错：', err);
    return;
  }

  // 遍历文件名列表
  files.forEach(file => {
    // 拼接完整的文件路径
    const filePath = path.join(folderPath, file);

    // 读取文件内容
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('读取文件出错：', err);
        return;
      }

      // 输出文件名和内容
      console.log(`文件名： ${file}`, btoa(file));
      fileNames.push(file)
      console.log("🚀 ~ file: fileName.js:29 ~ fs.readFile ~ fileNames:", fileNames)
     let fileNameToBase64Arr =   fileNameToBase64(fileNames)
     saveFileToCurrentPath(fileNameToBase64Arr)
    //  base64ToFileName(fileNameToBase64Arr)
    });
  });
});

function fileNameToBase64(fileNames) {
   let fileNameToBase64Arr = []
  fileNames.forEach(fileName => {
    // let obj = {
    //   fileName: fileName,
    //   base64: btoa(fileName),
    //   `${fileName}`: `${btoa(fileName)}`
    // }
    const obj = {}
    obj[fileName] = btoa(fileName)
    fileNameToBase64Arr.push(obj)
  })
  console.log("🚀 ~ file: fileName.js:42 ~ fileNameToBase64 ~ fileNameToBase64Arr:", fileNameToBase64Arr)
  return fileNameToBase64Arr
}

function base64ToFileName(fileNameToBase64Arr) {
  
}

function saveFileToCurrentPath(fileNameToBase64Arr) {
  // 保存文件到当前路径
  let fileNameToBase64ArrStr = JSON.stringify(fileNameToBase64Arr)
  fs.writeFile('./json.txt', fileNameToBase64ArrStr, err => {
    if (err) {
      console.error('写入文件出错：', err);
      return;
    }
    console.log('写入成功');
  });
}
