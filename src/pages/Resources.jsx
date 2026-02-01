import { useState, useEffect } from 'react';
import Card from '../components/Card';
import PDFViewer from '../components/PDFViewer';
import { getAssetUrl } from '../config/assets';
import './Resources.css';

const Resources = () => {
  const [viewingPdf, setViewingPdf] = useState(null);

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

    const timeout = setTimeout(() => {
      revealOnScroll();
    }, 100);

    window.addEventListener('scroll', revealOnScroll);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  const handleView = (book) => {
    setViewingPdf(book);
  };

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const answerBooks = [
    {
      title: 'Answer Book 1: Soul Winning & Discipleship',
      description: 'Comprehensive guide to evangelism and discipling new believers.',
      pdf: getAssetUrl('downloads/answers/ANSWERS-Book-1-SOUL-WINNING-DISCIPLESHIP.pdf')
    },
    {
      title: 'Answer Book 2: Proofs of Christ, The Bible, God',
      description: 'Apologetics and evidence for the Christian faith.',
      pdf: getAssetUrl('downloads/answers/ANSWERS-Book-2-PROOFS-OF-CHRIST-THE-BIBLE-GOD.pdf')
    },
    {
      title: 'Answer Book 3: Church Issues',
      description: 'Biblical answers to common church questions.',
      pdf: getAssetUrl('downloads/answers/ANSWERS-Book-3-CHURCH-ISSUES.pdf')
    },
    {
      title: 'Answer Book 4: Christian Living',
      description: 'Practical guidance for daily Christian life.',
      pdf: getAssetUrl('downloads/answers/ANSWERS-Book-4-CHRISTIAN-LIVING.pdf')
    },
    {
      title: 'Answer Book 5: False Doctrines Refuted',
      description: 'Biblical responses to common false teachings.',
      pdf: getAssetUrl('downloads/answers/ANSWERS-Book-5-FALSE-DOCTRINES-REFUTED.pdf')
    },
    {
      title: 'Answer Book 6: False Religions',
      description: 'Understanding and responding to world religions.',
      pdf: getAssetUrl('downloads/answers/ANSWERS-Book-6-FALSE-RELIGIONS.pdf')
    },
    {
      title: 'Answer Book 7: Important Sermons',
      description: 'Collection of essential sermon topics.',
      pdf: getAssetUrl('downloads/answers/ANSWERS-Book-7-IMPORTANT-SERMONS.pdf')
    },
  ];

  const otherResources = [
    {
      title: 'Lessons on Tongues',
      description: 'Biblical study on the gift of tongues.',
      image: getAssetUrl('downloads/Tongues-Second-Edition.png'),
      pdf: getAssetUrl('downloads/Lessons-on-Tongues-Second-Edition.pdf')
    },
    {
      title: 'ABCs of Christian Growth',
      description: 'Foundational principles for spiritual growth.',
      image: getAssetUrl('downloads/ABC-1.png'),
      pdf: getAssetUrl('downloads/courses/ABCs-of-Christian-Growth.pdf')
    },
    {
      title: 'ABCs of Christian Maturity',
      description: 'Advanced principles for mature believers.',
      image: getAssetUrl('downloads/ABC-2.png'),
      pdf: getAssetUrl('downloads/courses/ABCs-of-Christian-Maturity.pdf')
    },
    {
      title: 'Know Your Bible Better',
      description: 'Study guide to understanding Scripture.',
      image: getAssetUrl('downloads/2Know.png'),
      pdf: getAssetUrl('downloads/Know-Your-Bible-Better-New-revised.pdf')
    },
    {
      title: 'Raising a Prince',
      description: 'Biblical parenting principles.',
      image: getAssetUrl('downloads/cover-1.png'),
      pdf: getAssetUrl('downloads/RAISING-PRINCE-REVISED.pdf')
    },
  ];

  return (
    <div className="resources-page">
      {/* Hero */}
      <section className="page-hero resources-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">Resources</span>
            <h1>Other <span className="gradient-text">Resources</span></h1>
            <p>Additional study materials, answer books, and teaching resources for deeper Bible study.</p>
          </div>
        </div>
      </section>

      {/* Answer Books Section */}
      <section className="resources-section section">
        <div className="container">
          <div className="section-header">
            <h2>Answer <span className="gradient-text">Book Series</span></h2>
            <p>7-volume series answering the most common questions about Christianity</p>
          </div>

          <div className="answer-books-grid">
            {answerBooks.map((book, index) => (
              <div className="answer-book-card" key={index}>
                <div className="book-number">{index + 1}</div>
                <div className="book-content">
                  <h4>{book.title}</h4>
                  <p>{book.description}</p>
                  <div className="book-actions">
                    <button 
                      className="btn btn-outline-small"
                      onClick={() => handleView(book)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      View
                    </button>
                    <button 
                      className="btn btn-primary-small"
                      onClick={() => handleDownload(book.pdf)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Resources Section */}
      <section className="resources-section section">
        <div className="container">
          <div className="section-header">
            <h2>Additional <span className="gradient-text">Resources</span></h2>
            <p>Study guides and teaching materials</p>
          </div>

          <div className="grid grid-auto">
            {otherResources.map((resource, index) => (
              <Card
                key={index}
                image={resource.image}
                title={resource.title}
                description={resource.description}
                link={resource.pdf}
                linkText="Download PDF"
              />
            ))}
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

export default Resources;

