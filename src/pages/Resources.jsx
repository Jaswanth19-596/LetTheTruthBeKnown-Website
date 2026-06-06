import { useState, useEffect } from 'react';
import Card from '../components/Card';
import PDFViewer from '../components/PDFViewer';
import { getAssetUrl } from '../config/assets';
import './Resources.css';

const Resources = () => {
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
    { title: 'Answer Book 1: Soul Winning & Discipleship', description: 'Comprehensive guide to evangelism.', pdf: getAssetUrl('downloads/answers/01-soul-winning-discipleship.pdf') },
    { title: 'Answer Book 2: Proofs of Christ, The Bible, God', description: 'Apologetics and evidence for faith.', pdf: getAssetUrl('downloads/answers/02-proofs-of-christ.pdf') },
    { title: 'Answer Book 3: Church Issues', description: 'Biblical answers to church questions.', pdf: getAssetUrl('downloads/answers/03-church-issues.pdf') },
    { title: 'Answer Book 4: Christian Living', description: 'Practical guidance for daily life.', pdf: getAssetUrl('downloads/answers/04-christian-living.pdf') },
    { title: 'Answer Book 5: False Doctrines Refuted', description: 'Biblical responses to false teachings.', pdf: getAssetUrl('downloads/answers/05-false-doctrines-refuted.pdf') },
    { title: 'Answer Book 6: False Religions', description: 'Understanding world religions.', pdf: getAssetUrl('downloads/answers/06-false-religions.pdf') },
    { title: 'Answer Book 7: Important Sermons', description: 'Essential sermon topics.', pdf: getAssetUrl('downloads/answers/07-important-sermons.pdf') },
  ];

  const otherResources = [
    { title: 'Lessons on Tongues', description: 'Biblical study on tongues. (Content pending delivery from Peter)', image: getAssetUrl('downloads/resources/thumbnails/lessons-on-tongues.png'), pdf: getAssetUrl('downloads/resources/books/lessons-on-tongues.pdf') },
    { title: 'ABCs of Christian Growth', description: 'Foundational principles.', image: getAssetUrl('downloads/resources/thumbnails/abcs-of-christian-growth.png'), pdf: getAssetUrl('downloads/resources/books/abcs-of-christian-growth.pdf') },
    { title: 'ABCs of Christian Maturity', description: 'Advanced principles.', image: getAssetUrl('downloads/resources/thumbnails/abcs-of-christian-maturity.png'), pdf: getAssetUrl('downloads/resources/books/abcs-of-christian-maturity.pdf') },
    { title: 'Know Your Bible Better', description: 'Study guide to Scripture.', image: getAssetUrl('downloads/resources/thumbnails/know-your-bible-better.png'), pdf: getAssetUrl('downloads/resources/books/know-your-bible-better.pdf') },
    { title: 'Raising Prince', description: 'Biblical parenting.', image: getAssetUrl('downloads/resources/thumbnails/raising-prince.png'), pdf: getAssetUrl('downloads/resources/books/raising-prince.pdf') },
  ];

  return (
    <div className="resources-page">
      <section className="page-hero resources-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">Library</span>
            <h1>Free <span className="gradient-text">Resources</span></h1>
            <p>Download our free biblical materials, answer books, and study guides.</p>
          </div>
        </div>
      </section>

      <section className="resources-section section">
        <div className="container">
          <div className="section-header">
            <h2>The Answer Book <span className="gradient-text">Series</span></h2>
            <p>A comprehensive 7-volume collection answering common questions about faith, doctrine, and Christian living.</p>
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
                      View
                    </button>
                    <button className="btn btn-primary-small" onClick={() => handleDownload(book.pdf)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      Download
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
            background: 'var(--bg-secondary)', 
            borderRadius: '16px', border: '1px solid var(--glass-border)', padding: 'clamp(1.5rem, 5vw, 3rem)', 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(1.5rem, 5vw, 3rem)', flexWrap: 'wrap',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <span className="section-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Essential Resource</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', marginBottom: '0.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-family-heading)', wordWrap: 'break-word' }}>The Holy Bible (KJV)</h2>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: 'clamp(1rem, 4vw, 1.2rem)', wordWrap: 'break-word' }}>The foundation of truth.</h4>
              <p style={{ fontSize: 'clamp(1rem, 3vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>We believe the King James Version (KJV) is the preserved Word of God for English-speaking people. It is the final authority in all matters of faith and practice.</p>
              <a href="https://www.bible.com/versions/1-kjv-king-james-version" target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-shine" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                Read Online →
              </a>
            </div>
          </div>

          {/* GBBC Card */}
          <div className="gbbc-hero hover-glow reveal" style={{ 
            background: 'var(--bg-primary)', 
            borderRadius: '16px', border: '1px solid var(--glass-border)', padding: 'clamp(1.5rem, 5vw, 3rem)', 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(1.5rem, 5vw, 3rem)', flexWrap: 'wrap',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <span className="section-badge" style={{ marginBottom: '1rem', display: 'inline-block', background: 'rgba(15, 61, 89, 0.1)', color: 'var(--primary-color)', border: 'none' }}>Advanced Studies</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', marginBottom: '0.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-family-heading)', wordWrap: 'break-word' }}>Global Bible Baptist College</h2>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: 'clamp(1rem, 4vw, 1.2rem)', wordWrap: 'break-word' }}>Take your biblical education further</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1rem', color: 'var(--text-secondary)' }}>
                <li>✓ Pre-recorded video lectures</li>
                <li>✓ Study on any device</li>
                <li>✓ Earn a 3-year "Bachelor of Biblical Studies" degree</li>
              </ul>
              <a href="https://gbbc.net" target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-glow" style={{ background: 'var(--primary-color)', padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                Visit Website →
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="resources-section section">
        <div className="container">
          <div className="section-header">
            <h2>Additional <span className="gradient-text">Study Guides</span></h2>
            <p>More materials for personal growth and ministry.</p>
          </div>
          <div className="grid grid-auto">
            {otherResources.map((resource, index) => (
              <Card key={index} image={resource.image} title={resource.title} description={resource.description} link={resource.pdf} linkText="Download PDF" />
            ))}
          </div>
        </div>
      </section>

      {/* Brandon Heselschwerdt Series */}
      <section className="resources-section section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ background: 'var(--temple-blue-light)', color: 'var(--temple-blue)' }}>Coming Soon</span>
            <h2>Brandon Heselschwerdt <span className="gradient-text">Series</span></h2>
            <p>A new series of lessons on Salvation, Tongues, Soul Winning, and Discipleship.</p>
          </div>
          <div className="grid grid-auto">
            <Card title="Salvation Series" description="Lessons on Salvation by Brandon Heselschwerdt. (Pending Upload)" />
            <Card title="Lessons on Tongues" description="Biblical teaching on Tongues. (Pending Upload)" />
            <Card title="Soul Winning" description="Practical guide to sharing your faith. (Pending Upload)" />
            <Card title="TAN Series & Discipleship" description="Advanced discipleship materials. (Pending Upload)" />
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="notice-board-section section" style={{ borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-badge" style={{ background: 'rgba(184, 134, 11, 0.2)', color: 'var(--gold)' }}>Announcements</span>
            <h2>Ministry <span className="gradient-text-animated">Notice Board</span></h2>
          </div>
          <div className="notice-board-card" style={{ background: 'var(--parchment)', padding: '3rem', borderRadius: '15px', border: '3px solid var(--gold)', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', background: 'rgba(200, 146, 42, 0.1)', border: '1px solid rgba(200, 146, 42, 0.3)', borderRadius: '50%', color: 'var(--gold)', marginBottom: '1.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </span>
              <h3>No New Announcements</h3>
              <p>Check back here for special articles, photos, events, and recognition of pastors and their ministries.</p>
            </div>
          </div>
        </div>
      </section>

      {viewingPdf && <PDFViewer pdfUrl={viewingPdf.pdf} title={viewingPdf.title} onClose={() => setViewingPdf(null)} />}
    </div>
  );
};

export default Resources;
