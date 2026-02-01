import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './PrayerRequest.css';

const PrayerRequest = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    request: '',
    anonymous: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const categories = [
    { value: 'salvation', labelKey: 'prayerRequest.categorySalvation' },
    { value: 'healing', labelKey: 'prayerRequest.categoryHealing' },
    { value: 'family', labelKey: 'prayerRequest.categoryFamily' },
    { value: 'guidance', labelKey: 'prayerRequest.categoryGuidance' },
    { value: 'provision', labelKey: 'prayerRequest.categoryProvision' },
    { value: 'faith', labelKey: 'prayerRequest.categoryFaith' },
    { value: 'other', labelKey: 'prayerRequest.categoryOther' }
  ];

  if (submitted) {
    return (
      <div className="prayer-page">
        <section className="page-hero prayer-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-badge">{t('prayerRequest.badge')}</span>
              <h1>{t('prayerRequest.title')} <span className="gradient-text">{t('prayerRequest.titleHighlight')}</span></h1>
            </div>
          </div>
        </section>
        <section className="success-section section">
          <div className="container">
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2>{t('prayerRequest.successTitle')}</h2>
              <p>{t('prayerRequest.successDesc')}</p>
              <div className="success-actions">
                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', category: '', request: '', anonymous: false }); }}>
                  {t('prayerRequest.submitAnother')}
                </button>
                <Link to="/" className="btn btn-secondary">{t('prayerRequest.returnHome')}</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="prayer-page">
      <section className="page-hero prayer-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">{t('prayerRequest.badge')}</span>
            <h1>{t('prayerRequest.title')} <span className="gradient-text">{t('prayerRequest.titleHighlight')}</span></h1>
            <p>{t('prayerRequest.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="prayer-section section">
        <div className="container">
          <div className="prayer-grid">
            <div className="prayer-form-card">
              <h3>{t('prayerRequest.formTitle')}</h3>
              <p>{t('prayerRequest.formIntro')}</p>
              <form className="prayer-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('prayerRequest.nameLabel')}</label>
                  <input type="text" id="name" name="name" placeholder={t('prayerRequest.namePlaceholder')} value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('prayerRequest.emailLabel')}</label>
                  <input type="email" id="email" name="email" placeholder={t('prayerRequest.emailPlaceholder')} value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="category">{t('prayerRequest.categoryLabel')}</label>
                  <select id="category" name="category" value={formData.category} onChange={handleChange}>
                    <option value="">{t('prayerRequest.categorySelect')}</option>
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{t(cat.labelKey)}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="request">{t('prayerRequest.requestLabel')}</label>
                  <textarea id="request" name="request" rows="5" placeholder={t('prayerRequest.requestPlaceholder')} value={formData.request} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group checkbox-group">
                  <input type="checkbox" id="anonymous" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
                  <label htmlFor="anonymous">{t('prayerRequest.anonymousLabel')}</label>
                </div>
                <button type="submit" className="btn btn-primary btn-full">{t('prayerRequest.submitButton')}</button>
                <p className="form-note">{t('prayerRequest.formNote')} info@letthetruthbeknown.org</p>
              </form>
            </div>

            <div className="prayer-info">
              <div className="info-card">
                <h4>{t('prayerRequest.infoTitle1')}</h4>
                <p>{t('prayerRequest.infoDesc1')}</p>
              </div>
              <div className="info-card">
                <h4>{t('prayerRequest.infoTitle2')}</h4>
                <p>{t('prayerRequest.infoDesc2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerRequest;
