import { useSearchParams } from 'react-router-dom';
import { getAssetUrl } from '../config/assets';
import { useRateLimit } from '../context/RateLimitContext';
import TextToSpeech from '../components/TextToSpeech';
import './Resources.css';

const answerBooks = [
    { title: 'Soul Winning & Discipleship', description: 'Comprehensive guide to evangelism.', pdf: getAssetUrl('downloads/answers/01-soul-winning-discipleship.pdf') },
    { title: 'Proofs of Christ, The Bible, God', description: 'Apologetics and evidence for faith.', pdf: getAssetUrl('downloads/answers/02-proofs-of-christ.pdf') },
    { title: 'Church Issues', description: 'Biblical answers to church questions.', pdf: getAssetUrl('downloads/answers/03-church-issues.pdf') },
    { title: 'Christian Living', description: 'Practical guidance for daily life.', pdf: getAssetUrl('downloads/answers/04-christian-living.pdf') },
    { title: 'False Doctrines Refuted', description: 'Biblical responses to false teachings.', pdf: getAssetUrl('downloads/answers/05-false-doctrines-refuted.pdf') },
    { title: 'False Religions', description: 'Understanding world religions.', pdf: getAssetUrl('downloads/answers/06-false-religions.pdf') },
    { title: 'Important Sermons', description: 'Essential sermon topics.', pdf: getAssetUrl('downloads/answers/07-important-sermons.pdf') },
];

const otherResources = [
    { title: 'Lessons on Tongues', description: 'Eleven Bible-based lessons on tongues by Pastor Ted Speer.', image: '/covers/resources/books/lessons-on-tongues.png', pdf: getAssetUrl('downloads/resources/books/lessons-on-tongues.pdf') },
    { title: 'ABCs of Christian Growth', description: 'Foundational principles.', image: '/covers/resources/books/abcs-of-christian-growth.png', pdf: getAssetUrl('downloads/resources/books/abcs-of-christian-growth.pdf') },
    { title: 'ABCs of Christian Maturity', description: 'Advanced principles.', image: '/covers/resources/books/abcs-of-christian-maturity.png', pdf: getAssetUrl('downloads/resources/books/abcs-of-christian-maturity.pdf') },
    { title: 'Know Your Bible Better', description: 'Study guide to Scripture.', image: '/covers/resources/books/know-your-bible-better.png', pdf: getAssetUrl('downloads/resources/books/know-your-bible-better.pdf') },
    { title: 'Raising Prince', description: 'Biblical parenting.', image: '/covers/resources/books/raising-prince.png', pdf: getAssetUrl('downloads/resources/books/raising-prince.pdf') },
];


const categories = [
  { id: 'answers', title: 'Answer Books', count: '7 volumes', heading: 'The Answer Book Series', description: 'Answers to questions about faith, doctrine, and Christian living.' },
  { id: 'guides', title: 'Study Guides', count: '5 guides', heading: 'Study Guides', description: 'Materials for personal growth and ministry. Choose a subject you would like to explore.' },
  { id: 'further', title: 'Further Study', count: 'Bible and college', heading: 'Further Study', description: 'Read the Bible online or explore further biblical education.' },
];

const Resources = ({ furtherStudy = false }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultCategory = furtherStudy ? categories.find(({ id }) => id === 'further') : categories[0];
  const category = categories.find(({ id }) => id === searchParams.get('category')) || defaultCategory;
  const { checkAndRegister } = useRateLimit();
  const books = category.id === 'answers' ? answerBooks : otherResources;

  const selectCategory = (id) => {
    setSearchParams((params) => {
      params.set('category', id);
      return params;
    }, { preventScrollReset: true });
  };

  const checkPdfAccess = (event) => {
    if (!checkAndRegister('pdf_download')) event.preventDefault();
  };

  return (
    <div className="resources-page">
      <header className="study-intro">
        <h1>{furtherStudy ? 'Further Study' : 'Understanding More'}</h1>
        <p>Explore questions about faith and deepen your understanding of the Bible.
          Choose an answer book, a study guide, or a resource for further study.</p>
        <TextToSpeech inline key={category.id} />
      </header>

      <section className="study-library" aria-label="Study resources">
        <nav className="study-categories" aria-label="Choose a resource category">
          {categories.map(({ id, title, count }) => (
            <button key={id} type="button"
              className={`study-category${category.id === id ? ' is-selected' : ''}`}
              aria-pressed={category.id === id} aria-controls="study-content"
              onClick={() => selectCategory(id)}>
              <span className="study-category-title">{title}</span>
              <span className="study-category-count">{count}</span>
            </button>
          ))}
        </nav>

        <div id="study-content" aria-labelledby="study-heading">
          <div className="study-heading" aria-live="polite" aria-atomic="true">
            <h2 id="study-heading">{category.heading}</h2>
            <p>{category.description}</p>
          </div>
          <p className="study-note">{category.id === 'further'
            ? 'These links open external websites in a new tab.'
            : 'Use your King James Bible alongside your studies. Reading opens a PDF in a new tab.'}</p>

          {category.id !== 'further' ? (
            <ul className="study-list">
              {books.map((book, index) => (
                <li className={`study-row${book.image ? ' has-cover' : ''}`} key={book.pdf}>
                  {book.image && <img className="study-cover" src={book.image} alt="" loading="lazy" />}
                  <div className="study-details">
                    {category.id === 'answers' && <span className="study-volume">Volume {index + 1}</span>}
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </div>
                  <div className="study-actions">
                    <a className="study-read" href={book.pdf} target="_blank" rel="noopener noreferrer"
                      onClick={checkPdfAccess} aria-label={`Read ${book.title} (PDF, opens in a new tab)`}>
                      Read PDF <span aria-hidden="true">↗</span>
                    </a>
                    <a className="study-download" href={book.pdf} download onClick={checkPdfAccess}
                      aria-label={`Download ${book.title} (PDF)`}>Download PDF</a>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="study-list">
              <li className="study-row">
                <div className="study-details">
                  <h3>The Holy Bible (KJV)</h3>
                  <p>We believe the King James Version (KJV) is the preserved Word of God for English-speaking people. It is the final authority in all matters of faith and practice.</p>
                </div>
                <a className="study-read" href="https://www.bible.com/versions/1-kjv-king-james-version" target="_blank" rel="noopener noreferrer"
                  aria-label="Read the King James Bible online (opens in a new tab)">Read online <span aria-hidden="true">↗</span></a>
              </li>
              <li className="study-row">
                <div className="study-details">
                  <h3>Global Bible Baptist College</h3>
                  <p>Explore biblical studies through pre-recorded video lectures that you can watch on any device.</p>
                </div>
                <a className="study-read" href="https://gbbc.net" target="_blank" rel="noopener noreferrer"
                  aria-label="Visit Global Bible Baptist College (opens in a new tab)">Visit college <span aria-hidden="true">↗</span></a>
              </li>
            </ul>
          )}
          {category.id === 'guides' && (
            <aside className="study-coming" aria-labelledby="study-coming-heading">
              <h3 id="study-coming-heading">Forthcoming materials</h3>
              <p>Brandon Heselschwerdt’s lessons on Salvation, Tongues, Soul Winning, and the TAN Series &amp; Discipleship will be available after permission and materials are received.</p>
            </aside>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;
