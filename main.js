import './style.css';

console.log(123123123);

const btn1 = document.getElementById("btn1");

// Add event listeners for mouseover and mouseout
btn1.addEventListener("mouseover", () => {

    const { top, height, left } = btn1.getBoundingClientRect();

    const tooltip = document.createElement('div');

    tooltip.className = 'tooltip';
    tooltip.textContent = "This is a tooltip for Button 1!";
    tooltip.id = `${btn1.id}-tooltip`;

    const tooltipTop = top -  height;
    const tooltipLeft = left;

    tooltip.style.top = `${tooltipTop}px`;
    tooltip.left = `${tooltipLeft}px`;

    // Set the tooltip position
    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;

    // Show the tooltip
    tooltip.style.display = "block";

    btn1.appendChild(tooltip);
});

btn1.addEventListener("mouseout", () => {
    const tooltip = document.getElementById(`${btn1.id}-tooltip`);

    btn1.removeChild(tooltip)
});

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", async (event) => {
    const existingTooltip = document.getElementById(`${btn2.id}-tooltip`);

    if (existingTooltip !== null) {
        btn2.removeChild(existingTooltip);
        return;
    }

    const { top, height, left } = btn2.getBoundingClientRect();

    const tooltip = document.createElement('div');
    
    tooltip.className = 'tooltip';
    tooltip.textContent = "This is a tooltip for Button 2!";
    tooltip.id = `${btn2.id}-tooltip`;

    const tooltipTop = top - height;
    const tooltipLeft = left;

    // Set the tooltip position
    tooltip.style.top = `${tooltipTop}px`;
    tooltip.left = `${tooltipLeft}px`;

    // Show the tooltip
    tooltip.style.display = "block";

    btn2.appendChild(tooltip)
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