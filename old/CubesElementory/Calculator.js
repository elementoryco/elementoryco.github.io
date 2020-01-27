function plus()
{
	var a,b,c,d,e;

	a=document.getElementById("a").value;

	b=document.getElementById("b").value;

	c=a-0;

	d=b-0;

	e=c+d;

	document.getElementById("sum").innerHTML=e;
}

function minus()
{
	var a,b,c,d,e;

	a=document.getElementById("a").value;

	b=document.getElementById("b").value;

	c=a-1+1;

	d=b-1+1;

	e=c-d;

	document.getElementById("sum").innerHTML=e;
}

function division()
{
	var a,b,c,d,e;

	a=document.getElementById("a").value;

	b=document.getElementById("b").value;

	c=a-1+1;

	d=b-1+1;

	e=c/d;

	document.getElementById("sum").innerHTML=e;
}

function multiplication()
{
	var a,b,c,d,e;

	a=document.getElementById("a").value;

	b=document.getElementById("b").value;

	c=a-1+1;

	d=b-1+1;

	e=c*d;

	document.getElementById("sum").innerHTML=e;
}

function pbut() //plus button
{
	document.getElementById("change").innerHTML="<button style='width:50px;height:30px;font-size:25px;' onclick='plus()'>=</button>";
	document.getElementById("indicator").innerHTML="+";
}

function mibut() //minus button
{
	document.getElementById("change").innerHTML="<button style='width:50px;height:30px;font-size:25px;' onclick='minus()'>=</button>";
	document.getElementById("indicator").innerHTML="-";
}

function dbut() //division button
{
	document.getElementById("change").innerHTML="<button style='width:50px;height:30px;font-size:25px;' onclick='division()'>=</button>";
	document.getElementById("indicator").innerHTML="/";
}

function mubut() //multiplication button
{
	document.getElementById("change").innerHTML="<button style='width:50px;height:30px;font-size:25px;' onclick='multiplication()'>=</button>";
	document.getElementById("indicator").innerHTML="*";
}