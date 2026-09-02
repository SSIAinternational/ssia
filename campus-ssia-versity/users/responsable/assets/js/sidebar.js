"useStrict";

const nav = document.querySelector("nav");

const sidebarTab = [
  {
    title: "Dashboard",
    icon: "fa-solid fa-desktop",
    folder: "",
    href: "",
    dropdown: [],
  },
  {
    title: "Profil",
    icon: "fa-solid fa-user",
    folder: "",
    href: "",
    dropdown: [],
  },
  {
    title: "Tâches",
    icon: "fa-solid fa-list-check",
    folder: "",
    href: "tâches.html",
    dropdown: [],
  },
  {
    title: "Reporting",
    icon: "fa-solid fa-file-pen",
    folder: "",
    href: "reporting.html",
    dropdown: [],
  },
  {
    title: "Pédagogie",
    icon: "fa-solid fa-user-graduate",
    folder: "services/pedagogie/",
    dropdown: [
      { title: "Liste étudiants", href: "liste-etudiants.html" },
      { title: "Liste professeurs", href: "liste-professeurs.html" },
      { title: "Collèges", href: "colleges.html" },
      { title: "Suspension", href: "etudiants-suspendus.html" },
    ],
  },
  {
    title: "Finance & Scolarité",
    icon: "fa-solid fa-money-bill-transfer",
    folder: "",
    href: "finances-scolarite.html",
    dropdown: [],
  },
  {
    title: "Admission",
    icon: "fa-solid fa-graduation-cap",
    folder: "services/admissions/",
    dropdown: [
      { title: "Analyse demandes", href: "demandes-admission.html" },
      { title: "Entretiens", href: "entretiens.html" },
      { title: "Administration & collèges", href: "college.html" },
      { title: "Soutenances", href: "soutenances.html" },
    ],
  },
  {
    title: "Vie estudiantine",
    icon: "fa-solid fa-school",
    folder: "services/vie-estudiantine/",
    dropdown: [
      { title: "Club-estudiantine", href: "chat.html" },
      { title: "Chat-box-étudiants", href: "services-etudiants.html" },
      { title: "Mail-box-professeurs", href: "services-professeur.html" },
    ],
  },
  {
    title: "Communication",
    icon: "fa-solid fa-bullhorn",
    folder: "",
    href: "communication.html",
    dropdown: [],
  },
  {
    title: "Partenariats & Affaires",
    icon: "fa-solid fa-handshake",
    folder: "services/partenariats-affaires/",
    dropdown: [
      { title: "Liste de stages", href: "liste-de-stages.html" },
      { title: "Demande de stages", href: "demande-de-stages.html" },
      { title: "Tous les stagiaires", href: "tous-les-stagiaires.html" },
      { title: "Stagiaires actifs", href: "stagiaires-actifs.html" },
      { title: "Archives stagiaires", href: "archives-stagiaires.html" },
    ],
  },
  {
    title: "Ressources humaines",
    icon: "fa-solid fa-users",
    folder: "services/ressources-humaines/",
    dropdown: [
      { title: "Personnel complet", href: "personnels-complet.html" },
      { title: "Stagiaires", href: "personnels-stagiaires.html" },
      { title: "Professeurs", href: "personnels-professeurs.html" },
    ],
  },
];

function renderLogoSideItem() {
  const logoSideItem = Object.assign(document.createElement("div"), {
    className: "logo-side_item",
  });

  const img = Object.assign(document.createElement("img"), {
    src: "../../img/versity-icon.png",
    alt: "Logo SSIA Versity",
  });

  const sideItemGroup = Object.assign(document.createElement("div"), {
    className: "side_item_group",
  });

  sidebarTab.forEach((sidebarTabItem) => {
    const sideItem = Object.assign(document.createElement("div"), {
      className: "side_item",
    });

    const i = Object.assign(document.createElement("i"), {
      className: sidebarTabItem.icon,
    });

    if (window.location.pathname.includes(sidebarTabItem.title.toLowerCase())) {
      i.classList.add("active");
    }

    sideItem.append(i);
    sideItemGroup.append(sideItem);
  });

  logoSideItem.append(img, sideItemGroup);
  nav.append(logoSideItem);
}

function renderLogout() {
  const sideItemLogout = Object.assign(document.createElement("div"), {
    className: "side_item_logout",
  });

  const i = Object.assign(document.createElement("i"), {
    className: "fa-solid fa-power-off",
  });

  sideItemLogout.append(i);

  function removeLogoutLabel(label) {
    label.remove();
  }

  i.addEventListener("mouseenter", () => {
    const itemLogoutLabel = Object.assign(document.createElement("div"), {
      className: "item_logout_label",
    });

    const labelArrow = Object.assign(document.createElement("div"), {
      className: "label_arrow",
    });

    const span = Object.assign(document.createElement("span"), {
      textContent: "Se déconnecter",
    });

    itemLogoutLabel.append(labelArrow, span);
    sideItemLogout.append(itemLogoutLabel);
  });

  i.addEventListener("mouseleave", () => {
    const label = sideItemLogout.querySelector(".item_logout_label");
    if (label) {
      label.style.animation = "label_disappear ease-in-out 0.5s forwards";
      label.addEventListener("animationend", () => {
        removeLogoutLabel(label);
      });
    }
  });

  nav.append(sideItemLogout);
}

renderLogoSideItem();
renderLogout();

const sideItem = document.querySelectorAll(".side_item");
const allIcon = document.querySelectorAll(".side_item i");

function cleanSideItem() {
  document.querySelectorAll(".side_item .side_item_label").forEach((s) => {
    s.remove();
  });
}

function cleanDropdown() {
  document.querySelectorAll(".side_item .dropdown").forEach((d) => {
    d.remove();
  });
}

allIcon.forEach((i, index) => {
  if (sidebarTab[index].dropdown?.length === 0) {
    i.addEventListener("mouseenter", () => {
      cleanSideItem();
      const sideItemLabel = Object.assign(document.createElement("div"), {
        className: "side_item_label",
      });

      const labelArrow = Object.assign(document.createElement("div"), {
        className: "label_arrow",
      });

      const span = Object.assign(document.createElement("span"), {
        textContent: sidebarTab[index].title,
      });

      sideItemLabel.append(labelArrow, span);
      sideItem[index].append(sideItemLabel);
    });

    i.addEventListener("mouseleave", () => {
      const label = sideItem[index].querySelector(".side_item_label");

      if (label) {
        label.style.animation = "label_disappear ease-in-out 0.5s forwards";
        label.addEventListener(
          "animationend",
          () => {
            label.remove();
          },
          { once: true },
        );
      }
    });
  } else if (sidebarTab[index].dropdown?.length > 0) {
    let closeTimeout;

    i.addEventListener("mouseenter", () => {
      clearTimeout(closeTimeout);

      // éviter les doublons
      if (sideItem[index].querySelector(".dropdown")) return;

      const sideDropdown = document.createElement("div");
      sideDropdown.className = "dropdown";

      const span = document.createElement("span");
      span.textContent = sidebarTab[index].title;

      sideDropdown.append(span);

      sidebarTab[index].dropdown.forEach((d) => {
        const span = document.createElement("span");
        span.textContent = d.title;
        sideDropdown.append(span);
      });

      sideItem[index].append(sideDropdown);

      // 🔥 IMPORTANT : empêcher fermeture si on est dessus
      sideDropdown.addEventListener("mouseenter", () => {
        clearTimeout(closeTimeout);
      });

      sideDropdown.addEventListener("mouseleave", () => {
        triggerClose(sideDropdown);
      });
    });

    i.addEventListener("mouseleave", () => {
      const dropdown = sideItem[index].querySelector(".dropdown");
      if (dropdown) {
        triggerClose(dropdown);
      }
    });

    function triggerClose(dropdown) {
      closeTimeout = setTimeout(() => {
        dropdown.style.animation =
          "dropdown_disappear 0.5s ease-in-out 0.3s forwards";

        dropdown.addEventListener("animationend", () => dropdown.remove(), {
          once: true,
        });
      }, 200); // petit délai pour permettre de passer sur le dropdown
    }
  }
});
