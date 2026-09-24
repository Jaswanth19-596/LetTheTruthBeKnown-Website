import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useAnimations';
import { getAssetUrl } from '../config/assets';
import TextToSpeech from '../components/TextToSpeech';
import './Discipleship.css';

const Discipleship = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedLevel = Number(searchParams.get('level'));
  const activeLevel = [1, 2, 3].includes(requestedLevel) ? requestedLevel : 1;
  const levelNavRef = useRef(null);

  useScrollReveal(activeLevel);

  const selectLevel = (level, returnToLessons = false) => {
    setSearchParams((params) => {
      params.set('level', String(level));
      return params;
    }, { preventScrollReset: true });
    if (returnToLessons) {
      levelNavRef.current?.scrollIntoView({ block: 'start' });
      levelNavRef.current?.querySelector(`[data-level="${level}"]`)?.focus({ preventScroll: true });
    }
  };

  const levels = [
    {
      level: 1,
      title: 'Foundations',
      subtitle: 'Essential truths for new believers',
      color: 'var(--temple-blue)',
      books: [
        {
          title: 'Understanding Salvation',
          cover:
            '/covers/discipleship/level1/books/01-understanding-salvation.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level1/books/01-understanding-salvation.pdf',
          ),
        },
        {
          title: 'Eternal Security',
          cover: '/covers/discipleship/level1/books/02-eternal-security.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level1/books/02-eternal-security.pdf',
          ),
        },
        {
          title: 'Baptism',
          cover: '/covers/discipleship/level1/books/03-baptism.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level1/books/03-baptism.pdf',
          ),
        },
        {
          title: 'The Word of God',
          cover: '/covers/discipleship/level1/books/04-the-word-of-god.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level1/books/04-the-word-of-god.pdf',
          ),
        },
      ],
    },
    {
      level: 2,
      title: 'Growth',
      subtitle: 'Deeper understanding for maturing believers',
      color: 'var(--gold)',
      books: [
        {
          title: 'Prayer',
          cover: '/covers/discipleship/level2/books/01-prayer.png',
          pdf: getAssetUrl('downloads/discipleship/level2/books/01-prayer.pdf'),
        },
        {
          title: 'The Holy Spirit',
          cover: '/covers/discipleship/level2/books/02-the-holy-spirit.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level2/books/02-the-holy-spirit.pdf',
          ),
        },
        {
          title: 'Witnessing for Christ',
          cover:
            '/covers/discipleship/level2/books/03-witnessing-for-christ.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level2/books/03-witnessing-for-christ.pdf',
          ),
        },
        {
          title: 'The New Testament Church',
          cover:
            '/covers/discipleship/level2/books/04-the-new-testament-church.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level2/books/04-the-new-testament-church.pdf',
          ),
        },
        {
          title: 'Forgiveness',
          cover: '/covers/discipleship/level2/books/05-forgiveness.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level2/books/05-forgiveness.pdf',
          ),
        },
        {
          title: 'Financial Stewardship',
          cover:
            '/covers/discipleship/level2/books/06-financial-stewardship.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level2/books/06-financial-stewardship.pdf',
          ),
        },
        {
          title: 'Judgment Seat of Christ',
          cover:
            '/covers/discipleship/level2/books/07-judgment-seat-of-christ.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level2/books/07-judgment-seat-of-christ.pdf',
          ),
        },
        {
          title: "God's Will for Your Life",
          cover:
            '/covers/discipleship/level2/books/08-gods-will-for-your-life.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level2/books/08-gods-will-for-your-life.pdf',
          ),
        },
      ],
    },
    {
      level: 3,
      title: 'Maturity',
      subtitle: 'Advanced studies for spiritual leaders',
      color: 'var(--scarlet)',
      books: [
        {
          title: 'Grace',
          cover: '/covers/discipleship/level3/books/01-grace.png',
          pdf: getAssetUrl('downloads/discipleship/level3/books/01-grace.pdf'),
        },
        {
          title: 'Practical Christian Living',
          cover:
            '/covers/discipleship/level3/books/02-practical-christian-living.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level3/books/02-practical-christian-living.pdf',
          ),
        },
        {
          title: 'Sanctification',
          cover: '/covers/discipleship/level3/books/03-sanctification.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level3/books/03-sanctification.pdf',
          ),
        },
        {
          title: 'Victory Over Sin',
          cover: '/covers/discipleship/level3/books/04-victory-over-sin.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level3/books/04-victory-over-sin.pdf',
          ),
        },
        {
          title: 'Jesus Christ',
          cover: '/covers/discipleship/level3/books/05-jesus-christ.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level3/books/05-jesus-christ.pdf',
          ),
        },
        {
          title: 'Creation',
          cover: '/covers/discipleship/level3/books/06-creation.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level3/books/06-creation.pdf',
          ),
        },
        {
          title: 'Spiritual Gifts',
          cover: '/covers/discipleship/level3/books/07-spiritual-gifts.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level3/books/07-spiritual-gifts.pdf',
          ),
        },
        {
          title: 'Our Spiritual Armor',
          cover: '/covers/discipleship/level3/books/08-our-spiritual-armor.png',
          pdf: getAssetUrl(
            'downloads/discipleship/level3/books/08-our-spiritual-armor.pdf',
          ),
        },
      ],
    },
  ];

  const currentLevel = levels.find((l) => l.level === activeLevel);

  return (
    <div className="discipleship-page">
      <header className="faith-intro">
        <h1>Foundations of Our Faith</h1>
        <p>Grow in your understanding of the Bible, one lesson at a time.
          Start with Level 1 and work through the three levels in order.</p>
        <TextToSpeech inline />
      </header>

      <section className="faith-curriculum" aria-label="Discipleship lessons">
        <nav className="faith-levels" aria-label="Choose a study level" ref={levelNavRef}>
          {levels.map((level) => (
            <button
              key={level.level}
              type="button"
              data-level={level.level}
              className={`faith-level ${activeLevel === level.level ? 'is-selected' : ''}`}
              aria-pressed={activeLevel === level.level}
              aria-controls="faith-lessons"
              onClick={() => selectLevel(level.level)}
            >
              <span className="faith-level-number">Level {level.level}</span>
              <span className="faith-level-title">{level.title}</span>
              <span className="faith-level-count">{level.books.length} lessons</span>
            </button>
          ))}
        </nav>

        <div id="faith-lessons" aria-labelledby="faith-level-heading">
          <div className="faith-level-heading" aria-live="polite" aria-atomic="true">
            <h2 id="faith-level-heading">Level {activeLevel}: {currentLevel.title}</h2>
            <p>{currentLevel.subtitle}. {activeLevel === 1 ? 'Begin with Understanding Salvation.' : 'Read the lessons below in order.'}</p>
          </div>
          <p className="faith-study-note">Use your King James Bible alongside each lesson. Reading opens a PDF in a new tab.</p>
          <ol className="faith-lessons">
            {currentLevel.books.map((book, index) => (
              <li className="faith-lesson" key={book.pdf}>
                <img className="faith-cover" src={book.cover} alt="" loading="lazy" />
                <div className="faith-lesson-details">
                  <span className="faith-lesson-number">Lesson {index + 1}</span>
                  <h3>{book.title}</h3>
                </div>
                <div className="faith-lesson-actions">
                  <a className="faith-read" href={book.pdf} target="_blank" rel="noopener noreferrer"
                    aria-label={`Read lesson ${index + 1}: ${book.title} (PDF, opens in a new tab)`}>
                    Read lesson <span aria-hidden="true">↗</span>
                  </a>
                  <a className="faith-download" href={book.pdf} download
                    aria-label={`Download ${book.title} (PDF)`}>Download PDF</a>
                </div>
              </li>
            ))}
          </ol>
          <div className="faith-next">
            <p>{activeLevel < 3 ? 'Ready for the next level?' : 'Revisit any level whenever you need a refresher.'}</p>
            {activeLevel < 3 && (
              <button type="button" onClick={() => selectLevel(activeLevel + 1, true)}>
                Continue to Level {activeLevel + 1}: {levels[activeLevel].title} <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Discipleship;
