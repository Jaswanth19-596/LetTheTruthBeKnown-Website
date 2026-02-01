import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Card from '../components/Card';
import { getAssetUrl } from '../config/assets';
import './StopTracts.css';

const StopTracts = () => {
  const { t } = useLanguage();
  const [activeLanguage, setActiveLanguage] = useState('all');

  useEffect(() => {
    const revealOnScroll = () => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    const timeout = setTimeout(() => revealOnScroll(), 100);
    window.addEventListener('scroll', revealOnScroll);
    return () => { clearTimeout(timeout); window.removeEventListener('scroll', revealOnScroll); };
  }, [activeLanguage]);

  const languages = [
    { id: 'all', name: t('common.allLanguages') },
    { id: 'english', name: 'English' },
    { id: 'swahili', name: 'Swahili' },
    { id: 'luo', name: 'Luo' },
    { id: 'kalenjin', name: 'Kalenjin' },
    { id: 'kisii', name: 'Kisii' },
    { id: 'maasai', name: 'Maasai' },
  ];

  const tracts = [
    { id: 1, language: 'english', title: 'STOP! Tract - English', description: 'Eye-catching STOP tract to grab attention.', image: getAssetUrl('downloads/1.png'), pdf: getAssetUrl('downloads/English_stoptrack.pdf') },
    { id: 2, language: 'swahili', title: 'STOP! Tract - Swahili', description: 'Kiswahili version.', image: getAssetUrl('downloads/2.png'), pdf: getAssetUrl('downloads/Kiswahilii_stoptrack.pdf') },
    { id: 3, language: 'luo', title: 'STOP! Tract - Luo', description: 'Luo language version.', image: getAssetUrl('downloads/3.png'), pdf: getAssetUrl('downloads/LuoStop.pdf') },
    { id: 4, language: 'kalenjin', title: 'STOP! Tract - Kalenjin', description: 'Kalenjin version.', image: getAssetUrl('downloads/4.png'), pdf: getAssetUrl('downloads/KenyaKalinjin_stoptrack.pdf') },
    { id: 5, language: 'kisii', title: 'STOP! Tract - Kisii', description: 'Kisii version.', image: getAssetUrl('downloads/5.png'), pdf: getAssetUrl('downloads/Kisii_stoptrack.pdf') },
    { id: 6, language: 'maasai', title: 'STOP! Tract - Maasai', description: 'Maasai version.', image: getAssetUrl('downloads/6.png'), pdf: getAssetUrl('downloads/Masai_stoptrack.pdf') },
  ];

  const filteredTracts = activeLanguage === 'all' ? tracts : tracts.filter(tract => tract.language === activeLanguage);

  return (
    <div className="stop-tracts-page">
      <section className="page-hero stop-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge stop-badge">{t('stopTractsPage.badge')}</span>
            <h1>{t('stopTractsPage.title')} <span className="gradient-text">{t('stopTractsPage.titleHighlight')}</span></h1>
            <p>{t('stopTractsPage.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="filter-section">
        <div className="container">
          <div className="language-tabs">
            {languages.map(lang => (
              <button key={lang.id} className={`lang-tab ${activeLanguage === lang.id ? 'active' : ''}`} onClick={() => setActiveLanguage(lang.id)}>{lang.name}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="tracts-grid section">
        <div className="container">
          <div className="grid grid-auto">
            {filteredTracts.map(tract => (
              <Card key={tract.id} image={tract.image} title={tract.title} description={tract.description} link={tract.pdf} linkText={t('common.downloadPdf')} />
            ))}
          </div>
        </div>
      </section>

      <section className="why-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t('stopTractsPage.whyTitle')} <span className="gradient-text">{t('stopTractsPage.whyHighlight')}</span></h2>
            <p>{t('stopTractsPage.whySubtitle')}</p>
          </div>
          <div className="why-grid">
            <div className="why-card"><h4>{t('stopTractsPage.why1Title')}</h4><p>{t('stopTractsPage.why1Desc')}</p></div>
            <div className="why-card"><h4>{t('stopTractsPage.why2Title')}</h4><p>{t('stopTractsPage.why2Desc')}</p></div>
            <div className="why-card"><h4>{t('stopTractsPage.why3Title')}</h4><p>{t('stopTractsPage.why3Desc')}</p></div>
            <div className="why-card"><h4>{t('stopTractsPage.why4Title')}</h4><p>{t('stopTractsPage.why4Desc')}</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StopTracts;
