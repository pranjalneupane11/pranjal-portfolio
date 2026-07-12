// Select navigation elements
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", function () {
    const menuIsOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );
});

// Close mobile menu after selecting a navigation link
const navigationItems = document.querySelectorAll(
    "#nav-links a"
);

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    });
});

// Automatically display the current year in the footer
const currentYear = document.getElementById(
    "current-year"
);

currentYear.textContent = new Date().getFullYear();
