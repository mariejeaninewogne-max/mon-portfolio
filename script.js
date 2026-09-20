const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", function () {
 menu.classList.toggle("active");
 });

 //accueil
 const navLinks = document.querySelectorAll('.menu a[href^="#"]');
 navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Ferme le menu mobile après le clic
        if (menu.classList.contains('is-active')) {
            menu.classList.remove('is-active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});
const sections = document.querySelectorAll('main section');
const menuItems = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
});