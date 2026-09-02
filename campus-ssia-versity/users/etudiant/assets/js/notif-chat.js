const chat = document.querySelector(".chat");
const chatBtn = document.querySelector(".chat-btn");
const notif = document.querySelector(".notif");
const notifBtn = document.querySelector(".notif-btn");

// bouton chat
chatBtn.addEventListener("click", () => {
  chat.classList.toggle("show"); // affiche/masque le chat
  notif.classList.remove("show"); // ferme la notif si ouverte
});

// bouton notif
notifBtn.addEventListener("click", () => {
  notif.classList.toggle("show"); // affiche/masque la notif
  chat.classList.remove("show"); // ferme le chat si ouvert
});
