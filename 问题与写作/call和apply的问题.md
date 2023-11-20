 Object.protoype.toString()
  问题？
 为什么要加上call方法来调用？


 
  ```
  function cat() {}
			cat.prototype = {
				food: 'fish',
				say: function() {
					console.log('I love '+ this.food);
				}
			}
			let blackCat = new cat;
			let whiteDog ={food: 'bone'}
      // 我们不想对它重新定义say方法，
      //那么我们可以通过call或apply用blackCat的say方法
			blackCat.say.call(whiteDog)
			console.log(whiteDog);
  ```