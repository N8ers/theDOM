alert('hello');

var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
	if (isBlue){
  	body.style.background = "white";
  } else {
  	body.style.backgrond = "#3498db";
  }
  isBlue = !isBlue;
}, 1000);

var 