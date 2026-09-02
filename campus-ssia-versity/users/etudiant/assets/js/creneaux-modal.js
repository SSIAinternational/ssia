const modal = document.querySelector(".crenaux-modal");
const oui = document.querySelector(".oui");
const non = document.querySelector(".non");
const choix = document.querySelectorAll(".crenaux-check");

choix.forEach((choix) => {
  choix.addEventListener("click", () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});

non.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");
});
