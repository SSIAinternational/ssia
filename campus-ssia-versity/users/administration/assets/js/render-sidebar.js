"use strict";

/* ================================
   CONFIG GÉNÉRALE
================================ */
const ADMIN_BASE_PATH = "/campus-ssia-versity/users/administration/";
const logoImgUrl = `${ADMIN_BASE_PATH}img/versity-modify.png`;

const nav = document.querySelector(".navbar");
const logoAndNavlinks = document.querySelector(".logo-navlinks");
const logout = document.querySelector(".logout");

/* ================================
   NAVIGATION DATA
================================ */
const navlinksTab = [
  {
    titre: "Profil",
    icon: "fa-solid fa-user",
    folder: "",
    href: "profil-admin.html",
  },
  {
    titre: "Tâches",
    icon: "fa-solid fa-list-check",
    folder: "",
    href: "tâches.html",
  },
  {
    titre: "Reporting",
    icon: "fa-solid fa-file-pen",
    folder: "",
    href: "reporting.html",
  },
  {
    titre: "Gestion budgétaire",
    icon: "fa-solid fa-wallet",
    folder: "services/gestion-budgetaire/",
    dropdown: [
      { titre: "Facture", href: "gestion-budget.html" },
      /*{ titre: "Facture", href: "budget-facture.html" },*/
      { titre: "Pilotage Budgétaire", href: "prevision-budgetaire.html" },
    ],
  },
  {
    titre: "Bureau d'études & collèges",
    icon: "fa-solid fa-user-graduate",
    folder: "services/pedagogie/",
    dropdown: [
      { titre: "Pédagogie", href: "pedagogie.html" },
      { titre: "Liste étudiants", href: "liste-etudiants.html" },
      { titre: "Liste professeurs", href: "liste-professeurs.html" },
      { titre: "Suspension", href: "etudiants-suspendus.html" },
    ],
  },
  {
    titre: "Finance & Management",
    icon: "fa-solid fa-money-bill-transfer",
    folder: "services/finances/",
    dropdown: [
      { titre: "Ecriture du journal", href: "releves.html" },
      { titre: "Transfert", href: "transfert.html" },
      { titre: "Facture", href: "facture.html" },
      { titre: "Dashboard", href: "vue.html" },
      { titre: "Etat financier", href: "ssia_financial_report.html" },
    ],
  },
  {
    titre: "Administration centrale",
    icon: "fa-solid fa-graduation-cap",
    folder: "services/admissions/",
    dropdown: [
      { titre: "Analyse demandes", href: "demandes-admission.html" },
      { titre: "Entretiens", href: "entretiens.html" },
      { titre: "Soutenances", href: "soutenances.html" },
      { titre: "Collèges & Management", href: "gestion-colleges.html" },
      { titre: "Liste des admis", href: "admis-list.html" },
      { titre: "Ordre de paiement", href: "pay-order.html" },
    ],
  },
  {
    titre: "Vie estudiantine",
    icon: "fa-solid fa-school",
    folder: "services/vie-estudiantine/",
    dropdown: [
      { titre: "Vie étudiante", href: "vie-etudiante.html" },
      { titre: "Forum étudiant", href: "chat.html" },
      { titre: "Messagérie-étudiants", href: "services-etudiants.html" },
      { titre: "Messagérie-professeurs", href: "services-professeur.html" },
      { titre: "Blog et actualités", href: "blog.html" },
    ],
  },
  {
    titre: "Communication",
    icon: "fa-solid fa-bullhorn",
    folder: "services/communication/",
    href: "com.html",
  },
  {
    titre: "Partenariats & Affaires",
    icon: "fa-solid fa-handshake",
    folder: "services/partenariats-affaires/",
    dropdown: [
      { titre: "Partenariats", href: "partenariat.html" },
      { titre: "Liste de stages", href: "liste-de-stages.html" },
      { titre: "Demande de stages", href: "demande-de-stages.html" },
      { titre: "Tous les stagiaires", href: "tous-les-stagiaires.html" },
      { titre: "Stagiaires actifs", href: "stagiaires-actifs.html" },
      { titre: "Archives stagiaires", href: "archives-stagiaires.html" },
    ],
  },
  /** 
  {
    titre: "Support technique",
    icon: "fa-solid fa-headset",
    folder: "",
    href: "",
  },*/
  {
    titre: "Ressources humaines",
    icon: "fa-solid fa-users",
    folder: "services/ressources-humaines/",
    dropdown: [
      { titre: "Gestion", href: "gestion.html" },
      { titre: "Personnel complet", href: "personnels-complet.html" },
      { titre: "Stagiaires", href: "personnels-stagiaires.html" },
      { titre: "Professeurs", href: "personnels-professeurs.html" },
    ],
  },

  {
    titre: "Support technique",
    icon: "fa-solid fa-headset",
    folder: "services/support/",
    dropdown: [
      { titre: "Gestion de documents", href: "gestion-documents.html" },
    ],
  },
];

/* ================================
   HELPERS
================================ */
function buildHref(folder = "", href = "") {
  return `${ADMIN_BASE_PATH}${folder}${href}`;
}

function isActive(path) {
  return window.location.pathname.includes(path);
}

/* ================================
   RENDER
================================ */
renderSidebar();

function renderSidebar() {
  renderLogoAndNavlinks();
  renderLogout();
}

function renderLogoAndNavlinks() {
  logoAndNavlinks.innerHTML = "";

  logoAndNavlinks.appendChild(renderLogo());
  logoAndNavlinks.appendChild(renderNavlinks());
}

function renderLogo() {
  const logo = document.createElement("div");
  logo.className = "logo";

  const img = document.createElement("img");
  img.src = logoImgUrl;
  img.alt = "logo";

  logo.appendChild(img);
  return logo;
}

function renderNavlinks() {
  const navLinks = document.createElement("div");
  navLinks.className = "navlinks";

  navlinksTab.forEach((group) => {
    const groupItem = document.createElement("div");
    groupItem.className = "navlinks__links-group";

    const link = document.createElement("div");
    link.className = "link";

    const icon = document.createElement("i");
    icon.className = group.icon;

    const span = document.createElement("span");
    span.textContent = group.titre;

    link.append(icon, span);

    if (group.href) {
      const a = document.createElement("a");
      const fullPath = buildHref(group.folder, group.href);
      a.href = fullPath;

      if (isActive(fullPath)) link.classList.add("link-active");

      a.appendChild(link);
      groupItem.appendChild(a);
    } else {
      groupItem.appendChild(link);
    }

    if (group.dropdown) {
      const dropdown = document.createElement("div");
      dropdown.className = "link-group__dropdown";

      group.dropdown.forEach((item) => {
        const a = document.createElement("a");
        const fullPath = buildHref(group.folder, item.href);

        a.href = fullPath;
        a.textContent = item.titre;

        if (isActive(fullPath)) {
          a.classList.add("sub-link-active");
          link.classList.add("link-active");
        }

        dropdown.appendChild(a);
      });

      groupItem.appendChild(dropdown);
    }

    navLinks.appendChild(groupItem);
  });

  return navLinks;
}

function renderLogout() {
  const logoutBtn = document.createElement("div");

  logoutBtn.className = "logout-btn";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-power-off";

  const span = document.createElement("span");
  span.textContent = "Déconnexion";

  logoutBtn.append(icon, span);
  logout.appendChild(logoutBtn);

  logoutBtn.addEventListener("click", () => {
    window.location.pathname = "portal/portal-page.html";
  });
}
