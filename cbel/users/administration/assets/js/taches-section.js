const taskNav = document.querySelectorAll(".taches-sidebar > span");
const sections = document.querySelectorAll(".taches-sections__set > div");

function removeAllActive() {
  taskNav.forEach((navLink) => {
    navLink.classList.remove("taches-nav__active");
  });
}

function closeAllSection() {
  sections.forEach((sectionItem) => {
    sectionItem.classList.add("hide");
  });
}

closeAllSection();
document.querySelector(".taches-sections__create").classList.remove("hide");

taskNav.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    removeAllActive();
    closeAllSection();

    navLink.classList.add("taches-nav__active");
    sections[index].classList.remove("hide");
  });
});
