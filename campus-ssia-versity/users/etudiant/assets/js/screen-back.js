// Liste des images de fond disponibles
const backgrounds = [
  "assets/img/fond1.jpg",
  "assets/img/fond3.jpg",
  "assets/img/fond7.jpg",
  "assets/img/fond10.jpg",
];

// Sélection de l’élément à modifier
const homeScreen = document.querySelector(".home-screen");

// Index actuel
let currentScreenIndex = 0;

// Fonction pour changer le fond
function changeBackground() {
  currentScreenIndex = Math.floor(Math.random() * backgrounds.length); // passe à l’image suivante
  homeScreen.style.backgroundImage = `url(${backgrounds[currentScreenIndex]})`;
}

// Initialisation du premier fond
homeScreen.style.backgroundImage = `url(${backgrounds[0]})`;

// Changement automatique toutes les 60 secondes (1 minute)
setInterval(changeBackground, 60000);
