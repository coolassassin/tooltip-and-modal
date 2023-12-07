import './style.css';

let clickButton = document.getElementById('clickButton');
let hoverButton = document.getElementById('hoverButton');
let modalButton = document.getElementById('modalButton');

let modal = document.getElementById("modalWin");
let acceptButton = document.querySelector(".ok");
let cancelButton = document.querySelector(".cancel");

function toggleTooltip(element) {
    element.style.display = (element.style.display === 'none' || !element.style.display) ? 'block' : 'none';
}

function hideModal() {
    modal.style.display = 'none';
}

clickButton.addEventListener('click', () => toggleTooltip(clickTooltip));
hoverButton.addEventListener('mouseenter', () => toggleTooltip(hoverTooltip));
hoverButton.addEventListener('mouseleave', () => toggleTooltip(hoverTooltip));
modalButton.addEventListener('click', () => modal.style.display = 'flex');
acceptButton.addEventListener('click', hideModal);
acceptButton.addEventListener('click', hideModal);
cancelButton.addEventListener('click', hideModal);
