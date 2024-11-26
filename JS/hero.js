document.getElementById('cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    alert('तपाईंको रुचिको लागि धन्यवाद! हाम्रो टोलीले चाँडै तपाईंलाई सम्पर्क गर्नेछ।\n\nThank you for your interest! Our team will contact you shortly.');
});

window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrollPosition * 0.003);
    } else {
        heroContent.style.transform = 'translateY(0)';
        heroContent.style.opacity = 1;
    }
});