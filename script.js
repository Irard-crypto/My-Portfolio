// SMOOTH SCROLL
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))?.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// STICKY NAVBAR
window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
    .classList.toggle("sticky", window.scrollY > 50);
});

// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// BUTTON CLICK
document.querySelector(".hire-btn").addEventListener("click", () => {
    alert("Thanks for contacting!");
});

// SCROLL ANIMATION
const items = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    items.forEach(el => {
        let pos = el.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});