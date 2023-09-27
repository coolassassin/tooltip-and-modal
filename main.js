import './style.css';

console.log('Hello frontend enjoyers');

const hoverTooltipButton = document.getElementById('hoverTooltipButton');
const clickTooltipButton = document.getElementById('clickTooltipButton');
const openModalButton = document.getElementById('openModalButton');
const tooltip = document.getElementById('tooltip');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');

let isHoveringTooltip = false;

hoverTooltipButton.addEventListener('mouseenter', () => {
    const rect = hoverTooltipButton.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
    tooltip.style.display = 'block';
});

hoverTooltipButton.addEventListener('mouseleave', () => {
    if (!isHoveringTooltip) {
        tooltip.style.display = 'none';
    }
});

tooltip.addEventListener('mouseenter', () => {
    isHoveringTooltip = true;
});

tooltip.addEventListener('mouseleave', () => {
    isHoveringTooltip = false;
    tooltip.style.display = 'none';
});

clickTooltipButton.addEventListener('click', () => {
    const rect = clickTooltipButton.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
    tooltip.style.display = 'block';

    const closeClickHandler = (event) => {
        if (!tooltip.contains(event.target) && event.target !== clickTooltipButton) {
            tooltip.style.display = 'none';
            window.removeEventListener('click', closeClickHandler);
        }
    };

    window.addEventListener('click', closeClickHandler);
});

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
