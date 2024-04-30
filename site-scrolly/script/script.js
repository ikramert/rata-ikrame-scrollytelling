// GSAP - Importation du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation du bouton pour inciter au défilement vers le bas
gsap.to("#defilezbtn img, span", {
  y: 10,
  duration: 0.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// Gestion du défilement et ajout/suppression d'une classe
let minuteur;
function defilement() {
  document.body.classList.add("is-scrolling");
  clearTimeout(minuteur);
  minuteur = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
    console.log("Le délai de 100ms est écoulé.");
  }, 100);
}
window.addEventListener("scroll", defilement);

// Animations GSAP pour les chapitres avec mouvements horizontaux
gsap.to(".groupe1", {
  repeat: -1,
  ease: "none",
  duration: 7.5,
  x: "-120vw", // Déplacement horizontal sur 120% de la largeur de la fenêtre
});

gsap.to(".groupe2", {
  repeat: -1,
  ease: "none",
  duration: 12,
  x: "-100vw",
});

// Animations pour les méduses avec ScrollTrigger
gsap.to(".medusebleuimg", {
  scrollTrigger: {
    markers: true,
    trigger: ".medusebleuimg",
    scrub: 1,
    start: "center 75%",
    end: "85% 20%",
  },
  y: 100,
  duration: 1,
});

gsap.to(".meduseroseimg", {
  scrollTrigger: {
    markers: true,
    trigger: ".meduseroseimg",
    scrub: 1,
    start: "center 75%",
    end: "75% 10%",
  },
  y: 100,
  duration: 1,
});

// Animation pour le sous-marin bleu
gsap.fromTo(
  ".sousmarinbleu",
  { x: "-100%" },
  {
    x: "350%",
    duration: 10,
    repeat: -1,
    ease: "none",
  }
);

gsap.registerPlugin(ScrollTrigger);

// Sprite sous marine
gsap.to(".sprite", {
  backgroundPosition: "-900px 0px",
  ease: "steps(9)",
  duration: 1,
  repeat: -1,
});

//Monstre chapitre 5
gsap.to(".monstreimg", {
  x: "+=100",
  duration: 0.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});
