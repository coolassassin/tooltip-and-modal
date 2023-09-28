import './style.css';

let btn1 = document.getElementById("tooltip-1");
let tooltip1 = document.getElementById("tooltip-content-1");
let btn2 = document.getElementById("tooltip-2");
let tooltip2 = document.getElementById("tooltip-content-2");
let btn3 = document.getElementById("modal-button");
let modal = document.getElementById("modal-window");
let shadow = document.getElementById("shadow");
let modalCloseButton = document.getElementById("modal-close-button");

function updateOnClick(event) {
	if (btn2.contains(event.target) && tooltip2.style.display !== "block") {
		tooltip2.style.display = "block";
	} else {
		tooltip2.style.display = "none";
	}
	if (btn3.contains(event.target) && modal.style.display !== "block") {
		shadow.style.display = "block";
	} else if (!modal.contains(event.target) || modalCloseButton.contains(event.target)) {
		shadow.style.display = "none";
	}
}

function updateOnHover(event) {
	if (btn1.contains(event.target)) {
		tooltip1.style.display = "block";
	} else {
		tooltip1.style.display = "none";
	}
}


document.addEventListener("click", updateOnClick);
document.addEventListener("mouseover", updateOnHover);

