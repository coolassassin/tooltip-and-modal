import './style.css';

console.log('Hello world');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const tooltip1 = document.getElementById('tooltip1');
const tooltip2 = document.getElementById('tooltip2');
const modal = document.getElementById('modal');
const closeButton = modal.querySelector('.close');

button1.addEventListener('mouseover', function() {
    tooltip1.style.display = 'block';
});

button1.addEventListener('mouseout', function() {
    tooltip1.style.display = 'none';
});

let tooltip2Visible = false;
button2.addEventListener('click', function() {
    if (tooltip2Visible) {
        tooltip2.style.display = 'none';
    } else {
        tooltip2.style.display = 'block';
    }
    tooltip2Visible = !tooltip2Visible;
});

button3.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});
