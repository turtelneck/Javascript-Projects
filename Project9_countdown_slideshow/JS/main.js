// timer js
let currentTimeout = -1;

function countdown() {
    if (currentTimeout !== -1) {
    	clearTimeout(currentTimeout);
    	currentTimeout = -1; // if countdown is already running, terminate and reset it
    }

    let count = seconds.value; // user sets a number of seconds

    function tick() {
        timer.innerHTML = count; // displays the current number of seconds left
        if (count === 0) {
        	alert("brzbrzbrzbrzbrzbrbrzbrbzrbzrbzrbrzbzrbzrbrbrbzbrbzbrbrzbbrzb");
        } else {
        	count--;
        	currentTimeout = setTimeout(tick, 1000);
        }
    }
    if (count > 0) {
    	tick();
    }
}

// slideshow js
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
  	slideIndex = 1;
  }    
  if (n < 1) {
  	slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}