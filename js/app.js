
//==========SLIDER=======================
const slider = document.querySelector('.slider');
const words = slider.querySelectorAll('p');
let currentWordIndex = 0;

setInterval(() => {
  words[currentWordIndex].classList.remove('active');
  currentWordIndex = (currentWordIndex + 1) % words.length;
  words[currentWordIndex].classList.add('active');
}, 2000);

