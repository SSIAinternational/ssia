/* import du tableau des collèges */
import { collegeList } from "./collegeList.js";

/* Déclaration des variables */
const college = document.querySelector(".college");
const container = document.querySelector(".college > .container");
const collegeName = document.querySelector(".college h1.college-name");
const collegeLogo = document.querySelector(
  ".college .college-presentation-logo",
);
const collegeText = document.querySelector(
  ".college .college-presentation-text",
);
const collegePrograms = document.querySelector(".college .college-programme");
const collegeTsac = document.querySelector(".college .college-tsac");
const tsacBtnDiv = document.querySelector(".college-tsac > .d-flex");
const collegeTestimonial = document.querySelector(
  ".college .testimoninal .testimonial-list",
);

/* Rendu du select */
const select = document.createElement("select");

select.style.textTransform = "capitalize";

collegeList.forEach((collegeItem) => {
  const option = Object.assign(document.createElement("option"), {
    value: collegeItem.name,
    textContent: `Collège ${collegeItem.name}`,
  });

  select.append(option);
});

college.insertBefore(select, container);

/* Style générale de collegeLogo */

/* Formatage de la date */
function formatDate(dateString) {
  const [day, month, year] = dateString.split("/");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${day} ${months[parseInt(month) - 1]} ${year}`;
}

/* Etat par défault */
function defaultCollegeDetail() {
  collegeName.innerHTML = `<span class="text-primary">#${collegeList[0].rank}</span> Collège <span class="text-uppercase">${collegeList[0].name}</span>`;
  collegeLogo.src = `${collegeList[0].logo}`;
  collegeLogo.alt = `logo-college-${collegeList[0].name}`;
  collegeText.textContent = collegeList[0].presentation;

  const ul = Object.assign(document.createElement("ul"), {
    className: "list-group list-group-flush",
  });
  collegeList[0].programs.forEach((programItem) => {
    const li = Object.assign(document.createElement("li"), {
      className:
        "list-group-item d-flex justify-content-between align-items-center px-0",
    });

    const a = Object.assign(document.createElement("a"), {
      className: "text-decoration-none h6 m-0",
      textContent: programItem,
    });

    ul.append(li);
    li.append(a);
  });

  collegePrograms.append(ul);

  if (collegeList[0].tsac === true) {
    const p = Object.assign(document.createElement("p"), {
      textContent: `Minimum requis: ${collegeList[0].scoreTsac} /100`,
    });
    collegeTsac.insertBefore(p, tsacBtnDiv);
  } else {
    const p = Object.assign(document.createElement("p"), {
      innerHTML: `Pas de TSAC pour le Collège <span class="text-capitalize">${collegeList[0].name}</span>`,
    });
    collegeTsac.append(p);
    tsacBtnDiv.remove();
  }

  collegeList[0].testimonial.forEach((testimonialItem) => {
    const testimoning = Object.assign(document.createElement("div"), {
      className: "media mb-4",
    });

    const testimoningContent = Object.assign(document.createElement("div"), {
      className: "media-body",
    });

    const h6 = Object.assign(document.createElement("h6"), {
      innerHTML: `${testimonialItem.studentName} <small><i>${formatDate(testimonialItem.date)} à ${testimonialItem.heure}</i></small>`,
    });

    h6.style.fontSize = "15px";

    const p = Object.assign(document.createElement("p"), {
      textContent: testimonialItem.testimoning,
    });

    p.style.fontSize = "14px";
    p.style.marginLeft = "10px";

    collegeTestimonial.append(testimoning);
    testimoning.append(testimoningContent);
    testimoningContent.append(h6, p);
  });
}

defaultCollegeDetail();

/* Mise à jour de l'état */
function changeCollegeDetail(e) {
  const selectedCollege = collegeList.find(
    (college) => college.name === e.target.value,
  );

  /* Nom */
  collegeName.innerHTML = `<span class="text-primary">#${selectedCollege.rank}</span> Collège <span class="text-uppercase">${selectedCollege.name}</span>`;

  /* Logo */
  collegeLogo.src = selectedCollege.logo;
  collegeLogo.alt = `logo-college-${selectedCollege.name}`;

  /* Présentation */
  collegeText.textContent = selectedCollege.presentation;

  /* Nettoyer les anciens programmes */
  collegePrograms.innerHTML = "";

  const ul = Object.assign(document.createElement("ul"), {
    className: "list-group list-group-flush",
  });

  selectedCollege.programs.forEach((programItem) => {
    const li = Object.assign(document.createElement("li"), {
      className:
        "list-group-item d-flex justify-content-between align-items-center px-0",
    });

    const a = Object.assign(document.createElement("a"), {
      className: "text-decoration-none h6 m-0",
      textContent: programItem,
    });

    li.append(a);
    ul.append(li);
  });

  collegePrograms.append(ul);

  collegeTestimonial.innerHTML = "";

  selectedCollege.testimonial.forEach((testimonialItem) => {
    const testimoning = Object.assign(document.createElement("div"), {
      className: "media mb-4",
    });

    const testimoningContent = Object.assign(document.createElement("div"), {
      className: "media-body",
    });

    const h6 = Object.assign(document.createElement("h6"), {
      innerHTML: `${testimonialItem.studentName} <small><i>${formatDate(testimonialItem.date)} à ${testimonialItem.heure}</i></small>`,
    });

    h6.style.fontSize = "15px";

    const p = Object.assign(document.createElement("p"), {
      textContent: testimonialItem.testimoning,
    });

    p.style.fontSize = "14px";
    p.style.marginLeft = "10px";

    collegeTestimonial.append(testimoning);
    testimoning.append(testimoningContent);
    testimoningContent.append(h6, p);
  });

  /* TSAC */

  collegeTsac.querySelectorAll("p").forEach((p) => p.remove());

  if (selectedCollege.tsac) {
    const p = document.createElement("p");
    p.textContent = `Minimum requis: ${selectedCollege.scoreTsac} /100`;

    collegeTsac.insertBefore(p, tsacBtnDiv);
  } else {
    const p = Object.assign(document.createElement("p"), {
      className: "college-tsac__null",
      innerHTML: `Aucun TSAC requis pour le Collège <span class="text-capitalize">${selectedCollege.name}</span>`,
    });

    collegeTsac.append(p);

    if (tsacBtnDiv) tsacBtnDiv.remove();
  }
}

select.addEventListener("change", changeCollegeDetail);
