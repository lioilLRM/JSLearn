function convertToKebabCase(str) {
  // 将首字母大写转换为小写
  var convertedStr = str.replace(/^[A-Z]/, function (match) {return match.toLowerCase()} );
  
  // 将大写字母前添加连字符
  convertedStr = convertedStr.replace(/[A-Z]/g,function (match) {return '-' + match.toLowerCase()});
  
  return convertedStr;
}

// 示例用法
const input = "production-work-order-report";
const output = convertToKebabCase(input);
console.log(output); // 输出 "outsource-order-report"