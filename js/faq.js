const faqItems = document.querySelectorAll(".faq-item h3");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const p = item.nextElementSibling;

    // Toggle la classe 'active'
    p.classList.toggle("active");
  });
});
