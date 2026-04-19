import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">{t('contact.badge')}</span>
            <h1>{t('contact.title')} <span className="gradient-text">{t('contact.titleHighlight')}</span></h1>
            <p>{t('contact.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>{t('contact.infoTitle')} <span className="gradient-text">{t('contact.infoHighlight')}</span></h2>
              <p>{t('contact.infoDesc')}</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-details">
                    <h4>{t('contact.email')}</h4>
                    <p>info@letthetruthbeknown.org</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-details">
                    <h4>{t('contact.website')}</h4>
                    <p>www.letthetruthbeknown.org</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-details">
                    <h4>{t('contact.ministry')}</h4>
                    <p>{t('contact.ministryDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="contact-verse">
                <p>"{t('contact.contactVerse')}"</p>
                <span>{t('contact.contactVerseRef')}</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h3>{t('contact.formTitle')}</h3>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.formName')}</label>
                  <input type="text" id="name" placeholder={t('contact.formNamePlaceholder')} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('contact.formEmail')}</label>
                  <input type="email" id="email" placeholder={t('contact.formEmailPlaceholder')} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">{t('contact.formSubject')}</label>
                  <select id="subject">
                    <option value="">{t('contact.formSubjectSelect')}</option>
                    <option value="question">{t('contact.formSubjectGeneral')}</option>
                    <option value="materials">{t('contact.formSubjectMaterials')}</option>
                    <option value="translation">{t('contact.formSubjectTranslation')}</option>
                    <option value="partnership">{t('contact.formSubjectPartnership')}</option>
                    <option value="prayer">{t('contact.formSubjectPrayer')}</option>
                    <option value="other">{t('contact.formSubjectOther')}</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('contact.formMessage')}</label>
                  <textarea id="message" rows="5" placeholder={t('contact.formMessagePlaceholder')}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-full">
                  {t('contact.formSubmit')}
                </button>
                
                <p className="form-note">{t('contact.formNote')}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t('contact.quickResources')} <span className="gradient-text">{t('contact.quickResourcesHighlight')}</span></h2>
          </div>
          <div className="links-grid">
            <a href="/gospel-tracts" className="quick-link-card">
              <h4>{t('nav.gospelTracts')}</h4>
              <p>{t('contact.downloadFreeTracts')}</p>
            </a>
            <a href="/discipleship" className="quick-link-card">
              <h4>{t('nav.discipleship')}</h4>
              <p>{t('contact.growthMaterials')}</p>
            </a>
            <a href="/salvation-quiz" className="quick-link-card">
              <h4>{t('nav.salvationQuiz')}</h4>
              <p>{t('contact.testKnowledge')}</p>
            </a>
            <a href="/faqs" className="quick-link-card">
              <h4>{t('nav.faqs')}</h4>
              <p>{t('contact.commonQuestions')}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="thank-you-section section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="reveal" style={{
            background: 'var(--bg-secondary)',
            borderTop: '3px solid var(--primary-color)',
            padding: '4rem 3rem',
            borderRadius: '24px 24px 0 0',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem', letterSpacing: '4px', textAlign: 'center' }} className="gradient-text-animated">
              {t('thankYou.title')}
            </h2>

            <div style={{ fontSize: '1.15rem', lineHeight: '1.9', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              <p>{t('thankYou.p1')}</p>
              <p>{t('thankYou.p2')}</p>

              <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--secondary-color)', background: 'var(--bg-primary)', borderRadius: '0 8px 8px 0', boxShadow: 'var(--shadow-sm)' }}>
                <p>{t('thankYou.p3')}</p>
              </div>

              <p style={{ fontStyle: 'italic', color: 'var(--primary-color)', fontWeight: 'bold' }}>{t('thankYou.p4')}</p>

              <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--secondary-color)', background: 'var(--bg-primary)', borderRadius: '0 8px 8px 0', boxShadow: 'var(--shadow-sm)' }}>
                <p>{t('thankYou.p5')}</p>
              </div>

              <p>{t('thankYou.p6')}</p>

              <div style={{ padding: '1.8rem', borderLeft: '4px solid var(--primary-color)', background: 'linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 0%, transparent 100%)', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontWeight: '500', fontSize: '1.25rem' }}>{t('thankYou.p7')}</p>
              </div>

              <p>{t('thankYou.p8')}</p>

              <div className="home-verse-card hover-glow" style={{ margin: '2rem 0', padding: '2.5rem', background: 'var(--bg-primary)', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-md)' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{t('thankYou.verse')}</p>
                <p style={{ fontWeight: 'bold', textAlign: 'right', color: 'var(--primary-color)' }}>{t('thankYou.verseRef')}</p>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                <p style={{ fontStyle: 'italic' }}>{t('thankYou.signoffMessage')}</p>
                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{t('thankYou.signoffService')}</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.4rem', color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))' }}>{t('thankYou.signoffName')}</p>
                <p style={{ fontSize: '1rem', color: 'var(--text-light)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{t('thankYou.signoffTitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
