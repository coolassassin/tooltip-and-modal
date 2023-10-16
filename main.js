import './style.css';

/**
 * Creates tooltip label (triangle and box)
 * @param {string} tooltipText
 * @returns {HTMLElement}
 */
const makeTooltipElems = (tooltipText) => {
    const triangle = document.createElement('div');
    triangle.classList.add('tooltip__triangle');
    const box = document.createElement('div');
    box.classList.add('tooltip__box');
    box.textContent = tooltipText || 'No tooltip!';
    box.append(triangle);

    return box;
};

document.querySelectorAll('.tooltip').forEach((item) => {
    const tooltipBox = makeTooltipElems(item.dataset.tooltip);
    item.append(tooltipBox);
});

/**
 * Toggles visibility and opacity on element
 * @param {elem: HTMLElement} elem 
 */
const toggleVisibility = (elem) => {
  if (elem.isHidden) {
    elem.style.visibility = "visible";
    elem.style.opacity = "100%";
  } else {
    elem.style.visibility = "hidden";
    elem.style.opacity = '0';
  }

  elem.isHidden = !elem.isHidden;
};

/**
 * Toggles visibility of tooltip-on-click element
 * @param {HTMLElement} tooltipElem 
 */
const toggleClickTooltip = (tooltipElem) => {
  toggleVisibility(tooltipElem.children[0]);

  tooltipElem.isHidden = !tooltipElem.isHidden;
};

const clickTooltips = document.querySelectorAll('.tooltip_click');

clickTooltips.forEach((item) => {
    item.addEventListener('click', (event) => {
       toggleClickTooltip(item);
    });
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("tooltip_click"))
    return;

  clickTooltips.forEach((item) => {
      if (!item.isHidden) toggleClickTooltip(item);
  });
});


/**
 * Creates modal
 * @param {string} modalHeaderText 
 * @param {string} modalBodyText 
 * @returns {HTMLElement}
 */
const createModal = (modalHeaderText, modalBodyText) => {
  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal-wrapper");
  modalWrapper.addEventListener("click", () => modalWrapper.remove());

  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal-window");
  modalWindow.addEventListener("click", e => e.stopPropagation());

  const modalWindowControls = document.createElement("div");
  modalWindowControls.classList.add("modal-window__controls");
  modalWindowControls.innerHTML = "<button>Cancel</button><button>Ok</button>";

  const modalWindowCross = document.createElement("img");
  modalWindowCross.classList.add("modal-window__cross");
  modalWindowCross.src = "./cross.svg";
  modalWindowCross.addEventListener("click", () => modalWrapper.remove());

  const header = document.createElement("h1");
  header.textContent = modalHeaderText;

  const p = document.createElement("p");
  p.textContent = modalBodyText;

  modalWindow.append(header, p, modalWindowControls, modalWindowCross);
  modalWrapper.append(modalWindow);
  
  return modalWrapper;
};


document.querySelectorAll(".tooltip_modal").forEach((item) => {
  item.addEventListener("click", () => {
    const modal = createModal(item.dataset.header, item.dataset.body);
    document.body.append(modal);
  })
});
