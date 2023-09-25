import './style.css';

let btn2 = document.getElementById("tooltip-2");
let tooltip2 = document.getElementById("tooltip-content-2");
let btn3 = document.getElementById("modal-button");
let modal = document.getElementById("modal-window");

function updateTooltip2(event) {
  if (event.target == btn2 && tooltip2.style.visibility != "visible") {
    tooltip2.style.visibility = "visible";
  } else {
    tooltip2.style.visibility = "hidden";
  }
  if (event.target == btn3 && modal.style.display == "none") {
  	modal.style.display = "block";
  } else if (event.target != modal) {
  	modal.style.display = "none";
  }
}


document.addEventListener("click", updateTooltip2);

