"use strict";

const accountNum = document.querySelector(".account-number");
const toggleBtn = document.querySelector(".toggle-account");
const fullNumber = "3764 7638 3774 8495";

let isVisible = false;

function maskNumber(number) {
  return `●●●● ●●●● ●●●● ${number.slice(-4)}`;
}

function updateUI() {
  accountNum.textContent = isVisible ? fullNumber : maskNumber(fullNumber);

  toggleBtn.classList.toggle("fa-eye", !isVisible);
  toggleBtn.classList.toggle("fa-eye-slash", isVisible);
}

toggleBtn.addEventListener("click", () => {
  isVisible = !isVisible;
  updateUI();
});

// état initial
updateUI();
