

window.addEventListener('load', () => {
    const preloader = document.querySelector('#preloader');

    setTimeout(() => {
        preloader.classList.add('preloader-finish');

        jalankanAnimasi();
    }, 2000);
});

function jalankanAnimasi() {
    const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    // Animasi Home (Sekarang akan muncul setelah Welcome hilang)
    sr.reveal('.header', { origin: 'top' });
    sr.reveal('.home-content h1, .home-content h3', { origin: 'left', delay: 400 });
    sr.reveal('.home-content p', { origin: 'right', delay: 600 });
    sr.reveal('.social-media', { origin: 'bottom', delay: 800 });
    sr.reveal('.btn', { origin: 'bottom', delay: 1000 });
    sr.reveal('.home-img img', { origin: 'right', delay: 1200, scale: 0.5 });

    // Animasi Section lain juga dimasukkan ke sini
    sr.reveal('.skills-box', { origin: 'bottom', interval: 200 });
}

/* Animasi Mengetik tetap di luar tidak apa-apa */
const typed = new Typed('.multiple-text', {
    strings: ['Future Engineer', 'Web Developer', 'Watercolor Artist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

sr.reveal('.portfolio-box', { origin: 'bottom', interval: 200 });

sr.reveal('.contact form', { origin: 'bottom' });