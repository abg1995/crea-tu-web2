gsap.registerPlugin(ScrollTrigger);

let contenedores = gsap.utils.toArray(".proyecto-container");

let scrollHorizojntal = gsap.to(contenedores, {
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
