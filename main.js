import './style.css';

function getRect(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
    };
}

function setTipPosition(element, tip) {
    const parentRect = getRect(element.parentElement);
    const tooltipRect = getRect(tip);
    const placement = element.getAttribute('placement');
    if (placement.includes('top')) {
        tip.style.top = `${parentRect.top - tooltipRect.height - 5}px`;
    }
    if (placement.includes('bottom')) {
        tip.style.top = `${parentRect.top + parentRect.height + 5}px`;
    }
    if (placement.includes('Left')) {
        tip.style.left = `${parentRect.left}px`;
    }
    if (placement.includes('Right')) {
        tip.style.left = `${parentRect.left + parentRect.width - tooltipRect.width}px`;
    }
}

function setTipTrigger(element, tip) {
    tip.setAttribute('clicked', false);
    switch (element.getAttribute('trigger')) {
        case 'hover':
            tip.classList.add('tooltip-hover');
            break;
        case 'click':
            tip.classList.add('tooltip-click');
            element.parentElement.addEventListener('click', (_) => {
                if (tip.getAttribute('clicked') === 'true') {
                    tip.style.visibility = 'hidden';
                    tip.setAttribute('clicked', false);
                } else {
                    tip.style.visibility = 'visible';
                    tip.setAttribute('clicked', true);
                }
            });
            break;
        default:
            console.error(`Trigger ${element.getAttribute('trigger')} isn't supported. Sorry :(`);
    }
}

const tooltips = Array.from(document.getElementsByTagName('tooltip'));
tooltips.forEach((element) => {
    const tip = document.createElement('div');
    tip.innerText = element.innerHTML;
    tip.classList.add('tooltip');
    element.parentElement.appendChild(tip);

    setTipTrigger(element, tip);
    setTipPosition(element, tip);

    addEventListener('resize', (_) => {
        setTipPosition(element, tip);
    });
});

const modals = Array.from(document.querySelectorAll('[open-modal]'));
modals.forEach((element) => {
    element.addEventListener('click', (_) => {
        const modal = document.getElementById(element.getAttribute('open-modal'));
        modal.style.visibility = 'visible';
    });
});

const modal_bgs = Array.from(document.querySelectorAll('.modal-bg'));
modal_bgs.forEach((element) => {
    element.addEventListener('click', (_) => {
        const modal = element.parentElement;
        modal.style.visibility = 'hidden';
    });
});
