/**
 * Open and close hamburger menu
 */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.getElementsByTagName("header")[0];

const navDropdownContainer = document.querySelector(".nav-dropdown-container");
const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownLink = document.querySelector(".nav-dropdown-link");
const navDropdownIcon = document.querySelector(".nav-dropdown-icon");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    if (n.classList.contains("nav-dropdown-link")) {
        return;
    }
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
}));

navDropdownLink.addEventListener("click", (event) => {
    event.preventDefault();

    navDropdownContainer.classList.toggle("active");
    
    if (navDropdownContainer.classList.contains("active")) {
        const containerHeight = navDropdown.getBoundingClientRect().height;
        navDropdownContainer.style.height = containerHeight + "px";
        navDropdownIcon.style.transform = "rotate(-180deg)"
    } else {
        navDropdownContainer.style.height = "0";
        navDropdownIcon.style.transform = "rotate(0)"
    }
  });
