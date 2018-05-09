// var h1 = document.querySelector("h1");
// h1.style.color = "pink";

// var body = document.querySelector("headOn");
// var isBlue = false;

// setInterval(function(){
// 	if (isBlue){
//   	body.style.background = "white";
//   } else {
//   	body.style.backgrond = "#3498db";
//   }
//   isBlue = !isBlue;
// }, 1000);

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
document.body.style.background = randomColor();
})