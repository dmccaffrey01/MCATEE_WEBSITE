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

const googleMapsBtn = document.querySelector(".google-maps-btn");

googleMapsBtn.addEventListener("click", () => {
    window.open("https://www.google.com/maps/dir//Taylor+Properties+175+Admiral+Cochrane+Dr+suite+111-112+Annapolis,+MD+21401+United+States/@38.9746201,-76.5498768,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7f6c5570a20c3:0x6365e0bf6e65a1d5!2m2!1d-76.5498768!2d38.9746201", "_blank");
})