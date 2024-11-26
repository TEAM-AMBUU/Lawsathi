document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    features.forEach(feature => {
        observer.observe(feature);
    });
});