import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="page-hero about-intro">
        <div className="container">
          <div className="page-hero-content">
            <h1>About Our Ministry</h1>
            <p>Sharing the Gospel of Jesus Christ across Africa and beyond.</p>
          </div>
        </div>
      </header>

      <section className="about-mission about-shell" aria-labelledby="about-mission-title">
        <div>
          <h2 id="about-mission-title">Let the Truth be Known</h2>
          <p>
            We work with local churches and missionaries to help people hear
            the Gospel and grow in their faith, through Bible-based materials
            in English and African languages.
          </p>
        </div>
        <blockquote className="about-scripture">
          <p>“Go ye into all the world, and preach the gospel to every creature.”</p>
          <cite>Mark 16:15</cite>
        </blockquote>
      </section>

      <section className="about-resources about-shell" aria-labelledby="about-resources-title">
        <div className="about-section-heading">
          <h2 id="about-resources-title">Freely Given</h2>
          <p>Download, print, and distribute our materials freely.</p>
        </div>
        <div className="about-resource-links">
          <Link to="/gospel-tracts" className="about-resource-link">
            <h3>Share the Gospel</h3>
            <p>Gospel tracts in English and African languages.</p>
            <span className="about-link-label">Browse tracts</span>
          </Link>
          <Link to="/discipleship" className="about-resource-link">
            <h3>Grow in faith</h3>
            <p>Guided Bible studies for new and growing Christians.</p>
            <span className="about-link-label">Explore discipleship</span>
          </Link>
          <Link to="/further-study" className="about-resource-link">
            <h3>Study and teach</h3>
            <p>Answer books and resources for deeper Bible study.</p>
            <span className="about-link-label">Find study materials</span>
          </Link>
        </div>
      </section>

      <section className="about-film about-shell" id="peter-morris" aria-labelledby="about-film-title">
        <div className="about-film-copy">
          <h2 id="about-film-title">Who is Peter Morris?</h2>
          <p>Meet the missionary and learn about his ministry in this documentary.</p>
          <a
            href="https://www.youtube.com/watch?v=ATmIOERW--c"
            target="_blank"
            rel="noopener noreferrer"
            className="about-text-link"
          >
            Watch on YouTube<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="about-video">
          <iframe
            src="https://www.youtube.com/embed/ATmIOERW--c"
            title="Peter Morris missionary documentary"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default About;
