/* ------------------------------------------------------------------
         1. Configuration & données
         Pour ajouter une institution : ajouter un objet à ENTITIES.
         `accent` : couleur RGB séparée par des espaces (utilisée en CSS).
         ------------------------------------------------------------------ */
const CONFIG = {
  openInNewTab: false,
};

const ENTITIES = [
  {
    name: "SSIA Capital Holding",
    img: "assets/img/logo_holding.png",
    url: "https://example.com/holding",
    accent: "124 140 255",
  },
  {
    name: "Campus SSIAVERSITY",
    img: "assets/img/versity.png",
    url: "https://example.com/versity",
    accent: "56 189 248",
  },
  {
    name: "SSIA VaultBridge",
    img: "assets/img/vault.png",
    url: "https://example.com/vaultbridge",
    accent: "52 211 153",
  },
  {
    name: "OneSSIA Market",
    img: "assets/img/market.png",
    url: "https://example.com/market",
    accent: "251 191 36",
  },
  {
    name: "SSIA Mosaic",
    img: "assets/img/mosaic.jpeg",
    url: "https://example.com/mosaic",
    accent: "244 114 182",
  },
  {
    name: "CRVE-SSIA",
    img: "assets/img/crve.jpg",
    url: "https://example.com/crve",
    accent: "167 139 250",
  },
  {
    name: "CBEL-SSIA",
    img: "assets/img/cbel.jpg",
    url: "https://example.com/cbel",
    accent: "45 212 191",
  },
  {
    name: "CRMB-SSIA",
    img: "assets/img/crmb.jpg",
    url: "https://example.com/crmb",
    accent: "248 113 113",
  },
  {
    name: "BCS-SSIA",
    img: "assets/img/brotherhood.jpg",
    url: "https://example.com/bcs",
    accent: "96 165 250",
  },
  {
    name: "Management Pôle",
    img: "assets/img/young_community.jpg",
    url: "https://example.com/management",
    accent: "251 146 60",
  },
];

/* ------------------------------------------------------------------
         2. Utilitaires
         ------------------------------------------------------------------ */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function createElement(tag, props = {}, ...children) {
  const element = Object.assign(document.createElement(tag), props);
  element.append(...children);
  return element;
}

function getInitials(name) {
  return name
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/* ------------------------------------------------------------------
         3. Cartes
         ------------------------------------------------------------------ */
function createLogo(entity) {
  const logo = createElement("span", { className: "card__logo" });
  const image = createElement("img", {
    src: entity.img,
    alt: "",
    loading: "lazy",
  });

  // Si le logo est introuvable, on affiche les initiales de l'entité
  image.addEventListener(
    "error",
    () => logo.replaceChildren(getInitials(entity.name)),
    {
      once: true,
    },
  );

  logo.append(image);
  return logo;
}

function createCard(entity, index) {
  const link = createElement(
    "a",
    {
      className: "card__link",
      href: entity.url,
      ariaLabel: `Accéder à ${entity.name}`,
    },
    createLogo(entity),
    createElement("span", {
      className: "card__name",
      textContent: entity.name,
    }),
    createElement("i", {
      className: "fa-solid fa-arrow-up-right-from-square card__arrow",
    }),
  );

  if (CONFIG.openInNewTab) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  const card = createElement("li", { className: "card" }, link);
  card.style.setProperty("--i", index);
  card.style.setProperty("--accent", entity.accent);
  return card;
}

function renderCards(container) {
  container.append(...ENTITIES.map(createCard));
}

/* ------------------------------------------------------------------
         4. Halo lumineux : chaque carte connaît la position du curseur
         ------------------------------------------------------------------ */
function initSpotlight(container) {
  const links = [...container.querySelectorAll(".card__link")];
  let frame = null;

  container.addEventListener("pointermove", (event) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      links.forEach((link) => {
        const rect = link.getBoundingClientRect();
        link.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        link.style.setProperty("--my", `${event.clientY - rect.top}px`);
      });
    });
  });
}

/* ------------------------------------------------------------------
         5. Arrière-plan : champ de particules reliées (constellation)
         ------------------------------------------------------------------ */
class ParticleField {
  static LINK_DISTANCE = 130;
  static POINTER_RADIUS = 160;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.pointer = { x: -9999, y: -9999 };

    this.resize = this.resize.bind(this);
    this.tick = this.tick.bind(this);
  }

  start() {
    this.resize();
    window.addEventListener("resize", this.resize);
    window.addEventListener("pointermove", (e) => {
      this.pointer.x = e.clientX;
      this.pointer.y = e.clientY;
    });

    if (prefersReducedMotion) {
      this.draw(); // image fixe
    } else {
      requestAnimationFrame(this.tick);
    }
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(Math.floor((this.width * this.height) / 16000), 90);
    this.particles = Array.from({ length: count }, () => this.createParticle());
    if (prefersReducedMotion) this.draw();
  }

  createParticle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.4 + 0.6,
    };
  }

  update() {
    for (const p of this.particles) {
      const dx = p.x - this.pointer.x;
      const dy = p.y - this.pointer.y;
      const distance = Math.hypot(dx, dy);

      // Légère répulsion autour du curseur
      if (distance < ParticleField.POINTER_RADIUS && distance > 0) {
        const force = (1 - distance / ParticleField.POINTER_RADIUS) * 0.6;
        p.x += (dx / distance) * force;
        p.y += (dy / distance) * force;
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;
    }
  }

  draw() {
    const { ctx, particles } = this;
    ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];

      ctx.beginPath();
      ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(170, 180, 255, 0.7)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance > ParticleField.LINK_DISTANCE) continue;

        const alpha = (1 - distance / ParticleField.LINK_DISTANCE) * 0.22;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(150, 165, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  tick() {
    this.update();
    this.draw();
    requestAnimationFrame(this.tick);
  }
}

/* ------------------------------------------------------------------
         6. Initialisation
         ------------------------------------------------------------------ */
const cardsContainer = document.getElementById("cards");

renderCards(cardsContainer);
initSpotlight(cardsContainer);
new ParticleField(document.getElementById("field")).start();
