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
  const animateDivs = document.querySelectorAll(".animate");
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
      }
    });
  };

  const myObserver = new IntersectionObserver(callback, {
    threshold: 0.5,
  });
  animateDivs.forEach((animateDiv) => {
    myObserver.observe(animateDiv);
  });
})();

// FEATURE SELECTOR
const featureSelectors = document.querySelectorAll(".select-feature");
const featureDis = document.querySelectorAll(".feature-dis");

const resetDataAttr = () => {
  for (let i = 0; i < 3; i++) {
    featureSelectors[i].dataset.checked = false;
    featureDis[i].dataset.active = false;
  }
};

featureSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    resetDataAttr();
    const index = Number(selector.dataset.id) - 1;
    featureSelectors[index].dataset.checked = true;
    featureDis[index].dataset.active = true;
  });
});
