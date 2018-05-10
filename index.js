function headToggle() {
  var el = document.getElementById("headOn"); 
	el.classList.toggle("headOn");
	var cb1 = dicument.getElementById("cb1");
	cb1.classList.toggle("colorbtm1");
	var cb2 = dicument.getElementById("cb2");
	cb2.classList.toggle("colorbtm2");
	var cb3 = dicument.getElementById("cb3");
	cb3.classList.toggle("colorbtm3");
	var cb4 = dicument.getElementById("cb4");
	cb4.classList.toggle("colorbtm4");
}
setInterval(function(){
  headToggle(); 
}, 2000);

var btnClick = document.querySelector("#btnClick");
function randomColor(){
	var r = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
btnClick.addEventListener("click", function(){
document.body.style.background = randomColor();
})

var btnHover = document.querySelector("#btnHover");
btnHover.addEventListener("mouseover", function(){
document.body.style.background = randomColor();
})
btnHover.addEventListener("mouseout", function(){
document.body.style.background = "white";
})