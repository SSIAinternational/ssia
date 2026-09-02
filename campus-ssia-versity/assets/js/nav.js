const nav = document.querySelector(".nav-versity");

const navLogoUrl = "img/versity-modify.png";

const navListTab = [
  {
    title: "Acceuil",
    href: "index.html",
  },
  {
    title: "Collèges",
    href: "college.html",
  },
  {
    title: "Admission",
    href: "admission.html",
  },
  {
    title: "CBEL-Bourse",
    href: "cbel.html",
  },
  {
    title: "TSAC",
    href: "tsac.html",
  },
  {
    title: "Blog & Actualités",
    href: "blog.html",
  },
  {
    title: "Vie estudiantine",
    href: "vie-estudiantine.html",
  },
];

function renderNav() {
  const logoDiv = Object.assign(document.createElement("div"), {
    className: "logo",
  });
  const logoLink = Object.assign(document.createElement("a"), {
    href: "index.html",
  });
  const logoImg = Object.assign(document.createElement("img"), {
    src: navLogoUrl,
    alt: "logo-versity",
  });

  nav.appendChild(logoDiv);
  logoDiv.appendChild(logoLink);
  logoLink.appendChild(logoImg);

  const navList = Object.assign(document.createElement("div"), {
    className: "nav-list",
  });

  const navListUl = document.createElement("ul");

  nav.appendChild(navList);
  navList.appendChild(navListUl);

  navListTab.forEach((navItem) => {
    const navListLi = document.createElement("li");
    const navLink = Object.assign(document.createElement("a"), {
      href: navItem.href,
      textContent: navItem.title,
    });
    if (window.location.pathname.includes(navItem.href)) {
      navLink.classList.add("nav-active");
    }
    navListUl.appendChild(navListLi);
    navListLi.appendChild(navLink);
  });

  const connectBtn = Object.assign(document.createElement("button"), {
    textContent: "SSIA Connect",
  });

  connectBtn.addEventListener("click", () => {
    window.location.pathname = "/campus-ssia-versity/authentification.html";
  });

  nav.appendChild(connectBtn);

  return nav;
}

renderNav();
