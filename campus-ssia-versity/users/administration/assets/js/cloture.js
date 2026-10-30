const clotureBtn = document.querySelector(".cloture-btn");
const clotureForm = document.querySelector(".cloture-form");

clotureBtn.addEventListener("click", () => {
  clotureForm.classList.toggle("hide");
  clotureForm.classList.toggle("show");
});
