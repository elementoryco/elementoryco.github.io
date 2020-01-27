function loadup()
{
	var loader=document.getElementById('box')
	loader.innerHTML="<div class='Loader Loader1'></div><div class='Loader Loader2'></div><div class='Loader Loader3'></div><div class='Loader Loader4'></div><div class='Loader Loader5'></div><div class='Loader Loader6'></div><div class='Loader Loader7'></div><div class='Loader Loader8'></div>";
	setTimeout(function(){loader.innerHTML="<div class='Loader Loader11'></div><div class='Loader Loader22'></div><div class='Loader Loader33'></div><div class='Loader Loader44'></div><div class='Loader Loader55'></div><div class='Loader Loader66'></div><div class='Loader Loader77'></div><div class='Loader Loader88'></div>"},1500);
}