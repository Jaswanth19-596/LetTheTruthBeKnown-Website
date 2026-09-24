import { useState } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import { useRateLimit } from '../context/RateLimitContext';
import './Contact.css';

const Contact = () => {
  useScrollReveal();
  const { checkAndRegister } = useRateLimit();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Enforce rate limiting for form submissions
    if (!checkAndRegister('form_submission')) {
      setStatus({ submitting: false, submitted: false, error: "Too many submissions. Please wait before trying again." });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("https://formsubmit.co/ajax/penpapershare@gmail.com", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Gospel Site Contact Message: ${formData.subject}`
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error("Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: err.message });
    }
  };
  
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">Get in Touch</span>
            <h1>Contact <span className="gradient-text">Us</span></h1>
            <p>We'd love to hear from you. Reach out with questions, prayer requests, or partnership inquiries.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in <span className="gradient-text">Touch</span></h2>
              <p>Whether you have questions about our materials, need prayer, or want to partner with us in spreading the Gospel, we'd love to hear from you.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-details">
                    <h4>Email</h4>
                    <p>info@letthetruthbeknown.org</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-details">
                    <h4>Website</h4>
                    <p>www.letthetruthbeknown.org</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-details">
                    <h4>Ministry</h4>
                    <p>Serving Africa & Beyond</p>
                  </div>
                </div>
              </div>

              <div className="contact-verse">
                <p>"How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things!"</p>
                <span>— Romans 10:15</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h3>Send us a Message</h3>
              
              {status.submitted ? (
                <div className="form-success-alert">
                  <div className="success-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', background: 'rgba(30, 111, 168, 0.1)', color: 'var(--primary-color)', borderRadius: '50%', fontSize: '1.5rem', marginBottom: '1rem' }}>✓</div>
                  <h4>Thank You!</h4>
                  <p>Your message has been sent successfully. We will get back to you soon.</p>
                  <button className="btn btn-outline-small" style={{ marginTop: '1rem' }} onClick={() => setStatus(prev => ({ ...prev, submitted: false }))}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {status.error && (
                    <div className="form-error-message" style={{ color: 'var(--scarlet)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                      {status.error}
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" value={formData.subject} onChange={handleChange} required>
                      <option value="">Select a topic</option>
                      <option value="question">General Question</option>
                      <option value="materials">Materials Request</option>
                      <option value="translation">Translation Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your message..." value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-full" disabled={status.submitting}>
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* A personal letter from Peter */}
      <section className="thank-you-section section" aria-labelledby="thank-you-heading">
        <div className="container">
          <article className="thank-you-letter">
            <header className="thank-you-letter-header">
              <h2 id="thank-you-heading">Thank you for visiting</h2>
              <p>A personal note from Peter Morris</p>
            </header>

            <div className="thank-you-letter-body">
              <p>I hope you enjoy our site.</p>
              <p>Our simple purpose is to help you understand the truth of God's Word amid the confusion and deception in Christianity today. There is a spiritual battle going on, and each of us is part of it. Your eternal destiny matters.</p>
              <p>If you haven't been saved, I hope these materials help you understand that “now is the day of salvation” (2 Corinthians 6:2, KJV), and that you will turn to Jesus Christ and call upon Him to be saved (Romans 10:13, KJV).</p>
              <p>Jesus said, “Go ye therefore, and teach all nations” (Matthew 28:19, KJV). I hope you will tell someone about His saving grace:</p>

              <blockquote>
                <p>“For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.”</p>
                <cite>Ephesians 2:8–9 (KJV)</cite>
              </blockquote>

              <p>And His gift of eternal life: “For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord” (Romans 6:23, KJV).</p>
              <p>Jesus Christ said, “I am the way, the truth, and the life: no man cometh unto the Father, but by me” (John 14:6, KJV).</p>
              <p>Please take time to read the materials available here and search the Scriptures for yourself, as the Bereans did:</p>

              <blockquote>
                <p>“And the brethren immediately sent away Paul and Silas by night unto Berea: who coming thither went into the synagogue of the Jews. These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so. Therefore many of them believed; also of honourable women which were Greeks, and of men, not a few.”</p>
                <cite>Acts 17:10–12 (KJV)</cite>
              </blockquote>
            </div>

            <footer className="thank-you-letter-signature">
              <p>God bless you.</p>
              <p>In His service,</p>
              <p className="thank-you-letter-name">Peter Morris</p>
              <p className="thank-you-letter-role">Missionary</p>
            </footer>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Contact;
