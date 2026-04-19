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
        { title: 'Assurance of Salvation', cover: getAssetUrl('downloads/discipleship/level1-book1-cover.png'), pdf: getAssetUrl('downloads/discipleship/level1-book1.pdf') },
        { title: 'Prayer', cover: getAssetUrl('downloads/discipleship/level1-book2-cover.png'), pdf: getAssetUrl('downloads/discipleship/level1-book2.pdf') },
        { title: 'The Church', cover: getAssetUrl('downloads/discipleship/level1-book3-cover.png'), pdf: getAssetUrl('downloads/discipleship/level1-book3.pdf') },
        { title: 'The Word of God', cover: getAssetUrl('downloads/discipleship/level1-book4-cover.png'), pdf: getAssetUrl('downloads/discipleship/level1-book4.pdf') },
      ]
    },
    {
      level: 2,
      titleKey: 'discipleship.level2Title',
      subtitleKey: 'discipleship.level2Subtitle',
      color: 'var(--gold)',
      books: [
        { title: 'Christian Growth', cover: getAssetUrl('downloads/discipleship/level2-book1-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book1.pdf') },
        { title: 'Christian Maturity', cover: getAssetUrl('downloads/discipleship/level2-book2-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book2.pdf') },
        { title: 'The Bible', cover: getAssetUrl('downloads/discipleship/level2-book3-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book3.pdf') },
        { title: 'The New Testament Church', cover: getAssetUrl('downloads/discipleship/book_04-new_testament-church_cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book4.pdf') },
        { title: 'Forgiveness', cover: getAssetUrl('downloads/discipleship/book-05-forgiveness_cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book5.pdf') },
        { title: 'Financial Stewardship', cover: getAssetUrl('downloads/discipleship/book-06-financial_stewardshipcover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book6.pdf') },
        { title: 'Judgment Seat of Christ', cover: getAssetUrl('downloads/discipleship/book-07-judgment_seat_of_christ_cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book7.pdf') },
        { title: 'God\'s Will for Your Life', cover: getAssetUrl('downloads/discipleship/book-08-Gods_will_for_your_life_cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book8.pdf') },
      ]
    },
    {
      level: 3,
      titleKey: 'discipleship.level3Title',
      subtitleKey: 'discipleship.level3Subtitle',
      color: 'var(--scarlet)',
      books: [
        { title: 'Grace', cover: getAssetUrl('downloads/discipleship/level-03-book-1-grace-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book1.pdf') },
        { title: 'Practical Christian Living', cover: getAssetUrl('downloads/discipleship/level-03-book-2-practical-christian-living-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book2.pdf') },
        { title: 'Sanctification', cover: getAssetUrl('downloads/discipleship/level-03-book-6-sanctification-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book3.pdf') },
        { title: 'Victory Over Sin', cover: getAssetUrl('downloads/discipleship/level-03-book-4-victory-over-sin-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book4.pdf') },
        { title: 'Jesus Christ', cover: getAssetUrl('downloads/discipleship/level-03-book-5-jesus-christ-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book5.pdf') },
        { title: 'Creation', cover: getAssetUrl('downloads/discipleship/level-03-book-6-creation-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book6.pdf') },
        { title: 'Spiritual Gifts', cover: getAssetUrl('downloads/discipleship/level-03-book-7-spiritual-gifts-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book7.pdf') },
        { title: 'Our Spiritual Armor', cover: getAssetUrl('downloads/discipleship/level-03-book-8-our-spiritual-armor-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book8.pdf') },
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

      <section className="levels-nav section">
        <div className="container">
          <div className="levels-tabs">
            {levels.map((level) => (
              <button
                key={level.level}
                className={`level-tab ${activeLevel === level.level ? 'active' : ''}`}
                onClick={() => setActiveLevel(level.level)}
                style={{ '--level-color': level.color }}
              >
                <span className="level-number">{level.level}</span>
                <div className="level-info">
                  <span className="level-title">{t(level.titleKey)}</span>
                  <span className="level-subtitle">{t(level.subtitleKey)}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="books-section section">
        <div className="container">
          <div className="section-header">
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
                  <div className="book-overlay">
                    <button className="btn btn-small btn-view" onClick={() => handleView(book)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      {t('common.view')}
                    </button>
                    <button className="btn btn-small btn-download" onClick={() => handleDownload(book.pdf)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      {t('common.download')}
                    </button>
                  </div>
                </div>
                <div className="book-info">
                  <h4>{book.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {viewingPdf && <PDFViewer pdfUrl={viewingPdf.pdf} title={viewingPdf.title} onClose={() => setViewingPdf(null)} />}
      {/* GBBC Advanced Studies Section */}
      <section className="gbbc-section reveal" style={{ marginTop: '4rem', padding: '4rem 0', background: 'var(--bg-secondary)', borderRadius: '16px', position: 'relative', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
        <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
          <span style={{ background: 'var(--primary-color)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('resourcesPage.gbbcAdvanced')}</span>
        </div>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{t('gbbc.title')}</h2>
          <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '3rem', letterSpacing: '2px', textTransform: 'uppercase' }}>{t('gbbc.subtitle')}</h4>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {['feature1', 'feature2', 'feature3', 'feature4'].map((ft, idx) => (
              <div key={idx} className="hover-lift hover-shine" style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid var(--primary-color)', boxShadow: 'var(--shadow-sm)' }}>
                <p style={{ fontWeight: '500', color: 'var(--text-secondary)', margin: 0 }}>{t(`gbbc.${ft}`)}</p>
              </div>
            ))}
          </div>
          
          <div style={{ background: 'rgba(239, 68, 68, 0.05)', borderLeft: '4px solid #ef4444', padding: '1.5rem', borderRadius: '0 8px 8px 0', marginBottom: '3rem', textAlign: 'left' }}>
            <p style={{ color: '#b91c1c', fontStyle: 'italic', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>{t('gbbc.notice')}</p>
          </div>
          
          <div className="home-verse-card" style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: '15px', marginBottom: '3rem', border: '1px solid var(--glass-border)', textAlign: 'left', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{t('gbbc.verse')}</p>
            <p style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{t('gbbc.verseRef')}</p>
          </div>
          
          <a href={`https://${t('gbbc.website')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-glow" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            {t('gbbc.visitCta')} →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Discipleship;
