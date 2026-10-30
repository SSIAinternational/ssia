const downloadBtn = document.querySelector(".download-content button");
const downloadForm = document.querySelector(".download-content .download-form");

const downloadInput = document.querySelectorAll(
  ".download-content .download-form .input-group > input",
);

function areAllInputsFilled(inputs) {
  return Array.from(inputs).every((input) => input.value.trim() !== "");
}

function resetInputs(inputs) {
  inputs.forEach((input) => (input.value = ""));
}

function updateButtonState() {
  if (areAllInputsFilled(downloadInput)) {
    downloadBtn.classList.remove("disabled");
  } else {
    downloadBtn.classList.add("disabled");
  }
}

downloadInput.forEach((input) => {
  input.addEventListener("input", updateButtonState);
});

downloadBtn.addEventListener("click", () => {
  const isHidden = downloadForm.classList.contains("hide");

  if (isHidden) {
    downloadForm.classList.remove("hide");
    updateButtonState(); // important
  } else {
    downloadForm.classList.add("hide");
    resetInputs(downloadInput);
    downloadBtn.classList.add("disabled");
  }
});
