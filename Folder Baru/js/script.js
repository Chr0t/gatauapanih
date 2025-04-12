document.addEventListener('DOMContentLoaded', function() {
    // Scroll animations
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.main-nav a');
    const weddingDate = new Date('2025-01-01T00:00:00');

    // Intersection Observer for section animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // View invitation button
    const viewInvitationBtn = document.querySelector('.view-invitation-btn');
    viewInvitationBtn.addEventListener('click', () => {
        document.querySelector('#mempelai').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Countdown timer
    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Wishes form handling
    const wishesForm = document.getElementById('wishes-form');
    const wishesList = document.querySelector('.wishes-list');

    // Load existing wishes from localStorage
    let wishes = JSON.parse(localStorage.getItem('weddingWishes')) || [];
    displayWishes();

    wishesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = wishesForm.querySelector('input').value;
        const message = wishesForm.querySelector('textarea').value;

        if (name && message) {
            const newWish = {
                name,
                message,
                date: new Date().toLocaleDateString('id-ID')
            };

            wishes.unshift(newWish);
            localStorage.setItem('weddingWishes', JSON.stringify(wishes));
            
            displayWishes();
            wishesForm.reset();
        }
    });

    function displayWishes() {
        wishesList.innerHTML = '';
        
        wishes.forEach(wish => {
            const wishElement = document.createElement('div');
            wishElement.className = 'wish-item';
            wishElement.innerHTML = `
                <h4>${wish.name}</h4>
                <p>${wish.message}</p>
                <small>${wish.date}</small>
            `;
            wishesList.appendChild(wishElement);
        });
    }

    // Sticky navigation
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            nav.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
            nav.classList.remove('scroll-up');
            nav.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
            nav.classList.remove('scroll-down');
            nav.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;
    const closeBtn = document.querySelector('.close-btn');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    // Open menu when hamburger is clicked
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when close button is clicked
    closeBtn.addEventListener('click', toggleMenu);

    // Close menu when overlay is clicked
    navOverlay.addEventListener('click', toggleMenu);

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Close menu when Escape key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Prevent menu from closing when clicking inside nav
    mobileNav.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Animation on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
            
            if (isVisible) {
                element.classList.add('animate__fadeIn');
            }
        });
    };

    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Smooth scroll for navigation links
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

    // Sound Effect
    function playClickSound() {
        const clickSound = document.getElementById('clickSound');
        clickSound.currentTime = 0; // Reset sound to start
        clickSound.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
    }
}); 