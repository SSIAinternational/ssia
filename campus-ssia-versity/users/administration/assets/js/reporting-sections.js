const reportingNav = document.querySelectorAll(".reporting-sidebar > span");
const reportingSection = document.querySelectorAll(
  ".reporting-sections__set > div"
);

function removeAllActive() {
  reportingNav.forEach((nav) => {
    nav.classList.remove("reporting-nav__active");
  });
}

function closeAllSection() {
  reportingSection.forEach((section) => {
    section.classList.add("hide");
  });
}

closeAllSection();
document.querySelector(".drop-report--report-droped").classList.remove("hide");
console.log("par défaut appliqué");

reportingNav.forEach((nav, index) => {
  nav.addEventListener("click", () => {
    removeAllActive();
    closeAllSection();
    console.log("dynamique click");

    nav.classList.add("reporting-nav__active");
    reportingSection[index].classList.remove("hide");
    console.log("dynamique applys");
  });
});
