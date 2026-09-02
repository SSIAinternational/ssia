const video1 = document.getElementById("myVideo1");
const video2 = document.getElementById("myVideo2");

// Fonction pour afficher une vidéo et cacher l'autre
function playVideo(activeVideo, inactiveVideo) {
  // Masquer l'image de la vidéo active
  activeVideo.classList.remove("hide");
  activeVideo.play();

  // Arrêter l’autre vidéo et afficher son image
  inactiveVideo.pause();
  inactiveVideo.currentTime = 0;
  inactiveVideo.classList.add("hide");
}

// Quand la première vidéo finit lancer la deuxième
video1.addEventListener("ended", () => {
  playVideo(video2, video1);
});

// Quand la deuxième finit relancer la première
video2.addEventListener("ended", () => {
  playVideo(video1, video2);
});

// Démarrage initial
playVideo(video1, video2);
