const navs = document.querySelectorAll(".entretiens-sidebar > span");
const sections = document.querySelectorAll(".entretiens-sections__set > div");

function removeAllActive() {
  navs.forEach((navlink) => {
    navlink.classList.remove("entretiens-nav__active");
  });
}

function closeAllSection() {
  sections.forEach((sectionItem) => {
    sectionItem.classList.add("hide");
  });
}

/*Affichage par defaut*/

function activeFirstNavlink() {
  removeAllActive();
  navs[0].classList.add("entretiens-nav__active");
}

function showFirstSection() {
  closeAllSection();
  sections[0].classList.remove("hide");
}

activeFirstNavlink();
showFirstSection();

/*Affichage au click*/

navs.forEach((navlink, index) => {
  navlink.addEventListener("click", () => {
    closeAllSection();
    removeAllActive();
    navlink.classList.add("entretiens-nav__active");
    sections[index].classList.remove("hide");
  });
});
