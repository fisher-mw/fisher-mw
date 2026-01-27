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