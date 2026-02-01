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
      color: '#10b981',
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
      color: '#3b82f6',
      books: [
        { title: 'Christian Growth', cover: getAssetUrl('downloads/discipleship/level2-book1-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book1.pdf') },
        { title: 'Christian Maturity', cover: getAssetUrl('downloads/discipleship/level2-book2-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book2.pdf') },
        { title: 'The Bible', cover: getAssetUrl('downloads/discipleship/level2-book3-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book3.pdf') },
        { title: 'The New Testament Church', cover: getAssetUrl('downloads/discipleship/level2-book4-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book4.pdf') },
        { title: 'Soul Winning', cover: getAssetUrl('downloads/discipleship/level2-book5-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book5.pdf') },
        { title: 'Christian Stewardship', cover: getAssetUrl('downloads/discipleship/level2-book6-cover.png'), pdf: getAssetUrl('downloads/discipleship/level2-book6.pdf') },
      ]
    },
    {
      level: 3,
      titleKey: 'discipleship.level3Title',
      subtitleKey: 'discipleship.level3Subtitle',
      color: '#8b5cf6',
      books: [
        { title: 'Bible Doctrines', cover: getAssetUrl('downloads/discipleship/level3-book1-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book1.pdf') },
        { title: 'Church History', cover: getAssetUrl('downloads/discipleship/level3-book2-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book2.pdf') },
        { title: 'Hermeneutics', cover: getAssetUrl('downloads/discipleship/level3-book3-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book3.pdf') },
        { title: 'Homiletics', cover: getAssetUrl('downloads/discipleship/level3-book4-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book4.pdf') },
        { title: 'Pastoral Theology', cover: getAssetUrl('downloads/discipleship/level3-book5-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book5.pdf') },
        { title: 'Missions', cover: getAssetUrl('downloads/discipleship/level3-book6-cover.png'), pdf: getAssetUrl('downloads/discipleship/level3-book6.pdf') },
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
    </div>
  );
};

export default Discipleship;
