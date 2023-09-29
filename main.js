//import './style.css';

function displayHint(event) {
    let hintToShow = event.target.querySelector("div.hintPad")
    hintToShow.style.opacity = "1";
}

function hideHint(event) {
    let hintToShow = event.target.querySelector("div.hintPad")
    hintToShow.style.opacity = "0";
}

let hints = Array.from(document.querySelectorAll("[hint]"))
for (let element of hints) {
    let hintDiv = document.createElement("div");
    hintDiv.classList.add('hintPad')
    hintDiv.innerText = element.getAttribute("hint")
    element.appendChild(hintDiv)
    let type = element.getAttribute("hintType")
    if (type == "hover") {
        element.addEventListener("mouseenter", displayHint)
        element.addEventListener("mouseleave", hideHint)
    }
    else if (type == "click") {
        element.addEventListener("click", function (event) {
            // console.log(event.target.clicked)
            if (event.target.clicked) {
                hideHint(event);
                event.target.clicked = false;
            }
            else {
                displayHint(event);
                event.target.clicked = true;
            }

        })
    }
    else if (type == "module") {
        element.addEventListener("click", function (event) {
            let moduleWindow = document.createElement("div")
            let extra = document.createElement("div")
            let cross = document.createElement('button')
            cross.innerText = 'x';
            cross.classList.add("cross")
            extra.classList.add("extra")
            let buttonsDiv = document.createElement('div')
            buttonsDiv.classList.add("buttonsLine")
            let buttonConfirm = document.createElement("button")
            buttonConfirm.innerText = "OK"
            buttonConfirm.classList.add("buttonConfirm")
            let buttonDecline = document.createElement("button")
            buttonDecline.classList.add("buttonDecline")
            buttonDecline.innerText = "Cancel"
            moduleWindow.innerText = element.getAttribute("hint")
            extra.innerText = element.getAttribute("hintExtra")
            moduleWindow.classList.add("moduleWindow")
            moduleWindow.appendChild(cross)
            moduleWindow.appendChild(extra)
            buttonsDiv.appendChild(buttonDecline)
            buttonsDiv.appendChild(buttonConfirm)
            moduleWindow.appendChild(buttonsDiv)
            document.body.appendChild(moduleWindow)

            const hideFunc = function () {
                moduleWindow.style.visibility = "hidden";
            }
            cross.addEventListener("click", hideFunc)
            buttonConfirm.addEventListener("click", hideFunc)
            buttonDecline.addEventListener("click", hideFunc)

        })

    }

}

