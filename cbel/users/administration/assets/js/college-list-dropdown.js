const collegeItem = document.querySelector(".colleges-list__item");
const collegeDropdown = document.querySelector(".colleges-list__dropdown");

collegeItem.addEventListener("click", () => {
  collegeDropdown.classList.toggle("hide");
});
