const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "ci", // Côte d'Ivoire par défaut
  separateDialCode: true, // pour afficher +225 dans un select séparé
  preferredCountries: ["ci", "fr", "us"], // pays mis en haut de la liste
});
