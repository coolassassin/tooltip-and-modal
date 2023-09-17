import './style.css';

const modalButton = document.getElementById('modal-button');
const modal = document.getElementById('modal');
const modalCloseButton = document.getElementById('modal-close-button');
const toolTipButton = document.getElementById('tooltip-button');
const toolTipText = document.getElementById('tooltip');

modalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

modalCloseButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

toolTipButton.addEventListener('click', () => {
    if (toolTipText.style.visibility === 'visible') {
        toolTipText.style.visibility = 'hidden'
    } else{
        toolTipText.style.visibility = 'visible'
    }
})

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
