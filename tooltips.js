
const hoverButton = document.getElementById("hover-button")
hoverButton.onmouseover = () => {
    const tooltip = hoverButton.firstElementChild
    if (tooltip != null)
        tooltip.style.visibility = "visible"
}
hoverButton.onmouseleave = () => {
    const tooltip = hoverButton.firstElementChild
    if (tooltip != null)
        tooltip.style.visibility = "hidden"
}
