/* =====================================================
   AKASHGANGA JAVASCRIPT
===================================================== */


/* =====================================================
   LOGIN
===================================================== */

const loginPage =
    document.getElementById("loginPage");

const mainWebsite =
    document.getElementById("mainWebsite");

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();


        if (!email || !password) {

            showToast(
                "Please enter email and password."
            );

            return;
        }


        enterUniverse();

    }
);



function enterUniverse() {

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();


    if (!email || !password) {

        showToast(
            "Please enter email and password."
        );

        return;
    }


    loginPage.classList.add("hidden");

    mainWebsite.classList.remove("hidden");


    showSection("home");


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    showToast(
        "Welcome to AKASHGANGA."
    );
}



/* =====================================================
   NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const sideMenu =
    document.getElementById("sideMenu");

const closeMenu =
    document.getElementById("closeMenu");


menuButton.addEventListener(
    "click",
    function() {

        sideMenu.classList.add("open");

    }
);


closeMenu.addEventListener(
    "click",
    function() {

        sideMenu.classList.remove("open");

    }
);


function showSection(sectionName) {

    const sections =
        document.querySelectorAll(".page-section");


    sections.forEach(
        section => {

            section.classList.remove(
                "active-section"
            );

        }
    );


    const selected =
        document.getElementById(sectionName);


    if (selected) {

        selected.classList.add(
            "active-section"
        );

    }


    sideMenu.classList.remove("open");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =====================================================
   PLANET DATA
===================================================== */

const planetData = [

    {
        name: "KEPLER-22B",
        distance: "600 light years",
        star: "Kepler-22",
        orbit: "290 days",
        potential: "Potentially habitable"
    },

    {
        name: "KEPLER-452B",
        distance: "1,402 light years",
        star: "Kepler-452",
        orbit: "385 days",
        potential: "Possible habitable zone"
    },

    {
        name: "TRAPPIST-1E",
        distance: "40 light years",
        star: "TRAPPIST-1",
        orbit: "6.1 days",
        potential: "Potentially habitable"
    },

    {
        name: "KEPLER-16B",
        distance: "245 light years",
        star: "Kepler-16",
        orbit: "229 days",
        potential: "Gas giant"
    },

    {
        name: "KEPLER-186F",
        distance: "500 light years",
        star: "Kepler-186",
        orbit: "130 days",
        potential: "Earth-sized candidate"
    },

    {
        name: "PROXIMA CENTAURI B",
        distance: "4.24 light years",
        star: "Proxima Centauri",
        orbit: "11.2 days",
        potential: "Potentially habitable"
    },

    {
        name: "TOI-700D",
        distance: "101.4 light years",
        star: "TOI-700",
        orbit: "37.4 days",
        potential: "Potentially habitable"
    },

    {
        name: "55 CANCRI E",
        distance: "41 light years",
        star: "55 Cancri",
        orbit: "0.7 days",
        potential: "Rocky super-Earth"
    },

    {
        name: "WASP-12B",
        distance: "1,410 light years",
        star: "WASP-12",
        orbit: "1.1 days",
        potential: "Hot gas giant"
    },

    {
        name: "HD 209458 B",
        distance: "159 light years",
        star: "HD 209458",
        orbit: "3.5 days",
        potential: "Hot gas giant"
    }

];



/* =====================================================
   CREATE 10 PLANET CARDS
===================================================== */

const planetCarousel =
    document.getElementById(
        "planetCarousel"
    );


const planetStyles = [

    `
    radial-gradient(
        circle at 30% 30%,
        #ffe8b0,
        #c46b42 45%,
        #402018 80%
    )
    `,

    `
    radial-gradient(
        circle at 35% 30%,
        #aee7ff,
        #4873cf 45%,
        #111b5c 80%
    )
    `,

    `
    radial-gradient(
        circle at 35% 30%,
        #ffb1b1,
        #c72c5c 45%,
        #41122a 80%
    )
    `,

    `
    radial-gradient(
        circle at 30% 30%,
        #d8c4ff,
        #6747b8 45%,
        #201744 80%
    )
    `,

    `
    radial-gradient(
        circle at 30% 30%,
        #c8ffd8,
        #359b71 45%,
        #123b32 80%
    )
    `,

    `
    radial-gradient(
        circle at 30% 30%,
        #fff0bd,
        #b87c2e 45%,
        #40230c 80%
    )
    `,

    `
    radial-gradient(
        circle at 30% 30%,
        #d7c2ff,
        #8146b8 45%,
        #29133f 80%
    )
    `,

    `
    radial-gradient(
        circle at 30% 30%,
        #9eefff,
        #1c79ae 45%,
        #082943 80%
    )
    `,

    `
    radial-gradient(
        circle at 30% 30%,
        #ffd5c0,
        #c54d2e 45%,
        #421b13 80%
    )
    `,

    `
    radial-gradient(
        circle at 30% 30%,
        #d1e3ff,
        #4564a5 45%,
        #111d42 80%
    )
    `

];


planetData.forEach(
    (planet, index) => {

        const card =
            document.createElement("div");

        card.className =
            "planet-card";


        card.innerHTML = `

            <div
                class="planet-visual"
                style="
                    background:
                    ${planetStyles[index]};
                ">
            </div>

            <h3>
                ${planet.name}
            </h3>

            <p>
                ${planet.distance}
            </p>

            <button
                class="view-btn"
                onclick="openPlanet(${index})">

                VIEW PLANET

            </button>

        `;


        planetCarousel.appendChild(card);

    }
);



/* =====================================================
   CAROUSEL
===================================================== */

const planetPrev =
    document.getElementById(
        "planetPrev"
    );


const planetNext =
    document.getElementById(
        "planetNext"
    );


planetPrev.addEventListener(
    "click",
    function() {

        planetCarousel.scrollBy({

            left: -500,

            behavior: "smooth"

        });

    }
);


planetNext.addEventListener(
    "click",
    function() {

        planetCarousel.scrollBy({

            left: 500,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   PLANET MODAL
===================================================== */

const planetModal =
    document.getElementById(
        "planetModal"
    );


const selectedPlanet =
    document.getElementById(
        "selectedPlanet"
    );


let currentPlanet = 0;



function openPlanet(index) {

    currentPlanet = index;


    const planet =
        planetData[index];


    document.getElementById(
        "planetName"
    ).textContent =
        planet.name;


    document.getElementById(
        "planetDistance"
    ).textContent =
        planet.distance;


    document.getElementById(
        "planetStar"
    ).textContent =
        planet.star;


    document.getElementById(
        "planetOrbit"
    ).textContent =
        planet.orbit;


    document.getElementById(
        "planetPotential"
    ).textContent =
        planet.potential;


    selectedPlanet.style.background =
        planetStyles[index];


    planetModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}



function closePlanet() {

    planetModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";
}



planetModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            planetModal
        ) {

            closePlanet();

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closePlanet();

        }

    }
);



/* =====================================================
   DOWNLOAD PLANET INFORMATION
===================================================== */

function downloadPlanetInfo() {

    const planet =
        planetData[currentPlanet];


    const text =

`AKASHGANGA
EXOPLANET DATABASE
==============================

PLANET
${planet.name}

DISTANCE
${planet.distance}

STAR
${planet.star}

ORBIT
${planet.orbit}

POTENTIAL
${planet.potential}

==============================
Generated by AKASHGANGA
`;


    const blob =
        new Blob(
            [text],
            {
                type:
                    "text/plain"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;


    link.download =
        planet.name
            .replaceAll(" ", "_")
            + ".txt";


    document.body.appendChild(
        link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(url);


    showToast(
        "Planet information downloaded."
    );

}



/* =====================================================
   NEWSLETTER
===================================================== */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


newsletterForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        showToast(
            "You're connected to the cosmos."
        );


        newsletterForm.reset();

    }
);



/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function() {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}



/* =====================================================
   WEB CURSOR
===================================================== */

const canvas =
    document.getElementById(
        "webCanvas"
    );


const ctx =
    canvas.getContext("2d");


let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


window.addEventListener(
    "mousemove",
    function(event) {

        targetX =
            event.clientX;

        targetY =
            event.clientY;

    }
);



/* WEB STRUCTURE */

function drawWeb() {

    mouseX +=
        (targetX - mouseX) * .25;

    mouseY +=
        (targetY - mouseY) * .25;


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    const radius = 70;

    const lines = 10;


    ctx.save();


    ctx.strokeStyle =
        "rgba(255,255,255,.28)";

    ctx.lineWidth = .7;


    /*
       Radial web lines
    */

    for (
        let i = 0;
        i < lines;
        i++
    ) {

        const angle =
            (Math.PI * 2 / lines) * i;


        const x =
            mouseX +
            Math.cos(angle) * radius;


        const y =
            mouseY +
            Math.sin(angle) * radius;


        ctx.beginPath();

        ctx.moveTo(
            mouseX,
            mouseY
        );

        ctx.lineTo(
            x,
            y
        );

        ctx.stroke();

    }


    /*
       Circular web rings
    */

    for (
        let r = 15;
        r <= radius;
        r += 14
    ) {

        ctx.beginPath();

        ctx.arc(
            mouseX,
            mouseY,
            r,
            0,
            Math.PI * 2
        );

        ctx.stroke();

    }


    ctx.restore();


    requestAnimationFrame(
        drawWeb
    );

}


drawWeb();



/* =====================================================
   CLICK SPARK / WEB
===================================================== */

let sparks = [];


window.addEventListener(
    "click",
    function(event) {

        for (
            let i = 0;
            i < 20;
            i++
        ) {

            const angle =
                Math.random() *
                Math.PI * 2;


            const speed =
                Math.random() * 4 + 2;


            sparks.push({

                x:
                    event.clientX,

                y:
                    event.clientY,

                vx:
                    Math.cos(angle) * speed,

                vy:
                    Math.sin(angle) * speed,

                life: 1

            });

        }

    }
);



function animateSparks() {

    for (
        let i = sparks.length - 1;
        i >= 0;
        i--
    ) {

        const spark =
            sparks[i];


        spark.x +=
            spark.vx;

        spark.y +=
            spark.vy;


        spark.life -=
            .025;


        ctx.beginPath();


        ctx.arc(
            spark.x,
            spark.y,
            1.5,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            `rgba(255,255,255,${spark.life})`;


        ctx.fill();


        if (
            spark.life <= 0
        ) {

            sparks.splice(i, 1);

        }

    }


    requestAnimationFrame(
        animateSparks
    );

}


animateSparks();



/* =====================================================
   START HOME AFTER LOGIN
===================================================== */

window.addEventListener(
    "load",
    function() {

        /*
           Login remains first.
           Nothing else is opened automatically.
        */

        showSection("home");

    }
);