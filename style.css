document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });



    /* =====================================================
       STAGGERED ANIMATION
       Elements inside the same section appear one after another
    ===================================================== */

    const sections = document.querySelectorAll(
        ".about, .projects, .focus, .contact"
    );

    sections.forEach((section) => {

        const elements = section.querySelectorAll(".reveal");

        elements.forEach((element, index) => {

            element.style.transitionDelay = `${index * 80}ms`;

        });

    });



    /* =====================================================
       IMAGE PARALLAX
       Images move very slightly while scrolling
    ===================================================== */

    const parallaxImages = document.querySelectorAll(
        ".hero-image img, .project-image img"
    );


    function updateParallax() {

        const scrollPosition = window.scrollY;

        parallaxImages.forEach((image) => {

            const rect = image.getBoundingClientRect();

            const windowHeight = window.innerHeight;

            if (
                rect.bottom > 0 &&
                rect.top < windowHeight
            ) {

                const center =
                    rect.top + rect.height / 2;

                const distance =
                    center - windowHeight / 2;

                const movement =
                    distance * -0.035;

                image.style.transform =
                    `translateY(${movement}px) scale(1.04)`;

            }

        });

    }


    let ticking = false;

    window.addEventListener("scroll", () => {

        if (!ticking) {

            window.requestAnimationFrame(() => {

                updateParallax();

                ticking = false;

            });

            ticking = true;

        }

    });



    /* =====================================================
       PROJECT IMAGE HOVER
    ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach((card) => {

        const image =
            card.querySelector(".project-image img");

        if (!image) return;


        card.addEventListener("mouseenter", () => {

            image.style.transform =
                "scale(1.07)";

        });


        card.addEventListener("mouseleave", () => {

            image.style.transform =
                "scale(1.02)";

        });

    });



    /* =====================================================
       BUTTON MAGNETIC-LIKE MOVEMENT
       Very subtle — not an exaggerated effect
    ===================================================== */

    const buttons =
        document.querySelectorAll(".button");


    buttons.forEach((button) => {

        button.addEventListener("mousemove", (event) => {

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const moveX =
                (x - rect.width / 2) * 0.08;

            const moveY =
                (y - rect.height / 2) * 0.08;


            button.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        });


        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "translate(0, 0)";

        });

    });



    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });



    /* =====================================================
       INITIAL HERO ANIMATION
    ===================================================== */

    setTimeout(() => {

        document.querySelectorAll(
            ".hero .reveal"
        ).forEach((element, index) => {

            setTimeout(() => {

                element.classList.add("visible");

            }, index * 150);

        });

    }, 150);

});
