/* =========================================================
   ABHISHEK PALSODKAR — PORTFOLIO
   SCRIPT
   ========================================================= */


/* =========================================================
   AOS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  if (typeof AOS !== "undefined") {

    AOS.init({

      duration: 650,

      easing: "ease-out-cubic",

      once: true,

      offset: 70,

      disable: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

    });

  }

});


/* =========================================================
   PROJECT CARD CURSOR LIGHT
   ========================================================= */

const projectCards =
  document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

  card.addEventListener("pointermove", (event) => {

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;


    card.style.setProperty(
      "--mouse-x",
      `${x}px`
    );


    card.style.setProperty(
      "--mouse-y",
      `${y}px`
    );

  });


  card.addEventListener("pointerleave", () => {

    card.style.setProperty(
      "--mouse-x",
      "50%"
    );

    card.style.setProperty(
      "--mouse-y",
      "50%"
    );

  });

});


/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */

const magneticElements =
  document.querySelectorAll(".magnetic");

magneticElements.forEach((element) => {

  element.addEventListener("pointermove", (event) => {

    if (window.innerWidth <= 700) {
      return;
    }


    const rect =
      element.getBoundingClientRect();


    const x =
      event.clientX - rect.left - rect.width / 2;

    const y =
      event.clientY - rect.top - rect.height / 2;


    const moveX =
      x * 0.10;

    const moveY =
      y * 0.10;


    element.style.transform =
      `translate(${moveX}px, ${moveY}px)`;

  });


  element.addEventListener("pointerleave", () => {

    element.style.transform =
      "";

  });

});


/* =========================================================
   IMAGE PARALLAX — VERY SUBTLE
   ========================================================= */

const heroImage =
  document.querySelector(".hero-image");

if (heroImage) {

  heroImage.addEventListener(
    "pointermove",
    (event) => {

      if (window.innerWidth <= 850) {
        return;
      }


      const rect =
        heroImage.getBoundingClientRect();


      const x =
        (event.clientX - rect.left) /
        rect.width -
        0.5;


      const y =
        (event.clientY - rect.top) /
        rect.height -
        0.5;


      const image =
        heroImage.querySelector("img");


      if (image) {

        image.style.transform =
          `translate(${x * 6}px, ${y * 6}px) scale(1.02)`;

      }

    }
  );


  heroImage.addEventListener(
    "pointerleave",
    () => {

      const image =
        heroImage.querySelector("img");


      if (image) {

        image.style.transform =
          "";

      }

    }
  );

}


/* =========================================================
   PREVENT MAGNETIC EFFECT ON TOUCH
   ========================================================= */

window.addEventListener(
  "resize",
  () => {

    if (window.innerWidth <= 700) {

      magneticElements.forEach(
        (element) => {

          element.style.transform =
            "";

        }
      );

    }

  }
);


/* =========================================================
   SAKURA — NATURAL PETAL EFFECT
   DRAFT 01
   ========================================================= */

(() => {

  "use strict";


  /* =======================================================
     REDUCED MOTION
     ======================================================= */

  if (
    window.matchMedia &&
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    return;
  }


  /* =======================================================
     CONFIGURATION
     ======================================================= */

  const CONFIG = {

    /* Real transparent sakura petal */
    petalImage:
      "assets\images\petal-01.jpg",

    /* Maximum number of petals visible */
    maxPetals: 5,

    /* Random gap between petals */
    minDelay: 3500,
    maxDelay: 9000,

    /* Petal size */
    minSize: 12,
    maxSize: 28,

    /* Movement duration */
    minDuration: 9000,
    maxDuration: 17000,

    /* Petal transparency */
    minOpacity: 0.35,
    maxOpacity: 0.72,

    /* Horizontal drift */
    minDrift: 120,
    maxDrift: 420

  };


  /* =======================================================
     CREATE SAKURA CONTAINER
     ======================================================= */

  const sakuraLayer =
    document.createElement("div");


  sakuraLayer.id =
    "sakura-layer";


  Object.assign(
    sakuraLayer.style,
    {

      position: "fixed",

      inset: "0",

      width: "100%",

      height: "100%",

      overflow: "hidden",

      pointerEvents: "none",

      zIndex: "5"

    }
  );


  document.body.appendChild(
    sakuraLayer
  );


  /* =======================================================
     RANDOM NUMBER
     ======================================================= */

  function random(min, max) {

    return Math.random() *
      (max - min) +
      min;

  }


  /* =======================================================
     RANDOM INTEGER
     ======================================================= */

  function randomInt(min, max) {

    return Math.floor(
      random(min, max + 1)
    );

  }


  /* =======================================================
     RANDOM ARRAY VALUE
     ======================================================= */

  function randomChoice(array) {

    return array[
      randomInt(
        0,
        array.length - 1
      )
    ];

  }


  /* =======================================================
     CREATE PETAL
     ======================================================= */

  function createPetal() {

    /* Prevent excessive petals */

    if (
      sakuraLayer.children.length >=
      CONFIG.maxPetals
    ) {
      return;
    }


    const petal =
      document.createElement("img");


    petal.src =
      CONFIG.petalImage;


    petal.alt =
      "";


    /* =====================================================
       RANDOM PROPERTIES
       ===================================================== */

    const size =
      random(
        CONFIG.minSize,
        CONFIG.maxSize
      );


    const duration =
      random(
        CONFIG.minDuration,
        CONFIG.maxDuration
      );


    const opacity =
      random(
        CONFIG.minOpacity,
        CONFIG.maxOpacity
      );


    const drift =
      random(
        CONFIG.minDrift,
        CONFIG.maxDrift
      );


    const initialRotation =
      random(
        -180,
        180
      );


    const rotationAmount =
      random(
        -520,
        520
      );


    const startSide =
      randomChoice([
        "left",
        "right"
      ]);


    const startY =
      random(
        5,
        78
      );


    const endY =
      random(
        25,
        72
      );


    /* =====================================================
       START / END POSITION
       ===================================================== */

    let startX;
    let endX;


    if (startSide === "left") {

      startX = -70;

      endX =
        window.innerWidth +
        drift;

    } else {

      startX =
        window.innerWidth +
        70;

      endX =
        -drift;

    }


    /* =====================================================
       INITIAL PETAL STYLE
       ===================================================== */

    Object.assign(
      petal.style,
      {

        position: "absolute",

        left: "0",

        top: `${startY}vh`,

        width: `${size}px`,

        height: "auto",

        maxWidth: "none",

        opacity: "0",

        display: "block",

        userSelect: "none",

        pointerEvents: "none",

        willChange:
          "transform, opacity",

        transform:
          `translate3d(
            ${startX}px,
            0,
            0
          )
          rotate(
            ${initialRotation}deg
          )`,

        filter:
          "saturate(0.9)",

        transition:
          `transform ${duration}ms
           cubic-bezier(.18,.72,.24,1),
           opacity 1800ms ease-in-out`

      }
    );


    /* =====================================================
       ADD TO PAGE
       ===================================================== */

    sakuraLayer.appendChild(
      petal
    );


    /* =====================================================
       START MOVEMENT
       ===================================================== */

    requestAnimationFrame(() => {

      requestAnimationFrame(() => {

        petal.style.opacity =
          opacity;


        petal.style.transform =
          `translate3d(
            ${endX}px,
            ${endY}vh,
            0
          )
          rotate(
            ${initialRotation +
              rotationAmount}deg
          )`;

      });

    });


    /* =====================================================
       FADE OUT NEAR THE END
       ===================================================== */

    setTimeout(() => {

      petal.style.opacity =
        "0";

    }, duration - 1800);


    /* =====================================================
       REMOVE PETAL
       ===================================================== */

    setTimeout(() => {

      if (
        petal.parentNode
      ) {

        petal.remove();

      }

    }, duration + 2000);

  }


  /* =======================================================
     RANDOM PETAL SCHEDULER
     ======================================================= */

  function scheduleNextPetal() {

    const delay =
      random(
        CONFIG.minDelay,
        CONFIG.maxDelay
      );


    setTimeout(() => {

      createPetal();

      scheduleNextPetal();

    }, delay);

  }


  /* =======================================================
     START SAKURA EFFECT
     ======================================================= */

  scheduleNextPetal();


})();