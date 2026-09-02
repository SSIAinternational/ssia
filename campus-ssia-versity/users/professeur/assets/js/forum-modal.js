const forumModal = document.querySelector(".modal-forum");
const forumModalClose = document.querySelector(".close-btn");
const forumModalOpenner = document.querySelector(".forum-openner");

forumModalOpenner.addEventListener("click", () => {
  forumModal.classList.remove("none");
  forumModal.classList.add("flex");
});

forumModalClose.addEventListener("click", () => {
  forumModal.classList.remove("flex");
  forumModal.classList.add("none");
});
