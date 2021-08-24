const header = document.querySelector('header');
const navTop = document.querySelector('ul.logShop');
let scrollPosition = window.scrollY;

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 20) {
        header.classList.add('--scrolled');
        navTop.style.top = '25px';
        navTop.querySelector('li a').style.display = 'none';
    } else {
        header.classList.remove('--scrolled');
        navTop.style.top = '10px';
        navTop.querySelector('li a').style.display = 'block';
    }

});