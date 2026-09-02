// ===============
// IMAGE UPLOAD SYSTEM
// ===============

function activateImageUpload(box) {
  const input = box.querySelector("input[type=file]");
  const cameraIcon = box.querySelector(".camera");

  // accepter uniquement les images
  input.setAttribute("accept", "image/*");

  // ouvrir input quand on clique sur le carré
  box.addEventListener("click", () => {
    input.click();
  });

  // gestion du changement de fichier
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;

    // vérifier image uniquement
    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner une image !");
      input.value = "";
      return;
    }

    // afficher l’image dans le carré
    const url = URL.createObjectURL(file);

    // retirer icône caméra
    cameraIcon.style.display = "none";

    // supprimer un ancien aperçu si existe
    const oldImg = box.querySelector("img");
    if (oldImg) oldImg.remove();

    // créer l’aperçu
    const img = document.createElement("img");
    img.src = url;
    box.appendChild(img);
  });
}

// ===============
// ACTIVATION GLOBALE POUR TOUS LES .image-upload
// ===============

document.querySelectorAll(".image-upload").forEach((box) => {
  activateImageUpload(box);
});

// ===============
// POUR ELEMENTS AJOUTÉS DYNAMIQUEMENT
// ===============

function activateImageUploadIn(newElement) {
  newElement.querySelectorAll(".image-upload").forEach((box) => {
    activateImageUpload(box);
  });
}
