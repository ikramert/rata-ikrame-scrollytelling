// GSAP - Importation du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);

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

// Gestion du défilement et ajout/suppression d'une classe
let minuteur;
function defilement() {
  document.body.classList.add("is-scrolling");
  clearTimeout(minuteur);
  minuteur = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
  }, 100);
}

// ----------
// ----------
// CHAPITRE 1
// ----------
// ----------

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
    markers: false,
  },
});

chapitre2
  .to(".medusebleuimg", { duration: 3, y: 100 })
  .to(".meduseroseimg", { duration: 3, y: 100 }, "<");

// Chapitre 2 Les meduses
/*gsap.to(".medusebleuimg", {
  y: 100,
  duration: 1,
});

gsap.to(".meduseroseimg", {
  scrollTrigger: {
    //markers: true,
    trigger: ".meduseroseimg",
    scrub: 1,
    start: "top 75%",
    end: "85% 20%",
  },
  y: 100,
  duration: 1,
});*/

// ----------
// ----------
// CHAPITRE 3
// ----------
// ----------

// ----------
// ----------
// CHAPITRE 4
// ----------
// ----------

// ----------
// ----------
// CHAPITRE 5
// ----------
// ----------

const chapitre5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre5",
    start: "top 75%",
    end: "bottom 20%",
    scrub: 3,
    pin: true,
    markers: false,
  },
});

chapitre5
  .to(".cle", { duration: 3, y: 100 })
  .to(".cadenas", { duration: 3, y: 100 }, "<");

// ----------
// ----------
// CHAPITRE 6
// ----------
// ----------

//Animation du sous marin 1
gsap.to(".sousmarin", {
  scrollTrigger: {
    trigger: "#chapitre3",
    start: "top top",
    end: "bottom top",
    toggleActions: "play pause reverse pause",
    scrub: 3,
  },
  duration: 2,
  backgroundPositionY: "4800%",
  ease: "steps(48)",
});
//Animation du groupe de poisson

//Chapitre 3 Bulles
gsap.to(".bulles1", {
  scrollTrigger: {
    //markers: true,
    trigger: "#chapitre3",
    scrub: 1,
    start: "center 75%",
    end: "75% 10%",
  },
  y: 100,
  duration: 1,
});

gsap.to(".bulles2", {
  scrollTrigger: {
    //markers: true,
    trigger: "#chapitre3",
    scrub: 1,
    start: "center 90%",
    end: "100% 30%",
  },
  y: 100,
  duration: 1,
});

// Chapitre 5 Monstre
gsap.to(".monstreimg", {
  x: "+=100",
  duration: 0.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// Chapitre 6 Tentacules
gsap.to(".tentacules", {
  scrollTrigger: {
    //markers: true,
    trigger: ".bulles1",
    scrub: 1,
    start: "center 65%",
    end: "85% 10%",
  },
  y: 100,
  duration: 1,
});
