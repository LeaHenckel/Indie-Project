$(document).ready(function() {
    // Interval for automatic slide transition (in milliseconds)
    var interval = 3000; // 3 seconds
  
    // Function to switch slides
    function switchSlide() {
      var currentSlide = $('.slide:visible');
      var nextSlide = currentSlide.next();
  
      if (nextSlide.length === 0) {
        // If it's the last slide, switch to the first slide
        nextSlide = $('.slide:first-child');
      }
  
      currentSlide.fadeOut();
      nextSlide.fadeIn();
    }
  
    // Start the automatic slide transition
    setInterval(switchSlide, interval);
  });