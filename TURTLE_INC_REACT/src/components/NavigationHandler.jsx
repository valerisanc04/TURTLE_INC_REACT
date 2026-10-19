import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * NavigationHandler intercepts click events on standard <a href="..."> tags
 * pointing to local pages (like "inicio.html", "prendas.html", etc.)
 * and routes them smoothly using React Router without page reloads.
 */
export default function NavigationHandler() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Intercept anchor clicks
  useEffect(() => {
    const handleAnchorClick = (e) => {
      // Find closest anchor tag
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (
        !href ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('//') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        anchor.getAttribute('target') === '_blank'
      ) {
        return;
      }

      // Check if it's an internal route
      e.preventDefault();
      let target = href;
      if (!target.startsWith('/')) {
        target = '/' + target;
      }
      navigate(target);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [navigate]);

  return null;
}
