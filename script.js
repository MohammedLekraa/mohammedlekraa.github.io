/* =====================================================
   RESET
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #f4f2ed;
    color: #171717;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}

img {
    width: 100%;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
}


/* =====================================================
   VARIABLES
===================================================== */

:root {

    --background: #f4f2ed;
    --black: #171717;
    --grey: #77746d;
    --light-grey: #d8d5ce;
    --white: #ffffff;

    --border: 1px solid rgba(23, 23, 23, 0.18);

    --max-width: 1440px;

}


/* =====================================================
   NAVIGATION
===================================================== */

.navbar {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    padding: 24px 42px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 100;

    mix-blend-mode: difference;

    color: white;

}

.logo {

    font-size: 24px;
    font-weight: 800;
    letter-spacing: -1px;

}

.logo span {
    color: #aaa;
}

.navbar nav {

    display: flex;
    gap: 36px;

}

.navbar nav a,
.nav-contact {

    font-size: 11px;
    letter-spacing: 1.5px;
    font-weight: 600;

}

.navbar nav a {

    opacity: 0.65;

    transition: opacity 0.3s ease;

}

.navbar nav a:hover {

    opacity: 1;

}

.nav-contact {

    border-bottom: 1px solid currentColor;

    padding-bottom: 4px;

}


/* =====================================================
   GENERAL
===================================================== */

.section {

    max-width: var(--max-width);

    margin: auto;

    padding: 160px 42px;

}

.section-label {

    display: flex;
    gap: 18px;
    align-items: center;

    font-size: 10px;
    letter-spacing: 2px;
    font-weight: 700;

}

.section-label span {

    color: var(--grey);

}


/* =====================================================
   HERO
===================================================== */

.hero {

    min-height: 100vh;

    max-width: var(--max-width);

    margin: auto;

    padding: 150px 42px 50px;

    position: relative;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

}

.hero-grid {

    display: grid;

    grid-template-columns: 1.15fr 0.85fr;

    gap: 70px;

    align-items: center;

    flex: 1;

}

.hero-content {

    padding-top: 40px;

}

.hero h1 {

    font-size: clamp(75px, 10vw, 155px);

    line-height: 0.82;

    letter-spacing: -8px;

    font-weight: 800;

    margin-top: 50px;

}

.hero h1 span {

    color: transparent;

    -webkit-text-stroke: 2px var(--black);

}

.hero-bottom {

    margin-top: 70px;

    display: flex;

    justify-content: space-between;

    align-items: flex-end;

    gap: 50px;

}

.hero-bottom p {

    max-width: 300px;

    font-size: 17px;

    line-height: 1.45;

}

.hero-buttons {

    display: flex;

    gap: 10px;

}

.button {

    padding: 17px 21px;

    font-size: 10px;

    letter-spacing: 1.5px;

    font-weight: 700;

    display: flex;

    gap: 25px;

    align-items: center;

    transition:
        transform 0.3s ease,
        background 0.3s ease,
        color 0.3s ease;

}

.button:hover {

    transform: translateY(-4px);

}

.button-dark {

    background: var(--black);
    color: white;

}

.button-light {

    border: var(--border);

}

.button-light:hover {

    background: var(--black);
    color: white;

}

.hero-image {

    position: relative;

}

.hero-image img {

    aspect-ratio: 0.85;

    object-fit: cover;

}

.image-caption {

    display: flex;

    justify-content: space-between;

    margin-top: 12px;

    font-size: 9px;

    letter-spacing: 1.5px;

    color: var(--grey);

}

.scroll-indicator {

    font-size: 9px;
    letter-spacing: 2px;

    display: flex;
    gap: 20px;

    color: var(--grey);

}


/* =====================================================
   ABOUT
===================================================== */

.about {

    border-top: var(--border);

}

.about-layout {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 120px;

    margin-top: 100px;

}

.about-title h2 {

    font-size: clamp(60px, 8vw, 120px);

    line-height: 0.85;

    letter-spacing: -5px;

}

.about-title h2 span {

    color: transparent;

    -webkit-text-stroke: 1.5px var(--black);

}

.about-text {

    max-width: 600px;

}

.large-text {

    font-size: 27px;

    line-height: 1.25;

    margin-bottom: 40px;

}

.about-text > p:not(.large-text) {

    font-size: 15px;

    line-height: 1.7;

    color: #555;

    margin-bottom: 22px;

}


/* SYSTEM FLOW */

.system-flow {

    margin-top: 70px;

    display: flex;

    align-items: center;

    flex-wrap: wrap;

    gap: 12px;

}

.system-flow div:not(.flow-line) {

    font-size: 9px;

    letter-spacing: 1px;

    font-weight: 700;

}

.system-flow span {

    display: block;

    color: var(--grey);

    margin-bottom: 5px;

}

.flow-line {

    height: 1px;

    width: 25px;

    background: var(--light-grey);

}


/* =====================================================
   PROJECTS
===================================================== */

.projects {

    background: #171717;

    color: white;

    max-width: none;

    padding-left: max(42px, calc((100vw - 1356px) / 2));

    padding-right: max(42px, calc((100vw - 1356px) / 2));

}

.projects .section-label {

    color: white;

}

.projects .section-label span {

    color: #777;

}

.section-heading {

    display: flex;

    justify-content: space-between;

    align-items: flex-end;

    margin-bottom: 90px;

}

.section-heading p {

    max-width: 330px;

    color: #aaa;

    font-size: 14px;

    line-height: 1.5;

}


/* PROJECT GRID */

.projects-grid {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px 30px;

}

.project-card {

    min-width: 0;

}

.project-large {

    grid-column: span 2;

    display: grid;

    grid-template-columns: 1.3fr 0.7fr;

    gap: 35px;

}

.project-wide {

    grid-column: span 2;

    display: grid;

    grid-template-columns: 1.3fr 0.7fr;

    gap: 35px;

}


/* PROJECT IMAGE */

.project-image {

    position: relative;

    overflow: hidden;

    background: #292929;

}

.project-image img {

    height: 100%;

    aspect-ratio: 1.5;

    object-fit: cover;

    transition: transform 0.8s cubic-bezier(.2,.7,.2,1);

}

.project-card:hover .project-image img {

    transform: scale(1.04);

}

.project-number {

    position: absolute;

    top: 20px;
    left: 20px;

    font-size: 10px;

    letter-spacing: 2px;

    background: rgba(0,0,0,0.7);

    padding: 8px 10px;

}

.placeholder {

    min-height: 350px;

    display: flex;

    align-items: center;
    justify-content: center;

}

.placeholder-text {

    font-size: 10px;
    letter-spacing: 3px;

    line-height: 1.7;

    text-align: center;

    color: #777;

}


/* PROJECT INFO */

.project-info {

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    min-height: 100%;

}

.project-info h3 {

    font-size: clamp(28px, 3vw, 48px);

    line-height: 0.95;

    letter-spacing: -1px;

}

.project-info p {

    margin-top: 25px;

    color: #999;

    font-size: 13px;

    line-height: 1.6;

    max-width: 370px;

}

.project-meta {

    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin: 35px 0;

}

.project-meta span {

    border: 1px solid #444;

    padding: 7px 9px;

    font-size: 8px;

    letter-spacing: 1px;

}

.project-link {

    border-top: 1px solid #444;

    padding-top: 15px;

    font-size: 9px;

    letter-spacing: 1.5px;

    display: flex;

    justify-content: space-between;

    transition: padding 0.3s ease;

}

.project-link:hover {

    padding-left: 8px;
    padding-right: 8px;

}


/* =====================================================
   TECHNICAL FOCUS
===================================================== */

.focus {

    border-bottom: var(--border);

}

.focus-header {

    margin-top: 100px;

    display: flex;

    justify-content: space-between;

    align-items: flex-end;

    gap: 60px;

}

.focus-header h2 {

    font-size: clamp(55px, 8vw, 120px);

    line-height: 0.82;

    letter-spacing: -5px;

}

.focus-header h2 span {

    color: transparent;

    -webkit-text-stroke: 1.5px var(--black);

}

.focus-header p {

    max-width: 320px;

    font-size: 14px;

    line-height: 1.6;

    color: var(--grey);

}

.focus-grid {

    margin-top: 100px;

    border-top: var(--border);

}

.focus-item {

    padding: 45px 0;

    border-bottom: var(--border);

    display: grid;

    grid-template-columns: 80px 1fr 1.5fr;

    align-items: center;

    gap: 30px;

}

.focus-number {

    font-size: 10px;

    color: var(--grey);

}

.focus-item h3 {

    font-size: 22px;

    letter-spacing: -0.5px;

}

.tags {

    display: flex;

    flex-wrap: wrap;

    gap: 8px;

}

.tags span {

    padding: 9px 11px;

    border: var(--border);

    font-size: 9px;

    letter-spacing: 1px;

}


/* =====================================================
   CONTACT
===================================================== */

.contact {

    min-height: 85vh;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

}

.contact-content {

    margin-top: 120px;

}

.contact-content h2 {

    font-size: clamp(65px, 10vw, 150px);

    line-height: 0.8;

    letter-spacing: -7px;

}

.contact-content h2 span {

    color: transparent;

    -webkit-text-stroke: 2px var(--black);

}

.contact-content p {

    margin-top: 50px;

    font-size: 16px;

    color: var(--grey);

}

.contact-links {

    margin-top: 60px;

    display: flex;

    gap: 35px;

}

.contact-links a {

    font-size: 10px;

    letter-spacing: 2px;

    font-weight: 700;

    border-bottom: 1px solid var(--black);

    padding-bottom: 7px;

}


/* =====================================================
   FOOTER
===================================================== */

footer {

    border-top: var(--border);

    padding: 25px 42px;

    display: flex;

    justify-content: space-between;

    font-size: 8px;

    letter-spacing: 1.5px;

    color: var(--grey);

}


/* =====================================================
   SCROLL ANIMATIONS
===================================================== */

.reveal {

    opacity: 0;

    transform: translateY(45px);

    transition:
        opacity 0.9s cubic-bezier(.2,.7,.2,1),
        transform 0.9s cubic-bezier(.2,.7,.2,1);

}

.reveal.visible {

    opacity: 1;

    transform: translateY(0);

}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 900px) {

    .navbar {

        padding: 20px;

    }

    .navbar nav {

        display: none;

    }

    .nav-contact {

        font-size: 9px;

    }

    .hero,
    .section {

        padding-left: 20px;
        padding-right: 20px;

    }

    .hero {

        padding-top: 120px;

    }

    .hero-grid {

        grid-template-columns: 1fr;

        gap: 60px;

    }

    .hero h1 {

        font-size: clamp(60px, 16vw, 110px);

        letter-spacing: -5px;

    }

    .hero-bottom {

        flex-direction: column;

        align-items: flex-start;

        margin-top: 50px;

    }

    .hero-image {

        max-width: 600px;

    }

    .about-layout {

        grid-template-columns: 1fr;

        gap: 60px;

    }

    .projects-grid {

        grid-template-columns: 1fr;

    }

    .project-large,
    .project-wide {

        grid-column: auto;

        grid-template-columns: 1fr;

    }

    .section-heading,
    .focus-header {

        flex-direction: column;

        align-items: flex-start;

    }

    .focus-item {

        grid-template-columns: 40px 1fr;

    }

    .tags {

        grid-column: 2;

    }

    .contact-content h2 {

        letter-spacing: -4px;

    }

    .contact-links {

        flex-direction: column;

        gap: 20px;

    }

    footer {

        padding: 20px;

        flex-direction: column;

        gap: 10px;

    }

}

@media (max-width: 500px) {

    .hero-buttons {

        flex-direction: column;

        width: 100%;

    }

    .button {

        justify-content: space-between;

    }

    .system-flow {

        gap: 10px;

    }

}
