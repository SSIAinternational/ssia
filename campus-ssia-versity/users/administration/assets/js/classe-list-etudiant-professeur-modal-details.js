const classListEtudiantItem = document.querySelector(
  ".classe-etudiant-list__table table tbody tr:first-of-type"
);
const moreDetailEtudiantModal = document.querySelector(
  ".modal-more-details.modal-etudiant"
);
const closeEtudiantModal = document.querySelector(
  ".modal-more-details .action-modal-etudiant-close .fa-close"
);

classListEtudiantItem.addEventListener("click", () => {
  moreDetailEtudiantModal.classList.toggle("hide");
});

closeEtudiantModal.addEventListener("click", () => {
  moreDetailEtudiantModal.classList.add("hide");
});

/*********************************************************** */

const classListProfesseurItem = document.querySelector(
  ".classe-professeur-list__table table tbody tr:first-of-type"
);

const moreDetailProfModal = document.querySelector(
  ".modal-more-details.modal-professeur"
);
const closeProfModal = document.querySelector(
  ".modal-more-details .action-modal-professeur-close .fa-close"
);

classListProfesseurItem.addEventListener("click", () => {
  moreDetailProfModal.classList.toggle("hide");
});

closeProfModal.addEventListener("click", () => {
  moreDetailProfModal.classList.add("hide");
});
