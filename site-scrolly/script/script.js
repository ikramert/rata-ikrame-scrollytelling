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

//Bulles

gsap.to(".bulles1", {
  scrollTrigger: {
    markers: true,
    trigger: ".bulles1",
    scrub: 1,
    start: "center 65%",
    end: "85% 10%",
  },
  y: 100,
  duration: 1,
});

gsap.to(".bulles2", {
  scrollTrigger: {
    markers: true,
    trigger: ".bulles2",
    scrub: 1,
    start: "center 90%",
    end: "100% 30%",
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
//Monstre chapitre 5
gsap.to(".monstreimg", {
  x: "+=100",
  duration: 0.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// Timeline vagues
document.querySelectorAll(".wave").forEach((wave) => {
  gsap.to(wave, {
    backgroundPositionX: "-1000px",
    ease: "none",
    scrollTrigger: {
      trigger: wave,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
      markers: true,
    },
  });
});

// Sprite sous marine
gsap.to(".sousmarin", {
  backgroundPosition: "-1000px 0px",
  ease: "steps(48)",
  duration: 2,
  y: "4800px",
  repeat: -1,
});

// Chapitre 6
gsap.to(".tentacules", {
  y: "+=200px",
  ease: "power1.inOut",
  duration: 2,
  yoyo: true,
  repeat: -1,
});
