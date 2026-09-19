/* =====================================================
   MOHAMMED LEKRAA — INTERACTIONS
===================================================== */


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".loader");

    const progress =
        document.querySelector(".loader-progress");

    const percent =
        document.querySelector(".loader-percent");


    let value = 0;


    const interval = setInterval(() => {

        value += Math.floor(Math.random() * 8) + 4;


        if (value >= 100) {

            value = 100;

            clearInterval(interval);


            setTimeout(() => {

                loader.classList.add("loaded");

            }, 350);

        }


        progress.style.width =
            `${value}%`;

        percent.textContent =
            `${value}%`;

    }, 60);

});



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    observer.observe(element);

});



/* =========================
   MAGNETIC BUTTON
========================= */

const magneticButtons =
    document.querySelectorAll(".magnetic");


magneticButtons.forEach((button) => {


    button.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(
                    ${x * 0.12}px,
                    ${y * 0.12}px
                )`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0, 0)";

        }
    );

});



/* =========================
   HARDWARE PARALLAX
========================= */

const hardware =
    document.querySelector(".hardware-frame");


document.addEventListener(
    "mousemove",
    (event) => {

        if (!hardware) return;


        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 2;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 2;


        hardware.style.transform =
            `perspective(900px)
             rotateY(${x * 2}deg)
             rotateX(${y * -2}deg)`;

    }
);


if (hardware) {

    hardware.addEventListener(
        "mouseleave",
        () => {

            hardware.style.transform =
                "perspective(900px) rotateY(0deg) rotateX(0deg)";

        }
    );

}



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach((link) => {

            link.style.color = "";


            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.style.color =
                    "#1557ff";

            }

        });

    }
);
