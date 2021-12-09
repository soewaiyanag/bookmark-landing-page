const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const animateDiv = document.querySelector(".animate");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("is-active");
});

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
