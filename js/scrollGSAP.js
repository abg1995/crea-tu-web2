gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 4,
  effects: true,
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();
    const target = links.getAttribute("href");
    smoother.scrollTo(target, true, "top 100px");
  });
});

document.addEventListener("click", (e) => {
  const link = e.target.closest(".btn-contacto");
  if (!link) return;
  e.preventDefault();
  const target = link.getAttribute("href");
  smoother.scrollTo(target, true, "top 100px");
});
