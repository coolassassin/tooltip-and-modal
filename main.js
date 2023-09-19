import './style.css';

function tooltip_enable(event) {
    var tooltip = document.createElement("span")
    tooltip.innerHTML = "Hello World!";
    tooltip.setAttribute("class", "tooltip");
    event.srcElement.appendChild(tooltip);
}
function tooltip_disable(event) {
    event.srcElement.removeChild(event.srcElement.lastChild);
}

document.getElementById("on_hover").addEventListener("mouseover", tooltip_enable);
document.getElementById("on_hover").addEventListener("mouseout", tooltip_disable);

document.getElementById("on_click").addEventListener("focus", tooltip_enable);
document.getElementById("on_click").addEventListener("blur", tooltip_disable);
