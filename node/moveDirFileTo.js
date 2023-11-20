import fs from 'fs'
import path from 'path'

const dir = ''
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
