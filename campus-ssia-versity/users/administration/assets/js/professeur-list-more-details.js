const professeurItem = document.querySelector(
  ".professeur-list__table table tbody tr:first-of-type"
);
const moreDetailModal = document.querySelector(".modal-more-details");
const closeModal = document.querySelector(
  ".modal-more-details .action-close .fa-close"
);

professeurItem.addEventListener("click", () => {
  moreDetailModal.classList.toggle("hide");
});

closeModal.addEventListener("click", () => {
  moreDetailModal.classList.add("hide");
});
