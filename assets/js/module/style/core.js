const domNumber         =   document.querySelector('.home .numberforma b');
const navigIcon   =   document.querySelector('nav.main ul li.icon a');
const navigResponsive   =   document.querySelector('nav.main ul');
let maxnumber           =   164;
let delta               =   Math.ceil((5 * 1000) / maxnumber);
let cpt                 =   0;
 
function countdown() {
    domNumber.innerHTML = ++cpt;
    if(cpt < maxnumber) {
        setTimeout(countdown, delta);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(countdown, delta);
});

navigIcon.onclick = function(e) { 
    e.preventDefault();
    if (navigResponsive.classList.contains('--responsive')) {
        navigResponsive.classList.remove('--responsive');
    } else {
        navigResponsive.classList.add('--responsive');
    }
};