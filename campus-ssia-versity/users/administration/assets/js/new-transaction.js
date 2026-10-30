const newTransactionBtn = document.querySelector(".new-transaction-btn");
const newTransactionForm = document.querySelector(".new-transaction-form");
const balanceBtn = document.querySelector(".balance-btn");
const balanceItems = document.querySelector(".balance-items");

function resetState(c) {
  c.classList.remove("show");
  c.classList.add("hide");
}

newTransactionBtn.addEventListener("click", () => {
  resetState(balanceItems);
  newTransactionForm.classList.toggle("hide");
  newTransactionForm.classList.toggle("show");
});

balanceBtn.addEventListener("click", () => {
  resetState(newTransactionForm);
  balanceItems.classList.toggle("hide");
  balanceItems.classList.toggle("show");
});
