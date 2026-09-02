// =========================
// RENDER PDF FIRST PAGE
// =========================
async function renderPDFPreview(file, container) {
  const fileReader = new FileReader();

  fileReader.onload = async function () {
    const pdfData = new Uint8Array(this.result);

    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
    const page = await pdf.getPage(1);

    const viewport = page.getViewport({ scale: 0.2 });

    // canvas pour afficher l’aperçu
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: context,
      viewport: viewport,
    }).promise;

    container.appendChild(canvas);
  };

  fileReader.readAsArrayBuffer(file);
}

// =========================
// SYSTÈME ADD-FILE GLOBAL
// =========================

function activateAddFile(addFileContainer) {
  const hiddenInput = addFileContainer.previousElementSibling;
  const textSpan = addFileContainer.querySelector(".add-file__text span");
  const apercu = addFileContainer.querySelector(".add-file__apercu");

  hiddenInput.setAttribute("accept", "application/pdf");
  hiddenInput.setAttribute("multiple", true); // autoriser plusieurs PDF

  addFileContainer.addEventListener("click", () => hiddenInput.click());

  hiddenInput.addEventListener("change", async () => {
    const files = Array.from(hiddenInput.files);

    const validPDF = files.filter((file) => file.type === "application/pdf");

    if (validPDF.length !== files.length) {
      alert("Seuls les fichiers PDF sont autorisés.");
      hiddenInput.value = "";
      textSpan.textContent = "Aucun fichier";
      apercu.innerHTML = "";
      return;
    }

    // Texte dynamique
    textSpan.textContent =
      validPDF.length === 1 ? "1 PDF ajouté" : `${validPDF.length} PDF ajoutés`;

    apercu.innerHTML = "";

    // Render miniature pour chaque PDF
    for (let file of validPDF) {
      const previewItem = document.createElement("div");
      previewItem.classList.add("add-file__apercu-item");
      apercu.appendChild(previewItem);

      // 🎯 afficher la 1ère page
      renderPDFPreview(file, previewItem);
    }
  });
}

// =========================
// ACTIVATION GLOBALE
// =========================

document.querySelectorAll(".add-file").forEach((container) => {
  activateAddFile(container);
});

// Pour les éléments ajoutés dynamiquement :
function activateAddFileIn(newElement) {
  newElement.querySelectorAll(".add-file").forEach((container) => {
    activateAddFile(container);
  });
}
