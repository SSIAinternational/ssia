"useStrict";

const nav = document.querySelectorAll(".reclamations-sidebar > span");
const sections = document.querySelectorAll(".reclamations-table-set > div");

function disableAllActive() {
  nav.forEach((navLink) => {
    navLink.classList.remove("reclamations-nav__active");
  });
}

function hideAllSections() {
  sections.forEach((sectionItem) => {
    sectionItem.classList.add("hide");
  });
}

hideAllSections();
document.querySelector(".reclamations-pending-table").classList.remove("hide");

nav.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    disableAllActive();
    hideAllSections();

    navLink.classList.add("reclamations-nav__active");

    sections[index].classList.remove("hide");
  });
});
