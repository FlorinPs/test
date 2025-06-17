
document.addEventListener("DOMContentLoaded", function () {
    const mobileNav = document.getElementById("mobile-nav");
    const footer = document.getElementById("site-footer");

    if (!mobileNav || !footer) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Footer este vizibil => ascundem meniul
                    mobileNav.classList.add("hide-mobile-nav");
                } else {
                    // Footer nu este vizibil => arătăm meniul
                    mobileNav.classList.remove("hide-mobile-nav");
                }
            });
        },
        {
            root: null, // viewport
            threshold: 0.2 // declanșează când 10% din footer intră în vizor
        }
    );

    observer.observe(footer);
});



const langToggleBtn = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("siteLang") || "ro";

function updateLanguage(lang) {
    document.querySelectorAll(".lang").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(`.lang-${lang}`).forEach(el => el.classList.add("active"));
    localStorage.setItem("siteLang", lang);
}

updateLanguage(currentLang);

langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "ro" ? "en" : "ro";
    updateLanguage(currentLang);
});




const lenis = new Lenis({
    duration: 2.5,
    easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
