function slideShow()
{
	var globals = 
	{
		wrapperID: "slideShowImages",
		buttonNext: "Next Image",
		buttonPrev: "Previous Image",
		slideImages: [],
		slideIndex: 0
	}

	function nextJPG()
	{
		var currentSlide = globals.slideImages[globals.slideIndex];
		++(globals.slideIndex);
		if (globals.slideIndex >= globals.slideImages.length)
		{
      		globals.slideIndex = 0;
    	}

    	var nextSlide = globals.slideImages[globals.slideIndex];

    	var currentSlideOpacity = 1; // Fade the current slide out.
	    var nextSlideOpacity = 0; // Fade the next slide in.
	    var opacityLevelIncrement = 1 / globals.fadeDelay;
	    var fadeActiveSlidesID = setInterval(fadeActiveSlides, globals.fadeDelay);
	    
	    function fadeActiveSlides() {
	      currentSlideOpacity -= opacityLevelIncrement;
	      nextSlideOpacity += opacityLevelIncrement;
	      
	      // console.log(currentSlideOpacity + nextSlideOpacity); // This should always be very close to 1.
	      
	      if (currentSlideOpacity >= 0 && nextSlideOpacity <= 1) {
	        currentSlide.style.opacity = currentSlideOpacity;
	        nextSlide.style.opacity = nextSlideOpacity; 
	      }
	      else {
	        currentSlide.style.opacity = 0;
	        nextSlide.style.opacity = 1; 
	        clearInterval(fadeActiveSlidesID);
	      }        
	}
}