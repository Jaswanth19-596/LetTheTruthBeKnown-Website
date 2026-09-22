import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component scrolls to top when route changes
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
