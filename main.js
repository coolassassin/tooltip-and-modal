// Hover Tooltip Functionality
const hoverElement = document.querySelector('.hover');

hoverElement.addEventListener('mouseover', function() {
    const tooltip = createTooltip('This is a hover tooltip!');
    positionTooltipAbove(hoverElement, tooltip);
});

hoverElement.addEventListener('mouseout', function() {
    removeTooltip('This is a hover tooltip!');
});

// Click Tooltip Functionality
const clickElement = document.querySelector('.click');
let clickTooltip = null;

clickElement.addEventListener('click', function(event) {
    event.stopPropagation();

    if (clickTooltip) {
        clickTooltip.remove();
        clickTooltip = null;
    } else {
        clickTooltip = createTooltip('This is a click tooltip!');
        positionTooltipAbove(clickElement, clickTooltip);

        const removeClickTooltip = function() {
            if (clickTooltip) {
                clickTooltip.remove();
                clickTooltip = null;
                document.removeEventListener('click', removeClickTooltip);
            }
        };

        document.addEventListener('click', removeClickTooltip);
    }
});

// Modal Functionality
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Helper Functions
function createTooltip(text) {
    const tooltip = document.createElement('div');
    tooltip.innerText = text;
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'black';
    tooltip.style.color = 'white';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    document.body.appendChild(tooltip);
    return tooltip;
}

function positionTooltipAbove(target, tooltip) {
    const rect = target.getBoundingClientRect();
    tooltip.style.top = (rect.top + window.scrollY - tooltip.offsetHeight - 10) + 'px';
    tooltip.style.left = rect.left + 'px';
}

function removeTooltip(text) {
    document.querySelectorAll('div').forEach(div => {
        if (div.innerText === text) {
            div.remove();
        }
    });
}
