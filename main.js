function addOrRemoveTooltip(){
    return this.title !== '' ? addTooltip(this) : removeTooltip(this)
}
function addTooltip(elem){
    console.log("add");
    const title = elem.title;
    elem.title = '';
    elem.setAttribute("tooltip", title);
    const tooltipWrap = document.createElement("div");
    tooltipWrap.className = 'tooltip';
    tooltipWrap.appendChild(document.createTextNode(title));
    const padding = 35;
    const linkProps = elem.getBoundingClientRect();
    const tooltipProps = tooltipWrap.getBoundingClientRect();
    const topPos = linkProps.top - (tooltipProps.height + padding);
    tooltipWrap.setAttribute('style','top:'+topPos+'px;'+'left:'+linkProps.left+'px;')
    elem.parentNode.insertBefore(tooltipWrap, elem);
}
function removeTooltip(elem){
    console.log("remove");
    elem.title = elem.getAttribute("tooltip");
    elem.removeAttribute("tooltip");
    document.querySelector(".tooltip").remove();
}

const modal = document.getElementById("myModal")
function showModal(){
    modal.style.display = "block"
}
function closeModal(){
    modal.style.display = "none"
}

document.getElementById("hoverButton").addEventListener("mouseover", addOrRemoveTooltip);
document.getElementById("hoverButton").addEventListener("mouseout", addOrRemoveTooltip);
document.getElementById("clickButton").addEventListener("click", addOrRemoveTooltip);
document.getElementById("modalButton").addEventListener("click", showModal)
document.getElementById("closeModal").addEventListener("click", closeModal)
