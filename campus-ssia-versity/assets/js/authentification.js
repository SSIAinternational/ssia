const backBtn = document.querySelector(".back-btn");

backBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

let isLogin = true;

const identifiants = [
  {
    email: "ericjauresmoularet@gmail.com",
    passWord: "Jeauric@ssia2025",
  },
];

const state = [
  {
    nom: "Connexion",
    presentationTitle: "Connexion à votre compte universitaire",
    presentationText:
      "Accédez au portail universitaire en vous connectant à votre compte.",
    presentationAction: "Connectez-vous",
    inputs: [
      {
        label: "Adresse E-mail",
        placeholder: "Ex: john.doe@exemple.com",
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
  },
  {
    nom: "Inscription",
    presentationTitle: "Création d’un compte universitaire",
    presentationText:
      "Créez votre compte pour accéder au portail universitaire.",
    presentationAction: "Inscrivez-vous",
    inputs: [
      {
        label: "Nom & Prénoms",
        placeholder: "Ex: Doe John",
        type: "text",
        icon: "fa-solid fa-user",
      },
      {
        label: "Adresse E-mail",
        placeholder: "Ex: johndoe@exemple.com",
        type: "email",
        icon: "fa-solid fa-user",
      },
      {
        label: "Mot de passe",
        placeholder: "Saisissez un mot de passe",
        type: "password",
        icon: "fa-solid fa-lock",
      },
      {
        label: "Confirmez le mot de passe",
        placeholder: "Saisissez le mot de passe à l'identique",
        type: "password",
        icon: "fa-solid fa-lock",
      },
    ],
  },
];

const authentification = document.querySelector(".authentification");

// Message affiché par défaut
function defaultMessage() {
  const authMessageDiv = document.createElement("div");
  authMessageDiv.className = "auth-message";

  const versityLogo = document.createElement("img");
  versityLogo.className = "versity-logo";
  versityLogo.src = "./img/versity-icon-degrade.png";
  versityLogo.alt = "Logo versity";

  const authMessageTitle = document.createElement("h1");
  authMessageTitle.textContent = state[1].presentationTitle;

  const authMessageText = document.createElement("p");
  authMessageText.textContent = state[1].presentationText;

  const authMessageBtn = document.createElement("button");
  authMessageBtn.textContent = state[1].presentationAction;

  authentification.appendChild(authMessageDiv);
  authMessageDiv.append(
    versityLogo,
    authMessageTitle,
    authMessageText,
    authMessageBtn,
  );

  return { authMessageDiv, authMessageTitle, authMessageText, authMessageBtn };
}

// Formulaire affiché par défaut

const authFormDiv = document.createElement("div");
authFormDiv.className = "auth-form";

function defaultForm() {
  const authFormTitle = document.createElement("h1");
  authFormTitle.textContent = state[0].nom;

  const authForm = document.createElement("form");

  authFormDiv.append(authFormTitle, authForm);

  state[0].inputs.forEach((inputsItem) => {
    const inputGroup = Object.assign(document.createElement("div"), {
      className: "input-group",
    });

    const inputId = `input-${Math.random().toString(36).slice(2)}`;

    const label = Object.assign(document.createElement("label"), {
      textContent: inputsItem.label,
      htmlFor: inputId,
    });

    const inputZone = Object.assign(document.createElement("div"), {
      className: "input-zone",
    });

    const inputIcon = Object.assign(document.createElement("i"), {
      className: inputsItem.icon,
    });

    const input = Object.assign(document.createElement("input"), {
      type: inputsItem.type,
      placeholder: inputsItem.placeholder,
      id: inputId,
    });

    authForm.append(inputGroup);
    inputGroup.append(label, inputZone);
    inputZone.append(inputIcon, input);
  });

  const rememberForget = Object.assign(document.createElement("div"), {
    className: "remember-forget",
  });

  const remember = Object.assign(document.createElement("div"), {
    className: "remember",
  });

  const rememberCheck = Object.assign(document.createElement("input"), {
    type: "checkbox",
    className: "remember-check",
  });

  const rememberP = Object.assign(document.createElement("p"), {
    textContent: "Se souvenir de moi",
  });

  const forget = Object.assign(document.createElement("div"), {
    className: "forget",
  });

  const forgetPass = document.createElement("p");
  forgetPass.textContent = "Mot de passe oublié ?";

  const authFormBtn = document.createElement("button");
  authFormBtn.textContent = state[0].nom;
  authFormBtn.type = "submit";

  authentification.appendChild(authFormDiv);
  authFormDiv.append(authForm);
  rememberForget.append(remember, forget);
  remember.append(rememberCheck, rememberP);
  forget.append(forgetPass);
  authForm.append(rememberForget, authFormBtn);

  return {
    authForm,
    authFormTitle,
    forgetPass,
    authFormBtn,
    rememberForget,
  };
}

const { authMessageDiv, authMessageTitle, authMessageText, authMessageBtn } =
  defaultMessage();

const { authForm, authFormTitle, forgetPass, authFormBtn, rememberForget } =
  defaultForm();

// ================= INPUTS INSCRIPTION =================

function changeFormAsSignUp() {
  authFormTitle.textContent = state[1].nom;

  document.querySelectorAll(".input-group").forEach((el) => {
    el.remove();
  });

  state[1].inputs.forEach((inputsItem) => {
    const inputGroup = Object.assign(document.createElement("div"), {
      className: "input-group",
    });

    const inputId = `input-${Math.random().toString(36).slice(2)}`;

    const label = Object.assign(document.createElement("label"), {
      textContent: inputsItem.label,
      htmlFor: inputId,
    });

    const inputZone = Object.assign(document.createElement("div"), {
      className: "input-zone",
    });

    const inputIcon = Object.assign(document.createElement("i"), {
      className: inputsItem.icon,
    });

    const input = Object.assign(document.createElement("input"), {
      type: inputsItem.type,
      placeholder: inputsItem.placeholder,
      id: inputId,
    });

    authForm.insertBefore(inputGroup, authFormBtn);
    inputGroup.append(label, inputZone);
    inputZone.append(inputIcon, input);
  });

  authFormBtn.textContent = state[1].nom;
}

function changeFormAsSignIn() {
  authFormTitle.textContent = state[0].nom;

  document.querySelectorAll(".input-group").forEach((el) => {
    el.remove();
  });

  state[0].inputs.forEach((inputsItem) => {
    const inputGroup = Object.assign(document.createElement("div"), {
      className: "input-group",
    });

    const inputId = `input-${Math.random().toString(36).slice(2)}`;

    const label = Object.assign(document.createElement("label"), {
      textContent: inputsItem.label,
      htmlFor: inputId,
    });

    const inputZone = Object.assign(document.createElement("div"), {
      className: "input-zone",
    });

    const inputIcon = Object.assign(document.createElement("i"), {
      className: inputsItem.icon,
    });

    const input = Object.assign(document.createElement("input"), {
      type: inputsItem.type,
      placeholder: inputsItem.placeholder,
      id: inputId,
    });

    authForm.insertBefore(inputGroup, authFormBtn);
    inputGroup.append(label, inputZone);
    inputZone.append(inputIcon, input);
  });

  authFormBtn.textContent = state[0].nom;
}

// Switch UI
authMessageBtn.addEventListener("click", () => {
  authMessageDiv.classList.toggle("sign-up");
  authFormDiv.classList.toggle("sign-up");

  isLogin = !isLogin;

  setTimeout(() => {
    if (!isLogin) {
      // Mode Inscription (visuel seulement);
      changeFormAsSignUp();
      console.log("ContentVisibilityAutoStateChangeEvent");

      authFormTitle.textContent = "Inscription";
      authFormBtn.textContent = "Inscription";
      authMessageTitle.textContent = "Connexion à votre compte universitaire";
      authMessageText.textContent =
        "Accédez au portail universitaire en vous connectant à votre compte.";
      authMessageBtn.textContent = "Connectez-vous";

      rememberForget.remove();
    } else {
      // Mode Connexion
      changeFormAsSignIn();
      authFormTitle.textContent = "Connexion";
      authFormBtn.textContent = "Connexion";
      authMessageTitle.textContent = "Création d’un compte universitaire";
      authMessageText.textContent =
        "Créez votre compte pour accéder au portail universitaire.";
      authMessageBtn.textContent = "Inscrivez-vous";

      authForm.insertBefore(rememberForget, authFormBtn);
    }
  }, 300);
});

authFormBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (isLogin) {
    window.location.pathname = "campus-ssia-versity/users/etudiant/dash.html";
  } else {
    alert("Inscription en maintenance");
  }
});
