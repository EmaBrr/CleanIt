window.addEventListener(
  "load",
  function (e) {
    let navHam = document.getElementById("nav-ham");
    let firstLevel = document.getElementById("first-level");
    let secondLevelMain = document.getElementById("testtest");
    let secondLevel = document.querySelectorAll("second-level");

    //Mobile nav:

    let ShowMobileNav = function (e) {
      navHam.classList.toggle("active");
      firstLevel.classList.toggle("active");
      e.stopPropagation();
    };

    navHam.addEventListener("click", ShowMobileNav, false);

    //Second level:

    let showSecondNav = function (e) {
      let thisul = this.parentNode.querySelector("ul");
      thisul.classList.toggle("active");

      for (let item of secondLevel) {
        if (item !== secondLevel) {
          item.classList.remove("active");
        }
      }

      const element = document.querySelector(".second");
      if (thisul.className == "second-level active") {
        element.classList.add("down");
      } else {
        element.classList.remove("down");
      }
      e.stopPropagation();
    };

    secondLevelMain.addEventListener("click", showSecondNav, false);

    //Hide mobile navigation bar

    let hideMobileNav = function (e) {
      navHam.classList.remove("active");
      firstLevel.classList.remove("active");
      e.stopPropagation();
      for (let item of secondLevel) {
        item.classList.remove("active");
      }
    };

    document.documentElement.addEventListener("click", hideMobileNav, false);
  },
  false
);

///Slider:

// let slider = document.querySelector("#slider");
// let slides = document.querySelectorAll("slide");
// let currentSlide = 0;
// let dots;
// let autoSlide;
// let autoSlidePlay = true;

// function resetAutoSlide() {
//   if (autoSlidePlay) {
//     clearInterval(autoSlide);
//     autoSlide = setInterval(() => {
//       slideTo(increaseSlide(1));
//     }, 5000);
//   }
// }

// function startPause() {
//   let btn = document.getElementById("slider_startPause");
//   if (autoSlidePlay) {
//     autoSlidePlay = false;
//     btn.className = "far fa-play-circle";
//     clearInterval(autoSlide);
//   } else {
//     autoSlidePlay = true;
//     btn.className = "far fa-pause-circle";
//     resetAutoSlide();
//   }
// }

// function addControls() {
//   let arrowLeft = document.createElement("div");
//   arrowLeft.id = "slider_arrow_left";
//   arrowLeft.innerHTML = '<i class="fas fa-angle-left"></i>';
//   arrowLeft.title = "slide" + (increaseSlide(-1) + 1);
//   arrowLeft.addEventListener("click", () => {
//     slideTo(increaseSlide(-1));
//     resetAutoSlide();
//   });
//   slider.append(arrowLeft);
//   let arrowRight = document.createElement("div");
//   arrowRight.id = "slider_arrow_right";
//   arrowRight.innerHTML = '<i class="fas fa-angle-right"></i>';
//   arrowRight.title = "slide" + (increaseSlide(-1) + 1);
//   arrowRight.addEventListener("click", () => {
//     slideTo(increaseSlide(1));
//     resetAutoSlide();
//   });
//   slider.append(arrowRight);

//   let startPauseBtn = document.createElement("i");
//   startPauseBtn.id = "slider_startPause";
//   startPauseBtn.className = "far fa-pause-circle";
//   startPauseBtn.addEventListener("click", () => {
//     startPause();
//   });

//   slider.append(startPauseBtn);

//   let indicators = document.createElement("div");
//   indicators.id = "slider_indicators";
//   for (let i = 0; i < slides.length; i++) {
//     let nr = i;
//     let dot = document.createElement("i");
//     dot.className = "far fa-circle";
//     dot.addEventListener("click", () => {
//       slideTo(nr);
//       resetAutoSlide();
//     });
//     indicators.append(dot);
//   }
//   slider.append(indicators);
//   dots = indicators.children;
// }

// function increaseSlide(nr) {
//   if (nr > 0 && currentSlide + nr >= slides.length) {
//     return 0;
//   } else {
//     if (nr < 0 && currentSlide + nr < 0) {
//       return slides.length - 1;
//     } else {
//       return currentSlide + nr;
//     }
//   }
// }

// function slideTo (nr) {
//   let from = currentSlide * -100 + '%';
//   slides[0].animate(
//     {marginLeft: [from, to]},
//     {duration: 500, easing: "ease-in-out", iterations: 1, fill: "both"});
//     highlightIndicator(nr);
//     currentSlide = nr;
//     addCaptions ();
// }

// function highlightIndicator(nr) {
//   dots[currentSlide].className = 'far fa-circle';
//   dots[nr].className = 'far fa-dot-circle'
// }

// addControls();
// addCaptionArea();
// slideTo(currentSlide);
// resetAutoSlide();


var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  
  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  next.addEventListener("click", function() {
    nextSlide();
  });
  
  prev.addEventListener("click", function() {
    prevSlide();
  });
  
  setInterval(function() {
    nextSlide()
  }, 8000);
  
  };
  
  window.onload = function() {
  responsiveSlider();  
  }