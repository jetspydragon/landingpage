// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => { navLinks.classList.toggle('show'); });

// SCROLL SUAVE + ACTIVE LINK
const sections = document.querySelectorAll('section');
const navAnchors = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
});

navAnchors.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});

navAnchors.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
    });
});
