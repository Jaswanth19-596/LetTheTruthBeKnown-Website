import { useState, useEffect } from 'react';
import './Discipleship.css';
import { getAssetUrl } from '../config/assets';
import PDFViewer from '../components/PDFViewer';

const Discipleship = () => {
  const [activeLevel, setActiveLevel] = useState(1);
  const [viewingPdf, setViewingPdf] = useState(null);

  // Scroll reveal effect - re-runs when activeLevel changes
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

    // Small delay to allow DOM to update with new books, then trigger
    const timeout = setTimeout(() => {
      revealOnScroll();
    }, 100);

    window.addEventListener('scroll', revealOnScroll);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, [activeLevel]); // Re-run when level changes

  const handleView = (book) => {
    setViewingPdf(book);
  };

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const levels = [
    {
      level: 1,
      title: 'Foundations',
      subtitle: 'Essential truths for new believers',
      color: '#10b981',
      books: [
        { 
          title: 'Assurance of Salvation', 
          cover: getAssetUrl('downloads/discipleship/level1-book1-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level1-book1.pdf')
        },
        { 
          title: 'Prayer', 
          cover: getAssetUrl('downloads/discipleship/level1-book2-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level1-book2.pdf')
        },
        { 
          title: 'The Church', 
          cover: getAssetUrl('downloads/discipleship/level1-book3-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level1-book3.pdf')
        },
        { 
          title: 'The Word of God', 
          cover: getAssetUrl('downloads/discipleship/level1-book4-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level1-book4.pdf')
        },
      ]
    },
    {
      level: 2,
      title: 'Growth',
      subtitle: 'Deeper understanding for maturing believers',
      color: '#3b82f6',
      books: [
        { 
          title: 'Christian Growth', 
          cover: getAssetUrl('downloads/discipleship/level2-book1-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level2-book1.pdf')
        },
        { 
          title: 'Christian Maturity', 
          cover: getAssetUrl('downloads/discipleship/level2-book2-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level2-book2.pdf')
        },
        { 
          title: 'The Bible', 
          cover: getAssetUrl('downloads/discipleship/level2-book3-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level2-book3.pdf')
        },
        { 
          title: 'The New Testament Church', 
          cover: getAssetUrl('downloads/discipleship/level2-book4-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level2-book4.pdf')
        },
        { 
          title: 'Forgiveness', 
          cover: getAssetUrl('downloads/discipleship/level2-book5-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level2-book5.pdf')
        },
        { 
          title: 'Financial Stewardship', 
          cover: getAssetUrl('downloads/discipleship/level2-book6-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level2-book6.pdf')
        },
        { 
          title: 'Judgment Seat of Christ', 
          cover: getAssetUrl('downloads/discipleship/level2-book7-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level2-book7.pdf')
        },
        { 
          title: "God's Will for Your Life", 
          cover: getAssetUrl('downloads/book-08-Gods_will_for_your_life_cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level2-book8.pdf')
        },
      ]
    },
    {
      level: 3,
      title: 'Maturity',
      subtitle: 'Advanced studies for spiritual leaders',
      color: '#a855f7',
      books: [
        { 
          title: 'Grace', 
          cover: getAssetUrl('downloads/discipleship/level-03-book-1-grace-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level3-book1.pdf')
        },
        { 
          title: 'Practical Christian Living', 
          cover: getAssetUrl('downloads/discipleship/level-03-book-2-practical-christian-living-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level3-book2.pdf')
        },
        { 
          title: 'Sanctification', 
          cover: getAssetUrl('downloads/discipleship/level-03-book-6-sanctification-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level3-book3.pdf')
        },
        { 
          title: 'Victory Over Sin', 
          cover: getAssetUrl('downloads/discipleship/level-03-book-4-victory-over-sin-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level3-book4.pdf')
        },
        { 
          title: 'Jesus Christ', 
          cover: getAssetUrl('downloads/discipleship/level-03-book-5-jesus-christ-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level3-book5.pdf')
        },
        { 
          title: 'Creation', 
          cover: getAssetUrl('downloads/discipleship/level-03-book-6-creation-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level3-book6.pdf')
        },
        { 
          title: 'Spiritual Gifts', 
          cover: getAssetUrl('downloads/discipleship/level-03-book-7-spiritual-gifts-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level3-book7.pdf')
        },
        { 
          title: 'Our Spiritual Armor', 
          cover: getAssetUrl('downloads/discipleship/level-03-book-8-our-spiritual-armor-cover.png'),
          pdf: getAssetUrl('downloads/discipleship/level3-book8.pdf')
        },
      ]
    }
  ];

  const currentLevel = levels.find(l => l.level === activeLevel);

  return (
    <div className="discipleship-page">
      {/* Hero */}
      <section className="page-hero discipleship-hero">
        <div className="hero-bg-elements">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge animate-fadeInDown">Growth Journey</span>
            <h1 className="animate-fadeInUp delay-100">
              Discipleship <span className="gradient-text-animated">Program</span>
            </h1>
            <p className="animate-fadeIn delay-200">
              A three-level journey through essential Christian teachings. Grow from new believer to mature disciple.
            </p>
            
            {/* Progress Indicator */}
            <div className="level-progress-bar animate-fadeInUp delay-300">
              <div className="progress-track">
                {levels.map((level, index) => (
                  <div key={level.level} className="progress-step-container">
                    <button
                      className={`progress-step ${activeLevel >= level.level ? 'completed' : ''} ${activeLevel === level.level ? 'active' : ''}`}
                      onClick={() => setActiveLevel(level.level)}
                      style={{ '--level-color': level.color }}
                    >
                      <span className="step-circle">{level.level}</span>
                      <span className="step-label">{level.title}</span>
                    </button>
                    {index < levels.length - 1 && (
                      <div className={`progress-connector ${activeLevel > level.level ? 'active' : ''}`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Content */}
      <section className="level-content section">
        <div className="container">
          <div className="level-header reveal">
            <div className="level-badge" style={{ '--level-color': currentLevel.color }}>
              <span className="level-number">Level {currentLevel.level}</span>
            </div>
            <h2>{currentLevel.title}</h2>
            <p>{currentLevel.subtitle}</p>
            <div className="book-count">
              <span className="count">{currentLevel.books.length}</span>
              <span className="label">Books in this level</span>
            </div>
          </div>

          <div className="books-grid">
            {currentLevel.books.map((book, index) => (
              <div 
                className={`book-card reveal`}
                key={index}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="book-cover" onClick={() => handleView(book)}>
                  <img src={book.cover} alt={book.title} />
                  <div className="book-shine"></div>
                  <div className="book-overlay">
                    <div className="view-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </div>
                    <span>Click to View</span>
                  </div>
                </div>
                <div className="book-info">
                  <span className="book-index" style={{ '--level-color': currentLevel.color }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4>{book.title}</h4>
                </div>
                <div className="book-actions">
                  <button className="book-btn view-btn" onClick={() => handleView(book)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    View
                  </button>
                  <button className="book-btn download-btn" onClick={() => handleDownload(book.pdf)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7,10 12,15 17,10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey CTA */}
      <section className="journey-cta section">
        <div className="container">
          <div className="journey-card reveal-scale">
            <div className="journey-bg-glow"></div>
            <div className="journey-content">
              <h3>Start Your <span className="gradient-text-animated">Journey Today</span></h3>
              <p>Begin with Level 1 and work through each book systematically. Each level builds on the previous one to help you grow in your faith.</p>
              <div className="journey-steps">
                <div className="journey-step">
                  <span className="step-number">1</span>
                  <div className="step-content">
                    <span className="step-title">Download</span>
                    <span className="step-desc">Get the materials</span>
                  </div>
                </div>
                <div className="step-arrow">→</div>
                <div className="journey-step">
                  <span className="step-number">2</span>
                  <div className="step-content">
                    <span className="step-title">Study</span>
                    <span className="step-desc">Learn each lesson</span>
                  </div>
                </div>
                <div className="step-arrow">→</div>
                <div className="journey-step">
                  <span className="step-number">3</span>
                  <div className="step-content">
                    <span className="step-title">Apply</span>
                    <span className="step-desc">Live it out daily</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {viewingPdf && (
        <PDFViewer 
          pdfUrl={viewingPdf.pdf} 
          title={viewingPdf.title} 
          onClose={() => setViewingPdf(null)} 
        />
      )}
    </div>
  );
};

export default Discipleship;

