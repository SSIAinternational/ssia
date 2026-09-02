const vueSet = document.querySelector(".vue-set");

/* ----------------------------- */
/* sécurité minimale DOM */
/* ----------------------------- */

if (!vueSet) {
  throw new Error(".vue-set introuvable");
}

/* ----------------------------- */
/* data layer */
/* ----------------------------- */

const services = [
  "Reporting",
  "Pédagogie",
  "Finance",
  "Admission",
  "Vie estudiantine",
  "Communication",
  "Partenariat",
  "Ressource humaine",
];

/* ----------------------------- */
/* helpers */
/* ----------------------------- */

function generateBalance(min = 50, max = 200) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAccountNumber() {
  const lastDigits = Math.floor(Math.random() * 9000 + 1000);

  return {
    visible: `4587 2254 9841 ${lastDigits}`,
    hidden: `●●●● ●●●● ●●●● ${lastDigits}`,
  };
}

/* ----------------------------- */
/* business data */
/* ----------------------------- */

const servicesData = services.map((service) => ({
  name: service,
  balance: generateBalance(),
  euro: 8.88,
  indice: 0.0714,
  account: generateAccountNumber(),
}));

/* ----------------------------- */
/* UI */
/* ----------------------------- */

function createTextElement(tag, text, className = "") {
  const element = document.createElement(tag);

  element.textContent = text;

  if (className) {
    element.className = className;
  }

  return element;
}

function createCard(serviceData) {
  const card = document.createElement("div");
  card.className = "card";

  /* HEADER */

  const header = document.createElement("div");
  header.className = "balance-card-header";

  const title = createTextElement("span", `Solde alloué ${serviceData.name}`);

  const balance = createTextElement(
    "span",
    `${serviceData.balance} Ivoire`,
    "card-balance",
  );

  header.append(title, balance);

  /* VALUE SECTION */

  const value = document.createElement("div");
  value.className = "value";

  const valueDetails = document.createElement("div");
  valueDetails.className = "value-details";

  valueDetails.append(
    createTextElement("span", "Ivoire"),
    createTextElement("span", `${serviceData.euro} €`),
  );

  const indiceDetails = document.createElement("div");
  indiceDetails.className = "indice-details";

  indiceDetails.append(
    createTextElement("span", "Indice (%)"),
    createTextElement("span", `+${serviceData.indice} %`),
  );

  value.append(valueDetails, indiceDetails);

  /* ACCOUNT SECTION */

  const accountContainer = document.createElement("div");
  accountContainer.className = "account_num";

  const accountLabel = createTextElement("span", "N° du compte:");

  const accountNumber = createTextElement(
    "span",
    serviceData.account.hidden,
    "account-number",
  );

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "toggle-account";
  toggleBtn.setAttribute("aria-label", "Afficher le numéro du compte");

  toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';

  /* state */

  let isVisible = false;

  toggleBtn.addEventListener("click", () => {
    isVisible = !isVisible;

    accountNumber.textContent = isVisible
      ? serviceData.account.visible
      : serviceData.account.hidden;

    toggleBtn.innerHTML = isVisible
      ? '<i class="fa-solid fa-eye-slash"></i>'
      : '<i class="fa-solid fa-eye"></i>';
  });

  accountContainer.append(accountLabel, accountNumber, toggleBtn);

  /* APPEND */

  card.append(header, value, accountContainer);

  return card;
}

/* ----------------------------- */
/* rendering optimisé */
/* ----------------------------- */

function renderServices() {
  const fragment = document.createDocumentFragment();

  servicesData.forEach((serviceData) => {
    const card = createCard(serviceData);

    fragment.appendChild(card);
  });

  vueSet.appendChild(fragment);
}

/* ----------------------------- */
/* init */
/* ----------------------------- */

renderServices();
