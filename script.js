// MOBILE NAV TOGGLE
(function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("is-active");
  });
})();

// SCROLL ANIMATION
(function () {
  const animateDiv = document.querySelector(".animate");
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.disconnect();
      }
    });
  };

  const myObserver = new IntersectionObserver(callback, {
    threshold: 0.5,
  });

  myObserver.observe(animateDiv);
})();

// FEATURE SELECTOR
const featureSelectors = document.querySelectorAll(".select-feature");
const resetSelectors = () => {
  featureSelectors.forEach((selector) => {
    selector.dataset.checked = false;
  });
};
featureSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    resetSelectors();
    selector.dataset.checked = true;
  });
});
