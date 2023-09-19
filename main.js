import './style.css'

const modalButton = document.getElementById('modal-button')
const modal = document.getElementById('modal')
const modalCloseButton = document.getElementById('modal-close-button')
const toolTipButtonHover = document.getElementById('tooltip-hover-button')
const toolTipButtonClick = document.getElementById('tooltip-button')

modalButton.addEventListener('click', () => {
    modal.style.display = 'block'
});

modalCloseButton.addEventListener('click', () => {
    modal.style.display = 'none'
});

function addToolTip(event) {
    let tooltip = document.createElement("span")
    tooltip.innerText = event.target.getAttribute("data-tooltip")
    tooltip.setAttribute("class", "tooltip-text")
    event.target.appendChild(tooltip)
}

function removeToolTip(event) {
    let btn = event.target;
    btn.removeChild(btn.lastChild)
}

function addOrRemoveTooltip(event) {
    let checker = event.target.querySelector(".tooltip-text")
    if (checker) {
        removeToolTip(event)
    } else {
        addToolTip(event)
    }
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'
    }
})

toolTipButtonClick.addEventListener("click", addOrRemoveTooltip)

toolTipButtonHover.addEventListener("mouseover", addToolTip)
toolTipButtonHover.addEventListener("mouseout", removeToolTip)
