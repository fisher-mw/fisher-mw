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

// 1. Initial Load Logic
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
}

// 2. Theme Toggle Event
toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    setTheme(isDark ? 'light' : 'dark');
});

// 3. Scroll Spy / Intersection Observer
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

/* Animated text*/
document.addEventListener("DOMContentLoaded", () => {
  const txtElement = document.querySelector(".txt");

  const phrases = [
    "UBC Computer Science and Statistics Student.",
    "Mathematics Enthusiast.",
    "Alpine skier, rock climber, and brazilian jujitsu athelete.",
    "Developer."
  ];

  let phraseIndex = 0;

  const animateText = (text) => {
    txtElement.textContent = "";

    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${index * 0.08}s`;
      span.style.display = char === " " ? "inline-block" : "inline";
      txtElement.appendChild(span);
    });
  };

  const loopText = () => {
    animateText(phrases[phraseIndex]);

    const animationDuration =
      phrases[phraseIndex].length * 80 + 1200;

    setTimeout(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      loopText();
    }, animationDuration);
  };

  loopText();
});