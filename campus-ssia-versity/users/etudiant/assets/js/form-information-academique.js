const infoList = document.querySelector(".information-list");
const addBtn = document.querySelector(".add_information");

// Fonction pour renuméroter tous les items
function renameItems() {
  const items = document.querySelectorAll(".information-item");
  items.forEach((item, index) => {
    const titleSpan = item.querySelector(".information-title span");

    // 🔥 On récupère l'icône existante au lieu d'en recréer une
    const icon = titleSpan.querySelector(".fa-angle-down");

    // 🔥 On met à jour uniquement le texte, sans toucher à l'icône
    titleSpan.textContent = `Information ${index + 1} `;

    // 🔥 On réinjecte l'icône existante
    titleSpan.appendChild(icon);
  });
}

// Fonction pour accordéon + toggle + rotation
function setToggleBehavior(item) {
  const title = item.querySelector(".information-title");
  const form = item.querySelector(".information_form");
  const icon = title.querySelector(".fa-angle-down");

  // Par défaut tout est fermé
  form.style.display = "none";

  title.addEventListener("click", () => {
    const isOpen = form.style.display === "grid";

    // 🔹 Fermer toutes les autres sections + reset rotation
    document.querySelectorAll(".information-item").forEach((otherItem) => {
      if (otherItem !== item) {
        const otherForm = otherItem.querySelector(".information_form");
        const otherIcon = otherItem.querySelector(".fa-angle-down");

        otherForm.style.display = "none";
        otherIcon.classList.remove("rotate");
      }
    });

    // 🔹 Ouvrir/fermer celle cliquée
    form.style.display = isOpen ? "none" : "grid";

    // 🔹 Rotation icône
    icon.classList.toggle("rotate", !isOpen);
  });
}

// Appliquer aux items existants
document.querySelectorAll(".information-item").forEach((item) => {
  const form = item.querySelector(".information_form");
  form.style.display = "none";
  setToggleBehavior(item);
});

// Ouvrir le premier
const first = document.querySelector(".information-item");
first.querySelector(".information_form").style.display = "grid";
first.querySelector(".fa-angle-down").classList.add("rotate");

// ➕ Ajouter un item
addBtn.addEventListener("click", () => {
  const newItem = document.createElement("div");
  newItem.classList.add("information-item");

  newItem.innerHTML = `
    <div class="information-title">
      <span>Information <i class="fa-solid fa-angle-down"></i></span>
      <i class="fa-solid fa-minus remove-info"></i>
    </div>

    <div class="information_form" style="display:none;">
      
      <div class="label-input">
        <label for="">Année <span>*</span></label>
        <select name="" id="">
          <option value="">2010</option>
        </select>
      </div>
      <div class="label-input">
        <label for="">Formation <span>*</span></label>
        <select name="" id="">
          <option value="">Bac +1</option>
          <option value="">Bac +2</option>
          <option value="">Bac +3</option>
          <option value="">Bac +4</option>
          <option value="">Bac +5</option>
          <option value="">BTS</option>
          <option value="">Licence</option>
          <option value="">Master</option>
          <option value="">Doctorat</option>
          <option value="">Certification professionnelle</option>
          <option value="">Autre activité - Stage professionnel</option>
          <option value="">Autre activité - Bénévolat</option>
        </select>
      </div>
      <div class="label-input">
        <label for="">Etablissement fréquenté ou institution <span>*</span></label>
        <input type="text">
      </div>
      <div class="label-input">
        <label for="">Commentaire</label>
        <textarea name="" id="" rows="1"></textarea>
      </div>
      <div class="label-input">
        <label for="">Moyenne (__/20)</label>
        <input type="number">
      </div>
      <div class="label-input">
        <label for="">Mention</label>
        <select name="" id="">
          <option value="">Passable</option>
          <option value="">Assez bien</option>
          <option value="">Bien</option>
          <option value="">Très bien</option>
        </select>
      </div>
      <div class="label-input">
        <label for="">Justificatifs <span>*</span></label>
        <input type="file" hidden />
        <div class="add-file">
          <div class="add-file__text"><i class="fa-solid fa-plus"></i><span>3 pdf ajoutés</span></div>
          <div class="add-file__apercu">
            <div class="add-file__apercu-item"></div>
            <div class="add-file__apercu-item"></div>
            <div class="add-file__apercu-item"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  infoList.insertBefore(newItem, addBtn);

  setToggleBehavior(newItem);

  // 🔥 Activation du système ADD-FILE (PDF.js + previews)
  activateAddFileIn(newItem);

  newItem.querySelector(".remove-info").addEventListener("click", () => {
    newItem.remove();
    renameItems();
  });

  renameItems(); // renumérotation après ajout
});
