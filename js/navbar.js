/**
 * Navbar behavior - Keeps navigation bar permanently visible
 * Used across all pages
 */

// Keep navbar permanently visible and add body margin to prevent content overlap
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.add('visible');
        // Add margin-top to body to account for fixed navbar height
        document.body.style.marginTop = navbar.offsetHeight + 'px';
    }
});

// Update body margin on window resize to handle responsive navbar height changes
window.addEventListener('resize', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        document.body.style.marginTop = navbar.offsetHeight + 'px';
    }
});


