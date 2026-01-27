const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon'); // Target the <img> tag
const body = document.body;

const setTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        // IMPORTANT: Use the exact same path here as your HTML
        themeIcon.src = 'assets//website/light-mode.png'; // If dark mode is on, show the sun/light icon
    } else {
        body.classList.remove('dark-mode');
        themeIcon.src = 'assets/website/night-mode.png'; // If light mode is on, show the moon/night icon
    }
    localStorage.setItem('theme', theme);
};

// 2. Initial Load Logic (Check storage and system preferences)
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
}

// 3. The Click Event
toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    // If it's currently dark, set it to light. If not, set it to dark.
    setTheme(isDark ? 'light' : 'dark');
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('header[id], section[id], main[id]');
    const navLinks = document.querySelectorAll('.side-link');

    const observerOptions = {
        root: null, // use the browser viewport
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the section is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all links
                navLinks.forEach(link => link.classList.remove('active'));

                // Find the link that matches the ID of the section in view
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.side-link[href="#${id}"]`);
                
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Tell the observer to watch each section
    sections.forEach(section => observer.observe(section));
});