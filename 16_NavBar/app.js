// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const menu = document.querySelector(".links");
const btn = document.querySelector(".nav-toggle");

btn.addEventListener("click", function () {
  menu.classList.toggle("show-links");
});
