import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NextSteps.css';

const NextSteps = () => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (stepIndex) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const steps = [
    { 
      title: 'Get a Bible', 
      desc: 'The Bible is God\'s Word and your guide for life. Start with a translation you can understand easily.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="step-svg-icon">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ), 
      actionUrl: 'https://www.biblegateway.com/', 
      isExternal: true 
    },
    { 
      title: 'Start Reading', 
      desc: 'Begin reading God\'s Word daily. Start with the Gospel of John to learn about Jesus, then Romans to understand salvation.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="step-svg-icon">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ), 
      actionUrl: 'https://www.biblegateway.com/passage/?search=John%201&version=KJV', 
      isExternal: true 
    },
    { 
      title: 'Pray Daily', 
      desc: 'Prayer is simply talking to God. Thank Him, confess sins, ask for help, and pray for others.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="step-svg-icon">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 7v10M9 10h6"></path>
        </svg>
      ) 
    },
    { 
      title: 'Find a Church', 
      desc: 'Join a Bible-believing church where you can grow, learn, and fellowship with other Christians.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="step-svg-icon">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <path d="M12 11v6M10 13h4"></path>
        </svg>
      ) 
    },
    { 
      title: 'Get Baptized', 
      desc: 'Baptism is your public declaration of faith in Jesus Christ. It symbolizes your old life dying and new life beginning.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="step-svg-icon">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      ) 
    },
    { 
      title: 'Share Your Faith', 
      desc: 'Tell others what Jesus has done for you! Your testimony is powerful and can lead others to Christ.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="step-svg-icon">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ), 
      actionUrl: '/gospel-tracts' 
    }
  ];


  const progress = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <div className="next-steps-page">
      <section className="page-hero next-steps-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">Your Journey Begins</span>
            <h1>What Happens <span className="gradient-text">Next?</span></h1>
            <p>Congratulations on your decision to follow Jesus! Here are 6 important steps to grow in your new faith.</p>
          </div>
        </div>
      </section>

      <section className="progress-section section">
        <div className="container">
          <div className="progress-card">
            <h3>Your Progress</h3>
            <div className="progress-bar-large">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p>{completedSteps.length} of {steps.length} completed</p>
          </div>
        </div>
      </section>

      <section className="steps-section section">
        <div className="container">
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div 
                className={`step-card ${completedSteps.includes(index) ? 'completed' : ''}`} 
                key={index}
              >
                <div className="step-header">
                  <span className="step-icon">{step.icon}</span>
                  <span className="step-number">{index + 1}</span>
                  <button 
                    className="step-checkbox"
                    onClick={() => toggleStep(index)}
                    aria-label={completedSteps.includes(index) ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {completedSteps.includes(index) ? '✓' : ''}
                  </button>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {step.actionUrl && (
                  <div className="step-action">
                    {step.isExternal ? (
                      <a href={step.actionUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-small">
                        Learn More →
                      </a>
                    ) : (
                      <Link to={step.actionUrl} className="btn btn-outline-small">
                        Explore →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="encouragement-section section">
        <div className="container">
          <div className="encouragement-card">
            <h3>Remember, You're Not Alone!</h3>
            <p>God is with you every step of the way. The Holy Spirit lives within you to guide, comfort, and strengthen you.</p>
            <div className="encouragement-actions">
              <Link to="/discipleship" className="btn btn-primary">Explore Discipleship Materials</Link>
              <Link to="/contact" className="btn btn-secondary">Need Help? Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextSteps;
