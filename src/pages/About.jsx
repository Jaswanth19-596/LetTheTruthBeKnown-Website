import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">Our Mission</span>
            <h1>About <span className="gradient-text">Our Ministry</span></h1>
            <p>Dedicated to spreading the Gospel of Jesus Christ through free resources and materials.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our <span className="gradient-text">Mission</span></h2>
              <p>
                "Let the Truth be Known" is a ministry dedicated to spreading the Gospel of Jesus Christ 
                across Africa and beyond. We believe that everyone deserves to hear the Good News in 
                their own language.
              </p>
              <p>
                Our mission is to provide free, high-quality gospel tracts, discipleship materials, 
                and teaching resources to churches, missionaries, and individual believers around the world.
              </p>
              <div className="mission-verse">
                <p>"Go ye into all the world, and preach the gospel to every creature."</p>
                <span>— Mark 16:15</span>
              </div>
            </div>
            <div className="mission-image">
              <div className="mission-icon-text">Faith</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our <span className="gradient-text">Values</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h4>Bible-Centered</h4>
              <p>All our materials are based solely on the Word of God, using clear Scripture references.</p>
            </div>
            <div className="value-card">
              <h4>Freely Given</h4>
              <p>All resources are completely free to download, print, and distribute.</p>
            </div>
            <div className="value-card">
              <h4>Multi-Language</h4>
              <p>We translate materials into multiple African languages to reach more people.</p>
            </div>
            <div className="value-card">
              <h4>Partnership</h4>
              <p>We work with local churches and missionaries for effective gospel distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offer-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>What We <span className="gradient-text">Offer</span></h2>
          </div>
          <div className="offer-grid">
            <div className="offer-item">
              <span className="offer-number">01</span>
              <h4>Gospel Tracts</h4>
              <p>God's Simple Plan of Salvation in 9+ languages</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">02</span>
              <h4>Stop! Tracts</h4>
              <p>Eye-catching tracts for street evangelism</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">03</span>
              <h4>Discipleship Materials</h4>
              <p>3-level program with 20+ study books</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">04</span>
              <h4>Answer Books</h4>
              <p>7-volume series answering common questions</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">05</span>
              <h4>Study Guides</h4>
              <p>Additional resources for deeper Bible study</p>
            </div>
            <div className="offer-item">
              <span className="offer-number">06</span>
              <h4>Teaching Materials</h4>
              <p>Resources for pastors and teachers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to <span className="gradient-text">Get Involved?</span></h2>
            <p>Download our materials and start sharing the Gospel in your community today.</p>
            <div className="cta-actions">
              <a href="/gospel-tracts" className="btn btn-primary">Browse Resources</a>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
