

class KVue {
	constructor(option) {
		this.$options = option;
		
		this.$data = option.data;
		this.observe(this.$data)
	}
	/**
	 * @param {Object} data
	 * 判断值是否为空值和是否是一个对象
	 * 遍历对象的属性并设置他的值
	 */
	observe(data) {
		console.log(typeof data);
		if(!data || typeof data!=='object'){
			console.log('结束');
			return 
		}
		
		Object.keys(data).forEach(key => {
			console.log('遍历对象属性',key);
			this.defineReative(data,key,data[key])
		})
	}
	
	defineReative(obj,key,value){
		this.observe(value); // 使用递归函数解决深度对象问题。
		Object.defineProperty(obj,key,{
			get(){
				return value
			},
			set(newVal) {
				if(newVal === value) {
					return;
				}
				console.log(`${key}设置了新val:${newVal}`);
				value = newVal
			}
		})
	}
}

