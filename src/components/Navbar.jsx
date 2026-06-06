import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileOpen, setIsMobileOpen]       = useState(false);
  const [openDropdown, setOpenDropdown]       = useState(null); // 'growing' | 'pastor' | null
  const location  = useLocation();
  const navRef    = useRef(null);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  /* ── Close dropdowns on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleDropdown = (key) =>
    setOpenDropdown((prev) => (prev === key ? null : key));

  const isActive = (paths) =>
    paths.some((p) => location.pathname === p || location.pathname.startsWith(p));

  /* ── Dropdown data ── */
  const growingLinks = [
    { to: '/discipleship',   label: 'Foundations of My Faith' },
    { to: '/resources',      label: 'Understanding More' },
    { to: '/next-steps',     label: 'New Believer — Next Steps' },
  ];

  const pastorLinks = [
    { to: '/resources',       label: 'Further Study' },
    { to: '/gospel-tracts',   label: 'Gospel Tracts' },
    { to: '/stop-tracts',     label: 'STOP! Tracts' },
    { to: '/faqs',            label: 'Frequently Asked Questions' },
    { to: '/prayer-request',  label: 'Prayer Request' },
  ];

  /* ── Chevron icon ── */
  const Chevron = ({ open }) => (
    <svg
      className={`nav-chevron ${open ? 'open' : ''}`}
      width="12" height="12" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  return (
    <nav
      ref={navRef}
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}
    >
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <span className="logo-cross">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11,2 h2 v5 h5 v2 h-5 v13 h-2 v-13 h-5 v-2 h5 z" />
            </svg>
          </span>
          <span className="logo-text">Let the Truth be Known</span>
        </Link>

        {/* Desktop nav links */}
        <div className="navbar-links">

          {/* Seeking Truth — primary link */}
          <Link
            to="/seeking-truth"
            className={`nav-link nav-link-primary ${isActive(['/seeking-truth']) ? 'active' : ''}`}
          >
            Seeking Truth
          </Link>

          {/* Growing in Faith — dropdown */}
          <div className={`nav-dropdown-wrap ${openDropdown === 'growing' ? 'open' : ''}`}>
            <button
              className={`nav-link nav-dropdown-trigger ${
                isActive(['/discipleship', '/resources', '/next-steps']) ? 'active' : ''
              }`}
              onClick={() => toggleDropdown('growing')}
              aria-expanded={openDropdown === 'growing'}
              aria-haspopup="true"
            >
              Growing in Faith <Chevron open={openDropdown === 'growing'} />
            </button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-header">For New & Growing Christians</div>
              {growingLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-dropdown-item ${location.pathname === to ? 'active' : ''}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Pastor / Further Study — dropdown */}
          <div className={`nav-dropdown-wrap ${openDropdown === 'pastor' ? 'open' : ''}`}>
            <button
              className={`nav-link nav-dropdown-trigger ${
                isActive(['/gospel-tracts', '/stop-tracts', '/faqs', '/prayer-request']) ? 'active' : ''
              }`}
              onClick={() => toggleDropdown('pastor')}
              aria-expanded={openDropdown === 'pastor'}
              aria-haspopup="true"
            >
              Pastor <Chevron open={openDropdown === 'pastor'} />
            </button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-header">For Pastors & Teachers</div>
              {pastorLinks.map(({ to, label }) => (
                <Link
                  key={to + label}
                  to={to}
                  className={`nav-dropdown-item ${location.pathname === to ? 'active' : ''}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/about"
            className={`nav-link ${isActive(['/about']) ? 'active' : ''}`}
          >
            About
          </Link>

          <Link
            to="/give"
            className={`nav-link ${isActive(['/give']) ? 'active' : ''}`}
          >
            Give
          </Link>
        </div>

        {/* Right-side actions */}
        <div className="navbar-actions">
          <Link to="/contact" className="navbar-contact-btn">
            Contact Us
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger ${isMobileOpen ? 'open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`navbar-mobile ${isMobileOpen ? 'open' : ''}`}>
        <Link to="/seeking-truth" className="mob-link mob-link-primary">Seeking Truth</Link>

        <div className="mob-group">
          <button
            className="mob-group-trigger"
            onClick={() => toggleDropdown('m-growing')}
          >
            Growing in Faith
            <Chevron open={openDropdown === 'm-growing'} />
          </button>
          {openDropdown === 'm-growing' && (
            <div className="mob-group-items">
              {growingLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="mob-sub-link">{label}</Link>
              ))}
            </div>
          )}
        </div>

        <div className="mob-group">
          <button
            className="mob-group-trigger"
            onClick={() => toggleDropdown('m-pastor')}
          >
            Pastor / Further Study
            <Chevron open={openDropdown === 'm-pastor'} />
          </button>
          {openDropdown === 'm-pastor' && (
            <div className="mob-group-items">
              {pastorLinks.map(({ to, label }) => (
                <Link key={to + label} to={to} className="mob-sub-link">{label}</Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/about"          className="mob-link">About</Link>
        <Link to="/give"           className="mob-link">Give</Link>
        <Link to="/contact"        className="mob-link">Contact Us</Link>
        <Link to="/salvation-quiz" className="mob-link mob-link-quiz">Take the Salvation Quiz →</Link>
      </div>
    </nav>
  );
};

export default Navbar;
