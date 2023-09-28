import './style.css';

function enable_tooltip(tooltip, button) {
    const buttonRect = button.getBoundingClientRect();
    const top = buttonRect.top - buttonRect.height - 20;
    const left = buttonRect.left;
    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
    tooltip.style.display = 'block';
}

function disable_tooltip(tooltip) {
    tooltip.style.display = 'none';
}

const button_hover = document.getElementById("button-hover");
const tooltip_hover = document.getElementById('tooltip-hover');

button_hover.addEventListener('mouseover', () => {
    enable_tooltip(tooltip_hover, button_hover);
});

button_hover.addEventListener('mouseout', () => {
    disable_tooltip(tooltip_hover);
});

const button_click = document.getElementById('button-click');
const tooltip_click = document.getElementById('tooltip-click');

let pressed = false;
document.addEventListener('click', (event) => {
    if (pressed) {
        disable_tooltip(tooltip_click);
        pressed = false;
    } else if (event.target === button_click) {
        enable_tooltip(tooltip_click, button_click);
        pressed = true;
    }
});

const button_modal = document.getElementById("button-modal");
const modal_overlay = document.getElementById("modal-overlay");
const background_overlay = document.getElementById("background-overlay");
function open_modal() {
    modal_overlay.style.display = "flex";
    background_overlay.style.display = "block";
}

function close_modal() {
    modal_overlay.style.display = "none";
    background_overlay.style.display = "none";
}

button_modal.addEventListener("click", open_modal);

const okButton = document.querySelector(".ok");
okButton.addEventListener("click", close_modal);

const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", close_modal);
