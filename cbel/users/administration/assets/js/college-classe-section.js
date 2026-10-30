// Sélecteurs du menu interne (classe-sidebar)
const classeTabs = document.querySelectorAll(".classe-sidebar span");

// Sélecteurs des sections de contenu interne
const classeSections = document.querySelectorAll(
  ".classe > div:not(.classe-sidebar)"
);

// Fonction : cacher toutes les sections
function hideClasseSections() {
  classeSections.forEach((sec) => sec.classList.add("hide"));
}

// Fonction : retirer active du menu
function removeClasseActive() {
  classeTabs.forEach((tab) => tab.classList.remove("classe-nav__active"));
}

// Afficher "Liste de classe" par défaut
hideClasseSections();
document.querySelector(".classe-list-etudiant").classList.remove("hide");

// Gestion des clics
classeTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    removeClasseActive();
    hideClasseSections();

    tab.classList.add("classe-nav__active");

    classeSections[index].classList.remove("hide");
  });
});
