const menuToggle = document.querySelector(".hamburger");
const menuItem = document.querySelector('.nav-main');
const closeNav = document.querySelector(".closetoggle");
const primaryNav = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-toggle");
const buttons = document.querySelectorAll(".button-three");
const naviationBar = document.querySelector(".navigation");
const loader = document.querySelector(".preloader");
let lastScrollY = window.scrollY;
const audio = document.getElementById('audio');
const playpauseBtn = document.getElementById('playpause');
let count = 0;





function playPause(){
    if (count == 0) {
        count = 1;
        audio.play();
    }else {
        count = 0;
        audio.pause();
    }
}




window.addEventListener("load", function() {
  loader.style.display = "none";
});


window.addEventListener("scroll", function() {

  if (lastScrollY < window.scrollY) {
    naviationBar.classList.add("nav--hidden");
  } else {
    naviationBar.classList.remove("nav--hidden");
  }

  lastScrollY= window.scrollY;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false); 
    }

});


