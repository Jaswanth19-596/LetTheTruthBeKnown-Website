import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getAssetUrl } from '../config/assets';
import './StopTracts.css';

const StopTracts = () => {
  const [activeLanguage, setActiveLanguage] = useState('all');

  // Scroll reveal effect - re-runs when filter changes
  useEffect(() => {
    const revealOnScroll = () => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    const timeout = setTimeout(() => {
      revealOnScroll();
    }, 100);

    window.addEventListener('scroll', revealOnScroll);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, [activeLanguage]);

  const languages = [
    { id: 'all', name: 'All' },
    { id: 'english', name: 'English' },
    { id: 'swahili', name: 'Swahili' },
    { id: 'luo', name: 'Luo' },
    { id: 'kalenjin', name: 'Kalenjin' },
    { id: 'kisii', name: 'Kisii' },
    { id: 'maasai', name: 'Maasai' },
  ];

  const tracts = [
    {
      id: 1,
      language: 'english',
      title: 'STOP! Tract - English',
      description: 'Eye-catching STOP tract to grab attention and share the gospel.',
      image: getAssetUrl('downloads/1.png'),
      pdf: getAssetUrl('downloads/English_stoptrack.pdf')
    },
    {
      id: 2,
      language: 'swahili',
      title: 'STOP! Tract - Swahili',
      description: 'Kiswahili version of the STOP tract.',
      image: getAssetUrl('downloads/2.png'),
      pdf: getAssetUrl('downloads/Kiswahilii_stoptrack.pdf')
    },
    {
      id: 3,
      language: 'luo',
      title: 'STOP! Tract - Luo',
      description: 'Luo language version.',
      image: getAssetUrl('downloads/3.png'),
      pdf: getAssetUrl('downloads/LuoStop.pdf')
    },
    {
      id: 4,
      language: 'kalenjin',
      title: 'STOP! Tract - Kalenjin',
      description: 'Kalenjin language version.',
      image: getAssetUrl('downloads/4.png'),
      pdf: getAssetUrl('downloads/KenyaKalinjin_stoptrack.pdf')
    },
    {
      id: 5,
      language: 'kisii',
      title: 'STOP! Tract - Kisii',
      description: 'Kisii language version.',
      image: getAssetUrl('downloads/5.png'),
      pdf: getAssetUrl('downloads/Kisii_stoptrack.pdf')
    },
    {
      id: 6,
      language: 'maasai',
      title: 'STOP! Tract - Maasai',
      description: 'Maasai language version.',
      image: getAssetUrl('downloads/6.png'),
      pdf: getAssetUrl('downloads/Masai_stoptrack.pdf')
    },
  ];

  const filteredTracts = activeLanguage === 'all' 
    ? tracts 
    : tracts.filter(tract => tract.language === activeLanguage);

  return (
    <div className="stop-tracts-page">
      {/* Hero */}
      <section className="page-hero stop-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge stop-badge">Stop Tracts</span>
            <h1>STOP! <span className="gradient-text">Tracts</span></h1>
            <p>Bold, attention-grabbing tracts designed to stop people in their tracks and share the urgent message of salvation.</p>
          </div>
        </div>
      </section>

      {/* Language Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="language-tabs">
            {languages.map(lang => (
              <button
                key={lang.id}
                className={`lang-tab ${activeLanguage === lang.id ? 'active' : ''}`}
                onClick={() => setActiveLanguage(lang.id)}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tracts Grid */}
      <section className="tracts-grid section">
        <div className="container">
          <div className="grid grid-auto">
            {filteredTracts.map(tract => (
              <Card
                key={tract.id}
                image={tract.image}
                title={tract.title}
                description={tract.description}
                link={tract.pdf}
                linkText="Download PDF"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why STOP Tracts */}
      <section className="why-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why <span className="gradient-text">STOP Tracts?</span></h2>
            <p>These tracts are designed with urgency in mind</p>
          </div>
          
          <div className="why-grid">
            <div className="why-card">
              <h4>Eye-Catching Design</h4>
              <p>Bold STOP sign design grabs immediate attention</p>
            </div>
            <div className="why-card">
              <h4>Urgent Message</h4>
              <p>Creates a sense of urgency about eternal destiny</p>
            </div>
            <div className="why-card">
              <h4>Multi-Language</h4>
              <p>Available in multiple African languages</p>
            </div>
            <div className="why-card">
              <h4>Easy to Share</h4>
              <p>Simple format that's easy to print and distribute</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StopTracts;
