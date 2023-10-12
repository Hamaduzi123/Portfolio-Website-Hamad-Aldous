const toggleButton = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
const navLinks = navbarLinks.querySelectorAll('a');

// Expands the menu when burger menu is clicked
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
});

// Function to close the burger menu when a link is clicked
function closeMenu() {
    navbarLinks.classList.remove('active');
    toggleButton.classList.remove('active');
}

// Add an event listener to each link in the menu to close the menu when clicked (Applies the function)
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Goes to section location while accounting for fixed navbar
document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
            const targetSection = document.getElementById(targetId);
            const navbarHeight = document.querySelector('nav').offsetHeight; // Get navbar height

            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight + 10, // Add 1 pixel to ensure the section is fully visible
                behavior: 'smooth',
            });
        });
    });
});

// Function to add or remove the "active" class based on the user's scroll position
function setActiveNavItem() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        const rect = section.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) { // Adjust 100 to your desired offset
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Listen for scroll events and call setActiveNavItem()
window.addEventListener('scroll', setActiveNavItem);

// Call setActiveNavItem() on page load
window.addEventListener('load', setActiveNavItem);

