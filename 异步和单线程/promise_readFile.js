const path = require('path')
const fs = require('fs')

/**
 * 来源：深入理解 JavaScript 异步系列（3）—— ES6 中的 Promise
 * https://www.cnblogs.com/wangfupeng1988/p/6515855.html
 */
// console.log(path);
// console.log(fs);
const readFilePromise = function(fileName) {
	return new Promise((resolve,reject)=> {
		fs.readFile(fileName,(err,data)=> {
			if(err) {
				reject(err)
			} else {
				resolve(data.toString())
			}
		})
	})
}
console.log(__dirname);
const fullFileName = path.resolve(__dirname,'./data/data.json')
const fullFileName1 = path.resolve(__dirname,'./data/data1.json')

const res = readFilePromise(fullFileName)
const res1 = readFilePromise(fullFileName1)

// res.then(data => {
// 	console.log(data);
// 	return JSON.parse(data).a
// }).then(a => {
// 	console.log(a);
// }).catch(err=> {
// 	console.log('发送错误了：',err.stack);
// })

// res1.then(data => {
// 	console.log(`res1 json: $(data)`);
// 	return res
// }).then(res => {
// 	console.log('data.json:',res);
// }).catch(error => {
// 	console.log('发生了错误:',error);
// })

/**
 * promise.all()接收一个包含多个 promise 对象的数组
 */
// Promise.all([res,res1]).then(datas => {
// 	// 接收到的 datas 是一个数组，依次包含了多个 promise 返回的内容
// 	console.log(datas);
// })

Promise.race([res1,res]).then(data => {
	console.log('Promise.race()');
	console.log(data);
})




