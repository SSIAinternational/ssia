const etatSet = document.querySelector(".etat-set");

const pages = document.querySelectorAll(".page");

pages.forEach((p, index) => {
  return p.index;
});

etatSet.innerHTML = "";

function formatValue(v, digits = 2) {
  if (!Number.isFinite(v)) return "_";
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: Number.isInteger(v) ? 0 : digits,
    maximumFractionDigits: Number.isInteger(v) ? 0 : digits,
  }).format(v);
}

document.body.addEventListener("input", (e) => {
  if (e.target.type === "number") {
    // Relance tous les calculs financiers et l'affichage
    computeState();
  }
});

/** SOURCES DE VERITE ********************************/

let actifs = [
  {
    code: 100,
    label: "Portefeuille clients",
    amount: 0,
  },
  {
    code: 110,
    label: "Banque entité",
    amount: 0,
  },
  {
    code: 120,
    label: "Trésorerie",
    amount: 0,
  },
  {
    code: 130,
    label: "Placements court terme",
    amount: 0,
  },
  {
    code: 140,
    label: "Créances inter-entités",
    amount: 0,
  },
  {
    code: 150,
    label: "Intérêts à recevoir",
    amount: 0,
  },
  {
    code: 160,
    label: "Investissements marché",
    amount: 0,
  },
  {
    code: 170,
    label: "Actions détenues",
    amount: 0,
  },
  {
    code: 180,
    label: "Participations filiales",
    amount: 0,
  },
  {
    code: 190,
    label: "Immobilisations",
    amount: 0,
  },
  {
    code: 195,
    label: "Goodwill acquisition",
    amount: 0,
  },
];

let passifs = [
  {
    code: 200,
    label: "Réserve fédérale",
    amount: 0,
  },
  {
    code: 210,
    label: "Dettes inter-entités",
    amount: 0,
  },
  {
    code: 220,
    label: "Dettes réserve fédérale",
    amount: 0,
  },
  {
    code: 230,
    label: "Intérêts à payer",
    amount: 0,
  },
  {
    code: 240,
    label: "Impôts à payer",
    amount: 0,
  },
  {
    code: 250,
    label: "Taxes transactions",
    amount: 0,
  },
  {
    code: 260,
    label: "Dividendes à payer",
    amount: 0,
  },
  {
    code: 270,
    label: "Fournisseurs",
    amount: 0,
  },
  {
    code: 280,
    label: "Salaires à payer",
    amount: 0,
  },
  {
    code: 290,
    label: "Provisions risques",
    amount: 0,
  },
];

let capitauxPropres = [
  {
    code: 300,
    label: "Capital social",
    amount: 0,
  },
  {
    code: 310,
    label: "Actions émises",
    amount: 0,
  },
  {
    code: 320,
    label: "Primes actions",
    amount: 0,
  },
  {
    code: 330,
    label: "Réserves internes",
    amount: 0,
  },
  {
    code: 340,
    label: "Résultat reporté",
    amount: 0,
  },
  {
    code: 350,
    label: "Résultat net",
    amount: 0,
  },
];

let produits = [
  { code: 400, label: "Revenus inscriptions", amount: 0 },
  { code: 410, label: "Revenus services", amount: 0 },
  { code: 420, label: "Revenus commissions", amount: 0 },
  { code: 430, label: "Revenus transactions", amount: 0 },
  { code: 440, label: "Gains trading", amount: 0 },
  { code: 450, label: "Dividendes reçus", amount: 0 },
  { code: 460, label: "Plus-values investissements", amount: 0 },
  { code: 470, label: "Revenus financiers", amount: 0 },
  { code: 480, label: "Revenus locations", amount: 0 },
  { code: 490, label: "Autres produits", amount: 0 },
];

let charges = [
  { code: 500, label: "Salaires", amount: 0 },
  { code: 510, label: "Charges opérationnelles", amount: 0 },
  { code: 520, label: "Marketing", amount: 0 },
  { code: 530, label: "Frais système", amount: 0 },
  { code: 540, label: "Pertes trading", amount: 0 },
  { code: 550, label: "Intérêts crédit réserve", amount: 0 },
  { code: 560, label: "Impôts", amount: 0 },
  { code: 570, label: "Taxes transactions", amount: 0 },
  { code: 580, label: "Amortissements", amount: 0 },
  { code: 590, label: "Pertes exceptionnelles", amount: 0 },
];

let entrees = [
  { code: "", label: "Entrées clients", amount: 0 },
  { code: "", label: "Entrées services", amount: 0 },
  { code: "", label: "Gains trading", amount: 0 },
  { code: "", label: "Dividendes reçus", amount: 0 },
  { code: "", label: "Ventes actifs", amount: 0 },
];

let sorties = [
  { code: "", label: "Salaires", amount: 0 },
  { code: "", label: "Charges opérationnelles", amount: 0 },
  { code: "", label: "Impôts", amount: 0 },
  { code: "", label: "Intérêts", amount: 0 },
  { code: "", label: "Investissements", amount: 0 },
  { code: "", label: "Dividendes versés", amount: 0 },
];

/*  {
    label: "Charges opérat",
    pourcent: 19.3,
  },
  {
    label: "Investissements",
    pourcent: 24.2,
  },
  {
    label: "Dividendes",
    pourcent: 9.7,
  },
  {
    label: "Autres",
    pourcent: 13.0,
  },*/

let marketBand = [
  {
    label: "Ticker",
    val: "SSIA",
  },
  {
    label: "Prix Action",
    val: 0,
  },
  {
    label: "Nb Actions",
    val: 0,
  },
  {
    label: "Capitalisation",
    val: 0,
  },
  {
    label: "BPA",
    val: 0,
  },
];

let annexeTable = {
  thead: ["Code", "Opération", "Catégorie", "Montant"],
  tbody: [
    {
      code: 700,
      ope: "Acquisitions d'actifs",
      cat: "Investissement",
      tag: "tag-invest",
      mont: 0,
    },
    {
      code: 710,
      ope: "Vente d'actifs",
      cat: "Désinvestissement",
      tag: "tag-invest",
      mont: 0,
    },
    {
      code: 720,
      ope: "Fusions & Acquisitions",
      cat: "Stratégique",
      tag: "tag-strat",
      mont: 0,
    },
    {
      code: 730,
      ope: "Émission d'actions",
      cat: "Financement",
      tag: "tag-finance",
      mont: 0,
    },
    {
      code: 740,
      ope: "Rachat d'actions",
      cat: "Gestion capital",
      tag: "tag-finance",
      mont: 0,
    },
    {
      code: 750,
      ope: "Distribution dividendes",
      cat: "Distribution",
      tag: "tag-distrib",
      mont: 0,
    },
  ],
};

function totalTable(table) {
  const totalAmount = table.reduce((sum, item) => sum + Number(item.amount), 0);
  return totalAmount;
}

/** CALCULS VARIABLES ********************************/

let totalPassifs = totalTable(passifs);
let totalCapitauxPropres = totalTable(capitauxPropres);
let totalActifs = totalTable(actifs);
let totalProduits = totalTable(produits);
let totalCharges = totalTable(charges);
let totalEntrees = totalTable(entrees);
let totalSorties = totalTable(sorties);
let tresorerieNet = totalEntrees + totalSorties;
let resultatNet = totalProduits - totalCharges;
let margeNet = (resultatNet / totalProduits) * 100;
let ratioChargesProduits = (totalCharges / totalProduits) * 100;
let detteResFed = passifs[1].amount;
let ratioDette = detteResFed / totalCapitauxPropres;
let nbAction = marketBand[2].val;
let prixAction = marketBand[1].val;
let emissionAction = annexeTable.tbody[3].mont;
let rachatAction = annexeTable.tbody[4].mont;
let acquisitionActifs = annexeTable.tbody[0].mont;
let fusionAcquisition = annexeTable.tbody[2].mont;
let distribDividendes = annexeTable.tbody[5].mont;
let roe = (resultatNet / totalCapitauxPropres) * 100;
let roa = (resultatNet / totalActifs) * 100;
let ratioDette_capitauxPropres = ratioDette / totalCapitauxPropres;
let valeurComptable = totalCapitauxPropres / nbAction;
let benefice = resultatNet / nbAction;
let priceBook = prixAction / valeurComptable;
let flutNetFinan = emissionAction - rachatAction;
let fluxNetMa = acquisitionActifs + fusionAcquisition;
let distribTotal = distribDividendes;
let capitalisation = marketBand[3].val;

function computeState() {
  totalPassifs = totalTable(passifs);
  totalCapitauxPropres = totalTable(capitauxPropres);
  totalActifs = totalTable(actifs);

  totalProduits = totalTable(produits);
  totalCharges = totalTable(charges);

  totalEntrees = totalTable(entrees);
  totalSorties = totalTable(sorties);

  tresorerieNet = totalEntrees - totalSorties;

  resultatNet = totalProduits - totalCharges;

  margeNet = totalProduits === 0 ? 0 : (resultatNet / totalProduits) * 100;

  ratioChargesProduits =
    totalProduits === 0 ? 0 : (totalCharges / totalProduits) * 100;

  detteResFed = passifs[2].amount;

  ratioDette =
    totalCapitauxPropres === 0 ? 0 : detteResFed / totalCapitauxPropres;

  nbAction = Number(marketBand[2].val);

  prixAction = Number(marketBand[1].val);

  emissionAction = annexeTable.tbody[3].mont;
  rachatAction = annexeTable.tbody[4].mont;

  acquisitionActifs = annexeTable.tbody[0].mont;
  fusionAcquisition = annexeTable.tbody[2].mont;

  distribDividendes = annexeTable.tbody[5].mont;

  roe =
    totalCapitauxPropres === 0 ? 0 : (resultatNet / totalCapitauxPropres) * 100;

  roa = totalActifs === 0 ? 0 : (resultatNet / totalActifs) * 100;

  ratioDette_capitauxPropres =
    totalCapitauxPropres === 0 ? 0 : detteResFed / totalCapitauxPropres;

  valeurComptable = nbAction === 0 ? 0 : totalCapitauxPropres / nbAction;

  benefice = nbAction === 0 ? 0 : resultatNet / nbAction;

  priceBook = valeurComptable === 0 ? 0 : prixAction / valeurComptable;

  flutNetFinan = emissionAction - rachatAction;

  fluxNetMa = acquisitionActifs + fusionAcquisition;

  distribTotal = distribDividendes;

  capitalisation = marketBand[3].val;

  updateAllDisplays();
}

let summary = [
  {
    title: "Flux nets M&A",
    value: formatValue(fluxNetMa),
    footer: "Achats + F&A",
  },
  {
    title: "Flux nets Financement",
    value: formatValue(flutNetFinan),
    footer: "Émissions − Rachats",
  },
  {
    title: "Distribution totale",
    value: formatValue(distribTotal),
    footer: "Dividendes versés",
  },
];

let analyseSensiblité = [
  {
    label: "Total charges",
    amount: formatValue(totalCharges),
  },
  {
    label: "Résultat net",
    amount: formatValue(resultatNet),
  },
  {
    label: "Trésorerie net",
    amount: formatValue(tresorerieNet),
  },
  {
    label: "Capitalisation",
    amount: formatValue(capitalisation),
  },
];

let analyseSensiblité2 = [
  {
    label: "Total actifs",
    amount: formatValue(totalActifs),
    pourcent: "5000 * (1+0.02)",
  },
  {
    label: "Total passifs",
    amount: formatValue(totalPassifs),
  },
  {
    label: "Capitaux propres",
    amount: formatValue(totalCapitauxPropres),
  },
  {
    label: "Total produits",
    amount: formatValue(totalProduits),
  },
];

let kpi = [
  {
    label: "ROE — Rentabilité Fonds Propres",
    value: `${formatValue(roe)}%`,
    sub: "Résultat net / Capitaux propres",
  },
  {
    label: "ROA — Rentabilité des Actifs",
    value: `${formatValue(roa)}%`,
    sub: "Résultat net / Total actif",
  },
  {
    label: "Ratio Dette / Capitaux Propres",
    value: `${formatValue(ratioDette_capitauxPropres)}×`,
    sub: "Ratio Dette / Capitaux Propres",
  },
  {
    label: "Valeur Comptable / Action",
    value: `${formatValue(valeurComptable)}`,
    sub: "CP / Nb actions émises",
  },
  {
    label: "Bénéfice / Action (BPA)",
    value: `${formatValue(benefice)}`,
    sub: "Résultat net / Nb actions",
  },
  {
    label: "Price / Book (P/B)",
    value: `${formatValue(priceBook)}×`,
    sub: "Prix action / VCA",
  },
  {
    label: "Trésorerie Nette",
    value: `${formatValue(tresorerieNet)}`,
    sub: "Flux net opérationnel",
  },
  {
    label: "Total Actif",
    value: `${formatValue(totalActifs)}`,
    sub: "Base bilancielle",
  },
  {
    label: "Marge Nette",
    value: `${formatValue(margeNet)}%`,
    sub: "RN / Produits",
  },
];
/** COMPOSANTS REETULISABLE ********************************/

function creatEle(tag, props = {}, children = []) {
  const el = document.createElement(tag);

  Object.assign(el, props);

  const childrenArray = Array.isArray(children) ? children : [children];

  for (const child of childrenArray) {
    if (child !== null && child !== undefined) {
      el.append(child);
    }
  }

  return el;
}

function renderPageHeader(eSub) {
  return creatEle("div", { className: "doc-header" }, [
    creatEle("div", {}, [
      creatEle(
        "div",
        {
          className: "entity-name",
        },
        [
          creatEle("img", {
            src: "../../img/versity-icon.png",
            alt: "Logo SSIAVersity",
          }),
          "SSIA",
        ],
      ),

      creatEle("div", {
        className: "entity-sub",
        textContent: eSub,
      }),
    ]),

    creatEle("div", { className: "doc-meta" }, [
      creatEle("div", {
        className: "doc-year",
        textContent: "2026",
      }),

      creatEle("div", {
        className: "doc-currency",
        textContent: "En milliers de SSIA (000' SSIA)",
      }),
    ]),
  ]);
}

function renderTitle(title, badge) {
  return [
    creatEle(
      "div",
      {
        className: `section-title ${badge ? "mt16" : null}`,
      },
      [
        title,
        badge
          ? creatEle("span", {
              className: "annexe-badge",
              textContent: badge,
            })
          : null,
      ],
    ),
    creatEle("div", { className: "section-divider" }),
  ];
}

function renderPageFooter(fenceDate) {
  return creatEle("div", { className: "doc-footer" }, [
    creatEle("span", {
      textContent: `SSIA · Monnaie & Ivoire · Exercice clos le ${fenceDate} · pour 2026`,
    }),
    creatEle("span", { className: "page-num", textContent: `` }),
  ]);
}

pages.forEach((p, index) => {
  const footer = p.querySelector(".page-num");

  if (footer) {
    footer.textContent = `${index + 1}/${pages.length}`;
  }
});

function balanceCheck() {
  return creatEle("div", { className: "balance-check" }, [
    creatEle("span", {
      className: "bc-label",
      textContent: "Équilibre du Bilan",
    }),
    creatEle("span", {
      className: "bc-eq",
      textContent: `${totalActifs} ACTIF = ${totalPassifs} PASSIF + ${totalCapitauxPropres} CP`,
    }),
    creatEle("span", {
      className: `${totalActifs === totalPassifs + totalCapitauxPropres ? "bc-ok" : "bc-no"}`,
      textContent: `${
        totalActifs === totalPassifs + totalCapitauxPropres
          ? "✓ ÉQUILIBRÉ"
          : `⚠ DÉSEQUILIBRÉ | ${
              totalActifs - (totalPassifs + totalCapitauxPropres) > 0
                ? `ACTIFS > PASSIFS + CP`
                : `${
                    totalActifs - (totalPassifs + totalCapitauxPropres) < 0
                      ? "ACTIFS < PASSIFS + CP"
                      : ""
                  }`
            }`
      }`,
    }),
  ]);
}

function total(tableName, table) {
  const totalAmount = table.reduce((sum, item) => sum + Number(item.amount), 0);

  return creatEle("tr", { className: "t-total" }, [
    creatEle("td", { className: "t-code" }),

    creatEle("td", {
      className: "t-label",
      textContent: `Total ${tableName}`,
    }),

    creatEle("td", {
      className: "t-amt",
      textContent: totalAmount,
    }),
  ]);
}

function renderTable(subTitle, data = []) {
  const totalCell = creatEle("td", {
    className: "t-amt",
    textContent: data.reduce((sum, item) => sum + Number(item.amount), 0),
  });

  const totalRow = creatEle("tr", { className: "t-total" }, [
    creatEle("td", { className: "t-code" }),

    creatEle("td", {
      className: "t-label",
      textContent: `Total ${subTitle}`,
    }),

    totalCell,
  ]);

  return creatEle("div", {}, [
    creatEle("div", {
      className: "sub-title",
      textContent: subTitle,
    }),

    creatEle("table", {}, [
      ...data.map((d) =>
        creatEle("tr", {}, [
          creatEle("td", {
            className: "t-code",
            textContent: d.code,
          }),

          creatEle("td", {
            className: "t-label",
            textContent: d.label,
          }),

          creatEle("td", { className: "t-amt" }, [
            creatEle("input", {
              type: "number",
              value: d.amount,

              oninput: (e) => {
                d.amount = Number(e.target.value);

                totalCell.textContent = data.reduce(
                  (sum, item) => sum + Number(item.amount),
                  0,
                );
              },
            }),
          ]),
        ]),
      ),

      totalRow,
    ]),
  ]);
}

function renderSimpleTable(subTitle, table = []) {
  return creatEle("div", { className: "mt16 mini-visual" }, [
    creatEle("div", { className: "sub-title" }, [
      subTitle,
      subTitle
        ? creatEle("div", { className: "" }, [
            creatEle("input", { type: "number", value: 0 }),
            "%",
          ])
        : null,
    ]),
    creatEle(
      "table",
      {},
      table.map((t) => {
        return creatEle("tr", {}, [
          creatEle("td", { className: "label", textContent: t.label }),
          creatEle("td", {
            className: "pourcent",
            textContent: `${t.amount}`,
          }),
        ]);
      }),
    ),
  ]);
}

function renderResult(label, amount) {
  return creatEle("div", { className: "t-result" }, [
    creatEle("span", { className: "t-label", textContent: label }),
    creatEle("span", { className: "t-amt", textContent: amount }),
  ]);
}

function renderNote() {
  return creatEle("p", {
    className: "note",
    textContent: `Marge nette : ${formatValue(margeNet, 1)}% · Ratio charges/produits : ${formatValue(ratioChargesProduits, 1)}%`,
  });
}

function renderMarketBand(table) {
  return creatEle(
    "div",
    { className: "market-band" },
    table.map((item, index) => {
      return creatEle("div", { className: "mb-item" }, [
        creatEle("div", {
          className: "mb-label",
          textContent: item.label,
        }),

        index === 0
          ? creatEle("div", {
              className: "mb-val",
              textContent: item.val,
            })
          : creatEle("input", {
              className: "",
              type: "number",
              value: item.val,
            }),
      ]);
    }),
  );
}

function renderKpiGrid(table) {
  return creatEle(
    "div",
    { className: "kpi-grid" },
    table.map((t) => {
      return creatEle("div", { className: "kpi-card" }, [
        creatEle("div", { className: "kpi-label", textContent: t.label }),
        creatEle("div", { className: "kpi-value", textContent: t.value }),
        creatEle("div", { className: "kpi-sub", textContent: t.sub }),
      ]);
    }),
  );
}

function annexe(table) {
  return creatEle("table", { className: "annexe-table" }, [
    creatEle("thead", {}, [
      creatEle(
        "tr",
        {},
        table.thead.map((th) => {
          return creatEle("td", { textContent: th });
        }),
      ),
    ]),
    creatEle(
      "tbody",
      {},
      table.tbody.map((tb) => {
        return creatEle("tr", {}, [
          creatEle("td", { className: "t-code", textContent: tb.code }),
          creatEle("td", { className: "t-label", textContent: tb.ope }),
          creatEle("td", { className: "" }, [
            creatEle("span", {
              className: `tag-pill ${tb.tag}`,
              textContent: tb.cat,
            }),
          ]),
          creatEle("td", { className: "t-amt" }, [
            creatEle("input", {
              type: "number",
              value: tb.mont,
              disabled: false,
            }),
          ]),
        ]);
      }),
    ),
  ]);
}

function renderSummary(table) {
  return creatEle(
    "div",
    { className: "summary" },
    table.map((t) => {
      return creatEle("div", { className: "summary-item" }, [
        creatEle("div", { className: "item-title", textContent: t.title }),
        creatEle("div", { className: "item-value", textContent: t.value }),
        creatEle("div", { className: "item-footer", textContent: t.footer }),
      ]);
    }),
  );
}

function renderPage(children = []) {
  return creatEle("div", { className: "page" }, children);
}

/** PAGES ********************************/

function page1() {
  return renderPage([
    renderPageHeader("Monnaie & Ivoire · Entité Consolidée"),
    creatEle("div", { className: "doc-body" }, [
      ...renderTitle("Bilan"),
      creatEle("div", { className: "two-col" }, [
        creatEle("div", {}, [renderTable("Actif", actifs)]),
        creatEle("div", { className: "col-divider" }, [
          renderTable("Passif", passifs),
          renderTable("Capitaux Propres", capitauxPropres),
        ]),
      ]),
      balanceCheck(),
    ]),
    renderPageFooter("2/10/2021"),
    savePage(),
  ]);
}

function page2() {
  return renderPage([
    renderPageHeader("Compte de Résultat & Flux de Trésorerie"),
    creatEle("div", { className: "doc-body" }, [
      creatEle("div", { className: "two-col" }, [
        creatEle("div", {}, [
          ...renderTitle("Compte de Résultat"),
          renderTable("Produits", produits),
          renderTable("Charges", charges),
          renderResult("Résultat Net", resultatNet),
          renderNote(),
        ]),
        creatEle("div", { className: "col-divider" }, [
          ...renderTitle("Flux de Trésorerie"),
          renderTable("Entrées", entrees),
          renderTable("Sorties", sorties),
          renderResult("Trésorerie Nette", tresorerieNet),
          renderSimpleTable("Analyse de sensibilité", analyseSensiblité2),
          renderSimpleTable("", analyseSensiblité),
        ]),
      ]),
    ]),
    renderPageFooter("2/10/2021"),
    savePage(),
  ]);
}

function page3() {
  return renderPage([
    renderPageHeader("Indicateurs Investisseurs & Annexe Stratégique"),
    creatEle("div", { className: "doc-body" }, [
      ...renderTitle("Indicateurs Investisseurs"),
      renderMarketBand(marketBand),
      renderKpiGrid(kpi),
      ...renderTitle("Annexe — Opérations Entité ", "Compte 7xx"),
      annexe(annexeTable),
      renderSummary(summary),
    ]),
    renderPageFooter("2/10/2021"),
    savePage(),
  ]);
}

function savePage() {
  return creatEle("div", { className: "save-btn" }, [
    creatEle("button", { className: "back", textContent: "Retour" }),
    creatEle("button", { className: "save", textContent: "Enregistrer" }),
  ]);
}

function renderPrintFence() {
  return creatEle("div", { className: "print-btn" }, [
    creatEle("button", { className: "fence", textContent: "Clôturer" }),
    creatEle("button", { className: "print", textContent: "Imprimer" }),
  ]);
}

function updateAllDisplays() {
  // 1. Équilibre du Bilan
  const bcEq = document.querySelector(".bc-eq");
  const bcStatus = document.querySelector(".balance-check span:last-child");
  if (bcEq && bcStatus) {
    bcEq.textContent = `${totalActifs} ACTIF = ${totalPassifs} PASSIF + ${totalCapitauxPropres} CP`;

    const isEq = totalActifs === totalPassifs + totalCapitauxPropres;
    bcStatus.className = isEq ? "bc-ok" : "bc-no";
    bcStatus.textContent = isEq
      ? "✓ ÉQUILIBRÉ"
      : `⚠ DÉSEQUILIBRÉ | ${
          totalActifs - (totalPassifs + totalCapitauxPropres) > 0
            ? "ACTIFS > PASSIFS + CP"
            : "ACTIFS < PASSIFS + CP"
        }`;
  }

  // 2. Marge nette et Ratio (Note)
  const note = document.querySelector(".note");
  if (note) {
    note.textContent = `Marge nette : ${formatValue(margeNet, 1)}% · Ratio charges/produits : ${formatValue(ratioChargesProduits, 1)}%`;
  }

  // 3. Résultats Nets et Trésorerie Nette (Les lignes de total hors tableaux)
  // On cherche les lignes de résultat dans le compte de résultat et flux
  const resultDivs = document.querySelectorAll(".t-result");
  if (resultDivs.length >= 2) {
    // Le premier est le Résultat Net
    resultDivs[0].querySelector(".t-amt").textContent =
      formatValue(resultatNet);
    // Le deuxième est la Trésorerie Nette
    resultDivs[1].querySelector(".t-amt").textContent =
      formatValue(tresorerieNet);
  }

  // 4. Reconstruction de la grille des KPIs
  const kpiGrid = document.querySelector(".kpi-grid");
  if (kpiGrid) {
    // On met à jour le tableau d'objets 'kpi' avec les nouvelles valeurs calculées
    kpi[0].value = `${formatValue(roe)}%`;
    kpi[1].value = `${formatValue(roa)}%`;
    kpi[2].value = `${formatValue(ratioDette_capitauxPropres)}×`;
    kpi[3].value = `${formatValue(valeurComptable)}`;
    kpi[4].value = `${formatValue(benefice)}`;
    kpi[5].value = `${formatValue(priceBook)}×`;
    kpi[6].value = `${formatValue(tresorerieNet)}`;
    kpi[7].value = `${formatValue(totalActifs)}`;
    kpi[8].value = `${formatValue(margeNet)}%`;

    // On vide l'ancienne grille et on réinjecte les nouvelles cartes kpi
    kpiGrid.innerHTML = "";
    const temporaryGrid = renderKpiGrid(kpi);
    kpiGrid.append(...temporaryGrid.childNodes);
  }

  // 5. Reconstruction du Résumé (Summary) en bas de page
  const summaryDiv = document.querySelector(".summary");
  if (summaryDiv) {
    // On met à jour le tableau d'objets 'summary'
    summary[0].value = formatValue(fluxNetMa);
    summary[1].value = formatValue(flutNetFinan);
    summary[2].value = formatValue(distribTotal);

    // On vide et on remet le contenu rafraîchi
    summaryDiv.innerHTML = "";
    const temporarySummary = renderSummary(summary);
    summaryDiv.append(...temporarySummary.childNodes);
  }
}

etatSet.append(page1(), page2(), page3(), renderPrintFence());

function numberPages() {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page, index) => {
    const pageNum = page.querySelector(".page-num");

    if (pageNum) {
      pageNum.textContent = `${index + 1}/${pages.length}`;
    }
  });
}

numberPages();
