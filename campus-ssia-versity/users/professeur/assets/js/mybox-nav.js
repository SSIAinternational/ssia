// Sélectionne tous les éléments .utils-nav__item
const navItems = document.querySelectorAll(".utils-nav__item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const currentContent = item.querySelector(".nav-item__content");
    const isActive = currentContent.classList.contains(
      "nav-item__content-active"
    );

    // Fermer tous les autres contenus
    navItems.forEach((i) => {
      const content = i.querySelector(".nav-item__content");
      content.classList.remove("nav-item__content-active");
      i.classList.remove("utils-nav__active");
    });

    // Si le contenu cliqué n'était pas actif, on l'ouvre
    if (!isActive) {
      currentContent.classList.add("nav-item__content-active");
      item.classList.add("utils-nav__active");
    }
  });
});
