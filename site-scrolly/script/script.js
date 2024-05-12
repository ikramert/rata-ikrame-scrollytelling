gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

// ----------
// ----------
// HEADER
// ----------
// ----------

// Animation du bouton
gsap.to("#defilezbtn img, span", {
  y: 10,
  duration: 0.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// Spritesheet
window.addEventListener("scroll", function () {
  document.body.classList.add("is-scrolling");

  clearTimeout(timer);

  let timer = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
  }, 100);
});

// ----------
// ----------
// CHAPITRE 1
// ----------
// ----------
const chapitre1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre1",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
  },
});

chapitre1
  .fromTo(
    ".sousmarinrouge",
    { x: "-100%" }, // position de départ
    {
      x: "100%",
      rotation: 1080, // rotation complète
      duration: 15,
      ease: "power1.inOut",
    },
    "0"
  )
  .fromTo(
    ".poissoncolore",
    { x: "100%" },
    { x: "-100%", duration: 15, ease: "power1.inOut" },
    "0"
  )
  .fromTo(
    ".groupepoisson",
    { x: "100%" },
    { x: "-100%", duration: 15, ease: "power1.inOut" },
    "0"
  );

// ----------
// ----------
// CHAPITRE 2
// ----------
// ----------

const chapitre2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre2",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
  },
});

chapitre2
  .to(".medusebleuimg", { duration: 2, y: -300, ease: "power1.inOut" }, "0")
  .to(".meduseroseimg", { duration: 2, y: -300, ease: "power1.inOut" }, "0")
  .to(".jumellesimg", { rotation: 180, duration: 5 })
  .to(".jumellesimg", { y: "100vh", ease: "sine", duration: 5 });

gsap.to(".jumellesimg", {
  scrollTrigger: {
    trigger: "#chapitre2",
    start: "top top",
    end: "bottom top",
    toggleActions: "play pause reverse pause",
    scrub: 3,
  },
  duration: 2,
  backgroundPositionY: "4800%",
  ease: "steps(48)",
});

// ----------
// ----------
// CHAPITRE 3
// ----------
// ----------
const chapitre3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre3",
    start: "center center",
    end: "bottom top",
    scrub: 3,
    pin: true,
  },
});

// Démarre les deux animations en même temps
chapitre3
  .to(".bulles1", { duration: 3, y: -100 }, "0")
  .to(".bulles2", { duration: 3, y: -300 }, "0");

gsap.to(".sousmarinbleu", {
  scrollTrigger: {
    trigger: "#chapitre3",
    start: "center bottom",
    end: "bottom top",
    scrub: true,
  },
  x: "100vw",
  duration: 10,
  ease: "power1.inOut",
});

// ----------
// ----------
// CHAPITRE 4
// ----------
// ----------
gsap.to(".monstreimg", {
  x: "+=100",
  duration: 0.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// ----------
// ----------
// CHAPITRE 5
// ----------
// ----------

//Timeline des animations chapitre 5
const chapitre5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre5",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
  },
});

chapitre5
  // Animation de l'arrière-plan
  .to(".plainearriere", { y: "-10vh", scale: 1.8, ease: "slow", duration: 5 })
  .to(".plainearriere2", { y: "-3vh", scale: 1.2, ease: "slow", duration: 5 })
  .to(".plaineavant", { ease: "slow", duration: 5 })
  .to(".rochesavant", { y: "-3vh", ease: "slow", scale: 1.2, duration: 5 })
  .to(".tresorimg", { x: "50vw", duration: 5 }) // Déplacement horizontal initial du trésor
  .to(".tresorimg", { y: "70vh", duration: 2, ease: "power1.inOut" }) // Chute vers le bas
  .to(".tresorimg", { rotation: 90, duration: 1, ease: "power1.inOut" });

// ----------
// ----------
// CHAPITRE 6
// ----------
// ----------

const chapitre6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".animation-container",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});

// Animation for ".animation-trace" with whirlpool effect and scaling
chapitre6
  .to(".animation-trace", {
    motionPath: {
      path: "M 20 20 Q 40 100 80 100 Q 120 100 160 50 Q 200 0 240 50 Q 280 100 320 100 Q 360 100 400 20",
      autoRotate: true,
      align: "self",
      alignOrigin: [0.5, 0.5],
    },
    scale: 0.5, // Starts at half size
    transformOrigin: "center center",
    ease: "power1.inOut",
    duration: 5,
  })
  .fromTo(
    ".animation-trace",
    { scale: 0.5 },
    { scale: 1, duration: 5, ease: "none" },
    0
  );

// Animation for ".tentacules"
chapitre6.to(
  ".tentacules",
  {
    y: 300, // Vertical movement
    duration: 1,
    ease: "none",
  },
  0
);
