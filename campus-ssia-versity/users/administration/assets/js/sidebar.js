// sidebar.js

const sidebarConfig = [
  {
    icon: "fa-solid fa-user",
    label: "Profil",
    url: "profil.html",
  },
  {
    icon: "fa-solid fa-list-check",
    label: "Tâches",
    url: "tâches.html",
  },
  {
    icon: "fa-solid fa-file-pen",
    label: "Reporting",
    url: "reporting.html",
  },
  {
    icon: "fa-solid fa-users-viewfinder",
    label: "Mon équipe",
    url: "equipe.html",
  },
  {
    icon: "fa-solid fa-user-graduate",
    label: "Pédagogie",
    submenu: [
      {
        label: "Liste étudiants",
        url: "services/pedagogie/liste-etudiants.html",
      },
      {
        label: "Liste professeurs",
        url: "services/pedagogie/liste-professeurs.html",
      },
      { label: "Collèges", url: "services/pedagogie/collèges.html" },
      {
        label: "Suspension",
        url: "services/pedagogie/etudiants-suspendus.html",
      },
    ],
  },
  {
    icon: "fa-solid fa-money-bill-transfer",
    label: "Finance & Scolarité",
    submenu: [],
  },
  {
    icon: "fa-solid fa-graduation-cap",
    label: "Admission",
    submenu: [
      {
        label: "Analyse des demandes",
        url: "demandes-admission.html",
      },
      {
        label: "Programmation d'entretiens",
        url: "entretiens.html",
      },
      {
        label: "Soutenance",
        url: "soutenances.html",
      },
    ],
  },
  {
    icon: "fa-solid fa-school",
    label: "Vie estudiantine",
    submenu: [],
  },
  {
    icon: "fa-solid fa-bullhorn",
    label: "Communication",
    submenu: [],
  },
  {
    icon: "fa-solid fa-handshake",
    label: "Partenariats & Affaires",
    submenu: [],
  },
  {
    icon: "fa-solid fa-headset",
    label: "Support technique",
    submenu: [],
  },
  {
    icon: "fa-solid fa-users",
    label: "Ressources humaines",
    submenu: [],
  },
];

function generateSidebar() {
  const navbar = document.querySelector(".navbar .navlinks");
  const currentPage = window.location.pathname.split("/").pop();

  sidebarConfig.forEach((item) => {
    const group = document.createElement("div");
    group.classList.add("navlinks__links-group");

    // Si pas de sous-menu → c'est un lien simple
    if (!item.submenu) {
      group.innerHTML = `
        <a href="${item.url}">
          <div class="link ${item.url === currentPage ? "link-active" : ""}">
            <i class="${item.icon}"></i><span>${item.label}</span>
          </div>
        </a>
      `;
    } else {
      // Item parent
      group.innerHTML = `
        <div class="link">
          <i class="${item.icon}"></i><span>${item.label}</span>
        </div>
        <div class="link-group__dropdown"></div>
      `;

      // Remplir le sous-menu
      const dropdown = group.querySelector(".link-group__dropdown");

      item.submenu.forEach((sub) => {
        const active = sub.url === currentPage ? "link-active-sub" : "";

        dropdown.innerHTML += `
          <a class="${active}" href="${sub.url}">${sub.label}</a>
        `;
      });
    }

    navbar.appendChild(group);
  });
}

generateSidebar();

/*
 
    <nav class="navbar">
      <div class="logo-navlinks">
        <div class="logo">
          <img src="../../img/versity-modify.png" alt="" />
        </div>
        <div class="navlinks"></div>
      </div>

      <div class="logout">
        <div class="logout-btn">
          <i class="fa-solid fa-power-off"></i><span>Deconnexion</span>
        </div>
      </div>
    </nav>

    <script src="../../assets/js/sidebar.js"></script>
*/
