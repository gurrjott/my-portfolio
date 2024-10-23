// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar hide on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.classList.add('hidden');
    } else {
        // Scroll up
        navbar.classList.remove('hidden');
    }
    
    // Make navbar solid on scroll
    if (scrollTop > 100) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }

    lastScrollTop = scrollTop;
});
