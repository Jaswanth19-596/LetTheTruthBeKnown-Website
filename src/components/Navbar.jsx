import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/gospel-tracts', label: 'Gospel Tracts' },
    { to: '/stop-tracts', label: 'Stop Tracts' },
    { to: '/discipleship', label: 'Discipleship' },
    { to: '/resources', label: 'Resources' },
    { to: '/salvation-quiz', label: 'Salvation Quiz' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo animate-fadeInLeft">
          <span className="logo-text">Let the Truth be Known</span>
        </Link>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map(({ to, label }, index) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {label}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary nav-cta hover-shine" 
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

