document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".jour-crenaux"); // toutes les parties
  const nextBtn = document.querySelector(".fa-arrow-right");
  const prevBtn = document.querySelector(".fa-arrow-left");

  let currentStep = 0; // on commence au 1er bloc

  // fonction pour afficher la bonne étape
  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("show", i === index);
      step.classList.toggle("hide", i !== index);
    });

    // cacher le bouton "Soumettre" sauf à la dernière étape
    if (index === steps.length - 1) {
      submitBtn.style.display = "block";
      nextBtn.style.display = "none";
    } else {
      submitBtn.style.display = "none";
      nextBtn.style.display = "flex";
    }

    // cacher le bouton gauche si on est au début
    prevBtn.style.display = index === 0 ? "none" : "flex";
  }

  // bouton suivant
  nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });

  // bouton précédent
  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });

  // initialisation
  showStep(currentStep);
});
