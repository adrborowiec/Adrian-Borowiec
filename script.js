// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        companyName: this.querySelector('input[placeholder="Nazwa firmy"]').value,
        name: this.querySelector('input[placeholder="Twoje imię i nazwisko"]').value,
        email: this.querySelector('input[placeholder="Email"]').value,
        phone: this.querySelector('input[placeholder="Telefon"]').value,
        message: this.querySelector('textarea[placeholder="Wiadomość..."]').value
    };

    // Email format using mailto
    const mailtoLink = `mailto:adrborowiec@outlook.com?subject=Nowa wiadomość od ${formData.companyName}&body=Imię i nazwisko: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0A%0D%0AWiadomość:%0D%0A${formData.message}`;

    // For demonstration, we'll show a success message
    alert('Dziękujemy! Twoja wiadomość została przygotowana do wysłania. Sprawdź domyślną aplikację email.');
    window.location.href = mailtoLink;

    // Reset form
    this.reset();
});

// Scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.about-card, .advantage-card, .step, .info-item').forEach(el => {
    observer.observe(el);
});

// Add scroll event listener for navbar shadow
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle (if needed in future)
function initMobileMenu() {
    // Placeholder for future mobile menu functionality
    const nav = document.querySelector('.nav-links');
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Mobile optimizations
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function () {
                // Close menu if it exists
            });
        });
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
});

// Responsive check on resize
window.addEventListener('resize', function () {
    initMobileMenu();
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

// Prevent flash of unstyled content
document.body.style.opacity = '0.95';
