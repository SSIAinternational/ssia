const popup = document.querySelector(".maintenance");
const closeBtn = document.querySelector(".close-btn");
const popupContent = document.querySelector(".popup-content");

// Sélectionne TOUS les boutons avec la classe "not_ready"
const notReadyButtons = document.querySelectorAll(".not_ready");

// Ajoute l'événement sur chacun
notReadyButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault(); // empêche le rechargement de la page
    popup.style.display = "flex";
  });
});

// Fermer le popup avec animation
closeBtn.addEventListener("click", function () {
  popupContent.classList.add("popup-off");
  setTimeout(() => {
    popup.style.display = "none";
    popupContent.classList.remove("popup-off");
  }, 300); // correspond à la durée de l’animation disappear
});
