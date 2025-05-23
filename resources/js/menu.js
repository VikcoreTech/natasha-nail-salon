const hamMenu = document.getElementById('hamMenu');
const navMenu = document.getElementById('navMenu');

hamMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // Toggle the 'show' class
});

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('show');
}

var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));


$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");

  // Loop back to the first slide if n exceeds the number of slides
  if (n > slides.length) { slideIndex = 1 }
  // Loop back to the last slide if n is less than 1
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all thumbnails
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and highlight the corresponding thumbnail
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
