/* =====================================================
   MOHAMMED LEKRAA — INTERACTIVE ENGINE & ANIMATIONS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. LOADER CONTROLLER & BOOT SEQUENCE
    // ==========================================
    const loader = document.querySelector(".loader");
    const loaderPercent = document.querySelector(".loader-percent");
    const loaderProgress = document.querySelector(".loader-progress");

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 12) + 5;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            setTimeout(() => {
                if (loader) loader.classList.add("loaded");
            }, 300);
        }

        if (loaderPercent) loaderPercent.textContent = `${progress}%`;
        if (loaderProgress) loaderProgress.style.width = `${progress}%`;
    }, 45);


    // ==========================================
    // 2. SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
    // ==========================================
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((el) => revealObserver.observe(el));


    // ==========================================
    // 3. HARDWARE CARD 3D TILT EFFECT
    // ==========================================
    const hardwareFrame = document.querySelector(".hardware-frame");

    if (hardwareFrame) {
        hardwareFrame.addEventListener("mousemove", (e) => {
            const rect = hardwareFrame.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            hardwareFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        hardwareFrame.addEventListener("mouseleave", () => {
            hardwareFrame.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        });
    }


    // ==========================================
    // 4. MOUSE GLOW FOLLOWER ON BUTTONS
    // ==========================================
    const primaryButton = document.querySelector(".primary-button");

    if (primaryButton) {
        primaryButton.addEventListener("mousemove", (e) => {
            const rect = primaryButton.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            primaryButton.style.setProperty("--x", `${x}px`);
            primaryButton.style.setProperty("--y", `${y}px`);
        });
    }


    // ==========================================
    // 5. ACTIVE NAV HIGHLIGHT ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar nav a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

});            setTimeout(() => {

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
