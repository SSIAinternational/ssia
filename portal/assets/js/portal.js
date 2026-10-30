const portalContent = document.querySelector(".portal-content");
const textsEntitesSubject = document.querySelector(".texts-entites-subtexts");
const entites = document.querySelector(".entites");
const closeForm = document.querySelector(".close .fa-close");
const connexionForm = document.querySelector(".connexion-section");
const connexionFormH3 = document.querySelector(".connexion-section h3");
const connexionFormImg = document.querySelector(".connexion-section img");
const connexionFormBtn = document.querySelector(".connexion-section button");

let statutEntites = false;
let entiteSelectionnee = null;

const entitesTab = [
  {
    nom: "SSIA Capital Holding",
    img: "assets/img/logo_holding.png",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "",
  },
  {
    nom: "Campus SSIAVERSITY",
    img: "assets/img/versity.png",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "../campus-ssia-versity/users/administration/profil-admin.html",
  },
  {
    nom: "SSIA VaultBridge",
    img: "assets/img/vault.png",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "",
  },
  {
    nom: "OneSSIA Market",
    img: "assets/img/market.png",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "",
  },
  {
    nom: "SSIA Mosaic",
    img: "assets/img/mosaic.jpeg",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "",
  },
  {
    nom: "CRVE-SSIA",
    img: "assets/img/crve.jpg",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "",
  },
  {
    nom: "CBEL-SSIA",
    img: "assets/img/cbel.jpg",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "../cbel/users/administration/profil-admin.html",
  },
  {
    nom: "CRMB-SSIA",
    img: "assets/img/crmb.jpg",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "",
  },
  {
    nom: "BCS-SSIA",
    img: "assets/img/brotherhood.jpg",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "",
  },
  {
    nom: "Management Pôle",
    img: "assets/img/young_community.jpg",
    inputs: [
      {
        label: "E-Mail",
        placeholder: "Ex: john.doe@ssia.versity",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez votre mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
    href: "",
  },
];

// Création des éléments d'arrière-plan
function renderBg() {
  for (let a = 0; a < 4; a++) {
    const bg = Object.assign(document.createElement("div"), {
      className: "bg",
    });

    portalContent.insertBefore(bg, textsEntitesSubject);
  }
}

renderBg();

// Affichage des entités
function renderEntitesItem() {
  entitesTab.forEach((entitesTabItem) => {
    const entitesItem = Object.assign(document.createElement("div"), {
      className: "entite-item",
    });

    const entitesImg = Object.assign(document.createElement("img"), {
      src: entitesTabItem.img,
      alt: "logo entité",
    });

    const entitesP = Object.assign(document.createElement("p"), {
      textContent: entitesTabItem.nom,
    });

    const light = Object.assign(document.createElement("div"), {
      className: "light",
    });

    entites.append(entitesItem);
    entitesItem.append(entitesImg, entitesP, light);

    // Sélection d'une entité
    entitesItem.addEventListener("click", () => {
      updateForm(entitesTabItem);

      document.querySelectorAll(".entite-item").forEach((item) => {
        item.classList.remove("active");
      });

      entitesItem.classList.add("active");
    });

    // Affichage du formulaire de connexion
    entitesItem.addEventListener("click", () => {
      if (
        connexionForm.classList.contains("hide") &&
        textsEntitesSubject.classList.contains("centered")
      ) {
        connexionForm.classList.remove("hide");
        textsEntitesSubject.classList.remove("centered");

        connexionForm.classList.add("show");
        textsEntitesSubject.classList.add("decentered");
      }
    });
  });
}

// Configuration de la grille des entités
function remakeGrid() {
  const entitesCols = Math.ceil(entitesTab.length / 2);
  const entitesWidth = entitesCols * 10;

  entites.style.gridTemplateColumns = `repeat(${entitesCols}, 1fr)`;
  entites.style.width = `${entitesWidth}`;
}

remakeGrid();
renderEntitesItem();

// Mise à jour du formulaire selon l'entité sélectionnée
function updateForm(entite) {
  // Mémoriser l'entité sélectionnée
  entiteSelectionnee = entite;

  connexionFormH3.textContent = `Connexion Administrateur ${entite.nom}`;

  connexionFormImg.src = entite.img;

  // Supprimer l'ancien formulaire
  const oldForm = document.querySelector(".form-inputs");

  if (oldForm) {
    oldForm.remove();
  }

  const profConnect = document.querySelector(".line-text");

  if (profConnect) {
    profConnect.remove();
  }

  // Créer les champs de connexion
  const formInputs = Object.assign(document.createElement("div"), {
    className: "form-inputs",
  });

  entite.inputs.forEach((inputItem) => {
    const inputGroup = Object.assign(document.createElement("div"), {
      className: "input-group",
    });

    const label = Object.assign(document.createElement("label"), {
      textContent: inputItem.label,
    });

    const inputZone = Object.assign(document.createElement("div"), {
      className: "input-zone",
    });

    const inputIcon = Object.assign(document.createElement("i"), {
      className: inputItem.icon,
    });

    const input = Object.assign(document.createElement("input"), {
      type: inputItem.type,
      placeholder: inputItem.placeholder,
    });

    formInputs.append(inputGroup);
    inputGroup.append(label, inputZone);
    inputZone.append(inputIcon, input);
  });

  // Section mot de passe oublié
  const rememberForget = Object.assign(document.createElement("div"), {
    className: "remember-forget",
  });

  const forget = Object.assign(document.createElement("div"), {
    className: "forget",
  });

  const forgetP = Object.assign(document.createElement("p"), {
    textContent: "Mot de passe oublié?",
  });

  formInputs.append(rememberForget);
  rememberForget.append(forget);
  forget.append(forgetP);

  connexionForm.insertBefore(formInputs, connexionFormBtn);

  // Connexion spécifique au Campus SSIAVERSITY
  if (entite.nom === "Campus SSIAVERSITY") {
    const lineText = Object.assign(document.createElement("div"), {
      className: "line-text",
    });

    const line = Object.assign(document.createElement("div"), {
      className: "line",
    });

    const connectAsTeacher = Object.assign(document.createElement("p"), {
      className: "connect-as-teacher",
      innerHTML: "Se connecter en tant que <b>Professeur</b>",
    });

    connexionForm.append(lineText);
    lineText.append(line, connectAsTeacher, line.cloneNode());

    document
      .querySelector(".connect-as-teacher b")
      .addEventListener("click", () => {
        window.location.href =
          "campus-ssia-versity/users/professeur/connexion.html";
      });
  }
}

// Fermer le formulaire
closeForm.addEventListener("click", () => {
  if (
    connexionForm.classList.contains("show") &&
    textsEntitesSubject.classList.contains("decentered")
  ) {
    connexionForm.classList.remove("show");
    textsEntitesSubject.classList.remove("decentered");

    document.querySelectorAll(".entite-item").forEach((item) => {
      item.classList.remove("active");
    });

    connexionForm.classList.add("hide");
    textsEntitesSubject.classList.add("centered");

    // Réinitialiser l'entité sélectionnée
    entiteSelectionnee = null;
  }
});

// Bouton de connexion : utiliser le href de l'entité sélectionnée
connexionFormBtn.addEventListener("click", (event) => {
  // Empêcher la soumission involontaire d'un formulaire HTML
  event.preventDefault();

  // Vérifier qu'une entité est sélectionnée
  if (!entiteSelectionnee) {
    return;
  }

  // Vérifier que l'entité possède un lien valide
  if (
    typeof entiteSelectionnee.href !== "string" ||
    entiteSelectionnee.href.trim() === ""
  ) {
    return;
  }

  // Redirection vers la page de l'entité sélectionnée
  window.location.href = entiteSelectionnee.href;
});
