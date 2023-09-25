import './style.css';

let btn2 = document.getElementById("tooltip-2");
let tooltip2 = document.getElementById("tooltip-content-2");
let btn3 = document.getElementById("modal-button");
let modal = document.getElementById("modal-window");
let shadow = document.getElementById("shadow");
let modalCloseButton = document.getElementById("modal-close-button");

function updateTooltip2(event) {
	console.log(event.target);
  if (event.target == btn2 && tooltip2.style.display != "block") {
    tooltip2.style.display = "block";
  } else {
    tooltip2.style.display = "none";
  }
  if (event.target == btn3 && modal.style.display != "block") {
  	modal.style.display = "block";
  	shadow.style.display = "block";
  } else if (!modal.contains(event.target) || event.target == modalCloseButton) {
  	modal.style.display = "none";
  	shadow.style.display = "none";
  }
}


document.addEventListener("click", updateTooltip2);

