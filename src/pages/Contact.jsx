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
    </div>
  );
};

export default Contact;
