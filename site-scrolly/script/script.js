// Animation de mon scroll-down bouton
gsap.to("#defilezbtn img", {
  y: 10, // Décalage vers le bas de 10 pixels
  duration: 0.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// Animation du titre
gsap.to(".titreHistoire", {
  x: 20,
  duration: 2,
  ease: "sine.inOut",
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
