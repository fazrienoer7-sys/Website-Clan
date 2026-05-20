/* NAVBAR EFFECT */

window.addEventListener("scroll", function(){

  const navbar =
  document.getElementById("navbar");

  if(window.scrollY > 50){

    navbar.style.background =
    "rgba(0,0,0,.75)";

    navbar.style.boxShadow =
    "0 0 25px rgba(255,165,0,.08)";

  }

  else{

    navbar.style.background =
    "rgba(0,0,0,.35)";

    navbar.style.boxShadow =
    "none";

  }

});

/* PREMIUM LOADER */

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  const percent =
  document.getElementById(
    "loading-percent"
  );

  let count = 0;

  const interval = setInterval(() => {

    count++;

    percent.innerHTML =
    count + "%";

    if(count >= 100){

      clearInterval(interval);

      setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility =
        "hidden";

      }, 500);

    }

  }, 30);

});

/* PARTICLES */

particlesJS("particles-js", {

  particles: {

    number: {
      value: 55
    },

    color: {
      value: "#ff9900"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.4
    },

    size: {
      value: 3
    },

    line_linked: {

      enable: true,

      distance: 150,

      color: "#ff9900",

      opacity: 0.2,

      width: 1

    },

    move: {

      enable: true,

      speed: 2

    }

  },

  interactivity: {

    events: {

      onhover: {
        enable: true,
        mode: "grab"
      }

    }

  },

  retina_detect: true

});

/* MUSIC */

const music =
document.getElementById("bg-music");

const musicBtn =
document.getElementById("music-toggle");

music.volume = 0.20;

musicBtn.addEventListener("click", () => {

  if(music.paused){

    music.play();

    musicBtn.innerHTML = "🔊";

  }

  else{

    music.pause();

    musicBtn.innerHTML = "🔇";

  }

});

/* SCROLL REVEAL */

function revealSections(){

  const reveals =
  document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){

    const windowHeight =
    window.innerHeight;

    const revealTop =
    reveals[i]
    .getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      reveals[i]
      .classList.add("active");

    }

  }

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

/* PARTNERSHIP HOVER EFFECT */

const partnerCards =
document.querySelectorAll(
  ".partner-card"
);

partnerCards.forEach(card => {

  card.addEventListener(
    "mouseenter",
    () => {

      card.style.transform =
      "translateY(-8px) scale(1.03)";

    }
  );

  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
      "translateY(0px) scale(1)";

    }
  );

});

console.log(
  "Unity~LegiOn` Website Ready!"
);
