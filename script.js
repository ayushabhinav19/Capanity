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
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const heading = entry.target.querySelector('h2');
      
      if (entry.isIntersecting) {
        // Handle nav links
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === entry.target.id) {
            link.classList.add('active');
          }
        });
        
        // Handle heading underline
        if (heading) {
          heading.classList.add('active-heading');
        }
      } else {
        // Remove heading underline when not intersecting
        if (heading) {
          heading.classList.remove('active-heading');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
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