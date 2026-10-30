// Récupère tous les onglets du menu
const tabs = document.querySelectorAll(".dashboard-header__nav span");

// Récupère toutes les sections du contenu
const sections = document.querySelectorAll(".colleges-dashboard__body > div");

// Fonction : cacher toutes les sections
function hideAllSections() {
  sections.forEach((sec) => sec.classList.add("hide"));
}

// Fonction : retirer .active de tous les onglets
function removeActive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

// Afficher la section "classe" par défaut
hideAllSections();
document.querySelector(".classe").classList.remove("hide");

// Ajouter les événements de clic
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    removeActive();
    hideAllSections();

    // Active l’onglet cliqué
    tab.classList.add("active");

    // Affiche la section correspondante
    sections[index].classList.remove("hide");
  });
});
