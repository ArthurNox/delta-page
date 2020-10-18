const OPEN_BUTTON = document.querySelector('.menu');
const CLOSE_BUTON = document.querySelector('.close');
const MENU = document.querySelector('.nav-menu');
const UP = document.querySelector('.top-section');
const DOWN = document.querySelector('.botton-section');

let menuOpen = false;

CLOSE_BUTON.onclick = function(){
  
    MENU.style.visibility = "hidden";
    UP.style.opacity = "1";
    DOWN.style.opacity = "1";

};

OPEN_BUTTON.onclick = function(){
  
  MENU.style.visibility = "visible";
  UP.style.opacity = "0.5";
  DOWN.style.opacity = "0.5";

};


const PREV = document.querySelector('.previus')
const NEXT = document.querySelector('.next')

const ONE = document.querySelector('.slide-one')
const TWO = document.querySelector('.slide-two')
const THREE = document.querySelector('.slide-three')

let index = 0

function plusSlides(n) {
  index = index + n

  if(index < 0){
    console.log('zero')
    index = 3
  } else if(index > 3){
    console.log('quattro')
    index = 1
  }
  console.log(index)

  if(index == 1){
    ONE.style.display = 'flex'
    TWO.style.display = 'none'
    THREE.style.display = 'none'
  } else if (index == 2) {
    ONE.style.display = 'none'
    TWO.style.display = 'flex'
    THREE.style.display = 'none'
  } else if (index == 3) {
    ONE.style.display = 'none'
    TWO.style.display = 'none'
    THREE.style.display = 'flex'
  }

}

