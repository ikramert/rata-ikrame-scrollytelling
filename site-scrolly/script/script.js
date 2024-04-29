// Animation de mon scroll-down bouton
gsap.to("#defilezbtn img", {
  y: 10, // Décalage vers le bas de 10 pixels
  duration: 0.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// Animation spritesheet test
let minuteur;

// Fonction pour gérer l'événement de défilement
function defilement() {
  document.body.classList.add("is-scrolling");

  // Réinitialisation
  clearTimeout(minuteur);

  //Nouveau minuteur
  minuteur = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
    console.log("Le délai de 100ms est écoulé.");
  }, 100); // Délai de 100ms
}

//écouteur d'événement
window.addEventListener("scroll", defilement);

// Chapitre 1 svg anim
gsap.registerPlugin(ScrollTrigger);

// Timeline d'animation pour CHAPITRE 1
const timeline1 = gsap
  .timeline({ repeat: -1, yoyo: true })
  .to(".dauphinimg", {
    y: "10vh",
    x: "50vw",
    duration: 10,
    ease: "power1.inOut",
  })
  .fromTo(
    ".poissonrouge",
    { x: "100%", y: "20vh" },
    { x: "-100%", y: "20vh", duration: 10, ease: "none" },
    "<"
  )
  // Animation pour CHAPITRE 2
  .fromTo(
    ".poissoncoloreimg",
    { x: "100%", y: "0%" },
    { x: "-100%", y: "0%", duration: 10, ease: "none" },
    "<"
  )
  .to(".poissoncoloreimg", { y: "50%", duration: 5, ease: "power1.inOut" }, "<")
  .to(".poissoncoloreimg", { y: "0%", duration: 5, ease: "power1.inOut" })
  .to(".poissoncoloreimg", { opacity: 1, duration: 2 }, "<");
