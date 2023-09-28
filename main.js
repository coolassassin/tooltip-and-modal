const tooltipOnHoverPopup = document.getElementById("tooltip-on-hover-popup")
const tooltipOnClickPopup = document.getElementById("tooltip-on-click-popup")
const tooltipOnHoverButton = document.getElementById("button-tooltip-on-hover")
const tooltipOnClickButton = document.getElementById("button-tooltip-on-click")
const modalOnClickButton = document.getElementById("button-modal-on-click")
const modalPopup = document.getElementById("modal-popup")
const modalPopupOK = document.getElementById("modal-popup-ok")
const modalPopupCancel = document.getElementById("modal-popup-cancel")

const hidden = "hidden"
const visible = "visible"

tooltipOnHoverButton.addEventListener("mouseover", function whenHoverMouse() {
    tooltipOnHoverPopup.style.visibility = visible
})

tooltipOnHoverButton.addEventListener("mouseout", function whenUnhoverMouse() {
    tooltipOnHoverPopup.style.visibility = hidden
})

function makeHiddenIfVisibleAndClickedOutside(element, buttonForElement, eventTarget) {
    if (element.style.visibility !== hidden && !element.contains(eventTarget)) {
        element.style.visibility = hidden
    }
    else if (element.style.visibility === hidden && buttonForElement.contains(eventTarget)) {
        element.style.visibility = visible
    }
    console.log(eventTarget)
    console.log(element)
}

document.addEventListener("click", function whenClick(event) {
    makeHiddenIfVisibleAndClickedOutside(tooltipOnClickPopup, tooltipOnClickButton, event.target)
    makeHiddenIfVisibleAndClickedOutside(modalPopup, modalOnClickButton, event.target)
    if (modalPopup.style.visibility !== hidden && (modalPopupOK.contains(event.target) || modalPopupCancel.contains(event.target)))
        modalPopup.style.visibility = hidden
})

console.log('Hello world');
