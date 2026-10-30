const soutenancesSectionNavbar = document.querySelectorAll(
  ".soutenances-section-navbar > span"
);

const soutenancesSectionContent = document.querySelectorAll(
  ".soutenances-section__content > div"
);

function disactiveAllSidebarNavlink() {
  soutenancesSectionNavbar.forEach((soutenancesSectionNavlink) => {
    soutenancesSectionNavlink.classList.remove(
      "soutenances-section__active-nav"
    );
  });
}

function hideAllSectionContentItem() {
  soutenancesSectionContent.forEach((soutenancesSectionContentItem) => {
    soutenancesSectionContentItem.classList.add("hide");
  });
}

function reset() {
  disactiveAllSidebarNavlink();
  hideAllSectionContentItem();
}

function defaultState() {
  reset();
  soutenancesSectionNavbar[0].classList.add("soutenances-section__active-nav");
  soutenancesSectionContent[0].classList.remove("hide");
}

defaultState();

soutenancesSectionNavbar.forEach((soutenancesSectionNavlink, index) => {
  soutenancesSectionNavlink.addEventListener("click", () => {
    reset();
    soutenancesSectionNavbar[index].classList.add(
      "soutenances-section__active-nav"
    );
    soutenancesSectionContent[index].classList.remove("hide");
  });
});
