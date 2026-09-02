const modal = document.querySelector(".modal-choix-def");
const choixBtn = document.querySelector(".prog-def");
const closeModalChoix = document.querySelector(".fa-close");

choixBtn.addEventListener("click", () => {
  modal.classList.remove("hide");
  modal.classList.add("show");
  console.log("bien clicker");
});

closeModalChoix.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");
});
