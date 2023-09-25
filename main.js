import './style.css';


const modal = document.getElementById("modal");

function open_modal(event) {
    this.blur()
    this.classList.toggle("clicked");
    modal.style.display = "block";
}
function close_modal(event) {
    this.blur()
    this.classList.toggle("clicked");
    modal.style.display = "none";

}

document.getElementById("modal_button").addEventListener("click", open_modal)
document.getElementById("close_modal").addEventListener("click", close_modal)
document.getElementById("ok_modal").addEventListener("click", close_modal)
document.getElementById("cancel_modal").addEventListener("click", close_modal)



function add_tooltip(event) {
    this.blur()
    const tooltip = document.createElement("span")
    tooltip.innerHTML = "Hello World!";
    tooltip.className = "tooltip";
    this.appendChild(tooltip);
}

function remove_tooltip(event) {
    this.blur()
    this.removeChild(this.lastChild)
}

let counter = 0;
function handle_tooltip(event) {
    this.blur()
    this.classList.toggle("clicked");
    // I didn't understand how to call methods from above....(
    if (counter++ % 2 === 0) {
        const tooltip = document.createElement("span")
        tooltip.innerHTML = "Hello World!";
        tooltip.className = "tooltip";
        this.appendChild(tooltip);
    } else {
        this.removeChild(this.lastChild)
    }
}



document.getElementById("on_hover").addEventListener("mouseover", add_tooltip)
document.getElementById("on_hover").addEventListener("mouseout", remove_tooltip)

document.getElementById("on_click").addEventListener("click", handle_tooltip)
// document.getElementById("on_click").addEventListener("", remove_tooltip)
