const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');

  //check for next slide
  if(current.nextElementSibling) {
    //add current to sibling
    current.nextElementSibling.classList.add('current');
  } else {
    //add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}


const prevSlide = () => {
  //get current class
  const current = document.querySelector('.current');
  //remove current class
  current.classList.remove('current');

  //check for prev slide
  if(current.prevElementSibling) {
    //add current to sibling
    current.prevElementSibling.classList.add('current');
  } else {
    //add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};


//button events
next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});