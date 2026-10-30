const fraisCbelModal = document.querySelector(".paiement-frais-cbel");
const cbelModalClose = document.querySelector(".cbel-form-close > button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fraisCbelModal.classList.remove("hide");
  fraisCbelModal.classList.add("show");
});

cbelModalClose.addEventListener("click", () => {
  fraisCbelModal.classList.remove("show");
  fraisCbelModal.classList.add("hide");
});
