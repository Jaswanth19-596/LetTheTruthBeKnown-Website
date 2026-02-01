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
    { id: 'french', name: 'French' }, // Added French to languages
  ];

  const tracts = [
    {
      id: 1,
      language: t('gospelTractsPage.tracts.english'),
      code: 'en-US',
      flag: '🇬🇧',
      title: 'God\'s Simple Plan of Salvation',
      description: 'The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."',
      pdf: '/tracts/Gods_Simple_Plan_of_Salvation_English.pdf'
    },
    {
      id: 2,
      language: t('gospelTractsPage.tracts.swahili'),
      code: 'sw-KE',
      flag: '🇰🇪',
      title: 'Mpango Rahisi wa Mungu wa Wokovu',
      description: 'Biblia inasema kuna njia moja tu ya kwenda Mbinguni. Yesu alisema: "Mimi ndimi njia, na kweli, na uzima; mtu haji kwa Baba, ila kwa njia ya mimi."',
      pdf: '/tracts/Gods_Simple_Plan_of_Salvation_Swahili.pdf'
    },
    {
      id: 3,
      language: t('gospelTractsPage.tracts.french'),
      code: 'fr-FR',
      flag: '🇫🇷',
      title: 'Le Plan Simple de Dieu pour le Salut',
      description: 'La Bible dit qu\'il n\'y a qu\'un seul chemin vers le Ciel. Jésus a dit: "Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi."',
      pdf: '/tracts/Gods_Simple_Plan_of_Salvation_French.pdf'
    },
    { id: 4, language: t('gospelTractsPage.tracts.luo'), code: 'luo-KE', flag: '🇰🇪', title: "God's Simple Plan - Luo", description: 'Luo language version for Kenya. The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."', pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Luo.pdf') },
    { id: 5, language: t('gospelTractsPage.tracts.kikuyu'), code: 'ki-KE', flag: '🇰🇪', title: "God's Simple Plan - Kikuyu", description: 'Kikuyu language version for Kenya. The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."', pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Kikuyu.pdf') },
    { id: 6, language: t('gospelTractsPage.tracts.kalenjin'), code: 'kln-KE', flag: '🇰🇪', title: "God's Simple Plan - Kalenjin", description: 'Kalenjin language version for Kenya. The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."', pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Kalenjin.pdf') },
    { id: 7, language: t('gospelTractsPage.tracts.arabic'), code: 'ar-SA', flag: '🇸🇦', title: "God's Simple Plan - Arabic", description: 'Arabic language version. The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."', pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Arabic.pdf') },
    { id: 8, language: t('gospelTractsPage.tracts.amharic'), code: 'am-ET', flag: '🇪🇹', title: "God's Simple Plan - Amharic", description: 'Amharic language version for Ethiopia. The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."', pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Amharic.pdf') },
    { id: 9, language: t('gospelTractsPage.tracts.maasai'), code: 'mas-KE', flag: '🇰🇪', title: "God's Simple Plan - Maasai", description: 'Maasai language version for Kenya/Tanzania. The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."', pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Maasai.pdf') },
    { id: 10, language: t('gospelTractsPage.tracts.kamba'), code: 'kam-KE', flag: '🇰🇪', title: "God's Simple Plan - Kamba", description: 'Kamba language version for Kenya. The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."', pdf: getAssetUrl('downloads/gospel_tracks/Gods-Simple-Plan-Tract-Kamba.pdf') },
  ];

  const filteredTracts = activeLanguage === 'all' ? tracts : tracts.filter(tract => tract.language === t(`gospelTractsPage.tracts.${activeLanguage}`));

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
