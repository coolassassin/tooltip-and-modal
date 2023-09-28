import './style.css';

const button_on_hover = document.getElementById("on_hover");
const tooltip_on_hover = document.getElementById("on_hover_tooltip");
const button_on_click = document.getElementById("on_click");
const tooltip_on_click = document.getElementById("on_click_tooltip");
const button_on_click_modal = document.getElementById("on_click_modal");

button_on_hover.addEventListener("mouseover", () => {
    tooltip_on_hover.style["visibility"] = "visible";
})
button_on_hover.addEventListener("mouseout", () => {
    tooltip_on_hover.style["visibility"] = "hidden";
})

button_on_click.addEventListener("click", () => {
    tooltip_on_click.style["visibility"] = (tooltip_on_click.style["visibility"] === "visible") ? "hidden" : "visible";
})

console.log('Hello world');
