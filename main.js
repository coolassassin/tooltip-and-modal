import './style.css';

function tooltip_enable(event) {
    var tooltip = document.createElement("span")
    tooltip.innerHTML = "Hello World!";
    tooltip.className = "tooltip";
    this.appendChild(tooltip);
}
function tooltip_disable(event) {
    this.removeChild(this.lastChild);
}

const modal = document.getElementById("modal");

function open_modal(event) {
    modal.style.display = "block";
}
function close_modal(event) {
    modal.style.display = "none";
}

document.getElementById("on_hover").addEventListener("mouseover", tooltip_enable);
document.getElementById("on_hover").addEventListener("mouseout", tooltip_disable);

document.getElementById("on_click").addEventListener("focus", tooltip_enable);
document.getElementById("on_click").addEventListener("blur", tooltip_disable);

document.getElementById("show_modal").addEventListener("click", open_modal);
document.getElementById("modal_ok").addEventListener("click", close_modal);