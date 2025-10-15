// ========================================
// Main JavaScript for PDE Difficulty Transfer Website
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initSmoothScroll();
    initImageLazyLoad();
    initAnimations();
});

// ========================================
// Navbar Functionality
// ========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Highlight active section in navbar
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// Smooth Scrolling
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Copy BibTeX to Clipboard
// ========================================
function copyBibtex() {
    const bibtexCode = document.getElementById('bibtex-code').innerText;
    const button = document.querySelector('.copy-btn');

    // Create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = bibtexCode;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);

    // Select and copy
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');

        // Visual feedback
        const originalHTML = button.innerHTML;
        button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Copied!
        `;

        setTimeout(() => {
            button.innerHTML = originalHTML;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
        button.innerHTML = 'Failed to copy';
        setTimeout(() => {
            button.innerHTML = originalHTML;
        }, 2000);
    }

    // Remove temporary textarea
    document.body.removeChild(textarea);
}

// ========================================
// Lazy Load Images
// ========================================
function initImageLazyLoad() {
    const images = document.querySelectorAll('img[src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Scroll Animations
// ========================================
function initAnimations() {
    const animatedElements = document.querySelectorAll('.section');

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
}

// ========================================
// Utility Functions
// ========================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// Export functions to global scope
// ========================================
window.copyBibtex = copyBibtex;

// ========================================
// Console Easter Egg
// ========================================
console.log('%c👋 Hello, researcher!', 'font-size: 20px; font-weight: bold; color: #C41230;');
console.log('%cInterested in our work? Check out our paper and code!', 'font-size: 14px; color: #5C6670;');
console.log('%cGitHub: https://github.com/Naman-Choudhary-AI-ML/Geo-UPSplus', 'font-size: 12px; color: #4A90E2;');
