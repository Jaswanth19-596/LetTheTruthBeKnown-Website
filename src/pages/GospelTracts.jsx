import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Card from '../components/Card';
import { getAssetUrl } from '../config/assets';
import './GospelTracts.css';

const GospelTracts = () => {
  const { t } = useLanguage();
  const [activeLanguage, setActiveLanguage] = useState('all');

  // Scroll reveal effect
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
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, [activeLanguage]);

  const languages = [
    { id: 'all', name: t('common.allLanguages') },
    { id: 'english', name: 'English' },
    { id: 'swahili', name: 'Swahili' },
    { id: 'luo', name: 'Luo' },
    { id: 'kikuyu', name: 'Kikuyu' },
    { id: 'kalenjin', name: 'Kalenjin' },
    { id: 'arabic', name: 'Arabic' },
    { id: 'amharic', name: 'Amharic' },
    { id: 'maasai', name: 'Maasai' },
    { id: 'kamba', name: 'Kamba' },
  ];

  const tracts = [
    { id: 1, language: 'english', title: "God's Simple Plan of Salvation", description: 'The classic gospel tract explaining salvation through faith in Jesus Christ.', image: getAssetUrl('downloads/gospel_tracks/Gods_simple_plan_of_salvation_english.png'), pdf: getAssetUrl('downloads/english.pdf') },
    { id: 2, language: 'swahili', title: "Mpango Rahisi wa Mungu wa Wokovu", description: 'Kiswahili version of the salvation tract.', image: getAssetUrl('downloads/gospel_tracks/Gods_simple_plan_for_salvation_swahili.png'), pdf: getAssetUrl('downloads/kiswahili.pdf') },
    { id: 3, language: 'luo', title: "God's Simple Plan - Luo", description: 'Luo language version for Kenya.', image: getAssetUrl('downloads/gospel_tracks/Gods_simple_plan_for_salvation_luo.png'), pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Luo.pdf') },
    { id: 4, language: 'kikuyu', title: "God's Simple Plan - Kikuyu", description: 'Kikuyu language version for Kenya.', image: getAssetUrl('downloads/gospel_tracks/Gods_simple_plan_for_salvation_kikuyu.png'), pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Kikuyu.pdf') },
    { id: 5, language: 'kalenjin', title: "God's Simple Plan - Kalenjin", description: 'Kalenjin language version for Kenya.', image: getAssetUrl('downloads/gospel_tracks/Gods_simple_plan_for_salvation_kalenjin.png'), pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Kalenjin.pdf') },
    { id: 6, language: 'arabic', title: "God's Simple Plan - Arabic", description: 'Arabic language version.', image: getAssetUrl('downloads/gospel_tracks/Gods_simple_plan_for_salvation_arabic.png'), pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Arabic.pdf') },
    { id: 7, language: 'amharic', title: "God's Simple Plan - Amharic", description: 'Amharic language version for Ethiopia.', image: getAssetUrl('downloads/gospel_tracks/Gods_simple_plan_for_salvation_amharic.png'), pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Amharic.pdf') },
    { id: 8, language: 'maasai', title: "God's Simple Plan - Maasai", description: 'Maasai language version for Kenya/Tanzania.', image: getAssetUrl('downloads/gospel_tracks/Gods_simple_plan_for_salvation_maasai.png'), pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Maasai.pdf') },
    { id: 9, language: 'kamba', title: "God's Simple Plan - Kamba", description: 'Kamba language version for Kenya.', image: getAssetUrl('downloads/gospel_tracks/Gods_simple_plan_of_salvation_english.png'), pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Kamba.pdf') },
  ];

  const filteredTracts = activeLanguage === 'all' ? tracts : tracts.filter(tract => tract.language === activeLanguage);

  return (
    <div className="gospel-tracts-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">{t('gospelTractsPage.badge')}</span>
            <h1>{t('gospelTractsPage.title')} <span className="gradient-text">{t('gospelTractsPage.titleHighlight')}</span></h1>
            <p>{t('gospelTractsPage.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Language Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="language-tabs">
            {languages.map(lang => (
              <button
                key={lang.id}
                className={`lang-tab ${activeLanguage === lang.id ? 'active' : ''}`}
                onClick={() => setActiveLanguage(lang.id)}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tracts Grid */}
      <section className="tracts-grid section">
        <div className="container">
          <div className="grid grid-auto">
            {filteredTracts.map(tract => (
              <Card
                key={tract.id}
                image={tract.image}
                title={tract.title}
                description={tract.description}
                link={tract.pdf}
                linkText={t('common.downloadPdf')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section section">
        <div className="container">
          <div className="info-card">
            <div className="info-content">
              <h3>{t('gospelTractsPage.howToUseTitle')}</h3>
              <p>{t('gospelTractsPage.howToUseDesc')}</p>
              <ul className="info-list">
                <li>{t('gospelTractsPage.howToUse1')}</li>
                <li>{t('gospelTractsPage.howToUse2')}</li>
                <li>{t('gospelTractsPage.howToUse3')}</li>
                <li>{t('gospelTractsPage.howToUse4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GospelTracts;
