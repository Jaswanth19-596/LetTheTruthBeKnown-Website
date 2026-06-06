import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PrayerRequest.css';

const PrayerRequest = () => {
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
    { value: 'salvation', label: 'Salvation for Someone' },
    { value: 'healing', label: 'Healing & Health' },
    { value: 'family', label: 'Family & Relationships' },
    { value: 'guidance', label: 'Guidance & Wisdom' },
    { value: 'provision', label: 'Financial Provision' },
    { value: 'faith', label: 'Growing in Faith' },
    { value: 'other', label: 'Other' }
  ];

  if (submitted) {
    return (
      <div className="prayer-page">
        <section className="page-hero prayer-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="section-badge">We're Here For You</span>
              <h1>Prayer <span className="gradient-text">Request</span></h1>
            </div>
          </div>
        </section>
        <section className="success-section section">
          <div className="container">
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2>Thank You for Sharing</h2>
              <p>Your prayer request has been received. We will be praying for you.</p>
              <div className="success-actions">
                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', category: '', request: '', anonymous: false }); }}>
                  Submit Another Request
                </button>
                <Link to="/" className="btn btn-secondary">Return Home</Link>
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
            <span className="section-badge">We're Here For You</span>
            <h1>Prayer <span className="gradient-text">Request</span></h1>
            <p>Share your prayer request with us. We believe in the power of prayer and would be honored to lift you up before the Lord.</p>
          </div>
        </div>
      </section>

      <section className="prayer-section section">
        <div className="container">
          <div className="prayer-grid">
            <div className="prayer-form-card">
              <h3>Submit Your Request</h3>
              <p>All prayer requests are kept confidential. You may submit anonymously if you prefer.</p>
              <form className="prayer-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name (Optional)</label>
                  <input type="text" id="name" name="name" placeholder="First name is fine" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email (Optional)</label>
                  <input type="email" id="email" name="email" placeholder="For follow-up only" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Prayer Category</label>
                  <select id="category" name="category" value={formData.category} onChange={handleChange}>
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="request">Your Prayer Request</label>
                  <textarea id="request" name="request" rows="5" placeholder="Share what's on your heart..." value={formData.request} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group checkbox-group">
                  <input type="checkbox" id="anonymous" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
                  <label htmlFor="anonymous">Submit anonymously</label>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Submit Prayer Request</button>
                <p className="form-note">Note: This form is for demonstration. For actual prayer requests, please email us at info@letthetruthbeknown.org</p>
              </form>
            </div>

            <div className="prayer-info">
              <div className="info-card">
                <h4>We Pray for You</h4>
                <p>Every prayer request we receive is prayed over by our team. Nothing is too big or too small for God.</p>
              </div>
              <div className="info-card">
                <h4>Confidential</h4>
                <p>Your requests are kept private and shared only with our prayer team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerRequest;
