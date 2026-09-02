"useStrict";

const navListTab = [
  {
    titre: "Admission",
    href: "admission.html",
    active: false,
  },
  {
    titre: "Entretien",
    href: "entretien.html",
    active: false,
  },
  {
    titre: "CBEL-Bourse",
    href: "cbel.html",
    active: false,
  },
  {
    titre: "Inscription",
    href: "inscription.html",
    active: false,
  },
  {
    titre: "Cours",
    href: "cours.html",
    active: false,
  },
  {
    titre: "Examens",
    href: "examens.html",
    active: false,
  },
  {
    titre: "Carrière",
    href: "carriere.html",
    active: false,
  },
];

const nav = document.querySelector(".nav");

function renderNavbar() {
  nav.innerHTML = ``;
  const logoImg = document.createElement("img");
  logoImg.src = "../../img/versity-modify.png";
  logoImg.alt = "logo";
  nav.appendChild(logoImg);

  renderNavList();

  renderIGroup();
}

renderNavbar();

function renderNavList() {
  const navList = document.createElement("div");
  navList.classList.add("nav-list");
  const ul = document.createElement("ul");

  navListTab.forEach((navItem) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = navItem.href;
    a.textContent = navItem.titre;
    defineActive(navItem, a);
    li.appendChild(a);
    ul.appendChild(li);
  });

  navList.appendChild(ul);
  nav.appendChild(navList);
}

function renderIGroup() {
  const iGroup = document.createElement("div");
  iGroup.classList.add("i-group");
  const iClassTab = [
    "fa-regular fa-message chat-btn",
    "fa-regular fa-bell notif-btn",
  ];

  iClassTab.forEach((iClassItem) => {
    const i = document.createElement("i");
    i.classList.add(...iClassItem.split(" "));
    iGroup.append(i);
  });

  const a = document.createElement("a");
  a.href = "dash.html";

  const button = document.createElement("button");
  button.textContent = "Dashboard";

  iGroup.appendChild(a);
  a.appendChild(button);
  nav.appendChild(iGroup);
}

function defineActive(navItem, a) {
  const currentPage = window.location.pathname;

  if (currentPage.includes(navItem.href)) {
    navItem.active = true;
    putActiveClass(navItem, a);
  }
}

function putActiveClass(navItem, a) {
  if (navItem.active == true) {
    a.classList.add("nav-active");
  }
}
