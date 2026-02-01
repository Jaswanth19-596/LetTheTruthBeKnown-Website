import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">{t('about.badge')}</span>
            <h1>{t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span></h1>
            <p>{t('about.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>{t('about.missionTitle')} <span className="gradient-text">{t('about.missionHighlight')}</span></h2>
              <p>{t('about.missionText1')}</p>
              <p>{t('about.missionText2')}</p>
              <div className="mission-verse">
                <p>"{t('about.missionVerse')}"</p>
                <span>— {t('about.missionVerseRef')}</span>
              </div>
            </div>
            <div className="mission-image">
              <div className="mission-icon-text">{t('about.faith')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t('about.valuesTitle')} <span className="gradient-text">{t('about.valuesHighlight')}</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h4>{t('about.value1Title')}</h4>
              <p>{t('about.value1Desc')}</p>
            </div>
            <div className="value-card">
              <h4>{t('about.value2Title')}</h4>
              <p>{t('about.value2Desc')}</p>
            </div>
            <div className="value-card">
              <h4>{t('about.value3Title')}</h4>
              <p>{t('about.value3Desc')}</p>
            </div>
            <div className="value-card">
              <h4>{t('about.value4Title')}</h4>
              <p>{t('about.value4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offer-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t('about.offerTitle')} <span className="gradient-text">{t('about.offerHighlight')}</span></h2>
          </div>
          <div className="offer-grid">
            <div className="offer-item">
              <span className="offer-number">01</span>
              <h4>{t('about.offer1Title')}</h4>
              <p>{t('about.offer1Desc')}</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">02</span>
              <h4>{t('about.offer2Title')}</h4>
              <p>{t('about.offer2Desc')}</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">03</span>
              <h4>{t('about.offer3Title')}</h4>
              <p>{t('about.offer3Desc')}</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">04</span>
              <h4>{t('about.offer4Title')}</h4>
              <p>{t('about.offer4Desc')}</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">05</span>
              <h4>{t('about.offer5Title')}</h4>
              <p>{t('about.offer5Desc')}</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">06</span>
              <h4>{t('about.offer6Title')}</h4>
              <p>{t('about.offer6Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-card">
            <h2>{t('about.ctaTitle')} <span className="gradient-text">{t('about.ctaHighlight')}</span></h2>
            <p>{t('about.ctaDesc')}</p>
            <div className="cta-actions">
              <a href="/gospel-tracts" className="btn btn-primary">{t('about.ctaBrowse')}</a>
              <a href="/contact" className="btn btn-secondary">{t('about.ctaContact')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
