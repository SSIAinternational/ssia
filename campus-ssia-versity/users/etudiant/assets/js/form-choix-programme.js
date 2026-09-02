// ==========================
// PROGRAMME DROPDOWN SYSTEM
// ==========================

const programmeList = document.querySelector(".programme-list");
const addProgrammeBtn = document.querySelector(".add_programme");

// Fonction pour renuméroter les programmes
function renameProgrammes() {
  const programmes = document.querySelectorAll(".dropdown-choix-programme");

  programmes.forEach((prog, index) => {
    const titleSpan = prog.querySelector(".choix-programme__title span");
    const icon = titleSpan.querySelector(".fa-angle-down");

    // mettre uniquement le texte à jour
    titleSpan.textContent = `Programme ${index + 1} `;

    // réinjecter l’icône
    titleSpan.appendChild(icon);
  });
}

// Fonction de toggle Accordéon + rotation
function setProgrammeToggle(item) {
  const title = item.querySelector(".choix-programme__title");
  const form = item.querySelector(".choix-programme__form");
  const icon = title.querySelector("i");

  // Tout est fermé par défaut
  form.classList.add("hide");

  title.addEventListener("click", () => {
    const isOpen = !form.classList.contains("hide");

    // fermer les autres
    document.querySelectorAll(".dropdown-choix-programme").forEach((other) => {
      if (other !== item) {
        other.querySelector(".choix-programme__form").classList.add("hide");
        other
          .querySelector(".choix-programme__title i")
          .classList.remove("rotate");
      }
    });

    // ouvrir/fermer celui cliqué
    form.classList.toggle("hide", isOpen === true);

    // rotation angle-down
    icon.classList.toggle("rotate", isOpen === false);
  });
}

// Appliquer aux programmes existants
document.querySelectorAll(".dropdown-choix-programme").forEach((prog) => {
  setProgrammeToggle(prog);
});

// ➕ Ajouter un nouveau programme
addProgrammeBtn.addEventListener("click", () => {
  const newProg = document.createElement("div");
  newProg.classList.add("dropdown-choix-programme");

  newProg.innerHTML = `
    <div class="choix-programme__title">
      <span>Programme <i class="fa-solid fa-angle-down"></i></span>
      <i class="fa-solid fa-minus remove-programme"></i>
    </div>

    <div class="choix-programme__form hide">
      <div class="label-input">
        <label>Collège <span>*</span></label>
        <select><option>Informatique</option></select>
      </div>

      <div class="label-input">
        <label>Programme d'étude <span>*</span></label>
        <select><option>Mathématique</option></select>
      </div>

      <div class="label-input">
        <label>Année d'entrée <span>*</span></label>
        <select><option>2025 - 2026</option></select>
      </div>

      <div class="label-input">
        <label>Niveau demandé <span>*</span></label>
        <select>
          <option>Premier cycle - Bac +3</option>
          <option>Second cycle - Bac +4/Bac +5</option>
        </select>
      </div>

      <div class="label-input">
        <label>Lettre de motivation adressée au collège <span>*</span></label>
        <textarea rows="1"></textarea>
      </div>
                    
      <div class="label-input">
        <label for="">Résultat du test d'aptitude(__%) (si applicable)</label>
        <input type="number"  />
      </div>
      
      <div class="label-input">
        <label for="">Justificatif du test (si applicable)</label>
        <input type="file" hidden />
          <div class="add-file">
            <div class="add-file__text"><i class="fa-solid fa-plus"></i><span>1 pdf ajouté</span></div>
            <div class="add-file__apercu">
              <div class="add-file__apercu-item"></div>
            </div>
          </div>
      </div>

      <div class="label-input">
        <label>Insigne du collège choisi</label>
        <div class="college-logo">
          <img src="../../img/versity-icon.png" alt="">
        </div>
      </div>
    </div>
  `;

  // l’ajouter avant "Ajouter un programme"
  programmeList.insertBefore(newProg, addProgrammeBtn);

  // activer accordéon
  setProgrammeToggle(newProg);

  // 🔥 activer le système add-file (PDF preview) dans le nouveau programme
  activateAddFileIn(newProg);

  // supprimer programme
  newProg.querySelector(".remove-programme").addEventListener("click", () => {
    newProg.remove();
    renameProgrammes();
  });

  renameProgrammes(); // mise à jour numéros
});
