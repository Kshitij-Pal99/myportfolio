
  // 1. Toggle Mobile Menu
  
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  
  // 2. Scroll Fade-in Animation (Projects & Skills)
  const fadeElements = document.querySelectorAll('.project, .skill-box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => observer.observe(el));


