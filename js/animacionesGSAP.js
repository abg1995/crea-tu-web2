gsap.registerPlugin(ScrollTrigger);

//HEADER

gsap.to("header", {
  padding: "1rem",
  ease: "none",
  scrollTrigger: {
    tigger: "header",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

//HERO

gsap.to(".hero-container-img", {
  width: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 35%",
    end: "bottom bottom",
    scrub: true,
  },
});

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
