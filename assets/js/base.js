const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");

navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navBtn.classList.toggle("active");
});

document.getElementById("currentYear").innerHTML = new Date().getFullYear();