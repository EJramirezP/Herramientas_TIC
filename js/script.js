// ===== MAIN SCRIPT FOR TIC TOOLS WEBSITE =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavigation();
    initAnimations();
    initSmoothScroll();
});

// ===== NAVIGATION =====
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Update active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(37, 99, 235, 0.95)';
        } else {
            navbar.style.backgroundColor = 'var(--primary-color)';
        }
    });
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.impact-card, .tool-card, .feature-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* =========================================
   MODERN JAVASCRIPT INTERACTIONS 2024 🚀
   ========================================= */

document.addEventListener('DOMContentLoaded', function() {
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
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

    // ===== INTERSECTION OBSERVER FOR SCROLL REVEALS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Add staggered animation delay for multiple elements
                const siblings = Array.from(entry.target.parentNode.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // ===== FLOATING ANIMATION FOR CARDS =====
    const cards = document.querySelectorAll('.tool-card, .impact-card');
    
    cards.forEach((card, index) => {
        // Add subtle floating animation with different delays
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-25px) scale(1.03) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        });
    });

    // ===== PARALLAX EFFECT FOR HERO SECTION =====
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // ===== DYNAMIC GRADIENT SHIFT =====
    let gradientAngle = 0;
    
    setInterval(() => {
        gradientAngle += 1;
        if (gradientAngle > 360) gradientAngle = 0;
        
        document.body.style.background = `
            linear-gradient(${gradientAngle}deg, 
                #000000 0%, 
                #1a1a1a 30%, 
                #333333 70%, 
                #000000 100%)
        `;
    }, 100);

    // ===== BUTTON RIPPLE EFFECTS =====
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });

    // ===== MAGNETIC EFFECT FOR TOOL ICONS =====
    const toolIcons = document.querySelectorAll('.tool-icon');
    
    toolIcons.forEach(icon => {
        icon.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `
                translate(${x * 0.1}px, ${y * 0.1}px) 
                scale(1.15) 
                rotate(${x * 0.05}deg)
            `;
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';
        });
    });

    // ===== TYPEWRITER EFFECT FOR HERO TITLE =====
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // ===== LOADING ANIMATION =====
    const loadingElements = document.querySelectorAll('.tool-card, .impact-card, .section-glass');
    
    loadingElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // ===== GLITCH EFFECT FOR NAVBAR BRAND =====
    const navbarBrand = document.querySelector('.navbar-brand');
    
    if (navbarBrand) {
        navbarBrand.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        navbarBrand.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    }

    // ===== PERFORMANCE OPTIMIZATION =====
    let ticking = false;
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    function updateAnimations() {
        // Update scroll-based animations here
        ticking = false;
    }
    
    window.addEventListener('scroll', requestTick);
    
    // ===== CONSOLE STYLING =====
    console.log('%c🚀 Herramientas TIC - Sitio Web Moderno Cargado! ', 
        'background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 10px; border-radius: 5px; font-size: 16px; font-weight: bold;'
    );
    
    console.log('%cDiseño por: TIC EDU 2024 ✨', 
        'background: linear-gradient(45deg, #4facfe, #00f2fe); color: white; padding: 5px; border-radius: 3px;'
    );
});

// ===== CSS ANIMATIONS DYNAMICALLY ADDED =====
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: scale(1) skew(0deg); }
        20% { transform: scale(1.1) skew(2deg); }
        40% { transform: scale(0.9) skew(-1deg); }
        60% { transform: scale(1.05) skew(1deg); }
        80% { transform: scale(0.95) skew(-0.5deg); }
        100% { transform: scale(1) skew(0deg); }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        animation: ripple-animation 1s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;

document.head.appendChild(style);
