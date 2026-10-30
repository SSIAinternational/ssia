document.addEventListener("DOMContentLoaded", () => {
  // Données de démonstration : à remplacer par les données réelles.
  const etudiantsAdmis = [
    {
      nom: "KOUASSI Jean Marc",
      matricule: "SV2026001",
      college: "Collège Montclair",
      programme: "Développement logiciel",
      level: "Premier Cycle",
    },
    {
      nom: "YAO Marie-Claire",
      matricule: "SV2026002",
      college: "Collège Montclair",
      programme: "Cybersécurité et Internet des Objets",
      level: "Cycle Supérieur",
    },
    {
      nom: "TRAORE Ibrahim",
      matricule: "SV2026003",
      college: "Collège Montclair",
      programme: "Comptabilité et Finance",
      level: "Cycle Supérieur",
    },
    {
      nom: "KOFFI Grâce",
      matricule: "SV2026004",
      college: "Collège Valmont",
      programme: "Réseaux et Télécommunications",
      level: "Cycle Supérieur",
    },
    {
      nom: "BLE Christian",
      matricule: "SV2026005",
      college: "Collège Valmont",
      programme: "Droit des Affaires",
      level: "Premier Cycle",
    },
    {
      nom: "N'DRI Esther",
      matricule: "SV2026006",
      college: "Collège Valmont",
      programme: "Génie logiciel",
      level: "Premier Cycle",
    },
  ];

  const tableBody = document.getElementById("admisTableBody");
  const searchInput = document.getElementById("searchMatricule");
  const clearButton = document.getElementById("clearSearch");
  const resetButton = document.getElementById("resetSearch");
  const countElement = document.getElementById("admisCount");
  const footerText = document.getElementById("admisFooterText");
  const emptyState = document.getElementById("admisEmpty");

  if (
    !tableBody ||
    !searchInput ||
    !clearButton ||
    !resetButton ||
    !countElement ||
    !footerText ||
    !emptyState
  ) {
    return;
  }

  function creerInitiales(nom) {
    return nom
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((mot) => mot.charAt(0))
      .join("");
  }

  function afficherEtudiants(liste) {
    tableBody.replaceChildren();

    liste.forEach((etudiant, index) => {
      const ligne = document.createElement("tr");

      const numero = document.createElement("td");
      numero.className = "admis-number";
      numero.textContent = String(index + 1).padStart(2, "0");

      const nomCellule = document.createElement("td");

      const student = document.createElement("div");
      student.className = "admis-student";

      const avatar = document.createElement("span");
      avatar.className = "admis-avatar";
      avatar.textContent = creerInitiales(etudiant.nom);
      avatar.setAttribute("aria-hidden", "true");

      const nom = document.createElement("span");
      nom.className = "admis-student-name";
      nom.textContent = etudiant.nom;

      student.append(avatar, nom);
      nomCellule.appendChild(student);

      const matriculeCellule = document.createElement("td");
      const matricule = document.createElement("span");
      matricule.className = "admis-matricule";
      matricule.textContent = etudiant.matricule;
      matriculeCellule.appendChild(matricule);

      const collegeCellule = document.createElement("td");
      const college = document.createElement("span");
      college.className = "admis-college";
      college.textContent = etudiant.college;
      collegeCellule.appendChild(college);

      const programmeCellule = document.createElement("td");
      programmeCellule.className = "admis-programme";
      programmeCellule.textContent = etudiant.programme;

      const levelCellule = document.createElement("td");
      levelCellule.className = "admis-level";
      levelCellule.textContent = etudiant.level;

      ligne.append(
        numero,
        nomCellule,
        matriculeCellule,
        collegeCellule,
        programmeCellule,
        levelCellule,
      );

      tableBody.appendChild(ligne);
    });

    const nombre = liste.length;
    const pluriel = nombre > 1 ? "étudiants" : "étudiant";

    countElement.replaceChildren();

    const nombreFort = document.createElement("strong");
    nombreFort.textContent = nombre;

    countElement.append(
      nombreFort,
      ` ${pluriel} trouvé${nombre > 1 ? "s" : ""}`,
    );

    emptyState.hidden = nombre !== 0;
    tableBody.hidden = nombre === 0;

    const rechercheActive = searchInput.value.trim() !== "";

    footerText.textContent = rechercheActive
      ? `${nombre} résultat${nombre > 1 ? "s" : ""} pour cette recherche`
      : `${nombre} étudiant${nombre > 1 ? "s" : ""} dans la liste affichée`;

    clearButton.hidden = !rechercheActive;
  }

  function rechercherParMatricule() {
    const recherche = searchInput.value.trim().toLocaleLowerCase("fr-FR");

    const resultats = etudiantsAdmis.filter((etudiant) =>
      etudiant.matricule.toLocaleLowerCase("fr-FR").includes(recherche),
    );

    afficherEtudiants(resultats);
  }

  searchInput.addEventListener("input", rechercherParMatricule);

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    rechercherParMatricule();
    searchInput.focus();
  });

  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    rechercherParMatricule();
    searchInput.focus();
  });

  // Affichage initial
  afficherEtudiants(etudiantsAdmis);
});
