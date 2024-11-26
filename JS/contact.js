document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.section-header');
    const teamMembers = document.querySelectorAll('.team-member');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(header);
    teamMembers.forEach(member => observer.observe(member));
});