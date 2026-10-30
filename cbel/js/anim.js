const aboutBtn = document.querySelector(".about");
const whyBtn = document.querySelector(".why");
const cbelBtn = document.querySelector(".cbel");

const line1 = document.querySelector(".about-nav-line-1");
const line2 = document.querySelector(".about-nav-line-2");
const line3 = document.querySelector(".about-nav-line-3");

const aboutText = document.querySelector(".about-text");
const whyText = document.querySelector(".why-text");
const cbelText = document.querySelector(".cbel-text");

whyBtn.addEventListener("click", () => {
  whyText.classList.add("about-text-show");
  aboutText.classList.remove("about-text-show");
  cbelText.classList.remove("about-text-show");

  line1.classList.remove("about-line-show");
  line2.classList.add("about-line-show");
  line3.classList.remove("about-line-show");

  whyBtn.classList.add("about-nav-active");
  aboutBtn.classList.remove("about-nav-active");
  cbelBtn.classList.remove("about-nav-active");
});

cbelBtn.addEventListener("click", () => {
  cbelText.classList.add("about-text-show");
  whyText.classList.remove("about-text-show");
  aboutText.classList.remove("about-text-show");

  line1.classList.remove("about-line-show");
  line2.classList.remove("about-line-show");
  line3.classList.add("about-line-show");

  cbelBtn.classList.add("about-nav-active");
  whyBtn.classList.remove("about-nav-active");
  aboutBtn.classList.remove("about-nav-active");
});

aboutBtn.addEventListener("click", () => {
  aboutText.classList.add("about-text-show");
  whyText.classList.remove("about-text-show");
  cbelText.classList.remove("about-text-show");

  line1.classList.add("about-line-show");
  line2.classList.remove("about-line-show");
  line3.classList.remove("about-line-show");

  aboutBtn.classList.add("about-nav-active");
  whyBtn.classList.remove("about-nav-active");
  cbelBtn.classList.remove("about-nav-active");
});
