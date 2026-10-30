const closeModal = document.querySelector(
  ".entretien__modal-details .details-content .action-close > .fa-close"
);

const demandesItems = document.querySelectorAll(
  ".entretiens-admission__processed .demandes-admission__table tbody tr"
);
const detailsModal = document.querySelector(".entretien__modal-details");

demandesItems.forEach((demandesItem) => {
  demandesItem.addEventListener("click", () => {
    detailsModal.classList.remove("hide");
  });
});

closeModal.addEventListener("click", () => {
  detailsModal.classList.add("hide");
});

/*Script pour le dépliant des rubrique */

const rubriquesTitle = document.querySelectorAll(
  ".details-content .title-angle-actions .title-angle > h5"
);

const rubriqueContent = document.querySelectorAll(".rubrique .content");

const rubriqueArrow = document.querySelectorAll(
  ".details-content .title-angle-actions .title-angle > .fa-angle-down"
);

function closeAllRubriqueContent() {
  rubriqueContent.forEach((rubriqueContentItem) => {
    rubriqueContentItem.classList.add("hide");
  });
}

closeAllRubriqueContent();

rubriquesTitle.forEach((rubriquesTitleItem, index) => {
  rubriquesTitleItem.addEventListener("click", () => {
    const arrow = rubriqueArrow[index];
    const rubriqueContentItem = rubriqueContent[index];

    arrow.style.transition = "ease 0.3s";

    arrow.style.transform =
      arrow.style.transform == "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";

    if (rubriqueContentItem.classList.contains("hide")) {
      closeAllRubriqueContent();
      rubriqueContentItem.classList.remove("hide");
    } else {
      rubriqueContentItem.classList.add("hide");
    }
  });
});

/*Script pour l'aperçu*/

const pdfSet = document.querySelectorAll(".details-content .pdf-item");
const pdfPreview = document.querySelector(".document-preview");
const closePreview = document.querySelector(
  ".document-preview__action-close > .fa-close"
);
const demandesDetails = document.querySelector(".entretien__modal-details");
const detailsContent = document.querySelector(".details-content");

function defaultState() {
  pdfPreview.classList.add("hide");
  detailsContent.classList.remove("shrink");
  demandesDetails.style.width = "60%";
}

defaultState();

pdfSet.forEach((pdfItem) => {
  pdfItem.addEventListener("click", () => {
    demandesDetails.style.width = "95%";
    demandesDetails.style.transition = "width ease 0.5s";
    detailsContent.classList.add("shrink");
    pdfPreview.classList.remove("hide");
  });
});

closePreview.addEventListener("click", () => {
  pdfPreview.classList.add("hide");
  detailsContent.classList.remove("shrink");
  demandesDetails.style.width = "60%";
});
