const contactNotif = document.querySelector(".contact-notif");
const contactNotifBtn = document.querySelector(".contact-notif-icon");

contactNotifBtn.addEventListener("click", () => {
  contactNotif.classList.toggle("hide");
});
