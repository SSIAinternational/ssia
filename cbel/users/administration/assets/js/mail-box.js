"use strict";

// Sélecteurs
const navLinks = document.querySelectorAll(".mail-box__nav-links span");
const screenSections = document.querySelectorAll(".mail-box__screen > div");
const newMessageBtn = document.querySelector(".mail-box__new-message");

// Associer chaque span à sa section
const sectionMap = {
  "Boîte de réception": document.querySelector(".mail-box__recieved"),
  "Messages envoyés": document.querySelector(".mail-box__sended"),
};

// Fonction pour masquer toutes les sections
function hideAllSections() {
  screenSections.forEach((sec) => sec.classList.add("hide"));
}

// Fonction pour enlever l'état actif sur les spans
function removeActive() {
  navLinks.forEach((link) => link.classList.remove("mail-box-nav__active"));
}

// --- Affichage par défaut ---
hideAllSections();
document.querySelector(".mail-box__recieved").classList.remove("hide"); // section par défaut

// Gestion du clic sur les spans (Réception / Envoyés)
navLinks.forEach((span) => {
  span.addEventListener("click", () => {
    removeActive();
    span.classList.add("mail-box-nav__active"); // donnes active au clic

    hideAllSections(); // cache toutes les sections

    // Affiche la section associée
    const section = sectionMap[span.textContent.trim()];
    if (section) section.classList.remove("hide");
  });
});

// --- Gestion du clic sur NEW MESSAGE ---
newMessageBtn.addEventListener("click", () => {
  removeActive(); // enlève active des spans
  hideAllSections(); // cache toutes les sections

  document.querySelector(".mail-box__send").classList.remove("hide"); // affiche l'éditeur de nouveau message
});
