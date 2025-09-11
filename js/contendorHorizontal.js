gsap.registerPlugin(ScrollTrigger);

let contenedores = gsap.utils.toArray(".proyecto-container");

let scrollHorizontal = gsap.to(contenedores, {
  xPercent: -100 * (contenedores.length - 1),
  ease: "none",

  scrollTrigger: {
    trigger: ".proyectos",
    pin: true,
    scrub: 0.1,
    start: "top top",
    end: "+=3000",
  },
});

gsap.utils.toArray(".aparecer").forEach((element) => {
  gsap.to(element, {
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      containerAnimation: scrollHorizontal,
      strat: "center 90%",
      end: "center 60%",
      scrub: true,
    },
  });
});
