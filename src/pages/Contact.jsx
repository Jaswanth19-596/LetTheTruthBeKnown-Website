import { useScrollReveal } from '../hooks/useAnimations';
import './Contact.css';

const Contact = () => {
  useScrollReveal();
  
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
                
                <p className="form-note">Note: This is a static form. For actual submissions, please email us directly.</p>
              </form>
            </div>
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
              THANK YOU
            </h2>

            <div style={{ fontSize: '1.15rem', lineHeight: '1.9', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              <p>I hope you enjoy our site</p>
              <p>Our simple purpose, is to bypass the confusion and deception that 'Christianity' is today. There is a spiritual battle going on and you are part of it whether you like it or not. We simply want you to understand the truth that is God's Word. Your eternal destiny depends upon it.</p>

              <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--secondary-color)', background: 'var(--bg-primary)', borderRadius: '0 8px 8px 0', boxShadow: 'var(--shadow-sm)' }}>
                <p>I hope if you weren't saved you now have an understanding that 'now is the day of salvation' (2 Corinthians 6:2) (KJV) and have taken the opportunity to turn to Jesus Christ and call upon Him to be saved. Romans 10:13 (KJV).</p>
              </div>

              <p style={{ fontStyle: 'italic', color: 'var(--primary-color)', fontWeight: 'bold' }}>He said in Matthew 28:19a 'Go ye therefore and teach all nations...' (KJV)</p>

              <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--secondary-color)', background: 'var(--bg-primary)', borderRadius: '0 8px 8px 0', boxShadow: 'var(--shadow-sm)' }}>
                <p>I hope you will go and tell someone of the saving grace of Jesus Christ 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.' (Ephesians 2:8,9) (KJV)</p>
              </div>

              <p>And His gift of Eternal Life... 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.' Romans 6:23 (KJV)</p>

              <div style={{ padding: '1.8rem', borderLeft: '4px solid var(--primary-color)', background: 'linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 0%, transparent 100%)', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontWeight: '500', fontSize: '1.25rem' }}>Jesus Christ said '... I am the way, the truth, and the life: no man cometh unto the Father, but by me.' John 14:6 (KJV)</p>
              </div>

              <p>Please take advantage of the material available as the Bereans did in the New Testament in the book of ACTS.</p>

              <div className="home-verse-card hover-glow" style={{ margin: '2rem 0', padding: '2.5rem', background: 'var(--bg-primary)', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-md)' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem' }}>"And the brethren immediately sent away Paul and Silas by night unto Berea: who coming thither went into the synagogue of the Jews. These were more noble than those in Thessalonica, in that they RECEIVED the word with all readiness of mind, and SEARCHED the scriptures daily, whether those things were so. Therefore many of them BELIEVED; also of honourable women which were Greeks, and of men, not a few."</p>
                <p style={{ fontWeight: 'bold', textAlign: 'right', color: 'var(--primary-color)' }}>ACTS 17:10-12 (KJV)</p>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                <p style={{ fontStyle: 'italic' }}>God bless you</p>
                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>In His service,</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.4rem', color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))' }}>Peter Morris</p>
                <p style={{ fontSize: '1rem', color: 'var(--text-light)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.2rem' }}>Missionary</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
