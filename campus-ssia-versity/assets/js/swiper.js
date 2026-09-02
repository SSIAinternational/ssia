const slides = document.querySelector(".slides");

import { collegeList } from "./collegeList.js";

function renderSlideItem() {
  collegeList.forEach((collegeItem) => {
    const slideItem = Object.assign(document.createElement("div"), {
      className: "slide-item",
    });

    const slideItemImg = Object.assign(document.createElement("img"), {
      src: collegeItem.logo,
    });

    slideItem.appendChild(slideItemImg);
    slides.appendChild(slideItem);
  });
}

renderSlideItem();
renderSlideItem();

const slide = document.querySelectorAll(".slide-item");

let index = 0;
const totalSlides = slide.length / 2;
const slideWidth = 150 + 30;

function nextSlide() {
  index++;

  slides.style.transition = "transform 1s ease-in-out";
  slides.style.transform = `translateX(-${index * slideWidth}px)`;

  if (index >= totalSlides) {
    setTimeout(() => {
      slides.style.transition = "none";
      slides.style.transform = `translateX(0px)`;
      index = 0;
    }, 500);
  }
}

setInterval(nextSlide, 3000);
