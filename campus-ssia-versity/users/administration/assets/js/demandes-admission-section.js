const navs = document.querySelector(".demandes-admission__sidebar");
const sections = document.querySelector(".demandes-admission__set");

const demandeAdmission = Object.assign(document.createElement("div"), {
  className: "demandes-admission__list",
});

const demandesAdmissionTable = Object.assign(document.createElement("div"), {
  className: "demandes-admission__table",
});

const table = document.createElement("table");

const detailModal = document.querySelector(
  ".demandes-admission__modal-details",
);

const detailsContent = document.querySelector(".details-content");

const pdfSet = document.querySelectorAll(".details-content .pdf-item");

const pdfPreview = document.querySelector(".document-preview");

const closePreview = document.querySelector(
  ".document-preview__action-close > .fa-close",
);

const admissionSidebar = [
  {
    title: "Demandes déposés",
    state: "déposé",
  },
  {
    title: "Analyse des demandes",
    state: "traité",
  },
  {
    title: "Décision & synthèse",
    state: "synthèse",
  },
  {
    title: "Demandes acceptées",
    state: "acceptée",
  },
  {
    title: "Demandes rejétées",
    state: "rejétée",
  },
];

let stateDislayed = "déposé";

const userInfos = [
  {
    userId: "",
    isMember: false,
    infoPersonnel: {
      title: "Informations personnelles",
      photo: "../../../../../img/marie.JPG",
      nom: "Djakalet",
      prenoms: "Marie De Dieu Christobelle Sekohonon",
      genre: "Femme",
      dateDeNaissance: "10/12/2025",
      lieuDeNaissance: "Abidjan",
      numeroDePiece: "CNI-425254626",
      pieceIdentite: [],
      nationalite: "Ivoirienne",
      telephone: "+225 0585235443",
      email: "christobelledjakalet12@gmail.com",
      pole: "Côte d'Ivoire",
      matriculeSsia: false,
      lettreRecommendation: [],
      complet: "notdefined",
    },
    infoAcademic: {
      title: "Informations académiques",
      information: [
        {
          annee: "2021",
          formation: "Bac +1",
          etablissement: "Université Virtuelle de Côte d'Ivoire",
          commentaire: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          moyenne: "13/20",
          mention: "Assez bien",
          justificatifs: [],
        },
      ],
      complet: "notdefined",
    },
    choixFormation: {
      title: "Choix de formation",
      choix: [
        {
          college: "Clermont",
          programme: "Administration des affaires",
          anneeDentrer: "2025 - 2026",
          niveau: "Premier cycle - Bac +3",
          lettreMotivation: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          resultatTsac: "75%",
          justificatifTsac: [],
        },
      ],
      complet: "notdefined",
    },
    infoComplementaire: {
      title: "Informations complémentaires",
      anneeVisa: "2020",
      visaEntreSsia: "Visa étudiant",
      titreSejour: "Court séjour",
      carteSejour: false,
      passeportSsia: "637768920-PASS-982",
      justificatifSejour: [],
      complet: "notdefined",
    },
    numReference: "#ADMI-2025-1212-9027",
    commentaireAnalyse: "",
    recommendationAnalyse: "",
    synthese: "",
    noteEntretien: "",
    commentaireEntretien: "",
    collegeAccepte: [],
    statut: "déposé",
    locked: true,
  },
  {
    userId: "",
    isMember: true,
    infoPersonnel: {
      title: "Informations personnelles",
      photo: "../../../../../img/marie.JPG",
      nom: "Djakalet",
      prenoms: "Marie De Dieu Christobelle Sekohonon",
      genre: "Femme",
      dateDeNaissance: "10/12/2025",
      lieuDeNaissance: "Abidjan",
      numeroDePiece: "CNI-425254626",
      pieceIdentite: [],
      nationalite: "Ivoirienne",
      telephone: "+225 0585235443",
      email: "christobelledjakalet12@gmail.com",
      pole: "Côte d'Ivoire",
      matriculeSsia: false,
      lettreRecommendation: [],
      complet: "notdefined",
    },
    infoAcademic: {
      title: "Informations académiques",
      information: [
        {
          annee: "2021",
          formation: "Bac +1",
          etablissement: "Université Virtuelle de Côte d'Ivoire",
          commentaire: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          moyenne: "13/20",
          mention: "Assez bien",
          justificatifs: [],
        },
      ],
      complet: "notdefined",
    },
    choixFormation: {
      title: "Choix de formation",
      choix: [
        {
          college: "Clermont",
          programme: "Administration des affaires",
          anneeDentrer: "2025 - 2026",
          niveau: "Premier cycle - Bac +3",
          lettreMotivation: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          resultatTsac: 75,
          justificatifTsac: [],
        },
      ],
      complet: "notdefined",
    },
    infoComplementaire: {
      title: "Informations complémentaires",
      anneeVisa: "2020",
      visaEntreSsia: "Visa étudiant",
      titreSejour: "Court séjour",
      carteSejour: false,
      passeportSsia: "637768920-PASS-982",
      justificatifSejour: [],
      complet: "notdefined",
    },
    numReference: "#ADMI-2025-1212-9028",
    commentaireAnalyse: "",
    recommendationAnalyse: "",
    synthese: "",
    noteEntretien: "",
    commentaireEntretien: "",
    collegeAccepte: [],
    statut: "déposé",
    locked: true,
  },
];

navs.innerHTML = "";

admissionSidebar.forEach((navItem, index) => {
  const span = document.createElement("span");
  span.textContent = navItem.title;

  if (index === 0) {
    span.classList.add("demandes-admission-nav__active");
  }

  span.addEventListener("click", () => {
    document
      .querySelectorAll(".demandes-admission__sidebar > span")
      .forEach((el) => el.classList.remove("demandes-admission-nav__active"));

    span.classList.add("demandes-admission-nav__active");

    stateDislayed = navItem.state;

    renderDemandesTable();
  });

  navs.append(span);
});

demandesAdmissionTable.append(table);
demandeAdmission.append(demandesAdmissionTable);
sections.append(demandeAdmission);

let filterNav = [];

const infoGroup = (label, value) => `
  <div class="span-group">
    <span>${label}</span>
    <span>${value || "N/A"}</span>
  </div>`;

const pdfBlock = (label, count = 1) => `
  <div class="pdf-doc">
    <span>${label}</span>
    <div class="pdf-item__set">
      ${Array(count).fill('<div class="pdf-item"></div>').join("")}
    </div>
  </div>`;

function showDemandeDetail(u) {
  const category = (key) => u[key];

  const perso = category("infoPersonnel");
  const acad = category("infoAcademic");
  const choix = category("choixFormation");
  const complement = category("infoComplementaire");

  detailModal.innerHTML = `
   <div class="details-content">
      <!-- fermeture -->
      <div class="action-close">
        <i class="fa-solid fa-close"></i>
      </div>
      
      <!-- référence -->
      <div class="demande-refence">
        <span>
          <u>N° de référence de la demande :</u> ${u.numReference}
        </span>
      </div>

      
      <div class="rubrique">
        <div class="title-angle-actions">
          <div class="title-angle">
            <h5>${perso.title}</h5>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          
          <div class="actions">
          ${
            perso.complet === "notdefined"
              ? `
            <span>Complet</span>
            <span>Imcomplet</span>`
              : perso.complet === "complet"
                ? `
            <span class=${perso.complet}>${perso.complet} <i class="fa-solid fa-lock"></i
            ></span>`
                : `<span class=${perso.complet}>${perso.complet}</span>`
          }
          </div>
        </div>

        <div class="content">
          <div class="information-personnelle__header">
            <img src=${perso.photo} alt="" srcset="" />
            <div class="information-personnelle__header__detail-text">
              ${infoGroup("Nom", perso.nom)}
              ${infoGroup("Prénoms", perso.prenoms)}
            </div>
          </div>
          <div class="body">
              ${infoGroup("Genre", perso.genre)}
              ${infoGroup("Date de naissance", perso.dateDeNaissance)}
              ${infoGroup("Lieu de naissance", perso.lieuDeNaissance)}
              ${infoGroup("Numéro de piece d'identité / passeport", perso.numeroDePiece)}
              ${pdfBlock("Pièce d'identité")}
              ${infoGroup("Nationalité", perso.nationalite)}
              ${infoGroup("Numéro de téléphone", perso.telephone)}
              ${infoGroup("Adresse E-mail", perso.email)}
              ${infoGroup("Pôle SSIA", perso.pole)}
              ${infoGroup("Matricule SSIA", perso.matriculeSsia)}
              ${pdfBlock("Lettre de recommendation")}
          </div>
        </div>
      </div>

       <!-- Informations académiques -->
      <div class="rubrique">
        <div class="title-angle-actions">
          <div class="title-angle">
            <h5>${acad.title}</h5>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div class="actions">
          ${
            acad.complet === "notdefined"
              ? `
            <span>Complet</span>
            <span>Imcomplet</span>`
              : acad.complet === "complet"
                ? `
            <span class=${acad.complet}>${acad.complet} <i class="fa-solid fa-lock"></i
            ></span>`
                : `<span class=${acad.complet}>${acad.complet}</span>`
          }
          </div>
        </div>
        <div class="content">
          <div class="body">
            <span style="
              color: black;
              font-size: 0.8rem;
              font-weight: 600;
              ">-- Information 1</span>
            ${infoGroup("Année", acad.information[0].annee)}
            ${infoGroup("Formation", acad.information[0].formation)}
            ${infoGroup("Etablissement fréquenté ou institution", acad.information[0].etablissement)}
            ${infoGroup("Commentaire", acad.information[0].commentaire)}
            ${infoGroup("Moyenne", acad.information[0].moyenne)}
            ${infoGroup("Mention", acad.information[0].mention)}
            ${pdfBlock("Justificatifs", 3)}
          </div>
        </div>
      </div>

      
      <!-- Choix de formation -->
      <div class="rubrique">
        <div class="title-angle-actions">
          <div class="title-angle">
            <h5>${choix.title}</h5>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div class="actions">
          ${
            choix.complet === "notdefined"
              ? `
            <span>Complet</span>
            <span>Imcomplet</span>`
              : choix.complet === "complet"
                ? `
            <span class=${choix.complet}>${choix.complet} <i class="fa-solid fa-lock"></i
            ></span>`
                : `<span class=${choix.complet}>${choix.complet}</span>`
          }
          </div>
        </div>
        <div class="content">
          <div class="body">
            <span style="
              color: black;
              font-size: 0.8rem;
              font-weight: 600;
              ">-- Choix 1</span>
            ${infoGroup("Collège", choix.choix[0].college)}
            ${infoGroup("Programme d'étude", choix.choix[0].programme)}
            ${infoGroup("Année d'entrée", choix.choix[0].anneeDentrer)}
            ${infoGroup("Niveau demandé", choix.choix[0].niveau)}
            ${infoGroup("Lettre de motivation addressée au collège", choix.choix[0].lettreMotivation)}
            ${infoGroup("Résultat du test d'aptitude", choix.choix[0].resultatTsac)}
            ${pdfBlock("Justificatif du test", 3)}
          </div>
        </div>
      </div>

      
      <!-- Informations complémentaires -->
      <div class="rubrique">
        <div class="title-angle-actions">
          <div class="title-angle">
            <h5>${complement.title}</h5>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div class="actions">
          ${
            complement.complet === "notdefined"
              ? `
            <span>Complet</span>
            <span>Imcomplet</span>`
              : complement.complet === "complet"
                ? `
            <span class=${complement.complet}>${complement.complet} <i class="fa-solid fa-lock"></i
            ></span>`
                : `<span class=${complement.complet}>${complement.complet}</span>`
          }
          </div>
        </div>
        <div class="content">
          <div class="body">
            ${infoGroup("Année d'obtention du visa SSIA", complement.anneeVisa)}
            ${infoGroup("Visa d'entrée SSIA", complement.visaEntreSsia)}
            ${infoGroup("Titre de séjour SSIA", complement.titreSejour)}
            ${infoGroup("Carte de séjour visa SSIA", complement.carteSejour)}
            ${infoGroup("Passeport SSIA", complement.passeportSsia)}
            ${pdfBlock("Justificatif du séjour", 1)}
          </div>
        </div>
      </div>


      ${
        stateDislayed === "traité"
          ? `
          <div class="details-content__action filed-only">
            <div class="inputs">
              <textarea rows="1" placeholder="Commentaire"></textarea>
              <select name="" id="">
                <option value="">-- Recommandation --</option>
                <option value="Approuvée">Approuvée</option>
                <option value="Non approuvé">Non approuvé</option>
                <option value="Peux étudier">Peux étudier</option>
              </select>
            </div>
            <div class="buttons">
              <button class="btn-valider">Valider</button>
              <button class="btn-unlock">Déverrouiller la soumission</button>
            </div>
          </div>`
          : stateDislayed === "synthèse"
            ? `
          <div class="details-content__final-action decision-only">
            <div class="final-action__comment">
              <span><b>Commentaire analyse :</b><br />${u.commentaireAnalyse}</span>
              <span><b>Commentaire entretien :</b><br />Lorem</span>
              <span><b>Note entretien :</b><br />xx/100</span>
              <textarea rows="1" placeholder="Faire la synthèse"></textarea>
            </div>
            <div class="final-action__button">
              <button class="valider">Envoyer la synthèse</button>
            </div>
          </div>`
            : stateDislayed === "acceptée" || stateDislayed === "rejétée"
              ? ``
              : ""
      }
    </div>

   
  `;

  const rubriques = detailModal.querySelectorAll(".rubrique");

  const dataMap = [perso, acad, choix, complement];

  rubriques.forEach((rubrique, index) => {
    const data = dataMap[index];

    if (data.complet === "notdefined") {
      const spans = rubrique.querySelectorAll(".actions span");

      spans.forEach((span) => {
        span.addEventListener("click", () => {
          const value = span.textContent.toLocaleLowerCase();

          data.complet = value;

          updateStatut(u);

          renderDemandesTable();

          showDemandeDetail(u);
        });
      });
    }
  });

  const rubriquesTitle = document.querySelectorAll(
    ".rubrique .title-angle-actions .title-angle > h5",
  );

  const rubriqueContent = document.querySelectorAll(".rubrique .content");

  const rubriqueArrow = document.querySelectorAll(
    ".details-content .title-angle-actions .title-angle > .fa-angle-down",
  );

  closeAllRubriqueContent();

  rubriquesTitle.forEach((rubriquesTitleItem, index) => {
    rubriquesTitleItem.addEventListener("click", () => {
      const arrow = rubriqueArrow[index];
      const rubriqueContentItem = rubriqueContent[index];

      arrow.style.transition = "ease 0.3s";

      arrow.style.transform =
        arrow.style.transform == "rotate(180deg)"
          ? "rotate(0deg)"
          : "rotate(180deg)";

      if (rubriqueContentItem.classList.contains("hide")) {
        closeAllRubriqueContent();
        rubriqueContentItem.classList.remove("hide");
      } else {
        rubriqueContentItem.classList.add("hide");
      }
    });
  });

  defaultState();

  if (pdfSet > 0) {
    pdfSet.forEach((pdfItem) => {
      pdfItem.addEventListener("click", () => {
        if (detailModal) {
          detailModal.style.width = "75%";
          detailModal.style.transition = "width ease 0.5s";
        }
        if (detailsContent) {
          detailsContent.classList.remove("shrink");
        }
        pdfPreview.classList.remove("hide");
      });
    });
  }

  if (closePreview) {
    closePreview.addEventListener("click", () => {
      pdfPreview.classList.add("hide");
      if (detailsContent) {
        detailsContent.classList.remove("shrink");
      }
      detailModal.style.width = "40%";
    });
  }
}

function renderDemandesTable() {
  let filteredUsers = [];
  table.innerHTML = "";

  switch (stateDislayed) {
    case "déposé":
      filteredUsers = userInfos.filter((user) => user.statut === "déposé");
      table.innerHTML = `
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom et prénoms</th>
                  <th>Genre</th>
                  <th>Membre SSIA</th>
                  <th>E-mail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              ${filteredUsers
                .map(
                  (user, index) => `
                    <tr data-index="${index}">
                      <td>${index + 1}</td>
                      <td>
                        <img src="${user.infoPersonnel.photo}" alt="" />
                        ${user.infoPersonnel.nom} ${user.infoPersonnel.prenoms}
                      </td>
                      <td>${user.infoPersonnel.genre}</td>
                      <td>
                          ${user.isMember ? `<span class="member">Oui</span>` : "Non"}
                      </td>
                      <td>${user.infoPersonnel.email}</td>
                      <td><i class="fa-solid fa-lock"></i></td>
                    </tr>
                  `,
                )
                .join("")}
              </tbody>

`;
      sections.querySelectorAll("table tbody > tr").forEach((row) => {
        row.addEventListener("click", () => {
          const index = row.dataset.index;
          const user = filteredUsers[index];
          showDemandeDetail(user);
          detailModal.classList.remove("hide");
        });
      });

      break;

    case "traité":
      filteredUsers = userInfos.filter((user) => user.statut === "traité");
      table.innerHTML = `
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom et prénoms</th>
                  <th>Genre</th>
                  <th>Membre SSIA</th>
                  <th>E-mail</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
              ${filteredUsers
                .map(
                  (user, index) => `
                    <tr data-index="${index}">
                      <td>${index + 1}</td>
                      <td>
                        <img src="${user.infoPersonnel.photo}" alt="" />
                        ${user.infoPersonnel.nom} ${user.infoPersonnel.prenoms}
                      </td>
                      <td>${user.infoPersonnel.genre}</td>
                      <td>${user.isMember ? `<span class="member">Oui</span>` : "Non"}</td>
                      <td>${user.infoPersonnel.email}</td>
                      <td>${
                        isFullyCompleted(user)
                          ? `<span style ="
                            color: var(--white);
                            font-size: 0.6rem;
                            background: #50b150;
                            padding: 0.1rem 0.2rem;
                            border-radius: 3px;
                            text-transform: capitalize;
                            ">${user.statut}</span>`
                          : `<span style="
                          color: var(--white);
                          font-size: 0.6rem;
                          background: grey;
                          padding: 0.1rem 0.2rem;
                          border-radius: 3px;"
                        >En cours de taitement...</span>`
                      }</td>
                    </tr>
                  `,
                )
                .join("")}
              </tbody>

`;
      sections.querySelectorAll("table tbody > tr").forEach((row) => {
        row.addEventListener("click", () => {
          const index = row.dataset.index;
          const user = filteredUsers[index];
          showDemandeDetail(user);
          detailModal.classList.remove("hide");

          const commentaire = detailModal.querySelector(".inputs textarea");
          const recommendation = detailModal.querySelector(".inputs select");
          const validerBtn = detailModal.querySelector(".buttons .btn-valider");

          validerBtn.addEventListener("click", () => {
            const commentaireValue = commentaire.value;
            const recommendationValue = recommendation.value;

            const categories = [
              user.infoPersonnel,
              user.infoAcademic,
              user.choixFormation,
              user.infoComplementaire,
            ];

            const hasBeenCompleted = categories.every(
              (cat) => cat.complet === "complet",
            );

            if (
              typeof commentaireValue !== "string" ||
              commentaireValue.trim() === "" ||
              typeof recommendationValue !== "string" ||
              recommendationValue.trim() === "" ||
              !hasBeenCompleted
            ) {
              alert(
                "Veuillez remplir tous les champs correctement ou marquer toutes les information comme complète pour valider cette étape",
              );
            } else {
              user.commentaireAnalyse = commentaireValue;
              user.recommendationAnalyse = recommendationValue;
              user.statut = "synthèse";
              alert("Donnée utilisateur mis à jour");
            }
          });
        });
      });

      break;

    case "synthèse":
      filteredUsers = userInfos.filter((user) => user.statut === "synthèse");
      table.innerHTML = `
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom et prénoms</th>
                  <th>Genre</th>
                  <th>Membre SSIA</th>
                  <th>E-mail</th>
                  <th>Note d'entretien</th>
                </tr>
              </thead>
              <tbody>
              ${filteredUsers
                .map(
                  (user, index) => `
                <tr data-index="${index}">
                  <td>${index + 1}</td>
                  <td>
                    <img src=${user.infoPersonnel.photo} alt="" />
                    ${user.infoPersonnel.nom} ${user.infoPersonnel.prenoms}
                  </td>
                  <td>${user.infoPersonnel.genre} </td>
                  <td>${user.isMember ? `<span class="member">Oui</span>` : "Non"}  </td>
                  <td>${user.infoPersonnel.email}</td>
                  <td>${user.noteEntretien}/20</td>
                </tr>
                  `,
                )
                .join("")}
              </tbody>

`;

      sections.querySelectorAll("table tbody > tr").forEach((row) => {
        row.addEventListener("click", () => {
          const index = row.dataset.index;
          const user = filteredUsers[index];
          showDemandeDetail(user);
          detailModal.classList.remove("hide");
        });
      });
      break;

    case "acceptée":
      filteredUsers = userInfos.filter((user) => user.statut === "acceptée");
      table.innerHTML = `
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom et prénoms</th>
                  <th>Genre</th>
                  <th>Membre SSIA</th>
                  <th>E-mail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              ${filteredUsers
                .map(
                  (user, index) => `
                <tr data-index="${index}">
                  <td>${index + 1}</td>
                  <td>
                    <img src=${user.infoPersonnel.photo} alt="" />
                    ${user.infoPersonnel.nom} ${user.infoPersonnel.prenoms}
                  </td>
                  <td>${user.infoPersonnel.genre} </td>
                  <td>${user.isMember ? `<span class="member">Oui</span>` : "Non"}  </td>
                  <td>${user.infoPersonnel.email}</td>
                  <td><span style="
                        color: var(--white);
                        font-size: 0.6rem;
                        background: #50b150;
                        padding: 0.1rem 0.2rem;
                        border-radius: 3px;
                        text-transform: capitalize;
                        ">${user.statut}</span></td>
                </tr>
                  `,
                )
                .join("")}
              </tbody>

`;
      break;

    case "rejétée":
      filteredUsers = userInfos.filter((user) => user.statut === "rejétée");
      table.innerHTML = `
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom et prénoms</th>
                  <th>Genre</th>
                  <th>Membre SSIA</th>
                  <th>E-mail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              ${filteredUsers
                .map(
                  (user, index) => `
                <tr data-index="${index}">
                  <td>${index + 1}</td>
                  <td>
                    <img src=${user.infoPersonnel.photo} alt="" />
                    ${user.infoPersonnel.nom} ${user.infoPersonnel.prenoms}
                  </td>
                  <td>${user.infoPersonnel.genre} </td>
                  <td>${user.isMember ? `<span class="member">Oui</span>` : "Non"}  </td>
                  <td>${user.infoPersonnel.email}</td>
                  <td><span style="
                        color: var(--white);
                        font-size: 0.6rem;
                        background: var(--primary);
                        padding: 0.1rem 0.2rem;
                        border-radius: 3px;
                        text-transform: capitalize;
                        ">${user.statut}</span></td>
                </tr>
                  `,
                )
                .join("")}
              </tbody>

`;
      break;
  }
}

renderDemandesTable();

function defaultState() {
  if (pdfPreview) {
    pdfPreview.classList.add("hide");
  }
  if (detailsContent) {
    detailsContent.classList.remove("shrink");
  }
  if (detailModal) {
    detailModal.style.width = "40%";
  }
}

detailModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-close")) {
    detailModal.classList.add("hide");
  }
});

function closeAllRubriqueContent() {
  const rubriqueContent = detailModal.querySelectorAll(".rubrique .content");

  rubriqueContent.forEach((item) => {
    item.classList.add("hide");
  });
}

function isFullyCompleted(user) {
  const categories = [
    user.infoPersonnel,
    user.infoAcademic,
    user.choixFormation,
    user.infoComplementaire,
  ];

  return categories.every((cat) => cat.complet === "complet");
}

function updateStatut(user) {
  const categories = [
    user.infoPersonnel,
    user.infoAcademic,
    user.choixFormation,
    user.infoComplementaire,
  ];

  const hasBeenProcessed = categories.some(
    (cat) => cat.complet === "complet" || cat.complet === "imcomplet",
  );

  if (hasBeenProcessed && user.statut === "déposé") {
    user.statut = "traité";
  }
}
