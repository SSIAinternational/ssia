const newMessageBtn = document.querySelector(".new-message-button");
const sendMessageForm = document.querySelector(".section-new_message");
const closeBtn = document.querySelector(".fa-close");

newMessageBtn.addEventListener("click", () => {
  sendMessageForm.classList.add("flex");
});

closeBtn.addEventListener("click", () => {
  sendMessageForm.classList.remove("flex");
});
