document.addEventListener('DOMContentLoaded', () => {
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("Your message has been submitted. We'll get back to you shortly.");
      this.reset();
    });
  }

  // Navbar scroll-spy
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

          if (navLink) {
            navLinks.forEach((link) => {
              link.classList.remove('active');
            });
            navLink.classList.add('active');
          }
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // On-scroll reveal animations
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  // Mobile navigation
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  mobileNav.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
    }
  });
}); 