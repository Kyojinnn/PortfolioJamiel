// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
    }

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Theme toggle clicked!'); // Debug log
            
            body.classList.toggle('light-mode');
            
            // Save theme preference
            const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
            
            console.log('Current theme:', theme); // Debug log
            
            // Add animation effect
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        });
    } else {
        console.error('Theme toggle button not found!');
    }
});

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

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero subtitle
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = ['Web Development', 'Frontend Development', 'Backend Development', 'Full Stack Development', 'Arduino Project'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

// Start typing effect after page load
document.addEventListener('DOMContentLoaded', () => {
    if (typedTextSpan) {
        setTimeout(type, newTextDelay + 250);
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Display success message
        alert(`Thank you for your message, ${name}! I will get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.skill-card, .work-card, .experience-item, .timeline-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Chat notification click handler
const chatNotification = document.querySelector('.chat-notification');

if (chatNotification) {
    chatNotification.addEventListener('click', () => {
        alert('Chat feature coming soon! 💬');
    });
}

// CTA button click handler
const ctaBtn = document.querySelector('.cta-btn');

if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Network lines animation (creating animated dots and lines)
const createNetworkAnimation = () => {
    const networkLines = document.querySelector('.network-lines');
    if (!networkLines) return;

    // Create SVG for network animation
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';

    // Create random nodes
    const nodes = [];
    for (let i = 0; i < 20; i++) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const x = Math.random() * 500;
        const y = Math.random() * 500;
        
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', '2');
        circle.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');
        
        svg.appendChild(circle);
        nodes.push({ x, y, element: circle });
    }

    // Connect nearby nodes
    nodes.forEach((node1, i) => {
        nodes.forEach((node2, j) => {
            if (i < j) {
                const distance = Math.sqrt(
                    Math.pow(node1.x - node2.x, 2) + 
                    Math.pow(node1.y - node2.y, 2)
                );
                
                if (distance < 100) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', node1.x);
                    line.setAttribute('y1', node1.y);
                    line.setAttribute('x2', node2.x);
                    line.setAttribute('y2', node2.y);
                    line.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
                    line.setAttribute('stroke-width', '1');
                    
                    svg.appendChild(line);
                }
            }
        });
    });

    networkLines.appendChild(svg);
};

// Initialize network animation
document.addEventListener('DOMContentLoaded', createNetworkAnimation);

// Skill card hover effect - add ripple
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Work card hover effect
document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Smooth reveal for sections
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15
});

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Optimize scroll handler
const optimizedScroll = debounce(() => {
    // Your scroll handling code here
});

window.addEventListener('scroll', optimizedScroll);

console.log('Portfolio initialized successfully! 🚀');

// Project gallery animations
document.addEventListener('DOMContentLoaded', () => {
    const projectBoxes = document.querySelectorAll('.project-box');
    
    // Intersection Observer for project boxes
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                projectObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial state and observe
    projectBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        projectObserver.observe(box);
    });
    
    // Add click event for project boxes (optional - for future modal or link functionality)
    projectBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const projectName = this.querySelector('h3').textContent;
            console.log('Clicked project:', projectName);
            // You can add modal or navigation functionality here
        });
    });
});

// Project Cards Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                projectObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    projectCards.forEach(card => {
        projectObserver.observe(card);
    });
    
    // Optional: Add click event for project cards
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent click on read more link from triggering card click
            if (!e.target.closest('.project-link')) {
                const projectName = this.querySelector('h3').textContent;
                console.log('Clicked project:', projectName);
                // You can add navigation or modal functionality here
            }
        });
    });
});

// Featured Projects Carousel with Peek Effect
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('projectCarousel');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const cards = document.querySelectorAll('.featured-card');
    
    let currentIndex = 0;
    const totalCards = cards.length;

    // Create indicators
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(dot);
    }

    const indicators = document.querySelectorAll('.indicator-dot');

    function updateCarousel() {
        if (!cards.length) return;
        
        // Simple percentage-based positioning
        const offset = currentIndex * 100;
        carousel.style.transform = `translateX(-${offset}%)`;
        
        // Update active card
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });

        // Update indicators
        indicators.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Initial setup
    if (cards.length > 0) {
        cards[0].classList.add('active');
        updateCarousel();
    }
});

// Make sure first card is visible on load
document.addEventListener('DOMContentLoaded', function() {
    const firstCard = document.querySelector('.featured-card');
    if (firstCard) {
        firstCard.classList.add('active');
    }
});