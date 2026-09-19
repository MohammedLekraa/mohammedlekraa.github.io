/* =====================================================

   MOHAMMED LEKRAA — INTERACTIONS
   MOHAMMED LEKRAA — INTERACTIVE ENGINE & ANIMATIONS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

/* =========================
   LOADER
========================= */
    // ==========================================
    // 1. LOADER CONTROLLER & BOOT SEQUENCE
    // ==========================================
    const loader = document.querySelector(".loader");
    const loaderPercent = document.querySelector(".loader-percent");
    const loaderProgress = document.querySelector(".loader-progress");

window.addEventListener("load", () => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 12) + 5;

    const loader =
        document.querySelector(".loader");
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

    const progress =
        document.querySelector(".loader-progress");
            setTimeout(() => {
                if (loader) loader.classList.add("loaded");
            }, 300);
        }

    const percent =
        document.querySelector(".loader-percent");
        if (loaderPercent) loaderPercent.textContent = `${progress}%`;
        if (loaderProgress) loaderProgress.style.width = `${progress}%`;
    }, 45);


    let value = 0;
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

    const interval = setInterval(() => {
    revealElements.forEach((el) => revealObserver.observe(el));

        value += Math.floor(Math.random() * 8) + 4;

    // ==========================================
    // 3. HARDWARE CARD 3D TILT EFFECT
    // ==========================================
    const hardwareFrame = document.querySelector(".hardware-frame");

        if (value >= 100) {
    if (hardwareFrame) {
        hardwareFrame.addEventListener("mousemove", (e) => {
            const rect = hardwareFrame.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            value = 100;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            clearInterval(interval);
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            hardwareFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

            setTimeout(() => {
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

