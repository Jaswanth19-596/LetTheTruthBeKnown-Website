import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../config/assets';
import PDFViewer from '../components/PDFViewer';
import './Discipleship.css';

const Discipleship = () => {
  const { t } = useLanguage();
  const [activeLevel, setActiveLevel] = useState(1);
  const [viewingPdf, setViewingPdf] = useState(null);

  useEffect(() => {
    const revealOnScroll = () => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 150) element.classList.add('active');
      });
    };
    const timeout = setTimeout(() => revealOnScroll(), 100);
    window.addEventListener('scroll', revealOnScroll);
    return () => { clearTimeout(timeout); window.removeEventListener('scroll', revealOnScroll); };
  }, [activeLevel]);

  const handleView = (book) => setViewingPdf(book);
  const handleDownload = (pdfUrl) => window.open(pdfUrl, '_blank');

  const levels = [
    {
      level: 1,
      titleKey: 'discipleship.level1Title',
      subtitleKey: 'discipleship.level1Subtitle',
      color: 'var(--temple-blue)',
      books: [
        { title: 'Understanding Salvation', cover: getAssetUrl('downloads/discipleship/level1/thumbnails/01-assurance-of-salvation-cover.png'), pdf: getAssetUrl('downloads/discipleship/level1/books/01-understanding-salvation.pdf') },
        { title: 'Eternal Security', cover: getAssetUrl('downloads/discipleship/level1/thumbnails/02-prayer-cover.png'), pdf: getAssetUrl('downloads/discipleship/level1/books/02-eternal-security.pdf') },
        { title: 'Baptism', cover: getAssetUrl('downloads/discipleship/level1/thumbnails/03-the-church-cover.png'), pdf: getAssetUrl('downloads/discipleship/level1/books/03-baptism.pdf') },
        { title: 'The Word of God', cover: getAssetUrl('downloads/discipleship/level1/thumbnails/04-the-word-of-god-cover.png'), pdf: getAssetUrl('downloads/discipleship/level1/books/04-the-word-of-god.pdf') },
      ]
    },
    {
      level: 2,
      titleKey: 'discipleship.level2Title',
      subtitleKey: 'discipleship.level2Subtitle',
      color: 'var(--gold)',
      books: [
        { title: 'Prayer', cover: getAssetUrl('downloads/discipleship/level2/thumbnails/01-christian-growth-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2/books/01-prayer.pdf') },
        { title: 'The Holy Spirit', cover: getAssetUrl('downloads/discipleship/level2/thumbnails/02-christian-maturity-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2/books/02-the-holy-spirit.pdf') },
        { title: 'Witnessing for Christ', cover: getAssetUrl('downloads/discipleship/level2/thumbnails/03-the-bible-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2/books/03-witnessing-for-christ.pdf') },
        { title: 'The New Testament Church', cover: getAssetUrl('downloads/discipleship/level2/thumbnails/04-the-new-testament-church-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2/books/04-the-new-testament-church.pdf') },
        { title: 'Forgiveness', cover: getAssetUrl('downloads/discipleship/level2/thumbnails/05-forgiveness-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2/books/05-forgiveness.pdf') },
        { title: 'Financial Stewardship', cover: getAssetUrl('downloads/discipleship/level2/thumbnails/06-financial-stewardship-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2/books/06-financial-stewardship.pdf') },
        { title: 'Judgment Seat of Christ', cover: getAssetUrl('downloads/discipleship/level2/thumbnails/07-judgment-seat-of-christ-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2/books/07-judgment-seat-of-christ.pdf') },
        { title: 'God\'s Will for Your Life', cover: getAssetUrl('downloads/discipleship/level2/thumbnails/08-gods-will-for-your-life.png'), pdf: getAssetUrl('downloads/discipleship/level2/books/08-gods-will-for-your-life.pdf') },
      ]
    },
    {
      level: 3,
      titleKey: 'discipleship.level3Title',
      subtitleKey: 'discipleship.level3Subtitle',
      color: 'var(--scarlet)',
      books: [
        { title: 'Grace', cover: getAssetUrl('downloads/discipleship/level3/thumbnails/01-grace-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3/books/01-grace.pdf') },
        { title: 'Practical Christian Living', cover: getAssetUrl('downloads/discipleship/level3/thumbnails/02-practical-christian-living-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3/books/02-practical-christian-living.pdf') },
        { title: 'Sanctification', cover: getAssetUrl('downloads/discipleship/level3/thumbnails/03-hermeneutics-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3/books/03-sanctification.pdf') },
        { title: 'Victory Over Sin', cover: getAssetUrl('downloads/discipleship/level3/thumbnails/04-homiletics-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3/books/04-victory-over-sin.pdf') },
        { title: 'Jesus Christ', cover: getAssetUrl('downloads/discipleship/level3/thumbnails/05-jesus-christ-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3/books/05-jesus-christ.pdf') },
        { title: 'Creation', cover: getAssetUrl('downloads/discipleship/level3/thumbnails/06-missions-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3/books/06-creation.pdf') },
        { title: 'Spiritual Gifts', cover: getAssetUrl('downloads/discipleship/level3/thumbnails/07-spiritual-gifts-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3/books/07-spiritual-gifts.pdf') },
        { title: 'Our Spiritual Armor', cover: getAssetUrl('downloads/discipleship/level3/thumbnails/08-our-spiritual-armor-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3/books/08-our-spiritual-armor.pdf') },
      ]
    }
  ];

  const currentLevel = levels.find(l => l.level === activeLevel);

  return (
    <div className="discipleship-page">
      <section className="page-hero discipleship-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge animate-fadeInDown">{t('discipleship.badge')}</span>
            <h1 className="animate-fadeInUp delay-100">{t('discipleship.title')} <span className="gradient-text-animated">{t('discipleship.titleHighlight')}</span></h1>
            <p className="animate-fadeIn delay-200">{t('discipleship.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Sidebar + content layout */}
      <div className="page-with-sidebar">

        {/* ── Left sidebar: level tabs ── */}
        <aside className="filter-sidebar">
          <p className="sidebar-label">Level</p>
          {levels.map((level) => (
            <button
              key={level.level}
              className={`sidebar-tab ${activeLevel === level.level ? 'active' : ''}`}
              onClick={() => setActiveLevel(level.level)}
              style={{ '--level-color': level.color }}
            >
              <span className="sidebar-tab-flag" style={{ background: level.color + '20', color: level.color, borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>{level.level}</span>
              <span className="sidebar-tab-name">
                <span style={{ display: 'block', fontWeight: 700 }}>{t(level.titleKey)}</span>
                <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.6 }}>{t(level.subtitleKey)}</span>
              </span>
            </button>
          ))}
        </aside>

        {/* ── Main content ── */}
        <main className="sidebar-content">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="section-badge" style={{ background: currentLevel.color + '20', color: currentLevel.color }}>
              {t('common.level')} {activeLevel}
            </span>
            <h2>{t(currentLevel.titleKey)}</h2>
            <p>{currentLevel.books.length} {t('common.booksInLevel')}</p>
          </div>

          <div className="books-grid">
            {currentLevel.books.map((book, index) => (
              <div className="book-card reveal" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="book-cover">
                  <img src={book.cover} alt={book.title} />
                  <div className="book-shine"></div>
                  <div className="book-overlay">
                    <button className="book-btn view-btn" onClick={() => handleView(book)}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                      {t('common.view')}
                    </button>
                    <button className="book-btn download-btn" onClick={() => handleDownload(book.pdf)}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                      {t('common.download')}
                    </button>
                  </div>
                </div>
                <div className="book-info">
                  <span className="book-index">{index + 1}</span>
                  <h4>{book.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>

      {/* GBBC Advanced Studies - Full width section below sidebar */}
      <section className="gbbc-section section reveal" style={{ marginTop: '2rem', padding: '4rem 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ position: 'absolute', top: '25px', right: '5%' }}>
            <span style={{ background: 'var(--primary-color)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('resourcesPage.gbbcAdvanced')}</span>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{t('gbbc.title')}</h2>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '2.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>{t('gbbc.subtitle')}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
              {['feature1', 'feature2', 'feature3', 'feature4'].map((ft, idx) => (
                <div key={idx} style={{ background: 'var(--bg-primary)', padding: '1.2rem', borderRadius: '12px', borderTop: '3px solid var(--primary-color)', boxShadow: 'var(--shadow-sm)' }}>
                  <p style={{ fontWeight: '500', color: 'var(--text-secondary)', margin: 0 }}>{t(`gbbc.${ft}`)}</p>
                </div>
              ))}
            </div>

            <div className="home-verse-card" style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '15px', marginBottom: '2.5rem', border: '1px solid var(--glass-border)', textAlign: 'left' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{t('gbbc.verse')}</p>
              <p style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{t('gbbc.verseRef')}</p>
            </div>
            <a href={`https://${t('gbbc.website')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-glow" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              {t('gbbc.visitCta')} →
            </a>
          </div>
        </div>
      </section>

      {viewingPdf && <PDFViewer pdfUrl={viewingPdf.pdf} title={viewingPdf.title} onClose={() => setViewingPdf(null)} />}
    </div>
  );
};

export default Discipleship;
