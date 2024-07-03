document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });
});
