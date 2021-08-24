const sidebar = document.querySelector('.article_preview .sidebar');
let startScroll;
window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    if(window.innerWidth > 850) {
        startScroll = 400;
    } else {
        startScroll = 800;
    }
    if (scrollPosition >= startScroll) {
        sidebar.classList.add('--scrolled');
    } else {
        sidebar.classList.remove('--scrolled');
    }
});

alert(largeur);