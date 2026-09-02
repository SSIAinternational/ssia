const video1 = document.getElementById("myVideo1");
const video2 = document.getElementById("myVideo2");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

// Fonction pour afficher une vidéo et cacher l'autre
function playVideo(activeVideo, inactiveVideo, activeImg, inactiveImg) {
  // Masquer l'image de la vidéo active
  activeImg.classList.add("hide");
  activeVideo.classList.remove("hide");
  activeVideo.play();

  // Arrêter l’autre vidéo et afficher son image
  inactiveVideo.pause();
  inactiveVideo.currentTime = 0;
  inactiveVideo.classList.add("hide");
  inactiveImg.classList.remove("hide");
}

// Quand la première vidéo finit → lancer la deuxième
video1.addEventListener("ended", () => {
  playVideo(video2, video1, img2, img1);
});

// Quand la deuxième finit → relancer la première
video2.addEventListener("ended", () => {
  playVideo(video1, video2, img1, img2);
});

// Démarrage initial
playVideo(video1, video2, img1, img2);
