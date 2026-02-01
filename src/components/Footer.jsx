import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/gospel-tracts', labelKey: 'nav.gospelTracts' },
    { to: '/stop-tracts', labelKey: 'nav.stopTracts' },
    { to: '/discipleship', labelKey: 'nav.discipleship' },
    { to: '/salvation-quiz', labelKey: 'nav.salvationQuiz' },
  ];

  const resourceLinks = [
    { to: '/resources', labelKey: 'footer.otherResources' },
    { to: '/about', labelKey: 'footer.aboutUs' },
    { to: '/faqs', labelKey: 'nav.faqs' },
    { to: '/contact', labelKey: 'nav.contactUs' },
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
              {t('footer.description')}
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.quickLinks')}</h4>
            <ul>
              {quickLinks.map(({ to, labelKey }) => (
                <li key={to}>
                  <Link to={to}>{t(labelKey)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.resources')}</h4>
            <ul>
              {resourceLinks.map(({ to, labelKey }) => (
                <li key={to}>
                  <Link to={to}>{t(labelKey)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">{t('footer.stayConnected')}</h4>
            <p>{t('footer.getTheBible')}</p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {t('footer.downloadApp')}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Let the Truth be Known. {t('footer.allRightsReserved')}.</p>
          <p className="footer-verse">
            {t('footer.footerVerse')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
