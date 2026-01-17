import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';

const Home = () => {
  // Scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const features = [
    {
      title: 'Gospel Tracts',
      description: "God's Simple Plan of Salvation available in 9+ languages",
      link: '/gospel-tracts'
    },
    {
      title: 'Stop! Tracts',
      description: 'Eye-catching tracts perfect for sharing the gospel',
      link: '/stop-tracts'
    },
    {
      title: 'Discipleship',
      description: '3 levels of growth materials for new believers',
      link: '/discipleship'
    },
    {
      title: 'Salvation Quiz',
      description: 'Interactive quiz to examine your faith journey',
      link: '/salvation-quiz'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
          <div className="hero-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`
              }}></div>
            ))}
          </div>
          <div className="hero-grid-lines"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge animate-fadeInDown">
            <span className="badge-dot"></span>
            Spreading Truth Across Nations
          </div>
          <h1 className="hero-title">
            <span className="title-line animate-fadeInUp delay-100">Let the</span>
            <span className="title-line animate-fadeInUp delay-200">
              <span className="gradient-text-animated">Truth</span>
            </span>
            <span className="title-line animate-fadeInUp delay-300">be Known</span>
          </h1>
          <p className="hero-subtitle animate-fadeIn delay-400">
            Free gospel resources, tracts, and discipleship materials in multiple languages. 
            Join us in spreading the Good News of Jesus Christ around the world.
          </p>
          <div className="hero-actions animate-fadeInUp delay-500">
            <Link to="/gospel-tracts" className="btn btn-primary hover-shine hover-lift">
              <span>Browse Tracts</span>
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/salvation-quiz" className="btn btn-secondary hover-glow">
              Take the Quiz
            </Link>
          </div>
          
          <div className="hero-stats animate-fadeInUp delay-600">
            <div className="stat hover-lift">
              <span className="stat-number animate-pulse">9+</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat hover-lift">
              <span className="stat-number animate-pulse">100+</span>
              <span className="stat-label">Resources</span>
            </div>
            <div className="stat hover-lift">
              <span className="stat-number animate-pulse">3</span>
              <span className="stat-label">Discipleship Levels</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator animate-bounce delay-700">
          <span>Scroll</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-badge animate-pulseGlow">Our Resources</span>
            <h2>Everything You Need to <span className="gradient-text-animated">Grow in Faith</span></h2>
            <p>Free downloadable materials to help you share the gospel and disciple new believers</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <Link 
                to={feature.link} 
                className={`feature-card reveal hover-lift hover-shine ${index % 2 === 0 ? 'delay-' + (index + 1) * 100 : 'delay-' + (index + 2) * 100}`}
                key={index}
              >
                <div className="feature-card-glow"></div>
                <div className="feature-card-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-link">
                  Explore <span className="arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section section">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-badge">Featured</span>
            <h2>Watch & <span className="gradient-text-animated">Learn</span></h2>
          </div>

          <div className="video-grid">
            <div className="video-card main reveal-left">
              <div className="video-wrapper hover-glow">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Gospel Message"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h4>The Gospel Message</h4>
                <p>Learn about God's plan of salvation</p>
              </div>
            </div>

            <div className="video-sidebar">
              <div className="video-card small reveal-right delay-200 hover-lift">
                <div className="video-thumbnail">
                  <img src="/downloads/24_79af5280.jpg" alt="Gospel Film" />
                  <div className="play-icon animate-pulse">▶</div>
                </div>
                <div className="video-info">
                  <h5>In Christ Alone</h5>
                  <p>Worship & Praise</p>
                </div>
              </div>
              
              <div className="video-card small reveal-right delay-400 hover-lift">
                <div className="video-thumbnail">
                  <img src="/downloads/51affa96.jpg" alt="Pastor Message" />
                  <div className="play-icon animate-pulse">▶</div>
                </div>
                <div className="video-info">
                  <h5>Bible Study</h5>
                  <p>Teaching Series</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-card reveal-scale hover-glow">
            <div className="cta-bg-animation"></div>
            <div className="cta-content">
              <h2>Ready to <span className="gradient-text-animated">Start Your Journey?</span></h2>
              <p>Take our Salvation Quiz to examine your understanding of eternal life according to the Bible.</p>
              <Link to="/salvation-quiz" className="btn btn-primary hover-shine hover-lift">
                Take the Salvation Quiz
                <span className="btn-arrow">→</span>
              </Link>
            </div>
            <div className="cta-image">
              <div className="cta-icon-text morph-shape animate-float">Truth</div>
              <div className="cta-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

