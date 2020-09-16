// Навигиция сайта

var navigationMain = document.querySelector(".navigation");
var navigationToggle = document.querySelector(".navigation__toggle");

navigationMain.classList.remove("navigation--nojs");

navigationToggle.addEventListener("click", function() {
  if (navigationMain.classList.contains("navigation--closed")) {
    navigationMain.classList.remove("navigation--closed");
    navigationMain.classList.add("navigation--open");
  } else {
    navigationMain.classList.add("navigation--closed");
    navigationMain.classList.remove("navigation--open");
  }
});
