// Mobile menu functionality
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const sideNav = document.getElementById('sideNav');

menuToggle.addEventListener('click', function() {
    sideNav.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', function() {
    sideNav.classList.remove('active');
    document.body.style.overflow = '';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        sideNav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!sideNav.contains(event.target) && !menuToggle.contains(event.target)) {
        sideNav.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Add subtle animation to quote cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.quote-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    observer.observe(card);
});

// Simple scroll indicator for navigation
const navLinksContainer = document.querySelector('.nav-links-container');
let isScrolling;

if (navLinksContainer) {
    navLinksContainer.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        
        isScrolling = setTimeout(function() {
            if (navLinksContainer.scrollTop > 10) {
                navLinksContainer.style.boxShadow = 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.1)';
            } else {
                navLinksContainer.style.boxShadow = 'none';
            }
        }, 66);
    });
}