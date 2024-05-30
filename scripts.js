window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleDescription(id) {
    var element = document.getElementById(id);
    var link = element.nextElementSibling;
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        link.textContent = "Read less...";
    } else {
        element.style.display = "none";
        link.textContent = "Read more...";
    }
}
