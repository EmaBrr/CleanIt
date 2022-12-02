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

//slider:

let slideIndex = 0;

showSlide();

function showSlide() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  console.log(dots.length);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlide, 5000);
}