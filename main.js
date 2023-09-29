import './style.css';

function appendButton(to, buttonText) {
    let button = document.createElement('button');
    button.textContent = buttonText;
    to.appendChild(button);
    return button;
}

const buttonsDiv = document.createElement('div');
buttonsDiv.className = 'buttons';

const hooverButton = appendButton(buttonsDiv, 'Tooltip on hoover');
const clickButton = appendButton(buttonsDiv, 'Tooltip on click');
const openModalButton = appendButton(buttonsDiv, 'Modal on click');

document.getElementById('app').append(buttonsDiv);

hooverButton.setAttribute('tooltip-text', 'I\'m the almighty tooltip!');

clickButton.addEventListener('click', function (event) {
    this.setAttribute('tooltip-text', 'I\'m the almighty tooltip too!');
});
clickButton.addEventListener('mouseenter', function (event) {
    this.removeAttribute('tooltip-text');
});

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-button');
const modalVideoPlayer = document.querySelector('.youtube-video').contentWindow

function controlVideoPlayer(commandName) {
    let command = {
        'event': 'command',
        'func': commandName
    };
    modalVideoPlayer.postMessage(JSON.stringify(command), '*');
}

openModalButton.addEventListener('click', function (event) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    controlVideoPlayer('unMute');
    controlVideoPlayer('playVideo');
});
[closeModalButton, overlay].forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        controlVideoPlayer('pauseVideo');
    });
});
