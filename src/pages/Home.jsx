import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax subtle effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const streams = [
    {
      id: 'seeking-truth',
      label: 'Curious',
      title: 'Seeking the Truth?',
      desc: "Start here. Understand the Gospel and God's plan for your life.",
      cta: 'Read the Gospel →',
      link: '/seeking-truth',
      accent: 'var(--stream-gold)',
    },
    {
      id: 'growing',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stream-icon"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      label: 'New Christian',
      title: 'Growing in Faith',
      desc: "Foundations, discipleship levels, and understanding more of God's Word.",
      cta: 'Start Growing →',
      link: '/discipleship',
      accent: 'var(--stream-gold)',
    },
    {
      id: 'pastor',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stream-icon"
        >
          <path d="M12 2v20M8 8h8" />
        </svg>
      ),
      label: 'Pastor / Teacher',
      title: 'Further Study',
      desc: 'Advanced resources, soul winning tools, and teaching materials.',
      cta: 'Explore →',
      link: '/further-study',
      accent: 'var(--stream-gold)',
    },
  ];

  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-bg" ref={heroRef}></div>
        <div className="home-hero-overlay"></div>

        <div className="home-hero-content">
          {/* Main hook */}
          <h1 className="home-hero-title">
            Seeking the
            <span className="home-hero-title-highlight"> Truth?</span>
          </h1>

          {/* Verse */}
          <blockquote className="home-hero-verse">
            "And ye shall know the truth, and the truth shall make you free."
            <cite>John 8:32</cite>
          </blockquote>

          {/* Primary CTA */}
          <a href="#gospel-message" className="home-hero-cta">
            Yes, show me
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Scroll hint */}
        <div className="home-hero-scroll">
          <div className="home-hero-scroll-line"></div>
          <span>scroll</span>
        </div>
      </section>

      <section
        className="gospel-feature"
        id="gospel-message"
        aria-labelledby="gospel-title"
      >
        <h2 id="gospel-title">The Gospel Message</h2>
        <p>Pastor John Wilkerson explains from Scripture how to be saved.</p>
        <div className="gospel-player">
          <iframe
            src="https://www.youtube.com/embed/Trw5FVDQmiA"
            title="The Gospel Message — Pastor John Wilkerson"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {/* <p><a href="https://www.youtube.com/watch?v=Trw5FVDQmiA" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>. For a transcript, open the video description and choose “Show transcript” if available.</p>
        <Link to="/seeking-truth" className="btn btn-primary">Read and Understand the Gospel</Link> */}
      </section>

      <WelcomeMessage />

      {/* ── STREAMS ── */}
      <section className="home-streams">
        <div className="home-streams-inner">
          <h2 className="streams-title">Our Resources</h2>
          <p className="streams-label">
            Everything you need to know to understand Salvation and the Word of
            God
          </p>
          <div className="streams-grid">
            {streams.map((s) => (
              <Link
                key={s.id}
                to={s.link}
                className="stream-card"
                style={{ '--accent': s.accent }}
              >
                <div className="stream-card-glow"></div>
                <span className="stream-badge">{s.label}</span>
                <h3 className="stream-card-title">{s.title}</h3>
                <p className="stream-card-desc">{s.desc}</p>
                <span className="stream-cta">{s.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
