document.addEventListener("DOMContentLoaded", () => {
  const paiTitle = document.querySelector(".paiement-title");
  const titre = paiTitle.querySelector("h1");
  if (!titre) return;

  // create sentinel inserted before the H1
  const sentinel = document.createElement("div");
  sentinel.style.position = "absolute";
  sentinel.style.top = "0";
  sentinel.style.width = "1px";
  sentinel.style.height = "1px";
  paiTitle.insertBefore(sentinel, titre);

  function createObserver() {
    const rootMargin = `-${Math.round(
      window.innerHeight * 0.15
    )}px 0px 0px 0px`;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // si le sentinel n'est plus visible dans la zone ajustée => shrink
          if (entry.isIntersecting) titre.classList.remove("shrink");
          else titre.classList.add("shrink");
        });
      },
      { root: null, rootMargin, threshold: 0 }
    );

    observer.observe(sentinel);
    return observer;
  }

  let obs = createObserver();
  window.addEventListener("resize", () => {
    obs.disconnect();
    obs = createObserver();
  });
});
