function changesite(link1)
{
	document.getElementById("Body").innerHTML=('<p id="waitp">Please wait!</p><form id="downloadform"><input type="button" value="6 seconds" id="button" /></form>');
	downloadbutton(link1)
}

function downloadbutton(link2)
{
	var button=document.getElementById("button")
	setTimeout(function(){button.value="5 seconds"},1000);
	setTimeout(function(){button.value="4 seconds"},2000);
	setTimeout(function(){button.value="3 seconds"},3000);
	setTimeout(function(){button.value="2 seconds"},4000);
	setTimeout(function(){button.value="1 second"},5000);
	setTimeout(function(){document.getElementById("downloadform").innerHTML="<input type='button' value='Skip Ad' id='button' onclick='changesite1(" + link2 + ")' />"},6000);
}

function changesite1(link3)
{
	document.getElementById("Body").innerHTML='<form><input type="button" value="Download Now" onclick="window.location=\'http://www.\' + ' + link3 + '" /></form>'
}