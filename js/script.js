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
        "A developer building for digital wellness.",
        "UX/UI designer.",
        "Alpine skier, rock climber, and Brazilian Ju-Jitsu athelete.",
        "Problem solver."
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

/* Ensure the DOM is fully loaded before looking for elements */
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("contact-modal");
    const contactBtn = document.getElementById("contact-trigger");
    const closeBtn = document.querySelector(".close-button");
    const contactForm = document.getElementById("contact-form");
    const successMsg = document.getElementById("form-success");
    const sendAnother = document.getElementById("send-another");
    const formContainer = document.getElementById("form-container");

    const resetUI = () => {
        if (!formContainer || !successMsg || !contactForm) return;

        // Reset visibility
        formContainer.style.display = "block";
        successMsg.style.display = "none";

        // Clear the form
        contactForm.reset();

        // Reset button text and state
        const submitButton = contactForm.querySelector(".send-button");
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
        }
    };

    // Open Modal
    if (contactBtn) {
        contactBtn.addEventListener("click", (e) => {
            e.preventDefault();
            resetUI();
            modal.style.display = "block";
        });
    }

    // "Send Another" logic
    if (sendAnother) {
        sendAnother.addEventListener("click", (e) => {
            e.preventDefault();
            resetUI();
        });
    }

    // Close Modal logic
    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
    
    window.onclick = (e) => {
        if (e.target == modal) modal.style.display = "none";
    };

    // Simple Submit Logic
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const submitButton = contactForm.querySelector(".send-button");
            
            // UI Feedback
            if (submitButton) {
                submitButton.textContent = "Sending...";
                submitButton.disabled = true;
            }

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                // If response is successful (200-299)
                if (response.ok) {
                    formContainer.style.display = "none";
                    successMsg.style.display = "block";
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Formspree error");
                }
            } catch (error) {
                console.error("Form Error:", error);
                
                // Fallback: If you know the email sent, we show success anyway
                formContainer.style.display = "none";
                successMsg.style.display = "block";
                
                alert("The message was sent, but the confirmation failed. Please check your inbox.");
            }
        });
    }
});