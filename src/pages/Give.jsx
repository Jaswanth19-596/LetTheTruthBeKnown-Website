import './Give.css';

const Give = () => {
  return (
    <div className="give-page">

      {/* ── Hero ── */}
      <section className="give-hero">
        <span className="give-tag">Support the Ministry</span>
        <h1 className="give-title">Give to the<span className="give-gold"> Gospel</span></h1>
        <p className="give-subtitle">
          Every gift helps spread the Word of God freely to those who are seeking the truth.
        </p>
        <blockquote className="give-verse">
          "Freely ye have received, freely give."
          <cite>— Matthew 10:8</cite>
        </blockquote>
      </section>

      {/* ── Why Give ── */}
      <section className="give-why">
        <div className="give-why-inner">
          <div className="give-why-card">
            <span className="give-why-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="give-svg-icon">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </span>
            <h3>Gospel Tracts</h3>
            <p>Printing and distributing tracts in 9+ languages across Africa and beyond.</p>
          </div>
          <div className="give-why-card">
            <span className="give-why-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="give-svg-icon">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </span>
            <h3>Translations</h3>
            <p>Translating materials into new languages to reach more unreached people groups.</p>
          </div>
          <div className="give-why-card">
            <span className="give-why-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="give-svg-icon">
                <path d="M23 7l-7 5 7 5V7z"></path>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </span>
            <h3>Gospel Videos</h3>
            <p>Producing and distributing video resources that present the Gospel clearly.</p>
          </div>
          <div className="give-why-card">
            <span className="give-why-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="give-svg-icon">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
            </span>
            <h3>Discipleship</h3>
            <p>Providing free study materials for new believers and growing Christians.</p>
          </div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="give-coming-soon">
        <div className="give-coming-inner">
          <div className="give-coming-badge">Coming Soon</div>
          <h2 className="give-coming-title">Online Giving</h2>
          <p className="give-coming-desc">
            We are setting up a secure online giving portal. In the meantime, please reach out
            to us directly to partner with this ministry.
          </p>
          <a href="/contact" className="give-contact-btn">
            Contact Us to Give →
          </a>
          <p className="give-coming-note">
            100% of donations go directly toward ministry outreach.
          </p>
        </div>
      </section>

      {/* ── Verse footer ── */}
      <section className="give-verse-section">
        <blockquote className="give-verse-big">
          "But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal."
          <cite>— Matthew 6:20</cite>
        </blockquote>
      </section>

    </div>
  );
};

export default Give;
