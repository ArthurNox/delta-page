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
