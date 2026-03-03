/* =========================================
   VIREXA LAB - Interactions & Logic
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navbar Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(13, 13, 13, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.background = 'rgba(13, 13, 13, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        
        // إضافة تأثير الأنيميشن
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0D0D0D';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid #333';
        }
    });

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // إغلاق القائمة في الجوال عند الضغط على رابط
                if (window.innerWidth < 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // 4. Fade In Animation on Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // يشغل الأنيميشن مرة واحدة فقط
            }
        });
    }, observerOptions);

    // تطبيق الأنيميشن على العناصر
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .case-card, .step, .stat-item, .about-content'
    );

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // إضافة كلاس الـ visible للأنيميشن
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 5. Active Link Highlighting
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.style.color = ''; // Reset
            if (a.getAttribute('href').includes(current)) {
                a.style.color = '#D4AF37'; // Gold color
            }
        });
    });

    // 6. Simple Console Log for "Authority" (احترافي)
    console.log('%c VIREXA LAB SYSTEM ONLINE ', 'background: #0D0D0D; color: #D4AF37; font-size: 16px; padding: 10px; border: 1px solid #D4AF37;');
    console.log('Conversion Systems Ready.');
});