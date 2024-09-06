document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll for Navbar Links
    const navbarLinks = document.querySelectorAll('.navbar a[href^="#"]');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjusting for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Section Reveal on Scroll
    const sections = document.querySelectorAll('.section');

    const revealSection = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Parallax Effect for Backgrounds
    const parallax = document.querySelector('.hero');
    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});
