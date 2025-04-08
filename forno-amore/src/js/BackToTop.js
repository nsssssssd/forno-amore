document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    const scrollThreshold = 300;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > scrollThreshold) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
    
    if ('ontouchstart' in window) {
        backToTopButton.style.width = '60px';
        backToTopButton.style.height = '60px';
        backToTopButton.style.bottom = '20px';
        backToTopButton.style.right = '20px';
    }
});