const courCard = document.querySelectorAll(".cours");
const coursModal = document.querySelector(".cours-modal");

courCard.forEach((card) => {
  card.addEventListener("click", () => {
    coursModal.classList.remove("hide");
    coursModal.classList.add("show");
  });
});

coursModal.addEventListener("click", () => {
  coursModal.classList.remove("show");
  coursModal.classList.add("hide");
});
