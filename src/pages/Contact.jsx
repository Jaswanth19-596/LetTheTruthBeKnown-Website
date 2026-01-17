import './Contact.css';

const Contact = () => {
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
              <p>
                Whether you have questions about our materials, need prayer, or want to partner with us 
                in spreading the Gospel, we'd love to hear from you.
              </p>

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
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
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
                  <textarea id="message" rows="5" placeholder="Your message..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
                
                <p className="form-note">
                  Note: This is a static form. For actual submissions, please email us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Quick <span className="gradient-text">Resources</span></h2>
          </div>
          <div className="links-grid">
            <a href="/gospel-tracts" className="quick-link-card">
              <h4>Gospel Tracts</h4>
              <p>Download free tracts</p>
            </a>
            <a href="/discipleship" className="quick-link-card">
              <h4>Discipleship</h4>
              <p>Growth materials</p>
            </a>
            <a href="/salvation-quiz" className="quick-link-card">
              <h4>Salvation Quiz</h4>
              <p>Test your knowledge</p>
            </a>
            <a href="/faqs" className="quick-link-card">
              <h4>FAQs</h4>
              <p>Common questions</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
