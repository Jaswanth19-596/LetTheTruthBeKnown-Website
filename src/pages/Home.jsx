import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAssetUrl } from '../config/assets';
import { useLanguage } from '../context/LanguageContext';
import VerseOfDay from '../components/VerseOfDay';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

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
      title: t('home.feature1Title'),
      description: t('home.feature1Desc'),
      link: '/gospel-tracts'
    },
    {
      title: t('home.feature2Title'),
      description: t('home.feature2Desc'),
      link: '/stop-tracts'
    },
    {
      title: t('home.feature3Title'),
      description: t('home.feature3Desc'),
      link: '/discipleship'
    },
    {
      title: t('home.feature4Title'),
      description: t('home.feature4Desc'),
      link: '/salvation-quiz'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge animate-fadeInDown">
            <span className="badge-dot"></span>
            {t('home.badge')}
          </div>
          <h1 className="hero-title">
            <span className="title-line animate-fadeInUp delay-100">{t('home.titleLine1')}</span>
            <span className="title-line animate-fadeInUp delay-200">
              <span className="gradient-text-animated">{t('home.titleLine2')}</span>
            </span>
            <span className="title-line animate-fadeInUp delay-300">{t('home.titleLine3')}</span>
          </h1>
          <p className="hero-subtitle animate-fadeIn delay-400">
            {t('home.subtitle')}
          </p>
          <div className="hero-actions animate-fadeInUp delay-500">
            <Link to="/gospel-tracts" className="btn btn-primary hover-shine hover-lift">
              <span>{t('home.browseTracts')}</span>
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/salvation-quiz" className="btn btn-secondary hover-glow">
              {t('home.takeTheQuiz')}
            </Link>
          </div>
          
          <div className="hero-stats animate-fadeInUp delay-600">
            <div className="stat hover-lift">
              <span className="stat-number animate-pulse">9+</span>
              <span className="stat-label">{t('home.statsLanguages')}</span>
            </div>
            <div className="stat hover-lift">
              <span className="stat-number animate-pulse">100+</span>
              <span className="stat-label">{t('home.statsResources')}</span>
            </div>
            <div className="stat hover-lift">
              <span className="stat-number animate-pulse">3</span>
              <span className="stat-label">{t('home.statsDiscipleship')}</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator animate-bounce delay-700">
          <span>{t('home.scroll')}</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Verse of the Day */}
      <VerseOfDay />

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-badge animate-pulseGlow">{t('home.featuresTitle')}</span>
            <h2>{t('home.featuresSubtitle1')} <span className="gradient-text-animated">{t('home.featuresSubtitle2')}</span></h2>
            <p>{t('home.featuresDesc')}</p>
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
                  {t('common.explore')} <span className="arrow">→</span>
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
            <span className="section-badge">{t('home.introSectionTitle')}</span>
            <h2>{t('home.introSectionTitle')}</h2>
          </div>
          <div className="intro-content reveal" style={{ maxWidth: '1000px', margin: '0 auto', background: 'var(--bg-primary)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--primary-color)', opacity: '0.03', filter: 'blur(50px)', borderRadius: '50%' }}></div>
            
            <div className="intro-text" style={{ fontSize: '1.15rem', lineHeight: '1.9', color: 'var(--text-secondary)', position: 'relative', zIndex: 1 }}>
              <p style={{ marginBottom: '1.5rem' }}>{t('home.introP1')}</p>
              <p style={{ marginBottom: '1.5rem' }}>{t('home.introP2')}</p>
              <p style={{ marginBottom: '1.5rem' }}>{t('home.introP3')}</p>
              <p style={{ marginBottom: '1.5rem' }}>{t('home.introP4')}</p>
              <p style={{ marginBottom: '2.5rem' }}>{t('home.introP5')}</p>
              
              <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                <p style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '1.4rem', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text', backgroundImage: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))' }}>
                  {t('home.introVerse')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* God's Will Section */}
      <section className="gods-will-section section" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'var(--secondary-color)', opacity: '0.03', filter: 'blur(60px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
           <div className="section-header text-center reveal">
            <span className="section-badge">{t('home.godsWillTitle')}</span>
            <h2>God's <span className="gradient-text-animated">Will</span> & His <span className="gradient-text-animated">Promise</span></h2>
          </div>
          
          <div className="intro-content reveal" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'center' }}>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>{t('home.godsWillP1')}</p>
              
              <div className="verse-highlight hover-glow animate-float" style={{ margin: '3rem auto', padding: '2.5rem 3rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '16px', position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'absolute', top: '-10px', left: '20px', fontSize: '5rem', color: 'var(--primary-color)', opacity: 0.2, lineHeight: 1, fontFamily: 'serif' }}>"</span>
                <p style={{ fontStyle: 'italic', fontSize: '1.25rem', position: 'relative', zIndex: 2 }}>{t('home.godsWillV1')}</p>
              </div>

              <p style={{ marginBottom: '1rem', fontWeight: '500' }}>{t('home.godsWillP2')}</p>
              <p style={{ marginBottom: '3rem', color: 'var(--text-light)' }}>{t('home.godsWillP3')}</p>
              
              <div className="verses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
                <div className="home-verse-card hover-lift" style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '14px', borderLeft: '4px solid var(--primary-color)', borderTop: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-secondary)' }}>{t('home.godsWillV2')}</p>
                </div>
                
                <div className="home-verse-card hover-lift" style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '14px', borderLeft: '4px solid var(--primary-color)', borderTop: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-secondary)' }}>{t('home.godsWillV3')}</p>
                </div>
                
                <div className="home-verse-card hover-lift" style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '14px', borderLeft: '4px solid var(--primary-color)', borderTop: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-secondary)' }}>{t('home.godsWillV4')}</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section section">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-badge">{t('home.videoFeatured')}</span>
            <h2>{t('home.videoTitle')}</h2>
          </div>

          <div className="video-grid two-columns">
            <div className="video-card main reveal-left">
              <div className="video-wrapper hover-glow">
                <iframe
                  src="https://www.youtube.com/embed/Trw5FVDQmiA"
                  title="Gospel Message"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h4>{t('home.videoGospelMessage')}</h4>
                <p>{t('home.videoGospelDesc')}</p>
              </div>
            </div>

            <div className="video-card main reveal-right">
              <div className="video-wrapper hover-glow">
                <iframe
                  src="https://player.vimeo.com/video/1019690956"
                  title="Gospel Teaching"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h4>{t('home.videoTeaching')}</h4>
                <p>{t('home.videoTeachingDesc')}</p>
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
              <h2>{t('home.ctaTitle1')} <span className="gradient-text-animated">{t('home.ctaTitle2')}</span></h2>
              <p>{t('home.ctaDesc')}</p>
              <Link to="/salvation-quiz" className="btn btn-primary hover-shine hover-lift">
                {t('home.ctaButton')}
                <span className="btn-arrow">→</span>
              </Link>
            </div>
            <div className="cta-image">
              <div className="cta-icon-text morph-shape animate-float">{t('home.titleLine2')}</div>
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
