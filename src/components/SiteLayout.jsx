import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Seo from './Seo.jsx';

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Our Products' },
  { to: '/contact', label: 'Contact' },
];

function NavigationLinks({ onNavigate }) {
  return navigation.map(({ to, label, end }) => (
    <NavLink key={to} to={to} end={end} onClick={onNavigate}>
      {label}
    </NavLink>
  ));
}

export default function SiteLayout() {
  const location = useLocation();
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('home-page', location.pathname === '/');
    setIsNavigationOpen(false);
    const targetId = location.hash.slice(1);
    if (targetId) {
      requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isNavigationOpen);
    return () => document.body.classList.remove('nav-open');
  }, [isNavigationOpen]);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 720px)');
    const updateScrollTopButton = () => {
      setIsScrollTopVisible(mobileQuery.matches && window.scrollY > 160);
    };

    window.addEventListener('scroll', updateScrollTopButton, { passive: true });
    window.addEventListener('resize', updateScrollTopButton);
    updateScrollTopButton();

    return () => {
      window.removeEventListener('scroll', updateScrollTopButton);
      window.removeEventListener('resize', updateScrollTopButton);
    };
  }, []);

  const closeNavigation = () => setIsNavigationOpen(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      <Seo path={location.pathname} />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <NavLink className="brand-mark" to="/" end aria-label="Ice House Tailgating home" onClick={closeNavigation}>
          <img src="/IceHouselogos/Black%20Tag%20-%20Ice%20House.png" alt="Ice House Tailgating" decoding="async" />
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          aria-label={isNavigationOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isNavigationOpen}
          onClick={() => setIsNavigationOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
        <nav className="site-nav" aria-label="Primary navigation">
          <NavigationLinks onNavigate={closeNavigation} />
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <NavLink className="footer-brand" to="/" end aria-label="Ice House Tailgating home">
            <img src="/IceHouselogos/White%20Tag%20-%20Ice%20House.png" alt="Ice House Tailgating" loading="lazy" decoding="async" />
          </NavLink>
          <nav aria-label="Footer navigation">
            <NavigationLinks onNavigate={closeNavigation} />
          </nav>
          <p>ICE HOUSE TAILGATING<br />A Division of Crescent Moon Vans, LLC<br />995 Holland Ave, Cayce, SC 29033<br />By Appointment Only</p>
          <p className="copyright">Copyright 2026 Ice House Tailgating. All rights reserved.</p>
        </div>
      </footer>

      <button
        className={`scroll-top-button${isScrollTopVisible ? ' is-visible' : ''}`}
        type="button"
        aria-label="Back to top"
        aria-hidden={!isScrollTopVisible}
        tabIndex={isScrollTopVisible ? 0 : -1}
        onClick={scrollToTop}
      />
    </>
  );
}