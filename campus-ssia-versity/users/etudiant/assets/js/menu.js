const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".fa-angle-up");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  menu.classList.remove("hide");
});

header.addEventListener("click", () => {
  menu.classList.add("hide");
});
