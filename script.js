window.addEventListener("load", () => {
    // 1. Control del Loader
    const loader = document.querySelector(".loader");
    const loaderPercent = document.querySelector(".loader-percent");
    const loaderProgress = document.querySelector(".loader-progress");

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 10;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            setTimeout(() => {
                if (loader) {
                    loader.classList.add("loaded");
                }
            }, 200);
        }

        if (loaderPercent) loaderPercent.textContent = `${progress}%`;
        if (loaderProgress) loaderProgress.style.width = `${progress}%`;
    }, 30);

    // 2. Animaciones Scroll Reveal
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach((el) => revealObserver.observe(el));
});
