// MOBILE NAV TOGGLE
const nav = document.querySelector("nav");
(function () {
  const hamburger = document.querySelector(".hamburger");
  const disableScroll = () => {
    if (nav.classList.contains("is-active")) {
      document.body.classList.add("nav-active");
    } else {
      document.body.classList.remove("nav-active");
    }
  };

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("is-active");
    disableScroll();
  });
})();

// NAV BAR STYLE

window.addEventListener("scroll", () => {
  nav.classList.toggle("shadow", window.scrollY > 0);
});

// SCROLL ANIMATION
(function () {
  const animateDivs = document.querySelectorAll(".animate");
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        // observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("animated");
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
(function () {
  const featureSelectors = document.querySelectorAll(".select-feature");
  const featureDis = document.querySelectorAll(".feature-dis");

  const resetDataAttr = () => {
    for (let i = 0; i < 3; i++) {
      featureSelectors[i].dataset.checked = false;
      featureDis[i].dataset.active = false;
    }
  };

  featureSelectors.forEach((selector, index) => {
    selector.addEventListener("click", () => {
      resetDataAttr();
      featureSelectors[index].dataset.checked = true;
      featureDis[index].dataset.active = true;
    });
  });
})();

// ACCORDION

const accordionItems = document.querySelectorAll(".accordion__item");
const labels = document.querySelectorAll(".label");
const answers = document.querySelectorAll(".answer");

for (let i = 0; i < accordionItems.length; i++) {
  const accordionItem = accordionItems[i];
  const label = labels[i];
  const answer = answers[i];

  label.addEventListener("click", () => {
    accordionItem.classList.toggle("active");

    if (accordionItem.classList.contains("active")) {
      answer.style.height = answer.scrollHeight + "px";
    } else {
      answer.style.height = 0 + "px";
    }
  });
}

// EMAIL VALADATION

const form = document.querySelector("form");
const emailInput = form.querySelector(".email");
const submit = form.querySelector(".btn");

submit.addEventListener("click", (e) => {
  e.preventDefault();
});
