import './style.css';

const button_on_hover = document.getElementById("on_hover");
const tooltip_on_hover = document.getElementById("on_hover_tooltip");
const button_on_click = document.getElementById("on_click");
const tooltip_on_click = document.getElementById("on_click_tooltip");
const button_on_click_modal = document.getElementById("on_click_modal");
const tooltip_modal = document.getElementById("tooltip_modal")
const button_modal_tooltip_ok = document.getElementById("modal_tooltip_ok")
const button_modal_tooltip_close = document.getElementById("modal_tooltip_close")

button_on_hover.addEventListener("mouseover", () => {
    tooltip_on_hover.classList.remove("hide");
})
button_on_hover.addEventListener("mouseout", () => {
    tooltip_on_hover.classList.add("hide");
})

button_on_click.addEventListener("click", () => {
    if (tooltip_on_click.classList.contains("hide")) {
        tooltip_on_click.classList.remove("hide");
    } else {
        tooltip_on_click.classList.add("hide");
    }
})

button_on_click_modal.addEventListener("click", () => {
    tooltip_modal.classList.remove("hide");
})

function close_modal() {
    tooltip_modal.classList.add("hide");
}

button_modal_tooltip_ok.addEventListener("click", close_modal);
button_modal_tooltip_close.addEventListener("click", close_modal);
