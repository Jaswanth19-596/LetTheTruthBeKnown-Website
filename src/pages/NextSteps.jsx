import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './NextSteps.css';

const NextSteps = () => {
  const { t } = useLanguage();
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (stepIndex) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const steps = [
    { titleKey: 'nextSteps.step1Title', descKey: 'nextSteps.step1Desc', icon: '📖', actionUrl: 'https://www.biblegateway.com/', isExternal: true },
    { titleKey: 'nextSteps.step2Title', descKey: 'nextSteps.step2Desc', icon: '📚', actionUrl: 'https://www.biblegateway.com/passage/?search=John%201&version=KJV', isExternal: true },
    { titleKey: 'nextSteps.step3Title', descKey: 'nextSteps.step3Desc', icon: '🙏' },
    { titleKey: 'nextSteps.step4Title', descKey: 'nextSteps.step4Desc', icon: '⛪' },
    { titleKey: 'nextSteps.step5Title', descKey: 'nextSteps.step5Desc', icon: '💧' },
    { titleKey: 'nextSteps.step6Title', descKey: 'nextSteps.step6Desc', icon: '🌍', actionUrl: '/gospel-tracts' }
  ];

  const progress = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <div className="next-steps-page">
      <section className="page-hero next-steps-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">{t('nextSteps.badge')}</span>
            <h1>{t('nextSteps.title')} <span className="gradient-text">{t('nextSteps.titleHighlight')}</span></h1>
            <p>{t('nextSteps.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="progress-section section">
        <div className="container">
          <div className="progress-card">
            <h3>{t('nextSteps.progressTitle')}</h3>
            <div className="progress-bar-large">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p>{completedSteps.length} {t('common.of')} {steps.length} {t('common.completed')}</p>
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
                  <h3>{t(step.titleKey)}</h3>
                  <p>{t(step.descKey)}</p>
                </div>
                {step.actionUrl && (
                  <div className="step-action">
                    {step.isExternal ? (
                      <a href={step.actionUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-small">
                        {t('common.learnMore')} →
                      </a>
                    ) : (
                      <Link to={step.actionUrl} className="btn btn-outline-small">
                        {t('common.explore')} →
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
            <h3>{t('nextSteps.encouragementTitle')}</h3>
            <p>{t('nextSteps.encouragementDesc')}</p>
            <div className="encouragement-actions">
              <Link to="/discipleship" className="btn btn-primary">{t('nextSteps.exploreDiscipleship')}</Link>
              <Link to="/contact" className="btn btn-secondary">{t('nextSteps.needHelp')}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextSteps;
