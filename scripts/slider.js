// Get the slider element
const slider = document.querySelector('.slider');

// Set the current slide index
let currentSlide = 0;

// Function to move to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % 4;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);