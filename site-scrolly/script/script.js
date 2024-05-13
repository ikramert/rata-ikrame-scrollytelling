gsap.registerPlugin(ScrollTrigger),
  gsap.to("#defilezbtn img, span", {
    y: 10,
    duration: 0.5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: !0,
  }),
  window.addEventListener("scroll", function () {
    document.body.classList.add("is-scrolling"), clearTimeout(e);
    let e = setTimeout(function () {
      document.body.classList.remove("is-scrolling");
    }, 100);
  });
const chapitre1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre1",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: !0,
  },
});
chapitre1
  .fromTo(
    ".sousmarinrouge",
    { x: "-100%" },
    { x: "100%", rotation: 1080, duration: 15, ease: "power1.inOut" },
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
  .to(".bleuarriere1", { y: "-10vh", scale: 1.8, ease: "slow", duration: 5 }, 0)
  .to(".bleuarriere2", { y: "-3vh", scale: 1.2, ease: "slow", duration: 5 }, 0)
  .to(".bleudevant1", { scale: 1.2, ease: "slow", duration: 5 }, 0);
const chapitre2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre2",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: !0,
  },
});
chapitre2
  .to(".medusebleuimg", { duration: 2, y: -300, ease: "power1.inOut" }, "0")
  .to(".meduseroseimg", { duration: 2, y: -300, ease: "power1.inOut" }, "0")
  .fromTo(
    ".jumellesimg",
    { y: 0, x: 0, rotation: 0 },
    { y: "100vh", x: "50vw", rotation: 180, ease: "sine", duration: 5 }
  ),
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
const chapitre3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre3",
    start: "center center",
    end: "bottom top",
    scrub: 3,
    pin: !0,
  },
});
chapitre3
  .to(".bulles1", { duration: 3, y: -100 }, "0")
  .to(".bulles2", { duration: 3, y: -300 }, "0"),
  gsap.to(".sousmarinbleu", {
    scrollTrigger: {
      trigger: "#chapitre3",
      start: "center bottom",
      end: "bottom top",
      scrub: !0,
    },
    x: "100vw",
    duration: 10,
    ease: "power1.inOut",
  });
const chapitre4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre4",
    start: "top center",
    end: "bottom center",
    scrub: !0,
    markers: !1,
  },
});
chapitre4.fromTo(
  ".monstreimg",
  { x: "0" },
  { x: "+=100", duration: 5, ease: "power1.inOut", repeat: -1, yoyo: !0 },
  0
),
  gsap.fromTo(
    ".poissonrouge",
    { x: "100vw" },
    { x: "-100vw", duration: 9, ease: "power1.inOut", repeat: -1 }
  ),
  gsap.fromTo(
    ".sousmarinbleu2",
    { x: "100vw" },
    { x: "-100vw", duration: 10, ease: "power1.inOut", repeat: -1 }
  );
const chapitre5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre5",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: !0,
  },
});
chapitre5
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
  .to(".tresorimg", { x: "50vw", duration: 5 })
  .to(".tresorimg", { y: "70vh", duration: 2, ease: "power1.inOut" })
  .to(".tresorimg", { rotation: 90, duration: 1, ease: "power1.inOut" });
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
      autoRotate: !0,
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
    { y: "-100%" },
    { y: "80%", duration: 6, ease: "none" },
    0
  );
