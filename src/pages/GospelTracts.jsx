import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getAssetUrl } from '../config/assets';
import './GospelTracts.css';

const GospelTracts = () => {
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
    { id: 'all',      name: 'All Languages', code: 'ALL' },
    { id: 'english',  name: 'English',   code: 'EN' },
    { id: 'swahili',  name: 'Swahili',   code: 'SW' },
    { id: 'luo',      name: 'Luo',       code: 'LU' },
    { id: 'kikuyu',   name: 'Kikuyu',    code: 'KI' },
    { id: 'kalenjin', name: 'Kalenjin',  code: 'KA' },
    { id: 'arabic',   name: 'Arabic',    code: 'AR' },
    { id: 'amharic',  name: 'Amharic',   code: 'AM' },
    { id: 'maasai',   name: 'Maasai',    code: 'MA' },
    { id: 'kamba',    name: 'Kamba',     code: 'KM' },
    { id: 'french',   name: 'French',    code: 'FR' },
  ];

  const tracts = [
    { id: 1,  language: 'english',  title: "God's Simple Plan of Salvation", description: 'The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."', pdf: getAssetUrl("downloads/gospel_tracts/english.pdf") },
    { id: 2,  language: 'swahili',  title: 'Mpango Rahisi wa Mungu wa Wokovu', description: 'Biblia inasema kuna njia moja tu ya kwenda Mbinguni. Yesu alisema: "Mimi ndimi njia, na kweli, na uzima; mtu haji kwa Baba, ila kwa njia ya mimi."', pdf: getAssetUrl("downloads/gospel_tracts/swahili.pdf") },
    { id: 3,  language: 'french',   title: 'Le Plan Simple de Dieu pour le Salut', description: 'La Bible dit qu\'il n\'y a qu\'un seul chemin vers le Ciel. Jésus a dit: "Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi."', pdf: getAssetUrl("downloads/gospel_tracts/french.pdf") },
    { id: 4,  language: 'luo',      title: "God's Simple Plan - Luo",      description: 'Luo language version for Kenya.',      pdf: getAssetUrl("downloads/gospel_tracts/luo.pdf") },
    { id: 5,  language: 'kikuyu',   title: "God's Simple Plan - Kikuyu",   description: 'Kikuyu language version for Kenya.',   pdf: getAssetUrl("downloads/gospel_tracts/kikuyu.pdf") },
    { id: 6,  language: 'kalenjin', title: "God's Simple Plan - Kalenjin", description: 'Kalenjin language version for Kenya.', pdf: getAssetUrl("downloads/gospel_tracts/kalenjin.pdf") },
    { id: 7,  language: 'arabic',   title: "God's Simple Plan - Arabic",   description: 'Arabic language version.',             pdf: getAssetUrl("downloads/gospel_tracts/arabic.pdf") },
    { id: 8,  language: 'amharic',  title: "God's Simple Plan - Amharic",  description: 'Amharic language version for Ethiopia.',pdf: getAssetUrl("downloads/gospel_tracts/amharic.pdf") },
    { id: 9,  language: 'maasai',   title: "God's Simple Plan - Maasai",   description: 'Maasai language version for Kenya/Tanzania.', pdf: getAssetUrl("downloads/gospel_tracts/maasai.pdf") },
    { id: 10, language: 'kamba',    title: "God's Simple Plan - Kamba",    description: 'Kamba language version for Kenya.',   pdf: getAssetUrl("downloads/gospel_tracts/kamba.pdf") },
  ];

  const filteredTracts = activeLanguage === 'all'
    ? tracts
    : tracts.filter(tract => tract.language === activeLanguage);

  return (
    <div className="gospel-tracts-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">Share the Good News</span>
            <h1>Gospel <span className="gradient-text">Tracts</span></h1>
            <p>Download and print "God's Simple Plan of Salvation" in multiple languages.</p>
          </div>
        </div>
      </section>

      {/* Sidebar + Content layout */}
      <div className="page-with-sidebar">

        {/* ── Left sidebar filter ── */}
        <aside className="filter-sidebar">
          <p className="sidebar-label">Language</p>
          {languages.map(lang => (
            <button
              key={lang.id}
              className={`sidebar-tab ${activeLanguage === lang.id ? 'active' : ''}`}
              onClick={() => setActiveLanguage(lang.id)}
            >
              <span className="sidebar-tab-code">{lang.code}</span>
              <span className="sidebar-tab-name">{lang.name}</span>
            </button>
          ))}
        </aside>

        {/* ── Main content ── */}
        <main className="sidebar-content">
          <div className="grid grid-auto">
            {filteredTracts.map(tract => (
              <Card
                key={tract.id}
                title={tract.title}
                description={tract.description}
                link={tract.pdf}
                linkText="Download PDF"
              />
            ))}
          </div>

          {/* Info card */}
          <div className="info-card" style={{ marginTop: '3rem' }}>
            <div className="info-content">
              <h3>How to Use These Tracts</h3>
              <p>These tracts are designed to be printed on standard A4 paper and folded into a trifold brochure.</p>
              <ul className="info-list">
                <li>Download the PDF file for your desired language.</li>
                <li>Print double-sided (flip on short edge).</li>
                <li>Fold along the dotted lines.</li>
                <li>Share with your community, church, or leave in public places.</li>
              </ul>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default GospelTracts;
