//Gratuits
gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(MotionPathPlugin);

/*// Payants
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
*/
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
  )
  // Animation de l'arrière-plan
  .to(".bleuarriere1", { y: "-10vh", scale: 1.8, ease: "slow", duration: 5 }, 0)
  .to(".bleuarriere2", { y: "-3vh", scale: 1.2, ease: "slow", duration: 5 }, 0)
  .to(".bleudevant1", { scale: 1.2, ease: "slow", duration: 5 }, 0);

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
  .fromTo(
    ".jumellesimg",
    { y: 0, x: 0, rotation: 0 },
    { y: "100vh", x: "50vw", rotation: 180, ease: "sine", duration: 5 }
  );

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

const chapitre4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre4",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});

// Animation pour .monstreimg
chapitre4.fromTo(
  ".monstreimg",
  {
    x: "0",
  },
  {
    x: "+=100",
    duration: 5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  },
  0
);

gsap.fromTo(
  ".poissonrouge",
  { x: "100vw" },
  { x: "-100vw", duration: 9, ease: "power1.inOut", repeat: -1 }
);

gsap.fromTo(
  ".sousmarinbleu2",
  { x: "100vw" },
  { x: "-100vw", duration: 10, ease: "power1.inOut", repeat: -1 }
);
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
  .to(
    ".plainearriere",
    { y: "-10vh", scale: 1.8, ease: "slow", duration: 5 },
    0
  )
  .to(
    ".plainearriere2",
    { y: "-3vh", scale: 1.2, ease: "slow", duration: 5 },
    0
  )
  .to(".plaineavant", { scale: 1.2, ease: "slow", duration: 5 }, 0)
  .to(".rochesavant", { ease: "slow", scale: 1.2, duration: 5 }, 0)
  //MORPH SVG
  /* .to(".cle", {
    duration: 3,
    ease: "power1.inOut",
    morphSVG: ".cadenas",
  })*/
  .to(".tresorimg", { x: "50vw", duration: 5 }) // Déplacement horizontal initial du trésor
  .to(".tresorimg", { y: "70vh", duration: 2, ease: "power1.inOut" }) // Chute vers le bas
  .to(".tresorimg", { rotation: 90, duration: 1, ease: "power1.inOut" });

// ----------
// ----------
// CHAPITRE 6
// ----------
// ----------
// Anime le tracé SVG pour le dessiner progressivement
/*const draw = new DrawSVG("#vague-svg");
draw.draw("0%", "100%", {
  duration: 2000,
  easing: "linear",
});*/
const chapitre6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".animation-container",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
chapitre6
  .to(".animation-trace", {
    motionPath: {
      path: "M 20 20 C 40 120, 160 120, 200 20 C 240 -80, 360 -80, 400 20",
      autoRotate: true,
      align: "self",
      alignOrigin: [0.5, 0.5],
    },
    scale: 0.5,
    transformOrigin: "center center",
    ease: "power1.inOut",
    duration: 5,
  })
  .fromTo(
    ".animation-trace",
    { scale: 0.5 },
    { scale: 1, duration: 5, ease: "none" },
    0
  )
  .fromTo(
    ".tentacules",
    { y: "-100%" }, // position de départ
    {
      y: "80%",
      duration: 6,
      ease: "none",
    },
    0
  );
