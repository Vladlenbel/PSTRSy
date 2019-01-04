window.onload = function(){
	
	var inp_username = document.querySelector('input[name = username]');
	var inp_status = document.querySelector('input[name = status]');
	var inp_calStart = document.querySelector('input[name = calendarStart]');
	var inp_calFin = document.querySelector('input[name = calendarFin]');
	var inp_depart = document.querySelector('input[name = depart]');
	
	/*информация о добавлении сообщения для работника*/
	var inp_surnMes = document.querySelector('input[name = surnMes]');
	//var inp_typeMes = document.querySelector('input[name = typeMes]');
	var inp_typeMes = document.getElementById("typeMes");
	//var inp_typeCom = document.querySelector('input[name = typeCom]');
	var inp_typeCom = document.getElementById("typeCom");
	
	
	document.querySelector('#but').onclick = function(){
		var params = 'username=' + inp_username.value + 
		'&' + 'status=' + inp_status.value + 
		'&' + 'calStart=' + inp_calStart.value + 
		'&' + 'calFin=' + inp_calFin.value +
		'&' + 'depart=' + inp_depart.value +
		'&' + 'info=' + 'find_info';
		ajaxPost(params);
	}
	
	document.querySelector('#sendMesBut').onclick = function(){
		var params = 'surnMes=' + inp_surnMes.value + 
		'&' + 'typeMes=' + inp_typeMes.options[inp_typeMes.selectedIndex].value + 
		'&' + 'typeCom=' + inp_typeCom.options[inp_typeCom.selectedIndex].value +
		'&' + 'info=' + 'addMes';
		ajaxConfirmPost(params);
	}
}

function ajaxPost(params){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(){
			if(request.readyState == 4 && request.status ==200){
				document.querySelector('#result').innerHTML = request.responseText;
			}
	}
	
	request.open('POST', 'Service');
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send(params);
}

function ajaxConfirmPost(params){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(){
			if(request.readyState == 4 && request.status == 200){
				document.querySelector('#confirm').innerHTML = request.responseText;
			}
	}
	
	request.open('POST', 'AddRecord');
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send(params);
}