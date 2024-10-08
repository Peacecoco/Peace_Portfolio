let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

// Toggle the menu icon and navbar visibility
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navBar.classList.toggle('active');
}

// Scroll section logic
let sections = document.querySelectorAll('section'); // Corrected variable name
let navLinks = document.querySelectorAll('header nav a');

// Close the navbar when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-x');
        navBar.classList.remove('active');
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove menu toggle and active navbar on scroll
    menuIcon.classList.remove('fa-x');
    navBar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// SCROLL REVEAL!!!!
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact-form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img, .skill-container, .services-container, .heading1', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .services-container, .about-content', '.skill-container',  {origin: 'right'});


// TYPED JS
const typed = new Typed('.multiple-text', { // Add comma after '.multiple-text'
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
