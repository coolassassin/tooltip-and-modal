
function setChildVisibility(element, visibility) {
    const child = element.firstElementChild
    if (child != null)
        child.style.visibility = visibility
}

const hoverButton = document.getElementById("hover-button")
hoverButton.onmouseover = () => {
    setChildVisibility(hoverButton, "visible")
}
hoverButton.onmouseleave = () => {
    setChildVisibility(hoverButton, "hidden")
}

const clickButton = document.getElementById("click-button")
clickButton.onclick = () => {
    setChildVisibility(clickButton, "visible")
    setTimeout(() => {
        setChildVisibility(clickButton, "hidden")
    }, 2000)
}

function openModal() {
    var dialog = document.getElementById("modal-dialog")
    if (dialog == null)
        dialog = document.createElement("dialog")
    dialog.id = "modal-dialog"
    dialog.innerHTML = `
    hi modal, i'm dad <br/>
    <button onclick="document.getElementById('modal-dialog').close()">bye modal</button>
    `
    document.body.appendChild(dialog)
    dialog.showModal()
}
