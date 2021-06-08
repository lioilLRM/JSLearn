;(function() {
	var datepicker = {
		name:'靓仔'
	};
	
	datepicker.getMonthData = function(year, month) {
			let res = []
			// 先判断有无
			if (!year || !month) {
				let today = new Date();
				year = today.getFullYear();
				month = today.getMonth() + 1;
			}
			
			let firstDayOfMonth = new Date(year, month-1, 1);
			let firstDayOfWeekDay = firstDayOfMonth.getDay(); // 获取当前月1号是周几了。
			if (firstDayOfWeekDay === 0) {
				firstDayOfWeekDay = 7
			}
			
			// 获取年月
			year = firstDayOfMonth.getFullYear();
			month = firstDayOfMonth.getMonth() + 1;
			
			// 第一行需要显示几个上个月的日期。如果当前月的1号是周一，显示0个上个月的日期。
			// 如果当前月的1号是周二，那么显示1个上个月的日期个数。周数十0-6开始的。
			let preMonthDayCount = firstDayOfWeekDay -1; 
			
			
			let lastDayOfPreMonth = new Date(year, month - 1, 0);
			let dateOfPreMonth = lastDayOfPreMonth.getDate();
			
			
			let lastDayofMonth = new Date(year, month, 0); // 下个月的第0天回自动退位。
			let lastDateOfMonth = lastDayofMonth.getDate();// 当月的最后一天。得知道什么时候日期越界了。
			for(let i = 0;i<7*6;i++) {
				let date = i + 1 - preMonthDayCount;
				let showDate = date;
				let thisMonth = month;
				if(date <= 0) {
					thisMonth = month -1; // 上个月
					showDate = dateOfPreMonth + date
				} else if (date > lastDateOfMonth) {
					thisMonth = month + 1;
					showDate = showDate - lastDateOfMonth
				}
				// 修改月份
				if (thisMonth === 0) { // 上一年
					thisMonth = 12;
				}
				if (thisMonth === 13) { // 下一年
					thisMonth = 1;
				}
				res.push({
					month: thisMonth,
					date: date,
					showDate: showDate
				})
			}
			
			return {
				year: year,
				month: month,
				days: res
			}
	};
	
	
	
	
	
	window.datepicker = datepicker
}
)();