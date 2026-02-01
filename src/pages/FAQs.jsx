import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './FAQs.css';

const FAQs = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ keys for translation
  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      {/* Hero */}
      <section className="page-hero faqs-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">{t('faqs.badge')}</span>
            <h1>{t('faqs.title')} <span className="gradient-text">{t('faqs.titleHighlight')}</span></h1>
            <p>{t('faqs.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section section">
        <div className="container">
          <div className="faqs-grid">
            {faqKeys.map((key, index) => (
              <div 
                className={`faq-item ${openIndex === index ? 'open' : ''}`} 
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h4>{t(`faqs.${key}`)}</h4>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{t(`faqs.a${index + 1}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="questions-cta section">
        <div className="container">
          <div className="cta-card">
            <h2>{t('faqs.stillHaveQuestions')} <span className="gradient-text">{t('faqs.stillHaveQuestionsHighlight')}</span></h2>
            <p>{t('faqs.stillHaveQuestionsDesc')}</p>
            <a href="/contact" className="btn btn-primary">{t('nav.contactUs')}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
