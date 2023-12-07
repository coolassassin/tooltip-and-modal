import './style.css';

const buttonClick = document.getElementById('button-click');
const buttonHover = document.getElementById("button-hover");
const buttonModal = document.getElementById("button-modal");

const tooltipClick = document.getElementById('tooltip-click');
const tooltipHover = document.getElementById('tooltip-hover');
const modal = document.getElementById("modal");
const acceptButton = document.querySelector(".accept");
const cancelButton = document.querySelector(".decline");

let isClicked = false;
buttonClick.addEventListener('click', () => {
    if (isClicked) {
        tooltipClick.style.display = 'none';
        isClicked = false;
    } else {
        tooltipClick.style.display = 'block'
        isClicked = true;
    }
});
buttonHover.addEventListener('mouseenter', () => tooltipHover.style.display = 'block');
buttonHover.addEventListener('mouseleave', () => tooltipHover.style.display = 'none');
buttonModal.addEventListener("click", () => modal.style.display = "flex");
acceptButton.addEventListener("click", () => modal.style.display = "none");
cancelButton.addEventListener("click", () => modal.style.display = "none");
