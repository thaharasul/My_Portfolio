/**
 * Main — contact form handling, footer back-to-top, init
 */

(function () {
  'use strict';

  /* Contact form validation & submission */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const status = document.getElementById('formStatus');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        showStatus(status, 'Please fill in all fields.', 'error');
        return;
      }

      if (!isValidEmail(email.value)) {
        showStatus(status, 'Please enter a valid email address.', 'error');
        return;
      }

      showStatus(
        status,
        'Thank you! Your message has been noted. Please also reach out directly at mdnasrullaah@gmail.com.',
        'success'
      );

      form.reset();
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showStatus(el, message, type) {
    if (!el) return;
    el.textContent = message;
    el.className = `form-status form-status--${type} is-visible`;
    el.setAttribute('role', 'alert');

    setTimeout(() => {
      el.classList.remove('is-visible');
    }, 6000);
  }

  /* Footer back to top */
  function initFooterBackTop() {
    const btn = document.getElementById('footerBackTop');
    if (!btn) return;

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Set current year in footer if element exists */
  function setYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initFooterBackTop();
    setYear();
  });
})();
