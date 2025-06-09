document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');

    // Function to open the mobile menu
    const openMobileMenu = () => {
        mobileMenuOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    };

    // Function to close the mobile menu
    const closeMobileMenu = () => {
        mobileMenuOverlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Event listener for opening the mobile menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', openMobileMenu);
    }

    // Event listener for closing the mobile menu using the close button
    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', closeMobileMenu);
    }

    // Optional: Close mobile menu if a link inside it is clicked
    // This assumes the links will navigate to a new page or section
    // If navigating to the same page, you might want to consider smooth scrolling and then closing
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                closeMobileMenu();
            }
        });
    }

    // Close menu if window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
            closeMobileMenu();
        }
    });
});