const collegeContent = document.querySelector(".program");

import { collegeList } from "./collegeList.js";

function renderProgramList() {
  collegeList.forEach((collegeItem) => {
    if (collegeItem.rank > 0 && collegeItem.rank < 11) {
      const collegeItemContent = Object.assign(document.createElement("div"), {
        className: "program__college-item",
      });

      const collegeLogo = Object.assign(document.createElement("div"), {
        className: "college-item__img",
      });

      const logoImg = Object.assign(document.createElement("img"), {
        src: collegeItem.logo,
        alt: `Logo du collège ${collegeItem.name}`,
      });

      const collegeItemDetails = Object.assign(document.createElement("div"), {
        className: "college-item__details",
      });

      const h4 = Object.assign(document.createElement("h4"), {
        innerHTML: `collège <span>${collegeItem.name}</span>`,
      });

      const programsCount = Object.assign(document.createElement("p"), {
        textContent: `${collegeItem.programs.length} programmes`,
      });

      const collegeRank = Object.assign(document.createElement("p"), {
        textContent: `Rang #${collegeItem.rank}`,
      });

      collegeContent.appendChild(collegeItemContent);
      collegeItemContent.appendChild(collegeLogo);
      collegeLogo.appendChild(logoImg);
      collegeItemContent.appendChild(collegeItemDetails);
      collegeItemDetails.appendChild(h4);
      collegeItemDetails.appendChild(programsCount);
      collegeItemDetails.appendChild(collegeRank);

      return collegeContent;
    }
  });
}

renderProgramList();
