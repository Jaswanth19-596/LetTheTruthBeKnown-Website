import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PDFViewer from '../components/PDFViewer';
import './SeekingTruth.css';

/* ─── PDF data for The True Gospel (Stop Tracts) ─── */
const trueGospelTracts = [
  { lang: 'English',  code: 'EN', pdf: '/downloads/stop_tracts/english.pdf' },
  { lang: 'Swahili',  code: 'SW', pdf: '/downloads/stop_tracts/swahili.pdf' },
  { lang: 'Luo',      code: 'LU', pdf: '/downloads/stop_tracts/luo.pdf' },
  { lang: 'Kalenjin', code: 'KA', pdf: '/downloads/stop_tracts/kalenjin.pdf' },
  { lang: 'Kisii',    code: 'KI', pdf: '/downloads/stop_tracts/kisii.pdf' },
  { lang: 'Maasai',   code: 'MA', pdf: '/downloads/stop_tracts/maasai.pdf' },
];

/* ─── PDF data for God's Simple Plan ─── */
const simpleplanTracts = [
  { lang: 'English',  code: 'EN', pdf: '/downloads/gospel_tracts/english.pdf' },
  { lang: 'Swahili',  code: 'SW', pdf: '/downloads/gospel_tracts/swahili.pdf' },
  { lang: 'Luo',      code: 'LU', pdf: '/downloads/gospel_tracts/luo.pdf' },
  { lang: 'Kikuyu',   code: 'KI', pdf: '/downloads/gospel_tracts/kikuyu.pdf' },
  { lang: 'Kalenjin', code: 'KA', pdf: '/downloads/gospel_tracts/kalenjin.pdf' },
  { lang: 'Arabic',   code: 'AR', pdf: '/downloads/gospel_tracts/arabic.pdf' },
  { lang: 'Amharic',  code: 'AM', pdf: '/downloads/gospel_tracts/amharic.pdf' },
  { lang: 'Maasai',   code: 'MA', pdf: '/downloads/gospel_tracts/maasai.pdf' },
  { lang: 'Kamba',    code: 'KM', pdf: '/downloads/gospel_tracts/kamba.pdf' },
];


const SeekingTruth = () => {
  const [viewingPdf, setViewingPdf] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Initialize Scroll-reveal observers for the revealed content
    const els = document.querySelectorAll('.st-reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('st-visible'); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="st-page">

      {/* ══ CINEMATIC HERO ══ */}
      <section className="st-hero">
        <div className="st-hero-bg"></div>
        <div className="st-hero-overlay"></div>
        <div className="st-hero-content">
          <span className="st-tag">Seeking Truth</span>
          <h1 className="st-hero-title">
            Your Search for <span className="st-gold">Truth</span> Begins Here
          </h1>
        </div>
      </section>

      <div className="st-revealed-wrapper">

          {/* ══ VIDEOS SECTION ══ */}
          <section className="st-videos-section st-reveal">
            <div className="st-section-header">
              <h2 className="st-videos-title">Essential Viewing</h2>
              <p className="st-videos-subtitle">Explore these two distinct windows into truth, salvation, and active faith.</p>
            </div>
            
            <div className="st-videos-grid">

              {/* Video 1 */}
              <div className="st-video-card">
                <div className="st-video-header-info">
                  <span className="st-video-badge">Watch First</span>
                  <h3 className="st-video-card-title">The Gospel Message</h3>
                  <p className="st-video-card-author">Presented by Pastor Wilkerson</p>
                </div>
                <div className="st-video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/Trw5FVDQmiA"
                    title="The Gospel Message — Pastor Wilkerson"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
                </div>
                <div className="st-video-desc-wrap">
                  <p className="st-video-desc">
                    What is the absolute truth about eternity? In this vital message, Pastor Wilkerson breaks down God's simple, life-changing plan of salvation from the Scriptures. Discover the love, the promise, and the assurance that can settle your soul forever.
                  </p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="st-video-card">
                <div className="st-video-header-info">
                  <span className="st-video-badge st-badge-secondary">A Story of Faith</span>
                  <h3 className="st-video-card-title">Missionary Documentary</h3>
                  <p className="st-video-card-author">Featuring Peter Morris</p>
                </div>
                <div className="st-video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/ATmIOERW--c"
                    title="Peter Morris Missionary Documentary"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
                </div>
                <div className="st-video-desc-wrap">
                  <p className="st-video-desc">
                    Faith in action. Journey with Peter Morris in this powerful documentary to see how the Gospel transcends borders and transforms hearts, families, and entire communities under the most extraordinary circumstances.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* ══ SALVATION QUIZ CTA ══ */}
          <section className="st-quiz-cta st-reveal">
            <div className="st-quiz-cta-inner">
              <p className="st-quiz-eyebrow">After watching</p>
              <h3 className="st-quiz-title">Are you sure you're saved?</h3>
              <p className="st-quiz-desc">
                Take a short Bible-based quiz to examine where you stand.
              </p>
              <Link to="/salvation-quiz" className="st-quiz-btn">
                Take the Salvation Quiz
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </section>

          {/* ══ THE TRUE GOSPEL TRACTS ══ */}
          <section className="st-tracts-section st-reveal">
            <div className="st-tracts-inner">
              <span className="st-tag">The True Gospel</span>
              <h3 className="st-tracts-title">Download or View Tracts</h3>
              <p className="st-tracts-sub">
                Available in multiple languages — share with someone you love.
              </p>

              <div className="st-tract-group">
                <h4 className="st-tract-group-label">STOP! Tracts</h4>
                <div className="st-tract-grid">
                  {trueGospelTracts.map((t) => (
                    <div key={t.lang} className="st-tract-row">
                      <span className="st-tract-code">{t.code}</span>
                      <span className="st-tract-lang">{t.lang}</span>
                      <div className="st-tract-actions">
                        <a href={t.pdf} download className="st-tract-btn st-btn-dl">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          Download
                        </a>
                        <button onClick={() => setViewingPdf({pdf: t.pdf, title: `STOP! Tract - ${t.lang}`})} className="st-tract-btn st-btn-view">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="st-tract-group">
                <h4 className="st-tract-group-label">God's Simple Plan of Salvation</h4>
                <div className="st-tract-grid">
                  {simpleplanTracts.map((t) => (
                    <div key={t.lang} className="st-tract-row">
                      <span className="st-tract-code">{t.code}</span>
                      <span className="st-tract-lang">{t.lang}</span>
                      <div className="st-tract-actions">
                        <a href={t.pdf} download className="st-tract-btn st-btn-dl">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          Download
                        </a>
                        <button onClick={() => setViewingPdf({pdf: t.pdf, title: `God's Simple Plan - ${t.lang}`})} className="st-tract-btn st-btn-view">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ══ NEXT STEP FOOTER ══ */}
          <section className="st-next st-reveal">
            <p className="st-next-label">Just got saved?</p>
            <h3 className="st-next-title">What happens next?</h3>
            <p className="st-next-desc">Learn the essential first steps as a new believer.</p>
            <Link to="/next-steps" className="st-next-btn">
              Your Next Steps →
            </Link>
          </section>

        </div>

      {viewingPdf && <PDFViewer pdfUrl={viewingPdf.pdf} title={viewingPdf.title} onClose={() => setViewingPdf(null)} />}
    </div>
  );
};

export default SeekingTruth;
