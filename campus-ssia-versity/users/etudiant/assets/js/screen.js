document.addEventListener("DOMContentLoaded", () => {
  // Associer chaque id de bouton à sa fenêtre correspondante
  const appMapping = {
    "app-contact": ".contact",
    "app-forum": ".forum",
    sms: ".sms",
    "app-vie-estudiantine": ".vie-estudiantine",
    "app-lettre-admission": ".lettre-admission",
    "app-lettre-cbel": ".lettre-cbel",
    "app-scolarité": ".certificat-scolarite",
    "app-bulletin": ".bulletin",
    "app-admissibilite": ".admissibilite",
    "app-carte-etudiant": ".carte-etudiant",
  };

  // Pour chaque bouton (app-div), ajouter l’événement de clic
  Object.keys(appMapping).forEach((id) => {
    const trigger = document.getElementById(id);
    const target = document.querySelector(appMapping[id]);
    if (trigger && target) {
      trigger.addEventListener("click", () => {
        // Fermer toute autre fenêtre avant d’ouvrir la nouvelle
        document
          .querySelectorAll(
            ".contact, .forum, .sms, .vie-estudiantine, .lettre-admission, .lettre-cbel, .certificat-scolarite, .bulletin, .admissibilite, .carte-etudiant"
          )
          .forEach((win) => win.classList.add("hide"));

        // Ouvrir la fenêtre correspondante
        target.classList.remove("hide");
        target.classList.add("show");
      });
    }
  });

  // Gestion du bouton de fermeture (app-close)
  document.querySelectorAll(".app-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentWindow = btn.closest(
        ".contact, .forum, .sms, .vie-estudiantine, .lettre-admission, .lettre-cbel, .certificat-scolarite, .bulletin, .admissibilite, .carte-etudiant"
      );
      if (parentWindow) {
        parentWindow.classList.add("hide");
        parentWindow.classList.remove("show");
      }
    });
  });
});
