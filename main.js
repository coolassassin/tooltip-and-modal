import './style.css';

console.log(123123123);

const btn1 = document.getElementById("btn1");
const tt = document.getElementById("tt");

// Add event listeners for mouseover and mouseout
btn1.addEventListener("mouseover", () => {
    const buttonRect = btn1.getBoundingClientRect();

    const tooltipTop = buttonRect.top - buttonRect.height; 
    const tooltipLeft = buttonRect.left;

    // Set the tooltip position
    tt.style.top = `${tooltipTop}px`;
    tt.style.left = `${tooltipLeft}px`;

    // Show the tooltip
    tt.style.display = "block";
});

btn1.addEventListener("mouseout", () => {
    // Hide the tooltip when the mouse leaves the button
    tt.style.display = "none";
});

const btn2 = document.getElementById("btn2");


btn2.addEventListener("click", (event) => {
    if(tt.style.display == "block"){
        tt.style.display = "none";
        return;
    }

    const buttonRect = btn2.getBoundingClientRect();

    const tooltipTop = buttonRect.top - buttonRect.height; 
    const tooltipLeft = buttonRect.left;

    // Set the tooltip position
    tt.style.top = `${tooltipTop}px`;
    tt.style.left = `${tooltipLeft}px`;

    // Show the tooltip
    tt.style.display = "block";
});

const openModalBtn = document.getElementById("btn3");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});