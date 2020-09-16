function subtractTop(elementId) {
	var height = $(elementId).height();
	$(elementId).css('top', (-60-height));
}

$('.drop-menu').each(function() {
	subtractTop(this);
});


//Make drop menus in the right place
function getX(elementId) {
	var element = document.getElementById(elementId);
	var position = element.getBoundingClientRect();
	var x = position.left;
	return x;
}

//Make drop menus in the right place
function getY(elementId) {
	var element = document.getElementById(elementId);
	var position = element.getBoundingClientRect();
	var y = position.bottom + 15;
	return y;
}


$('#nav1').hover(function() {
	$('#drop1').css('left', getX('nav1'));
	$('#drop1').css('top', getY('nav1'));
}, function() {
	$('#drop1').css('left', getX('nav1'));
	$('#drop1').css('top', subtractTop('#drop1'));
});

$('#drop1').hover(function() {
	$('#drop1').css('left', getX('nav1'));
	$('#drop1').css('top', getY('nav1'));
}, function() {
	$('#drop1').css('left', getX('nav1'));
	$('#drop1').css('top', subtractTop('#drop1'));
});

$('#nav2').hover(function() {
	$('#drop2').css('left', getX('nav2'));
	$('#drop2').css('top', getY('nav2'));
}, function() {
	$('#drop2').css('left', getX('nav2'));
	$('#drop2').css('top', subtractTop('#drop2'));
});

$('#nav3').hover(function() {
	$('#drop3').css('left', getX('nav3'));
	$('#drop3').css('top', getY('nav3'));
}, function() {
	$('#drop3').css('left', getX('nav3'));
	$('#drop3').css('top', subtractTop('#drop3'));
});



// Link nav buttons
$("#title-text").click(function() {
	window.location.href = "./MrGarretto's%20Minecraft%20Maps.html";
});




