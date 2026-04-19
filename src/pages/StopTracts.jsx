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
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) el.classList.add('active');
      });
    };
    const timeout = setTimeout(revealOnScroll, 100);
    window.addEventListener('scroll', revealOnScroll);
    return () => { clearTimeout(timeout); window.removeEventListener('scroll', revealOnScroll); };
  }, [activeLanguage]);

  const languages = [
    { id: 'all',      name: t('common.allLanguages'), flag: '🌐' },
    { id: 'english',  name: 'English',  flag: '🇬🇧' },
    { id: 'swahili',  name: 'Swahili',  flag: '🇰🇪' },
    { id: 'luo',      name: 'Luo',      flag: '🇰🇪' },
    { id: 'kalenjin', name: 'Kalenjin', flag: '🇰🇪' },
    { id: 'kisii',    name: 'Kisii',    flag: '🇰🇪' },
    { id: 'maasai',   name: 'Maasai',   flag: '🇰🇪' },
  ];

  const tracts = [
    { id: 1, language: 'english',  title: 'STOP! Tract - English',  description: 'Eye-catching STOP tract to grab attention.',  pdf: getAssetUrl('downloads/stop_tracks/stop_tract_en.pdf') },
    { id: 2, language: 'swahili',  title: 'STOP! Tract - Swahili',  description: 'Kiswahili version.',                          pdf: getAssetUrl('downloads/stop_tracks/KiswahiliiStop.pdf') },
    { id: 3, language: 'luo',      title: 'STOP! Tract - Luo',      description: 'Luo language version.',                      pdf: getAssetUrl('downloads/stop_tracks/LuoStop.pdf') },
    { id: 4, language: 'kalenjin', title: 'STOP! Tract - Kalenjin', description: 'Kalenjin version.',                          pdf: getAssetUrl('downloads/stop_tracks/KenyaKalinjinStop.pdf') },
    { id: 5, language: 'kisii',    title: 'STOP! Tract - Kisii',    description: 'Kisii version.',                             pdf: getAssetUrl('downloads/stop_tracks/KisiiStop.pdf') },
    { id: 6, language: 'maasai',   title: 'STOP! Tract - Maasai',   description: 'Maasai version.',                            pdf: getAssetUrl('downloads/stop_tracks/MasaiStop.pdf') },
  ];

  const filteredTracts = activeLanguage === 'all' ? tracts : tracts.filter(t => t.language === activeLanguage);

  return (
    <div className="stop-tracts-page">
      {/* Hero */}
      <section className="page-hero stop-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge stop-badge">{t('stopTractsPage.badge')}</span>
            <h1>{t('stopTractsPage.title')} <span className="gradient-text">{t('stopTractsPage.titleHighlight')}</span></h1>
            <p>{t('stopTractsPage.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Sidebar + Content */}
      <div className="page-with-sidebar">

        {/* ── Left sidebar ── */}
        <aside className="filter-sidebar">
          <p className="sidebar-label">Language</p>
          {languages.map(lang => (
            <button
              key={lang.id}
              className={`sidebar-tab ${activeLanguage === lang.id ? 'active' : ''}`}
              onClick={() => setActiveLanguage(lang.id)}
            >
              <span className="sidebar-tab-flag">{lang.flag}</span>
              <span className="sidebar-tab-name">{lang.name}</span>
            </button>
          ))}
        </aside>

        {/* ── Main content ── */}
        <main className="sidebar-content">
          <div className="grid grid-auto">
            {filteredTracts.map(tract => (
              <Card key={tract.id} title={tract.title} description={tract.description} link={tract.pdf} linkText={t('common.downloadPdf')} />
            ))}
          </div>

          {/* Why section */}
          <div className="why-grid" style={{ marginTop: '3rem' }}>
            <div className="why-card"><h4>{t('stopTractsPage.why1Title')}</h4><p>{t('stopTractsPage.why1Desc')}</p></div>
            <div className="why-card"><h4>{t('stopTractsPage.why2Title')}</h4><p>{t('stopTractsPage.why2Desc')}</p></div>
            <div className="why-card"><h4>{t('stopTractsPage.why3Title')}</h4><p>{t('stopTractsPage.why3Desc')}</p></div>
            <div className="why-card"><h4>{t('stopTractsPage.why4Title')}</h4><p>{t('stopTractsPage.why4Desc')}</p></div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default StopTracts;
