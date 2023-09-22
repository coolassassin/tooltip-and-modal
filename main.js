import './style.css';

console.log('Hello world');


function showTool(event) {
    const tooltip = document.querySelector("#" + event.currentTarget.id  + " > .tooltip");
    tooltip.style.display = "block";
}

function hideTool(event) {
    const tooltip = document.querySelector("#" + event.currentTarget.id + " > .tooltip");
    tooltip.style.display = "none";
}

document.getElementById("tooltip_on_hover").addEventListener("mouseover", showTool)

document.getElementById("tooltip_on_hover").addEventListener("mouseout", hideTool)

document.getElementById("tooltip_on_click").addEventListener("click", () => {
    const tooltip = document.querySelector("#" + event.currentTarget.id + " > .tooltip");
    if (tooltip.style.display === "block") {
        tooltip.style.display = "none";
    } else {
        tooltip.style.display = "block";
    }
})


const modal = document.getElementById("my_modal")

function open_modal() {
    modal.style.display = "block"
}

function close_modal() {
    modal.style.display = "none"
}

document.getElementById("modal_on_click").addEventListener("click", open_modal)


document.getElementById("modal_button").addEventListener("click", close_modal)

document.getElementsByClassName("close")[0].addEventListener("click", close_modal)

window.onclick = function(event) {
    if (event.target == modal) {
        close_modal()
    }
}
