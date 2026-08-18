/* =========================================================
   LOGIN
========================================================= */

const loginPage =
    document.getElementById("loginPage");

const mainWebsite =
    document.getElementById("mainWebsite");

const loginForm =
    document.getElementById("loginForm");

const loginButton =
    document.getElementById("loginButton");


function openWebsite() {

    loginPage.classList.add("hidden");

    mainWebsite.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();


    if (!email || !password) {

        alert("Please enter your email and password.");

        return;
    }


    openWebsite();

});


loginButton.addEventListener("click", function() {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();


    if (!email || !password) {

        alert("Please enter your email and password.");

        return;
    }


    openWebsite();

});



/* =========================================================
   HAMBURGER NAVIGATION
========================================================= */

const hamburger =
    document.getElementById("hamburger");

const sidebar =
    document.getElementById("sidebar");


hamburger.addEventListener("click", function() {

    hamburger.classList.toggle("active");

    sidebar.classList.toggle("open");

});


document
    .querySelectorAll(".sidebar a")
    .forEach(function(link) {

        link.addEventListener("click", function() {

            hamburger.classList.remove("active");

            sidebar.classList.remove("open");

        });

    });



/* =========================================================
   EXOPLANET DATA
========================================================= */

const planets = [

    {
        name: "KEPLER-22B",
        distance: "600 light years",
        star: "Kepler-22",
        mars: "No",
        orbit: "290 days",
        potential: "Habitable Zone"
    },

    {
        name: "KEPLER-452B",
        distance: "1,402 light years",
        star: "Kepler-452",
        mars: "No",
        orbit: "385 days",
        potential: "Possible"
    },

    {
        name: "TRAPPIST-1E",
        distance: "40 light years",
        star: "TRAPPIST-1",
        mars: "No",
        orbit: "6.1 days",
        potential: "High"
    },

    {
        name: "TRAPPIST-1F",
        distance: "40 light years",
        star: "TRAPPIST-1",
        mars: "No",
        orbit: "9.2 days",
        potential: "Possible"
    },

    {
        name: "TRAPPIST-1G",
        distance: "40 light years",
        star: "TRAPPIST-1",
        mars: "No",
        orbit: "12.4 days",
        potential: "Possible"
    },

    {
        name: "PROXIMA B",
        distance: "4.24 light years",
        star: "Proxima Centauri",
        mars: "No",
        orbit: "11.2 days",
        potential: "Possible"
    },

    {
        name: "TOI-700D",
        distance: "101.4 light years",
        star: "TOI-700",
        mars: "No",
        orbit: "37.4 days",
        potential: "Habitable Zone"
    },

    {
        name: "K2-18B",
        distance: "124 light years",
        star: "K2-18",
        mars: "No",
        orbit: "33 days",
        potential: "Interesting"
    },

    {
        name: "LHS 1140B",
        distance: "48 light years",
        star: "LHS 1140",
        mars: "No",
        orbit: "24.7 days",
        potential: "Habitable Zone"
    },

    {
        name: "GLIESE 667CC",
        distance: "23.6 light years",
        star: "Gliese 667C",
        mars: "No",
        orbit: "28 days",
        potential: "Possible"
    }

];


let currentPlanet = 0;


/* =========================================================
   CREATE PLANET CARDS
========================================================= */

const planetTrack =
    document.getElementById("planetTrack");


function createPlanetCards() {

    planetTrack.innerHTML = "";


    planets.forEach(function(planet, index) {

        const card =
            document.createElement("div");

        card.className =
            "planet-card";


        if (index === 0) {
            card.classList.add("active");
        }


        card.innerHTML = `

            <div class="planet-visual">

                <div class="planet-sphere"></div>

            </div>


            <div class="planet-info-card">

                <h3>
                    ${planet.name}
                </h3>

                <p>
                    ${planet.distance}
                </p>

                <p>
                    Star: ${planet.star}
                </p>


                <div class="planet-actions">

                    <button
                        class="view-button"
                        onclick="openPlanet(${index})">

                        VIEW PLANET

                    </button>


                    <button
                        class="info-button"
                        onclick="openPlanet(${index})">

                        i

                    </button>

                </div>

            </div>

        `;


        planetTrack.appendChild(card);

    });

}


createPlanetCards();



/* =========================================================
   SHOW PLANET
========================================================= */

function showPlanet(index) {

    const cards =
        document.querySelectorAll(".planet-card");


    cards.forEach(function(card) {

        card.classList.remove("active");

    });


    cards[index].classList.add("active");

}


/* =========================================================
   NEXT PLANET
========================================================= */

document
    .getElementById("nextPlanet")
    .addEventListener("click", function() {

        currentPlanet++;

        if (currentPlanet >= planets.length) {

            currentPlanet = 0;

        }

        showPlanet(currentPlanet);

    });



/* =========================================================
   PREVIOUS PLANET
========================================================= */

document
    .getElementById("prevPlanet")
    .addEventListener("click", function() {

        currentPlanet--;

        if (currentPlanet < 0) {

            currentPlanet = planets.length - 1;

        }

        showPlanet(currentPlanet);

    });



/* =========================================================
   PLANET MODAL
========================================================= */

const planetModal =
    document.getElementById("planetModal");


const closeModal =
    document.getElementById("closeModal");


let selectedPlanet = null;


function openPlanet(index) {

    selectedPlanet =
        planets[index];


    document.getElementById("planetName")
        .textContent =
        selectedPlanet.name;


    document.getElementById("planetDistance")
        .textContent =
        selectedPlanet.distance;


    document.getElementById("planetStar")
        .textContent =
        selectedPlanet.star;


    document.getElementById("planetMars")
        .textContent =
        selectedPlanet.mars;


    document.getElementById("planetOrbit")
        .textContent =
        selectedPlanet.orbit;


    document.getElementById("planetPotential")
        .textContent =
        selectedPlanet.potential;


    planetModal.classList.add("show");

}


closeModal.addEventListener("click", function() {

    planetModal.classList.remove("show");

});


planetModal.addEventListener("click", function(event) {

    if (event.target === planetModal) {

        planetModal.classList.remove("show");

    }

});


/* ESC closes modal */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        planetModal.classList.remove("show");

    }

});



/* =========================================================
   DOWNLOAD PLANET INFORMATION
========================================================= */

document
    .getElementById("downloadPlanet")
    .addEventListener("click", function() {

        if (!selectedPlanet) {
            return;
        }


        const text =

`AKASHGANGA — EXOPLANET INFORMATION

Planet: ${selectedPlanet.name}

Distance:
${selectedPlanet.distance}

Star:
${selectedPlanet.star}

Mars:
${selectedPlanet.mars}

Orbit:
${selectedPlanet.orbit}

Potential Orbit:
${selectedPlanet.potential}
`;


        const blob =
            new Blob(
                [text],
                {
                    type: "text/plain"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            `${selectedPlanet.name}.txt`;


        document.body.appendChild(link);

        link.click();

        link.remove();


        URL.revokeObjectURL(url);

    });



/* =========================================================
   EMAIL NEWSLETTER
========================================================= */

const emailForm =
    document.getElementById("emailForm");


emailForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("emailInput")
        .value
        .trim();


    if (!email) {

        alert("Please enter your email address.");

        return;
    }


    alert(
        "Thank you! You are now connected with AKASHGANGA."
    );


    emailForm.reset();

});



/* =========================================================
   MOUSE WEB EFFECT
========================================================= */

const canvas =
    document.getElementById("webCanvas");


const ctx =
    canvas.getContext("2d");


let mouse = {
    x: 0,
    y: 0
};


let points = [];


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

        mouse.x =
            event.clientX;

        mouse.y =
            event.clientY;


        points.push({

            x: mouse.x,

            y: mouse.y,

            life: 1

        });


        if (points.length > 35) {

            points.shift();

        }

    }
);



/* =========================================================
   CLICK WEB SPARK
========================================================= */

window.addEventListener(
    "click",
    function(event) {

        for (let i = 0; i < 12; i++) {

            points.push({

                x:
                    event.clientX +
                    (Math.random() - .5) * 80,

                y:
                    event.clientY +
                    (Math.random() - .5) * 80,

                life: 1.5

            });

        }

    }
);



/* =========================================================
   DRAW WEB
========================================================= */

function drawWeb() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    if (points.length > 1) {

        ctx.beginPath();

        ctx.moveTo(
            points[0].x,
            points[0].y
        );


        for (let i = 1; i < points.length; i++) {

            ctx.lineTo(
                points[i].x,
                points[i].y
            );

        }


        ctx.strokeStyle =
            "rgba(255,255,255,.45)";

        ctx.lineWidth = 1;

        ctx.stroke();

    }


    points.forEach(function(point) {

        point.life -= .025;

    });


    points =
        points.filter(
            point => point.life > 0
        );


    requestAnimationFrame(drawWeb);

}


drawWeb();



/* =========================================================
   SECTION REVEAL ANIMATION
========================================================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: .15
        }
    );


sections.forEach(function(section) {

    observer.observe(section);

});