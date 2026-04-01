import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Card from '../components/Card';
import PDFViewer from '../components/PDFViewer';
import { getAssetUrl } from '../config/assets';
import './Resources.css';

const Resources = () => {
  const { t } = useLanguage();
  const [viewingPdf, setViewingPdf] = useState(null);

  useEffect(() => {
    const revealOnScroll = () => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) element.classList.add('active');
      });
    };
    const timeout = setTimeout(() => revealOnScroll(), 100);
    window.addEventListener('scroll', revealOnScroll);
    return () => { clearTimeout(timeout); window.removeEventListener('scroll', revealOnScroll); };
  }, []);

  const handleView = (book) => setViewingPdf(book);
  const handleDownload = (pdfUrl) => window.open(pdfUrl, '_blank');

  const answerBooks = [
    { title: 'Answer Book 1: Soul Winning & Discipleship', description: 'Comprehensive guide to evangelism.', pdf: getAssetUrl('downloads/answers/ANSWERS-Book-1-SOUL-WINNING-DISCIPLESHIP.pdf') },
    { title: 'Answer Book 2: Proofs of Christ, The Bible, God', description: 'Apologetics and evidence for faith.', pdf: getAssetUrl('downloads/answers/ANSWERS-Book-2-PROOFS-OF-CHRIST-THE-BIBLE-GOD.pdf') },
    { title: 'Answer Book 3: Church Issues', description: 'Biblical answers to church questions.', pdf: getAssetUrl('downloads/answers/ANSWERS-Book-3-CHURCH-ISSUES.pdf') },
    { title: 'Answer Book 4: Christian Living', description: 'Practical guidance for daily life.', pdf: getAssetUrl('downloads/answers/ANSWERS-Book-4-CHRISTIAN-LIVING.pdf') },
    { title: 'Answer Book 5: False Doctrines Refuted', description: 'Biblical responses to false teachings.', pdf: getAssetUrl('downloads/answers/ANSWERS-Book-5-FALSE-DOCTRINES-REFUTED.pdf') },
    { title: 'Answer Book 6: False Religions', description: 'Understanding world religions.', pdf: getAssetUrl('downloads/answers/ANSWERS-Book-6-FALSE-RELIGIONS.pdf') },
    { title: 'Answer Book 7: Important Sermons', description: 'Essential sermon topics.', pdf: getAssetUrl('downloads/answers/ANSWERS-Book-7-IMPORTANT-SERMONS.pdf') },
  ];

  const otherResources = [
    { title: 'Lessons on Tongues', description: 'Biblical study on tongues. (Content pending delivery from Peter)', image: getAssetUrl('downloads/Tongues-Second-Edition.png'), pdf: getAssetUrl('downloads/Lessons-on-Tongues-.pdf') },
    { title: 'ABCs of Christian Growth', description: 'Foundational principles.', image: getAssetUrl('downloads/ABC-1.png'), pdf: getAssetUrl('downloads/courses/ABCs-of-Christian-Growth.pdf') },
    { title: 'ABCs of Christian Maturity', description: 'Advanced principles.', image: getAssetUrl('downloads/ABC-2.png'), pdf: getAssetUrl('downloads/courses/ABCs-of-Christian-Maturity.pdf') },
    { title: 'Know Your Bible Better', description: 'Study guide to Scripture.', image: getAssetUrl('downloads/2Know.png'), pdf: getAssetUrl('downloads/Know-Your-Bible-Better-New-revised.pdf') },
    { title: 'Raising Prince', description: 'Biblical parenting.', image: getAssetUrl('downloads/cover-1.png'), pdf: getAssetUrl('downloads/RAISING-PRINCE-REVISED.pdf') },
  ];

  return (
    <div className="resources-page">
      <section className="page-hero resources-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">{t('resourcesPage.badge')}</span>
            <h1>{t('resourcesPage.title')} <span className="gradient-text">{t('resourcesPage.titleHighlight')}</span></h1>
            <p>{t('resourcesPage.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="resources-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('resourcesPage.answerBooksTitle')} <span className="gradient-text">{t('resourcesPage.answerBooksHighlight')}</span></h2>
            <p>{t('resourcesPage.answerBooksSubtitle')}</p>
          </div>
          <div className="answer-books-grid">
            {answerBooks.map((book, index) => (
              <div className="answer-book-card" key={index}>
                <div className="book-number">{index + 1}</div>
                <div className="book-content">
                  <h4>{book.title}</h4>
                  <p>{book.description}</p>
                  <div className="book-actions">
                    <button className="btn btn-outline-small" onClick={() => handleView(book)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      {t('common.view')}
                    </button>
                    <button className="btn btn-primary-small" onClick={() => handleDownload(book.pdf)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      {t('common.download')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="featured-resources section" style={{ padding: '0 0 2rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Bible Hero Card */}
          <div className="bible-hero hover-glow reveal" style={{ 
            background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--secondary-rgb), 0.05) 100%)', 
            borderRadius: '16px', border: '1px solid rgba(var(--primary-rgb), 0.2)', padding: '3rem', 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <span className="section-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>{t('resourcesPage.bibleHighlight')}</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#fff' }}>{t('resourcesPage.bibleTitle')}</h2>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>{t('resourcesPage.bibleSubtitle')}</h4>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '2rem' }}>{t('resourcesPage.bibleDesc')}</p>
              <a href="https://www.bible.com/versions/1-kjv-king-james-version" target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-shine" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                {t('resourcesPage.bibleReadButton')} →
              </a>
            </div>
          </div>

          {/* GBBC Card */}
          <div className="gbbc-hero hover-glow reveal" style={{ 
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)', 
            borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '3rem', 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <span className="section-badge" style={{ marginBottom: '1rem', display: 'inline-block', background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', border: 'none' }}>{t('resourcesPage.gbbcAdvanced')}</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#fff' }}>{t('gbbc.title')}</h2>
              <h4 style={{ color: '#10b981', marginBottom: '1.5rem', fontSize: '1.2rem' }}>{t('resourcesPage.gbbcAdvancedSubtitle')}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) minmax(200px, 1fr)', gap: '1rem', color: 'var(--text-light)' }}>
                <li>✓ {t('gbbc.feature1')}</li>
                <li>✓ {t('gbbc.feature3')}</li>
                <li>✓ {t('gbbc.feature4')}</li>
              </ul>
              <a href={`https://${t('gbbc.website')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-glow" style={{ background: '#10b981', padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                {t('gbbc.visitCta')} →
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="resources-section section">
        <div className="container">
          <div className="section-header">
            <h2>{t('resourcesPage.additionalTitle')} <span className="gradient-text">{t('resourcesPage.additionalHighlight')}</span></h2>
            <p>{t('resourcesPage.additionalSubtitle')}</p>
          </div>
          <div className="grid grid-auto">
            {otherResources.map((resource, index) => (
              <Card key={index} image={resource.image} title={resource.title} description={resource.description} link={resource.pdf} linkText={t('common.downloadPdf')} />
            ))}
          </div>
        </div>
      </section>

      {viewingPdf && <PDFViewer pdfUrl={viewingPdf.pdf} title={viewingPdf.title} onClose={() => setViewingPdf(null)} />}
    </div>
  );
};

export default Resources;
