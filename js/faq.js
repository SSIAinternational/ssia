const faqItems = document.querySelectorAll(".faq-item h3");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const p = item.nextElementSibling;

    // Toggle la classe 'active'
    p.classList.toggle("active");
  });
});

const text = document.getElementById("marquee-text");
let position = document.getElementById("marquee-container").offsetWidth;

function animateMarquee() {
  position--;
  if (position < -text.offsetWidth) {
    position = document.getElementById("marquee-container").offsetWidth;
  }
  text.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animateMarquee);
}

animateMarquee();
