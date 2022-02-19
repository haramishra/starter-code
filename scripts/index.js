const hamburgerButton = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-nav");
const closeButton = document.querySelector(".close-btn");

hamburgerButton.addEventListener("click", (event) => {
  console.log("running");
  hamburgerButton.classList.add("hidden");
  sideMenu.classList.add("scale-x-100");
});

closeButton.addEventListener("click", (event) => {
  sideMenu.classList.remove("scale-x-100");
  hamburgerButton.classList.remove("hidden");
});

