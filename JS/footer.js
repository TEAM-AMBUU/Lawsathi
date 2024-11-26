document.addEventListener('DOMContentLoaded', () => {
    const footerSections = document.querySelectorAll('.footer-section');
    const footerBottom = document.querySelector('.footer-bottom');
    const socialIcons = document.querySelector('.social-icons');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    footerSections.forEach(section => {
        observer.observe(section);
    });

    observer.observe(footerBottom);
    observer.observe(socialIcons);

    // Animated counter for a hypothetical "Cases Solved" statistic
    const casesCounter = document.createElement('div');
    casesCounter.className = 'cases-counter';
    casesCounter.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 10px;
        border-radius: 5px;
    `;
    document.querySelector('.footer').appendChild(casesCounter);

    let count = 0;
    const targetCount = 10000;
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const step = targetCount / (duration / interval);

    function updateCounter() {
        count += step;
        if (count < targetCount) {
            casesCounter.textContent = `Cases Solved: ${Math.round(count)}+`;
            requestAnimationFrame(updateCounter);
        } else {
            casesCounter.textContent = `Cases Solved: ${targetCount}+`;
        }
    }

    observer.observe(casesCounter);
    casesCounter.addEventListener('transitionend', updateCounter);
});