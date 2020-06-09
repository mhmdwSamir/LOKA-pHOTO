const navButton = document.querySelector(".navButton");
const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const cameraImg = document.querySelector(".camera-img");
const missionText = document.querySelector(".mission-text");
/* crad part */
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
navButton.addEventListener("click", changeButton);
function changeButton() {
  navButton.classList.toggle("change");
}
/******/

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  //console.log(scrolled);
  //   const scorable = screen.height;
  var clientHeight = document.querySelector("header").clientHeight;
  // for navBar
  if (scrolled > clientHeight) {
    navMenu.classList.add("custom-navbar");
  } else {
    navMenu.classList.remove("custom-navbar");
  }
  // for image camera
  if (scrolled > 620) {
    // add class to animate
    cameraImg.classList.add("fromRight");
    missionText.classList.add("fromLeft");
  } else {
    // remove the class of yhe animate
    cameraImg.classList.remove("fromRight");
    missionText.classList.remove("fromLeft");
  }
  // for card pricing
  // 7001
  if (scrolled >= 4801) {
    card1.classList.add("moveFromLeft");
    card2.classList.add("moveFromBottom");
    card3.classList.add("moveFromRight");
  } else {
    card1.classList.remove("moveFromLeft");
    card2.classList.remove("moveFromBottom");
    card3.classList.remove("moveFromRight");
  }
});

/** 620  */

/* trying some thing */
