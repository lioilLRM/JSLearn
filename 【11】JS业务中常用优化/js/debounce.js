var count = 0;
var container = document.getElementById('container')

function getUserAction(event){
	console.log('this getUserAction', this,event);
	container.innerHTML= count++;
}


function debounce(func, wait, immediate){
	let timeout;
	console.log("debounce this: ",timeout, this);
	return function(){
		let context = this;
		let args = arguments // 用来保存事件event的参数
		console.log("return fn this: ",this);
		
		if(timeout) clearTimeout(timeout)
		
		if(immediate) {
			var callNow = !timeout
			timeout = setTimeout(function(){
				timeout = null
			}, wait)
			if(callNow) {
				func.apply(context, args)
			}
		} else {
			// timeout = setTimeout(func, wait)
			// 上面的代码this会指向到window
			timeout = setTimeout(function(){
				func.apply(context, args)
			}, wait)
		}
		
	
	}
	
}
/**
 * Q1: this 的指向问题； 查看电脑上的相关资料；
 * q2: 如何改变this的指向呢？有哪几种方式，分别有什么区别？在哪里应用到呢？
 * q3：函数返回一个函数的时候里面this的指向是什么？为什么是container容器
 * q4：为什么使用debounce 调用getUserAction的时候this的指向了window
 */
// this=><div id="container"></div>
/**
 * 
 */
// container.onmousemove = getUserAction

container.onmousemove = debounce(getUserAction, 3300, true)