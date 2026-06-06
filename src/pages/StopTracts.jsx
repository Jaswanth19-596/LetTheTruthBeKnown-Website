import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getAssetUrl } from '../config/assets';
import './StopTracts.css';

const StopTracts = () => {
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
    { id: 'english',  name: 'English',  code: 'EN' },
    { id: 'swahili',  name: 'Swahili',  code: 'SW' },
    { id: 'luo',      name: 'Luo',      code: 'LU' },
    { id: 'kalenjin', name: 'Kalenjin', code: 'KA' },
    { id: 'kisii',    name: 'Kisii',    code: 'KI' },
    { id: 'maasai',   name: 'Maasai',   code: 'MA' },
  ];

  const tracts = [
    { id: 1, language: 'english',  title: 'STOP! Tract - English',  description: 'Eye-catching STOP tract to grab attention.',  pdf: getAssetUrl('downloads/stop_tracts/english.pdf') },
    { id: 2, language: 'swahili',  title: 'STOP! Tract - Swahili',  description: 'Kiswahili version.',                          pdf: getAssetUrl('downloads/stop_tracts/swahili.pdf') },
    { id: 3, language: 'luo',      title: 'STOP! Tract - Luo',      description: 'Luo language version.',                      pdf: getAssetUrl('downloads/stop_tracts/luo.pdf') },
    { id: 4, language: 'kalenjin', title: 'STOP! Tract - Kalenjin', description: 'Kalenjin version.',                          pdf: getAssetUrl('downloads/stop_tracts/kalenjin.pdf') },
    { id: 5, language: 'kisii',    title: 'STOP! Tract - Kisii',    description: 'Kisii version.',                             pdf: getAssetUrl('downloads/stop_tracts/kisii.pdf') },
    { id: 6, language: 'maasai',   title: 'STOP! Tract - Maasai',   description: 'Maasai version.',                            pdf: getAssetUrl('downloads/stop_tracts/maasai.pdf') },
  ];

  const filteredTracts = activeLanguage === 'all' ? tracts : tracts.filter(t => t.language === activeLanguage);

  return (
    <div className="stop-tracts-page">
      {/* Hero */}
      <section className="page-hero stop-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge stop-badge">Street Evangelism</span>
            <h1>STOP! <span className="gradient-text">Tracts</span></h1>
            <p>Eye-catching tracts designed to grab attention and share the Gospel quickly.</p>
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
              <span className="sidebar-tab-code">{lang.code}</span>
              <span className="sidebar-tab-name">{lang.name}</span>
            </button>
          ))}
        </aside>

        {/* ── Main content ── */}
        <main className="sidebar-content">
          <div className="grid grid-auto">
            {filteredTracts.map(tract => (
              <Card key={tract.id} title={tract.title} description={tract.description} link={tract.pdf} linkText="Download PDF" />
            ))}
          </div>

          {/* Why section */}
          <div className="why-grid" style={{ marginTop: '3rem' }}>
            <div className="why-card"><h4>Eye-Catching</h4><p>The red STOP sign design instantly grabs people's attention as they walk by.</p></div>
            <div className="why-card"><h4>Direct Message</h4><p>Gets straight to the point about sin, judgment, and the need for a Saviour.</p></div>
            <div className="why-card"><h4>Easy to Read</h4><p>Clear, bold text that can be read quickly.</p></div>
            <div className="why-card"><h4>Perfect for Street Ministry</h4><p>Ideal size for handing out at busy intersections or markets.</p></div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default StopTracts;
