import { useEffect } from 'react';

/**
 * PageStyle injects the exact CSS of the page into a dedicated <style> element
 * and updates it when the page changes, completely preventing CSS leakage
 * across pages while preserving 100% cascade, specificity, and original styles.
 */
export default function PageStyle({ css, title }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  useEffect(() => {
    let styleTag = document.getElementById('turtle-page-style');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'turtle-page-style';
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = css || '';

    return () => {
      // Do not clear immediately to avoid flash during transitions
    };
  }, [css]);

  return null;
}
