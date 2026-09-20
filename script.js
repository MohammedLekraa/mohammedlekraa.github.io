/* =====================================================
   MOHAMMED LEKRAA — INTERACTIVE ENGINE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMACIÓ EN FER SCROLL (REVEAL)
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

    // 2. EFECTE TILT EN LA IMATGE PRINCIPAL DE HEROT
    const imageCard = document.querySelector('.image-card');

    if (imageCard) {
        imageCard.addEventListener('mousemove', (e) => {
            const rect = imageCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            imageCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            imageCard.style.transition = 'transform 0.1s ease-out';
        });

        imageCard.addEventListener('mouseleave', () => {
            imageCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            imageCard.style.transition = 'transform 0.5s ease';
        });
    }
});
