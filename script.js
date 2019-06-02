var printGradient = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBut = document.getElementById("randomGenerator");
/* Color match on load
function defaultBackground (){
	printGradient.textContent = body.style.background;
	console.log(body.style.background);}
	window.addEventListener("load", defaultBackground);*/
setGradient();

/* Random color generating button function */

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color11 = '#';
  var color12 = '#';
  for (var i = 0; i < 6; i++) {
    color11 += letters[Math.floor(Math.random() * 16)];
  }
  for (var i = 0; i < 6; i++) {
    color12 += letters[Math.floor(Math.random() * 16)];
  }
  color1.value = color11;
  color2.value = color12;
}
/* Set Background Gradient and Prints the values */ 
function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value
	+ ")";

	printGradient.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomGenerator.addEventListener("click", getRandomColor);







