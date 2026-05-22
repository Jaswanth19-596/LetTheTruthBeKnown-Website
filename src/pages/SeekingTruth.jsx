import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

/* ─── Worldview Explorer Questions ─── */
const worldviewQuestions = [
  {
    id: 'cosmos',
    question: 'Do you believe the universe is a product of conscious design or random chance?',
    options: [
      { id: 'design', label: 'Conscious Design', sub: 'The cosmos shows order, fine-tuning, and purpose.' },
      { id: 'chance', label: 'Random Chance', sub: 'The universe is a product of accidental natural processes.' },
      { id: 'unsure', label: 'Unsure / Exploring', sub: 'I am open-minded but haven\'t reached a conclusion.' }
    ]
  },
  {
    id: 'morality',
    question: 'Is morality objective (always wrong to hurt a child) or subjective (depends on culture)?',
    options: [
      { id: 'objective', label: 'Objective Morality', sub: 'Some things are fundamentally right or wrong for everyone.' },
      { id: 'subjective', label: 'Subjective Morality', sub: 'Right and wrong are defined by society or preference.' },
      { id: 'unsure', label: 'Unsure / Exploring', sub: 'I struggle to define where morality originates.' }
    ]
  },
  {
    id: 'revelation',
    question: 'If a Creator exists, do you think He is silent, or has He spoken to humanity?',
    options: [
      { id: 'spoken', label: 'He Has Spoken', sub: 'Through history, conscience, or sacred texts.' },
      { id: 'silent', label: 'He Is Silent', sub: 'A distant force that does not communicate or interfere.' },
      { id: 'unsure', label: 'Unsure / Exploring', sub: 'I don\'t know if a Creator would communicate with us.' }
    ]
  }
];

const getWorldviewAnalysis = (answers) => {
  const { cosmos, morality, revelation } = answers;

  if (cosmos === 'chance' && morality === 'subjective' && revelation === 'silent') {
    return {
      title: 'The Naturalist Perspective',
      desc: 'You view the universe through a naturalistic, rational lens. In a world shaped by chance, meaning and morality are often self-created. Yet, the human heart consistently hungers for objective justice and ultimate purpose. If naturalism is true, this hunger is an illusion. But what if it is a signpost? We invite you to watch Wilkerson\'s message to explore if there is a voice calling out from the silence of the cosmos.',
      recommendation: 'gospel'
    };
  }

  if (cosmos === 'design' && morality === 'objective' && revelation === 'spoken') {
    return {
      title: 'The Design Intuitive',
      desc: 'You recognize order in the universe, believe in objective standards of right and wrong, and are open to the idea that the Creator has spoken. If the Creator has communicated, the ultimate question is: What did He say, and what does He ask of us? We highly recommend watching Pastor Wilkerson\'s message to discover God\'s direct, written plan of salvation.',
      recommendation: 'gospel'
    };
  }

  if (cosmos === 'unsure' || morality === 'unsure' || revelation === 'unsure') {
    return {
      title: 'The Honest Seeker',
      desc: 'You approach the big questions of life with intellectual honesty and a healthy skepticism. You don\'t settle for easy answers. If there is even a small possibility that a personal Creator has spoken, investigating that claim is the most important journey you can take. We invite you to watch both videos below to see the logical claims of the Gospel and a living picture of faith in action.',
      recommendation: 'both'
    };
  }

  // Mixed views
  return {
    title: 'The Inquiring Mind',
    desc: 'Your worldview combines design, rational skepticism, and moral curiosity. You see order in some areas but remain skeptical in others. This is a powerful place to start. If there is a moral law, there must be a lawgiver. We challenge you to watch Pastor Wilkerson\'s message to see how the moral law and the grace of the Gospel fit together.',
    recommendation: 'gospel'
  };
};

const SeekingTruth = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0, 1, 2, 3 (analysis revealed)
  const [answers, setAnswers] = useState({ cosmos: null, morality: null, revelation: null });
  const [skipped, setSkipped] = useState(false);

  const showContent = currentStep >= 3 || skipped;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showContent) {
      // Initialize Scroll-reveal observers for the newly revealed content
      const els = document.querySelectorAll('.st-reveal');
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('st-visible'); }),
        { threshold: 0.12 }
      );
      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, [showContent]);

  const handleSelectOption = (questionKey, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionKey]: optionId }));
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    
    if (nextStep >= 3) {
      setTimeout(() => {
        const target = document.getElementById('st-results-anchor');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleSkip = () => {
    setSkipped(true);
    setTimeout(() => {
      const target = document.getElementById('st-videos-anchor');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleResetQuiz = () => {
    setAnswers({ cosmos: null, morality: null, revelation: null });
    setSkipped(false);
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const analysis = currentStep >= 3 ? getWorldviewAnalysis(answers) : null;

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
          <p className="st-hero-subtitle">
            Step away from the noise. Before looking at salvation, let's explore how you view the cosmos, morality, and eternity through this simple worldview inquiry.
          </p>
          <blockquote className="st-verse">
            "And ye shall know the truth, and the truth shall make you free."
            <cite>— John 8:32</cite>
          </blockquote>
        </div>
      </section>

      {/* ══ WORLDVIEW EXPLORER WIZARD ══ */}
      <section className="st-explorer-section">
        <div className="st-explorer-inner">
          
          {!showContent ? (
            <div className="st-explorer-card">
              <div className="st-explorer-card-header">
                <span className="st-explorer-step-label">Worldview Inquiry • Step {currentStep + 1} of 3</span>
                <div className="st-explorer-progress-track">
                  <div className="st-explorer-progress-fill" style={{ width: `${((currentStep) / 3) * 100}%` }}></div>
                </div>
              </div>

              <div className="st-explorer-card-body">
                <h2 className="st-explorer-question">
                  {worldviewQuestions[currentStep].question}
                </h2>
                <div className="st-explorer-options-grid">
                  {worldviewQuestions[currentStep].options.map((opt) => (
                    <button
                      key={opt.id}
                      className="st-explorer-option"
                      onClick={() => handleSelectOption(worldviewQuestions[currentStep].id, opt.id)}
                    >
                      <span className="st-option-title">{opt.label}</span>
                      <span className="st-option-sub">{opt.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="st-explorer-card-footer">
                <button className="st-explorer-skip-btn" onClick={handleSkip}>
                  Skip quiz & view videos directly →
                </button>
              </div>
            </div>
          ) : (
            analysis && (
              <div id="st-results-anchor" className="st-analysis-card">
                <div className="st-analysis-badge">Your Profile Summary</div>
                <h2 className="st-analysis-title">{analysis.title}</h2>
                <p className="st-analysis-desc">{analysis.desc}</p>
                
                <div className="st-analysis-recommendation">
                  <span className="st-recommend-label">Next step:</span>
                  <p className="st-recommend-text">
                    {analysis.recommendation === 'both' 
                      ? 'We recommend watching both of the videos below to explore these answers further.'
                      : `Based on your profile, we highly recommend watching the ${analysis.recommendation === 'gospel' ? 'Gospel Message' : 'Missionary Documentary'} video below first.`}
                  </p>
                </div>

                <div className="st-analysis-actions">
                  <button className="st-reset-quiz-btn" onClick={handleResetQuiz}>
                    ← Reset Profile Explorer
                  </button>
                </div>
              </div>
            )
          )}
          
        </div>
      </section>

      {/* ══ DYNAMIC REVEAL CONTENT ══ */}
      {showContent && (
        <div id="st-videos-anchor" className="st-revealed-wrapper">

          {/* ══ VIDEOS SECTION ══ */}
          <section className="st-videos-section st-reveal">
            <div className="st-section-header">
              <h2 className="st-videos-title">Essential Viewing</h2>
              <p className="st-videos-subtitle">Explore these two distinct windows into truth, salvation, and active faith.</p>
            </div>
            
            <div className="st-videos-grid">

              {/* Video 1 */}
              <div className={`st-video-card ${(analysis?.recommendation === 'gospel' || analysis?.recommendation === 'both') ? 'st-video-card-recommended' : ''}`}>
                <div className="st-video-header-info">
                  {(analysis?.recommendation === 'gospel' || analysis?.recommendation === 'both') && <span className="st-video-badge-gold">Highly Recommended</span>}
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
              <div className={`st-video-card ${(analysis?.recommendation === 'documentary' || analysis?.recommendation === 'both') ? 'st-video-card-recommended' : ''}`}>
                <div className="st-video-header-info">
                  {(analysis?.recommendation === 'documentary' || analysis?.recommendation === 'both') && <span className="st-video-badge-gold">Highly Recommended</span>}
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
                        <a href={t.pdf} target="_blank" rel="noopener noreferrer" className="st-tract-btn st-btn-view">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                          View
                        </a>
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
                        <a href={t.pdf} target="_blank" rel="noopener noreferrer" className="st-tract-btn st-btn-view">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                          View
                        </a>
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
      )}

    </div>
  );
};

export default SeekingTruth;
