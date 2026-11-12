
// Highlight active navigation link
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Update footer year automatically
const footer = document.querySelector('footer p');

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Sushma N. All Rights Reserved.`;
}

// Reveal sections when scrolling
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => observer.observe(section));
