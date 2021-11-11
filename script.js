var circle = document.getElementById("circle");
var Upbtn = document.getElementById("Upbtn");
var Dwnbtn = document.getElementById("Dwnbtn");

var rotateValue = circle.style.transform
var rotateSum;

// ------------------------------------------------

Upbtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
Dwnbtn.onclick = function () {
    rotateSum = rotateValue + "rotate(+90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}