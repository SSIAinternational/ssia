"use strict";

const factureNav = document.querySelectorAll(
  " .facture-list .facture-list__nav > .nav-item",
);

const thead = document.querySelector(".historique_table table thead");

const tbody = document.querySelector(".historique_table table tbody");

const historiqueData = [
  {
    thead: [
      "N°",
      "Ref",
      "Date et heure",
      "Service",
      "Motif de la facture",
      "Montant",
      "ID de l'entité",
      "Statut",
      "Facture",
      "Confirmation",
    ],
    tbody: [
      {
        numero: "1",
        ref: "#0001-FAC",
        date: "02-05-2026 16:38",
        service: "Pédagogie",
        motif: "Inscription S1 PRO2384VER VER-14096917Z",
        montant: "100",
        entityId: "#SSIABC-23D5",

        statut: {
          text: "Payée",
          className: "success",
        },

        facture: {
          icon: "fa-solid fa-download",
        },

        confirmation: {
          text: "En cours",
          className: "sended-no-confirmed",
        },
      },
      {
        numero: "1",
        ref: "#0001-FAC",
        date: "02-05-2026 16:38",
        service: "Pédagogie",
        motif: "Inscription S1 PRO2384VER VER-14096917Z",
        montant: "100",
        entityId: "#SSIABC-23D5",

        statut: {
          text: "Payée",
          className: "success",
        },

        facture: {
          icon: "fa-solid fa-download",
        },

        confirmation: {
          text: "Terminée",
          className: "sended-confirmed",
        },
      },
    ],
  },
  {
    thead: [
      "N°",
      "Ref",
      "Date & Heure",
      "ID de l'entité",
      "Service",
      "Motif",
      "Montant",
      "Echélonnement",
      "Echéance",
      "Statut",
      "Facture",
      "Confirmation",
    ],
    tbody: [
      {
        numero: "1",
        ref: "#0001-FAC",
        entityId: "#SSIABC-23D5",
        date: "02-05-2026 16:38",
        service: "Pédagogie",
        motif: "Inscription S1 PRO2384VER VER-14096917Z",
        montant: "100",
        echelonnement: "4",
        echeance: "12-08-2026",

        statut: {
          text: "Payée",
          className: "success",
        },

        facture: {
          icon: "fa-solid fa-download",
        },

        confirmation: {
          text: "Confirmé",
          className: "confirmed",
        },
      },
    ],
  },

  {
    thead: [
      "N°",
      "Ref",
      "Date et heure emission",
      "Service",
      "Motif de la facture",
      "Montant",
      "ID de l'entité",
      "Echéance",
      "Ordre",
      "Date et heure paiement",
      "Statut",
      "Facture",
    ],
    tbody: [
      {
        numero: "1",
        ref: "#0001-FAC",
        dateEmi: "02-05-2026 16:38",
        service: "Pédagogie",
        motif: "Inscription S1 PRO2384VER VER-14096917Z",
        montant: "25",
        entityId: "#SSIABC-23D5",
        dateEch: "02-08-2026",
        ordre: "",
        datePay: "02-05-2026 15:34",

        statut: {
          text: "Payée",
          className: "success",
        },

        facture: {
          icon: "fa-solid fa-download",
        },
      },
      {
        numero: "2",
        ref: "#0001-FAC",
        dateEmi: "02-05-2026 16:38",
        service: "Pédagogie",
        motif: "Inscription S1 PRO2384VER VER-14096917Z",
        montant: "25",
        entityId: "#SSIABC-23D5",
        dateEch: "02-08-2026",
        ordre: "",
        datePay: "02-05-2026 16:38",

        statut: {
          text: "Payée",
          className: "success",
        },

        facture: {
          icon: "fa-solid fa-download",
        },
      },
      {
        numero: "3",
        ref: "#0001-FAC",
        dateEmi: "02-05-2026 16:38",
        service: "Pédagogie",
        motif: "Inscription S1 PRO2384VER VER-14096917Z",
        montant: "25",
        entityId: "#SSIABC-23D5",
        dateEch: "02-08-2026",
        ordre: "",
        datePay: "-",

        statut: {
          text: "En attente",
          className: "on-hold",
        },

        facture: {
          icon: "fa-solid fa-download",
        },
      },
      {
        numero: "4",
        ref: "#0001-FAC",
        dateEmi: "02-05-2026 16:38",
        service: "Pédagogie",
        motif: "Inscription S1 PRO2384VER VER-14096917Z",
        montant: "25",
        entityId: "#SSIABC-23D5",
        dateEch: "02-08-2026",
        ordre: "",
        datePay: "-",

        statut: {
          text: "En attente",
          className: "on-hold",
        },

        facture: {
          icon: "fa-solid fa-download",
        },
      },
    ],
  },
];

const stateTab = ["cree", "envoye", "reçue"];

let state = "cree";

function defaultState() {
  state = stateTab[0];
  factureNav[0].classList.add("active");
  updateHistoriqueUI();
}

defaultState();

function removeAllActive() {
  factureNav.forEach((fn) => {
    fn.classList.remove("active");
  });
}

function renderThead(i) {
  thead.innerHTML = `
    <tr>
      ${historiqueData[i].thead.map((h) => `<th>${h}</th>`).join("")}
    </tr>
  `;
}

function renderTbody(i) {
  tbody.innerHTML = historiqueData[i].tbody
    .map((row) => {
      return `
        <tr>
          ${Object.values(row)
            .map((value) => {
              // Badge
              if (typeof value === "object" && value.text && value.className) {
                return `
                  <td>
                    <span class="${value.className}">
                      ${value.text}
                    </span>
                  </td>
                `;
              }

              // Icône
              if (typeof value === "object" && value.icon) {
                return `
                  <td>
                    <span class="download">
                      <i class="${value.icon}"></i>
                    </span>
                  </td>
                `;
              }

              // Texte normal
              return `<td>${value}</td>`;
            })
            .join("")}
        </tr>
      `;
    })
    .join("");
}

function updateHistoriqueUI() {
  switch (state) {
    case "cree":
      renderThead(stateTab.indexOf(state));
      renderTbody(stateTab.indexOf(state));
      break;

    case "envoye":
      renderThead(stateTab.indexOf(state));
      renderTbody(stateTab.indexOf(state));
      break;

    case "reçue":
      renderThead(stateTab.indexOf(state));
      renderTbody(stateTab.indexOf(state));
      break;
  }
}

factureNav.forEach((factureNavItem, index) => {
  factureNavItem.addEventListener("click", () => {
    state = stateTab[index];
    removeAllActive();
    tbody.innerHTML = "";
    thead.innerHTML = "";
    factureNav[index].classList.add("active");
    updateHistoriqueUI();
  });
});
