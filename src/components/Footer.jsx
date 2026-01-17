import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/gospel-tracts', label: 'Gospel Tracts' },
    { to: '/stop-tracts', label: 'Stop Tracts' },
    { to: '/discipleship', label: 'Discipleship' },
    { to: '/salvation-quiz', label: 'Salvation Quiz' },
  ];

  const resourceLinks = [
    { to: '/resources', label: 'Other Resources' },
    { to: '/about', label: 'About Us' },
    { to: '/faqs', label: 'FAQs' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Let the Truth be Known</span>
            </Link>
            <p className="footer-description">
              Spreading the Gospel of Jesus Christ through tracts, resources, and discipleship materials in multiple languages.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Resources</h4>
            <ul>
              {resourceLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Stay Connected</h4>
            <p>Get the Free Holy Bible KJV App</p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download App
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Let the Truth be Known. All rights reserved.</p>
          <p className="footer-verse">
            "And ye shall know the truth, and the truth shall make you free." - John 8:32
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
