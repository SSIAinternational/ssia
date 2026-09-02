"useStrict";

const choixClasse = document.querySelector(".choix-classe-programme");
const conceptionExamen = document.querySelector(".conception-examen");
const btnOpenConception = document.querySelector(".open-conception");
const btnCloseConception = document.querySelector(
  ".apercu-content__cancel-exam"
);

const openSendExamModal = document.querySelector(".apercu-content__send-exam");
const examModal = document.querySelector(".modal-confirmation-envoi");

const examSendCancel = document.querySelector(".annuler");

btnOpenConception.addEventListener("click", () => {
  choixClasse.classList.add("none");
  conceptionExamen.classList.toggle("none");
});

btnCloseConception.addEventListener("click", () => {
  conceptionExamen.classList.toggle("none");
  choixClasse.classList.add("flex");
  choixClasse.classList.remove("none");
});

openSendExamModal.addEventListener("click", () => {
  examModal.classList.toggle("none");
});

examSendCancel.addEventListener("click", () => {
  examModal.classList.toggle("none");
});
