let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slider');
  const reviews = document.querySelectorAll('.review');

  if (index >= reviews.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = reviews.length - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Auto slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);

// Initial slide
showSlide(currentIndex);
