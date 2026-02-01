// --- 1. Theme Toggle Logic ---
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const setTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.src = 'assets/website/light-mode.png'; 
    } else {
        body.classList.remove('dark-mode');
        themeIcon.src = 'assets/website/night-mode.png';
    }
    localStorage.setItem('theme', theme);
};

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
}

toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    setTheme(isDark ? 'light' : 'dark');
});

// --- 2. Intersection Observer (Scroll Highlighting) ---
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('header[id], section[id], main[id]');
    const navLinks = document.querySelectorAll('.side-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.side-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});

// --- 3. Contact Modal Logic ---
const contactLink = document.querySelector('a[href="#contact-modal"]');
const modal = document.getElementById("contact-modal");
const closeBtn = document.querySelector(".close-btn");

// Check if elements exist before adding listeners (prevents errors on other pages)
if (contactLink && modal && closeBtn) {
    
    // Open modal
    contactLink.addEventListener("click", (event) => {
        event.preventDefault(); 
        modal.style.display = "block";
    });

    // Close modal via 'X' button
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal by clicking the background overlay
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}