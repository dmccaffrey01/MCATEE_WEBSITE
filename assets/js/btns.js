const contactBtns = document.querySelectorAll(".contact-btn");

for (let i = 0; i < contactBtns.length; i++) {
    contactBtns[i].addEventListener("click", () => {
        window.location.href = "contact.html";
    })
}

const aboutBtns = document.querySelectorAll(".about-btn");

for (let i = 0; i < aboutBtns.length; i++) {
    aboutBtns[i].addEventListener("click", () => {
        window.location.href = "about.html";
    })
}

