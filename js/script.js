// ===============================
// Portfolio Script
// Author: Aditya Raj Portfolio
// ===============================

// ---------- Typed.js ----------
const typingElement = document.querySelector("#typing");

if (typingElement && typeof Typed !== "undefined") {
    new Typed("#typing", {
        strings: [
            ".NET Developer",
            "AI Developer",
            "Associate Software Engineer",
            "Problem Solver"
        ],
        typeSpeed: 70,
        backSpeed: 45,
        backDelay: 1500,
        loop: true
    });
}

// ---------- Scroll Progress Bar ----------
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (progressBar) {

        const scrollTop =
            document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / height) * 100;

        progressBar.style.width = progress + "%";
    }

});

// ---------- Back To Top Button ----------
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ---------- Navbar Shadow ----------
const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.boxShadow = "0 10px 25px rgba(0,245,255,.15)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// ---------- ScrollReveal ----------
if (typeof ScrollReveal !== "undefined") {

    ScrollReveal().reveal(

        ".hero, .about, .skills, .experience, .projects, .certifications, .contact",

        {

            distance: "60px",

            duration: 1200,

            easing: "ease",

            origin: "bottom",

            interval: 150,

            reset: false

        }

    );

}

// ---------- AOS ----------
if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,

        once: true

    });

}

// ---------- Active Navigation ----------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// EmailJS Contact Form
// ===============================

emailjs.init("hHkEAWCtl15xv1R5f");

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = this.querySelector("button");

        button.innerHTML = "Sending...";
        button.disabled = true;

        emailjs.sendForm(
            "service_4ddjvpl",
            "template_cb3l7aw",
            this
        )

        .then(() => {

            alert("✅ Message sent successfully!");

            this.reset();

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message.");

        })

        .finally(() => {

            button.innerHTML = "Send Message";
            button.disabled = false;

        });

    });

}