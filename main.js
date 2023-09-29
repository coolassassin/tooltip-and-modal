import './style.css';

console.log('Hello world');

function appendButton(to, buttonText) {
    let button = document.createElement('button');
    button.textContent = buttonText;
    to.appendChild(button);
    return button;
}

let buttonsDiv = document.createElement('div');
buttonsDiv.className = 'buttons';

let hooverButton = appendButton(buttonsDiv, 'Tooltip on hoover');
let clickButton = appendButton(buttonsDiv, 'Tooltip on click');
let modalButton = appendButton(buttonsDiv, 'Modal on click');

document.getElementById('app').append(buttonsDiv);

hooverButton.setAttribute('tooltip-text', 'I\'m the almighty tooltip!');

clickButton.addEventListener('click', function (event) {
    this.setAttribute('tooltip-text', 'I\'m the almighty tooltip too!');
});
clickButton.addEventListener('mouseenter', function (event) {
    this.removeAttribute('tooltip-text');
});

modalButton.addEventListener('click', function (event) {
    console.log(this);
});
