window.addEventListener("load", function(e) {

  let navHam = document.getElementById('nav-ham');
  let firstLevel = document.getElementById('first-level');
  let secondLevelMain = document.getElementById('testtest');
  let secondLevel = document.querySelectorAll('second-level');

//Mobile nav:

let ShowMobileNav = function(e) {
  navHam.classList.toggle('active');
  firstLevel.classList.toggle('active');
  e.stopPropagation();

  
}

navHam.addEventListener("click", ShowMobileNav, false);

//Second level:

let showSecondNav = function(e) {
  // secondLevel.classList.toggle('active');
  let thisul = this.parentNode.querySelector("ul");
  thisul.classList.toggle("active");

  for (let item of secondLevel) {
    if (item !== secondLevel) {
      item.classList.remove('active');
    }
  }

  console.log(thisul.classList);

  const element = document.querySelector('.second');
  if(thisul.className == 'second-level active'){
    element.style.backgroundColor = 'red';
    // element.dataset.content = `\25B2`;
  } else {
    element.style.backgroundColor = 'white';
    // element.dataset.content = `\25BC`;
  }


  e.stopPropagation();



}

secondLevelMain.addEventListener("click", showSecondNav, false);

//Hide mobile navigation bar 

let hideMobileNav = function(e) {
  navHam.classList.remove('active');
  firstLevel.classList.remove('active');
  e.stopPropagation();
  for(let item of secondLevel) {
    item.classList.remove('active');
  }
}

document.documentElement.addEventListener('click', hideMobileNav, false);

}, false)



