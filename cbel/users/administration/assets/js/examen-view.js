const examenItem = document.querySelector(".examen-attente .examen-item");
const examenValidationModal = document.querySelector(
  ".examen-validation__modal"
);
const closeExamenModal = document.querySelector(
  ".examen-view__close .fa-close"
);

examenItem.addEventListener("click", () => {
  examenValidationModal.classList.toggle("hide");
});

closeExamenModal.addEventListener("click", () => {
  examenValidationModal.classList.toggle("hide");
});
