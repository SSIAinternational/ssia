const statutModal = document.querySelector(".admission-statut");
const statutBtn = document.querySelector(".btn-statut");
const closeBtn = document.querySelector(".close-btn");

statutBtn.addEventListener("click", () => {
  statutModal.classList.remove("hide");
  statutModal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  statutModal.classList.remove("show");
  statutModal.classList.add("hide");
});
