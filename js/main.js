/**
 * DolphyAI Website - Main JavaScript
 * Handles navigation, carousel, and form interactions
 */

// ===== State Management =====
let currentSlide = 0;
const totalSlides = 2;
let navTimeout;
let navbarHeight = 0;

// ===== Dynamic Navbar Height =====

/**
 * Update scroll padding based on navbar height
 * Ensures fixed navbar doesn't cover content on any screen size
 */
function updateScrollPadding() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbarHeight = navbar.offsetHeight;
        document.documentElement.style.scrollPaddingTop = (navbarHeight + 20) + 'px';
    }
}

// Update on page load and window resize
document.addEventListener('DOMContentLoaded', updateScrollPadding);
window.addEventListener('resize', updateScrollPadding);

// ===== Navigation Functions =====

/**
 * Navigate to a specific page
 * @param {string} pageId - The ID of the page to navigate to
 */
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        // Scroll with offset to account for fixed navbar
        setTimeout(() => {
            window.scrollTo(0, targetPage.offsetTop - navbarHeight - 20);
        }, 0);
    }
}

// ===== Carousel Functions =====

/**
 * Display a specific carousel slide
 * @param {number} n - The slide index
 */
function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (n >= totalSlides) currentSlide = 0;
    if (n < 0) currentSlide = totalSlides - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    document.getElementById('slideNum').textContent = currentSlide + 1;
}

/**
 * Go to next carousel slide
 */
function carouselNext() {
    currentSlide++;
    showSlide(currentSlide);
}

/**
 * Go to previous carousel slide
 */
function carouselPrev() {
    currentSlide--;
    showSlide(currentSlide);
}

// ===== Navigation Bar Visibility =====

/**
 * Show the navigation bar on mouse movement
 * Auto-hide after 3 seconds of inactivity
 */
document.addEventListener('mousemove', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('visible');
    
    // Clear existing timeout
    clearTimeout(navTimeout);
    
    // Set new timeout to hide navbar
    navTimeout = setTimeout(() => {
        navbar.classList.remove('visible');
    }, 3000);
});

// Initially show navbar on page load
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('visible');
});

// ===== Form Handling =====

/**
 * Handle contact form submission
 * @param {Event} event - The form submission event
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    
    // Show success message
    alert(`Thank you, ${name}! We'll get back to you soon.`);
    
    // Reset form
    event.target.reset();
}
