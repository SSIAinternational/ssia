const titles = document.querySelectorAll(".form-section__title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    const currentContent = title.nextElementSibling;

    // Fermer toutes les autres sections
    document.querySelectorAll(".form-section__content").forEach((content) => {
      if (content !== currentContent) {
        content.classList.add("hide");
      }
    });

    // Gérer l'ouverture/fermeture
    const isOpening = currentContent.classList.contains("hide");
    currentContent.classList.toggle("hide");

    // Réinitialiser toutes les flèches
    titles.forEach((t) => {
      const icon = t.querySelector("i");
      icon.classList.remove("rotate");
    });

    // Tourner la flèche seulement si la section est ouverte
    if (isOpening) {
      title.querySelector("i").classList.add("rotate");
    }
  });
});
