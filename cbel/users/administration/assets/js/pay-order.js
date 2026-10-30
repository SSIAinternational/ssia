document.addEventListener("DOMContentLoaded", () => {
  // Données fictives pour tester l'interface.
  // À remplacer par les données réelles de SSIA Versity.
  const ordresPaiement = [
    {
      nom: "KOUASSI Jean Marc",
      matricule: "VER-14197917Z",
      compte: "9389 3747 8748 8379",
      montant: 75000,
      statut: "En cours",
      motif: "",
      dateHeure: "12-03-2026 13:34",
    },
    {
      nom: "YAO Marie-Claire",
      matricule: "VER-12097917Z",
      compte: "4589 3747 8748 8379",
      montant: 75000,
      statut: "Accepté",
      motif: "",
      dateHeure: "12-03-2026 13:34",
    },
    {
      nom: "TRAORE Ibrahim",
      matricule: "VER-14097917Z",
      compte: "9389 3747 8748 8379",
      montant: 75000,
      statut: "Refusé",
      motif: "Solde insuffisant",
      dateHeure: "12-03-2026 13:34",
    },
    {
      nom: "KOFFI Grâce",
      matricule: "VER-14097917Z",
      compte: "9389 3747 8748 8379",
      montant: 100000,
      statut: "En cours",
      motif: "",
      dateHeure: "12-03-2026 13:34",
    },
    {
      nom: "BLE Christian",
      matricule: "VER-14097917Z",
      compte: "9389 3747 8748 8379",
      montant: 75000,
      statut: "Accepté",
      motif: "",
      dateHeure: "12-03-2026 13:34",
    },
    {
      nom: "N'DRI Esther",
      matricule: "VER-14097917Z",
      compte: "9389 3747 8748 8379",
      montant: 75000,
      statut: "Refusé",
      motif: "Numéro de compte invalide",
      dateHeure: "12-03-2026 13:34",
    },
  ];

  const tableBody = document.getElementById("payTableBody");
  const searchInput = document.getElementById("paySearch");
  const statusFilter = document.getElementById("payStatusFilter");
  const clearButton = document.getElementById("payClear");
  const resetButton = document.getElementById("payReset");
  const resultCount = document.getElementById("payResultCount");
  const emptyState = document.getElementById("payEmpty");
  const footerText = document.getElementById("payFooterText");

  const totalElement = document.getElementById("payTotal");
  const pendingElement = document.getElementById("payPending");
  const acceptedElement = document.getElementById("payAccepted");
  const rejectedElement = document.getElementById("payRejected");

  if (
    !tableBody ||
    !searchInput ||
    !clearButton ||
    !resetButton ||
    !resultCount ||
    !emptyState ||
    !footerText
  ) {
    return;
  }

  // Formatage des montants en FCFA.
  function formaterMontant(montant) {
    return (
      new Intl.NumberFormat("fr-FR", {
        maximumFractionDigits: 0,
      }).format(montant) + " IV"
    );
  }

  // Initiales de l'étudiant.
  function creerInitiales(nom) {
    return nom
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((mot) => mot.charAt(0))
      .join("");
  }

  // Mise à jour des compteurs globaux.
  function mettreAJourStatistiques() {
    totalElement.textContent = ordresPaiement.length;

    pendingElement.textContent = ordresPaiement.filter(
      (ordre) => ordre.statut === "En cours",
    ).length;

    acceptedElement.textContent = ordresPaiement.filter(
      (ordre) => ordre.statut === "Accepté",
    ).length;

    rejectedElement.textContent = ordresPaiement.filter(
      (ordre) => ordre.statut === "Refusé",
    ).length;
  }

  // Création sécurisée du badge de statut.
  function creerBadgeStatut(ordre) {
    const badge = document.createElement("span");
    badge.className = "pay-status";

    const icone = document.createElement("i");
    icone.className = "fa-solid";

    const libelle = document.createElement("span");
    libelle.textContent = ordre.statut;

    if (ordre.statut === "En cours") {
      badge.classList.add("pay-status-pending");
      icone.classList.add("fa-clock");
    } else if (ordre.statut === "Accepté") {
      badge.classList.add("pay-status-accepted");
      icone.classList.add("fa-circle-check");
    } else {
      badge.classList.add("pay-status-rejected");
      icone.classList.add("fa-circle-xmark");

      // Infobulle du motif de refus.
      const tooltip = document.createElement("span");
      tooltip.className = "pay-reason-tooltip";
      tooltip.setAttribute("role", "tooltip");

      const titre = document.createElement("span");
      titre.className = "pay-reason-title";

      const iconeMotif = document.createElement("i");
      iconeMotif.className = "fa-solid fa-circle-info";

      const texteTitre = document.createElement("span");
      texteTitre.textContent = "Motif du refus";

      titre.append(iconeMotif, texteTitre);

      const texteMotif = document.createElement("span");
      texteMotif.className = "pay-reason-text";
      texteMotif.textContent = ordre.motif || "Aucun motif précisé.";

      tooltip.append(titre, texteMotif);

      badge.tabIndex = 0;
      badge.setAttribute(
        "aria-label",
        `Statut : refusé. Motif : ${ordre.motif || "non précisé"}`,
      );

      // title sert de solution de repli accessible.
      badge.title = `Motif du refus : ${ordre.motif || "Aucun motif précisé."}`;

      badge.append(icone, libelle, tooltip);
      return badge;
    }

    badge.append(icone, libelle);

    return badge;
  }

  // Génération du tableau.
  function afficherOrdres(liste) {
    tableBody.replaceChildren();

    liste.forEach((ordre, index) => {
      const ligne = document.createElement("tr");

      const numero = document.createElement("td");
      numero.className = "pay-number";
      numero.textContent = String(index + 1).padStart(2, "0");

      const nomCellule = document.createElement("td");

      const etudiant = document.createElement("div");
      etudiant.className = "pay-student";

      const avatar = document.createElement("span");
      avatar.className = "pay-avatar";
      avatar.textContent = creerInitiales(ordre.nom);
      avatar.setAttribute("aria-hidden", "true");

      const nom = document.createElement("span");
      nom.className = "pay-student-name";
      nom.textContent = ordre.nom;

      etudiant.append(avatar, nom);
      nomCellule.appendChild(etudiant);

      const matriculeCellule = document.createElement("td");
      const matricule = document.createElement("span");
      matricule.className = "matricule";
      matricule.textContent = ordre.matricule;
      matriculeCellule.appendChild(matricule);

      const compteCellule = document.createElement("td");
      const compte = document.createElement("span");
      compte.className = "pay-account";
      compte.textContent = ordre.compte;
      compteCellule.appendChild(compte);

      const montantCellule = document.createElement("td");
      montantCellule.className = "pay-amount";
      montantCellule.textContent = formaterMontant(ordre.montant);

      const dateHeureCellule = document.createElement("td");
      dateHeureCellule.className = "pay-date-heure";
      dateHeureCellule.textContent = ordre.dateHeure;

      const statutCellule = document.createElement("td");
      statutCellule.appendChild(creerBadgeStatut(ordre));

      ligne.append(
        numero,
        nomCellule,
        matriculeCellule,
        compteCellule,
        montantCellule,
        statutCellule,
        dateHeureCellule,
      );

      tableBody.appendChild(ligne);
    });

    // Gestion de l'affichage vide.
    const nombre = liste.length;
    const pluriel = nombre > 1 ? "ordres" : "ordre";

    resultCount.textContent = `${nombre} ${pluriel}`;

    tableBody.hidden = nombre === 0;
    emptyState.hidden = nombre !== 0;

    const rechercheActive = searchInput.value.trim() !== "";

    clearButton.hidden = !rechercheActive;

    footerText.textContent = rechercheActive
      ? `${nombre} résultat${nombre > 1 ? "s" : ""} pour cette recherche`
      : `${nombre} ordre${nombre > 1 ? "s" : ""} dans la liste affichée`;
  }

  // Recherche par matricule ou numéro de compte.
  // Le filtre de statut peut être combiné avec la recherche.
  function rechercherOrdres() {
    const recherche = searchInput.value.trim().toLocaleLowerCase("fr-FR");

    const statutSelectionne = statusFilter.value;

    const resultats = ordresPaiement.filter((ordre) => {
      const correspondRecherche =
        ordre.compte.toLocaleLowerCase("fr-FR").includes(recherche) ||
        ordre.matricule.toLocaleLowerCase("fr-FR").includes(recherche);

      const correspondStatut =
        statutSelectionne === "Tous" || ordre.statut === statutSelectionne;

      return correspondRecherche && correspondStatut;
    });

    afficherOrdres(resultats);
  }

  // Recherche à chaque saisie.
  searchInput.addEventListener("input", rechercherOrdres);

  // Filtrage à chaque changement de statut.
  statusFilter.addEventListener("change", rechercherOrdres);

  // Effacer uniquement la recherche textuelle.
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    rechercherOrdres();
    searchInput.focus();
  });

  // Réinitialiser recherche et filtre.
  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    statusFilter.value = "Tous";
    rechercherOrdres();
    searchInput.focus();
  });

  // Initialisation.
  mettreAJourStatistiques();
  afficherOrdres(ordresPaiement);
});
