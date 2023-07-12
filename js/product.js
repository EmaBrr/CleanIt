const memorizeButton = document.getElementById('memorize-btn');

memorizeButton.addEventListener('click', () => {


  if (memorizeButton.className == "heart memorized") {
    memorizeButton.classList.remove("memorized");
    memorizeButton.style.backgroundColor = '#294431'
  } else {
    memorizeButton.classList.add("memorized");
    memorizeButton.style.backgroundColor = '#9eb89f'
  }

});