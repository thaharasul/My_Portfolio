/**
 * Animations — scroll reveal, typewriter effect
 */

(function () {
  'use strict';

  /* Intersection Observer for scroll reveals */
  function initReveal() {
    const revealEls = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );

    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /* Typewriter cycling roles */
  function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const roles = [
      'Business Analyst',
      'Product Operations',
      'Data & Operations Analytics',
      'KPI Reporting'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 45;
    const pauseEnd = 2000;
    const pauseStart = 500;

    function tick() {
      const current = roles[roleIndex];

      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === current.length) {
        delay = pauseEnd;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = pauseStart;
      }

      setTimeout(tick, delay);
    }

    tick();
  }

  initReveal();
  initTypewriter();
})();
