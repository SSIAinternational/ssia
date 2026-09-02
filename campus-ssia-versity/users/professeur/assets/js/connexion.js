const connectBtn = document.querySelector("form button");

connectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.pathname =
    "/campus-ssia-versity/users/professeur/espace-professeur.html";
});
