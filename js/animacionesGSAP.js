gsap.registerPlugin(ScrollTrigger);

// DESCRIPCION
gsap.to(".descripcion-container", {
  opacity: 1,
  x: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".descripcion",
    start: "center 90%",
    end: "center 60%",
    scrub: true,
  },
});
