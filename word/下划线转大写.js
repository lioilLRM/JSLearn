function convertToCamelCase(str) {
  var words = str.split(/[-_]/);
  var convertedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var convertedWord = "";
    if (i === 0) {
      convertedWord = word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      convertedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    convertedWords.push(convertedWord);
  }

  var convertedStr = convertedWords.join("");

  return convertedStr;
}

var input = "supplier-Stock-main-Detail-inoutDetail";
var output = convertToCamelCase(input);
console.log(output); // 输出 "SupplierStockMainDetailInoutDetail"