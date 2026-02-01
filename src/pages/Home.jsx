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
            <span className="section-badge">{t('home.videoFeatured')}</span>
            <h2>{t('home.videoTitle')}</h2>
          </div>

          <div className="video-grid two-columns">
            <div className="video-card main reveal-left">
              <div className="video-wrapper hover-glow">
                <iframe
                  src="https://player.vimeo.com/video/953975875"
                  title="Gospel Message"
                  allow="autoplay; fullscreen; picture-in-picture"
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
