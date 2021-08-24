const slider = document.querySelector('.carousel .slider');
const navSlider = document.querySelectorAll('.carousel .nav');
console.log(navSlider);
navSlider.forEach(function(item){
  item.onclick = function(e) { 
    e.preventDefault();
    if (item.classList.contains('nav-left')) {
      slider.scroll({
        left: slider.scrollLeft-450,
        behavior: 'smooth'
      });
    } else {
      slider.scroll({
        left: slider.scrollLeft+450,
        behavior: 'smooth'
      });
    }
  }
});

