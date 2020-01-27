$(function() {
  var a = function() {
    var b = $(window).scrollTop();
    var d = document.getElementById("scroller-anchor").offset().top;
    var c= document.getElementById("scroller");
    if (b>d) {
      c.css({position:"fixed",top:"0px"})
    } else {
      if (b<=d) {
        c.css({position:"relative",top:""})
      }
    }
  };
  $(window).scroll(a);a()
});

//if madsmtm == "cool":
//	mind = blown
//else if madsmtm == "not cool":
//	mind = "it's ok Mads, don't cry :)"
