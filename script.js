
//Selects all panesl

const panels = document.querySelectorAll('.panel');


//Function to add class of open to clicked panel
function toggleOpen() {
    this.classList.toggle('open');
}


//Function to add class of open-active to open panel once transition ends
function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')   
    }
}

//Event listeners on panels

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
