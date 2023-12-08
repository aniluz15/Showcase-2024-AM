let overlayElem = document.getElementById('packageoverlay'),
    closeOverlay = document.getElementById('overlay-close1'),
    openOverlay = document.getElementsByClassName('button2');
    openOverlay = document.getElementsByClassName('button3');

closeOverlay.addEventListener("click", overlayToggle);

for(elem of openOverlay){
    elem.addEventListener('click', overlayToggle);
}

function overlayToggle(){
    overlayElem.classList.toggle('visible');
}
