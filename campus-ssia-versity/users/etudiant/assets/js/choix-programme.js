// Sélectionne tous les boutons qui contrôlent un programme
const programmeButtons = document.querySelectorAll("[id$='-btn']");

programmeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Récupère l'ID du groupe cible (ex: "premier-btn" → "premier")
    const targetId = btn.id.replace("-btn", "");
    const targetGroup = document.getElementById(targetId);

    // Bascule la visibilité
    targetGroup.classList.toggle("hide");

    // Gère la rotation de l'icône <i>
    const icon = btn.querySelector("i");
    if (icon) icon.classList.toggle("rotate");

    // Option : referme les autres groupes
    programmeButtons.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        const otherId = otherBtn.id.replace("-btn", "");
        const otherGroup = document.getElementById(otherId);
        otherGroup.classList.add("hide");
        const otherIcon = otherBtn.querySelector("i");
        if (otherIcon) otherIcon.classList.remove("rotate");
      }
    });
  });
});
