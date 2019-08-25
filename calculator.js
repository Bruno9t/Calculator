let res = document.getElementById('res')


function OnlyNum(e)
{
	var tecla=new Number();
	if(window.event) {
		tecla = e.keyCode;
	}
	else if(e.which) {
		tecla = e.which;
	}
	else {
		return true;
	}
	if((tecla >= "97") && (tecla <= "122") || tecla==32){
		return false;
	}
}
function insert(num){
	res.value += num
}


function operation(){
    if(res.value.length==""){
        window.alert('Digite algum número')
        res.value=''
    }else{
        res.value= eval(res.value)
    }
}
function clean(){
    res.value=''
}
function back(){
	res.value = res.value.substr(0,(res.value.length - 1))
	
}








//  var ex = "Exemplo";
//ex.substring(0, 3)

//<input type="text" maxlength="2" onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode))) return true; else return false;">