(function(){
	let datepicker = window.datepicker;
	let monthData;
	let $wrapper;
	datepicker.buildUI = function(year, month) {
		monthData = datepicker.getMonthData(year, month);
		var html = `<div class="ui_datepicker_header">
				<a class="ui_datepicker_btn ui_datepicker_pre_btn">&lt;</a>
				<a class="ui_datepicker_btn ui_datepicker_next_btn">&gt;</a>
				<span class="ui_datepicker_current_month">${monthData.year}-${monthData.month}</span>
			</div>
			<div class="ui_datepicker_body">
				<table>
					<thead>
						<tr>
							<th>一</th>
							<th>二</th>
							<th>三</th>
							<th>四</th>
							<th>五</th>
							<th>六</th>
							<th>七</th>
						</tr>
					</thead>
					<tbody>`;
			for(var i =0;i<monthData.days.length;i++) {
				var date = monthData.days[i];
				if(i%7 == 0) {	// 0作为1周的开始
					html += `<tr>`
				}
				html += `<td>${date.showDate}</td>`
				if(i%7 == 6) {
					html += `</tr>`
				}
			}
					// `<tr>
					// 		<td>29</td>
					// 		<td>30</td>
					// 		<td>1</td>
					// 		<td>2</td>
					// 		<td>3</td>
					// 		<td>4</td>
					// 		<td>5</td>
					// 	</tr>
						
					html +=`</tbody>
								</table>
							</div>`;
			return html
			
	}
	
	datepicker.render = function(direction) {
		let year, month;
		if(monthData) {
			year = monthData.year;
			month = monthData.month;
		}
		if(direction === 'pre') {
			month--;
		}
		
		if( direction === 'next') {
			month++;
		}
		
		var html = datepicker.buildUI(year,month);
		// <div class="ui_datepicker_wrapper">
		$wrapper = document.querySelector('.ui_datepicker_wrapper')
		if(!$wrapper) {
			$wrapper = document.createElement('div');
			document.body.appendChild($wrapper);
			$wrapper.className = 'ui_datepicker_wrapper';
		}
			$wrapper.innerHTML = html;
	}
	
	datepicker.init = function(input) {
		// $dom.innerHTML = html;
		
		datepicker.render();
		
		var $input = document.querySelector(input);
		var isOpen = false;
		
		$input.addEventListener('click', function(e){
			console.log('click');
			if(isOpen) {
				$wrapper.classList.remove('ui_datepicker_wrapper_show');
				isOpen = false
			} else {
				$wrapper.classList.add('ui_datepicker_wrapper_show');
				var top = $input.offsetTop;
				var left = $input.offsetLeft;
				var height = $input.offsetHeight;
				$wrapper.style.top = top + height + 2 + 'px';
				$wrapper.style.left = left + 'px';
				console.log(`${top}-${left}-${height}`);
				isOpen = true
			}
		})
		
		$wrapper.addEventListener('click', function(e) {
			// console.log(e);
			let $target = e.target;
			if(!$target.classList.contains('ui_datepicker_btn')) {
				console.log($target.innerText);
			}
			
			if($target.classList.contains('ui_datepicker_pre_btn')) {
				datepicker.render('pre');
				console.log('上个月');
			} else if($target.classList.contains('ui_datepicker_next_btn')) {
				datepicker.render('next');
				console.log('下个月');
			}
			
		}, false)
		
	}
	

	
})();