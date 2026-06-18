const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
    }
  });
}

const contactForm = document.querySelector('[data-contact-form]');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = contactForm.querySelector('[data-form-status]');
    if (status) {
      status.textContent = 'Message staged for the mockup.';
    }
    contactForm.reset();
  });
}

const scrollTopButton = document.querySelector('[data-scroll-top]');

if (scrollTopButton) {
  const mobileQuery = window.matchMedia('(max-width: 720px)');
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const updateScrollTopButton = () => {
    const shouldShow = mobileQuery.matches && window.scrollY > 160;
    scrollTopButton.classList.toggle('is-visible', shouldShow);
    scrollTopButton.setAttribute('aria-hidden', String(!shouldShow));
    scrollTopButton.tabIndex = shouldShow ? 0 : -1;
  };

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotionQuery.matches ? 'auto' : 'smooth',
    });
  });

  window.addEventListener('scroll', updateScrollTopButton, { passive: true });
  window.addEventListener('resize', updateScrollTopButton);
  updateScrollTopButton();
}