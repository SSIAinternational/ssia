const chat = document.querySelector(".chat");
const chatBtn = document.querySelector(".chat-btn");

chatBtn.addEventListener("click", () => {
  chat.classList.toggle("show");
  if (window.notif) window.notif.classList.remove("show");
});
