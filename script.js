window.addEventListener('load', () => {
    const preloader = document.querySelector('#preloader');

    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('preloader-finish');
        }
        jalankanAnimasi();
    }, 2000);
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav-links li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let targetLink = document.querySelector('#nav-links li a[href*=' + id + ']');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        };
    });
};

function jalankanAnimasi() {
    if (typeof ScrollReveal === 'undefined') {
        console.warn("ScrollReveal belum dimuat. Mencoba lagi dalam 500ms...");
        setTimeout(jalankanAnimasi, 500);
        return;
    }

    const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    sr.reveal('.header', { origin: 'top' });
    sr.reveal('.home-content h1, .home-content h3', { origin: 'left', delay: 400 });
    sr.reveal('.home-content p', { origin: 'right', delay: 600 });
    sr.reveal('.social-media', { origin: 'bottom', delay: 800 });
    sr.reveal('.btn', { origin: 'bottom', delay: 1000 });
    sr.reveal('.home-img img', { origin: 'right', delay: 1200, scale: 0.5 });


    sr.reveal('.skills-box', { origin: 'bottom', interval: 200 });
    sr.reveal('.portfolio-box', { origin: 'bottom', interval: 200 });
    sr.reveal('.contact form', { origin: 'bottom' });
}

function toggleMenu() {
    const navbar = document.querySelector('#nav-links');
    if (navbar) {
        navbar.classList.toggle('active');
    } else {
        console.error("Gema, elemen .navbar tidak ditemukan di HTML!");
    }
}

const typedElement = document.querySelector('.multiple-text');

if (typedElement) {
    const typed = new Typed('.multiple-text', {
        strings: ['Future Engineer', 'Web Developer', 'Watercolor Artist'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}