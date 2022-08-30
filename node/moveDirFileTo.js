import fs from 'fs'
import path from 'path'

const dir = 'G:/5-1/桃乃木'
const readDirs = fs.readdirSync(dir)
console.log(`readDir：`,readDirs);

let isDirectoryFiles = readDirs.filter(file => {
  const fileStatus = fs.lstatSync(path.join(dir, file));
  // console.log(`fileStatus：`,fileStatus);
  if(fileStatus.isDirectory()) {
    // console.log(`目录文件：`,file);
    return file
  }
})
console.log(`isDirectoryFiles：`,isDirectoryFiles);
