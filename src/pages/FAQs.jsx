import { useState } from 'react';
import { Link } from 'react-router-dom';
import topics from '../data/faqs.json';
import './FAQs.css';

const aliases = [
  { title: 'False Religions & Churches (Only Two Religions in the World)', target: 'salvation-2' },
  { title: 'Spiritual Battle', target: 'what-is-spiritual-warfare-and-how-does-it-affect-me' },
];

const FAQs = () => {
  const [search, setSearch] = useState('');
  const query = search.trim().toLocaleLowerCase();
  const matches = topics.map(topic => ({
    ...topic,
    questions: topic.questions.filter(question =>
      [topic.title, ...aliases.filter(alias => alias.target.startsWith(topic.id)).map(alias => alias.title),
        question.question, ...question.answer, ...question.references, ...(question.detail || [])]
        .join(' ').toLocaleLowerCase().includes(query)),
  })).filter(topic => topic.questions.length);
  const count = matches.reduce((total, topic) => total + topic.questions.length, 0);

  return (
    <div className="faqs-page">
      <section className="page-hero faqs-hero">
        <div className="container page-hero-content">
          <h1>Frequently Asked <span className="gradient-text">Questions</span></h1>
          <p>Questions and answers by topic, grounded in the Word of God.</p>
        </div>
      </section>
      <section className="section">
        <div className="container faq-reading">
          <h2>Introduction</h2>
          <p>Having understood the Gospel of Jesus Christ by reading <Link to="/gospel-tracts">God’s Simple Plan of Salvation</Link> and completed the series of lessons <Link to="/discipleship">Foundations of My Faith</Link>, you will have a basic understanding of correct doctrine from the Bible. To further assist you to understand clearly, we also have lessons on the ABC’s for Christians and the <Link to="/further-study">Answers books on Life’s Key Questions</Link>. These lessons will take you to a deeper understanding of the Scriptures and help protect you from false teaching.</p>
          <p>In this Frequently Asked Questions section we have endeavored to answer many commonly asked questions as succinctly and clearly as possible.</p>
          <p>We are not all at the same spiritual level and do not all have the same questions at the same time. To assist with the development of this service, please <Link to="/contact">send us your questions</Link> through our email.</p>
          <p>We will answer them as promptly and as simply as we can, using the Bible to explain our answers and placing them in a logical and easily referenced list of contents. Our final authority is the Word of God, which is the Foundation of our Faith and the basis of all Truth. May you be blessed and a blessing to others as your understanding grows.</p>
          <blockquote><p>“And ye shall know the truth, and the truth shall make you free.”</p><cite>John 8:32</cite></blockquote>
          <blockquote><p>“Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.”</p><cite>John 14:6</cite></blockquote>
          <blockquote><p>“And we know that the Son of God is come, and hath given us an understanding, that we may know him that is true, and we are in him that is true, even in his Son Jesus Christ. This is the true God, and eternal life.”</p><cite>1 John 5:20</cite></blockquote>
        </div>
      </section>
      <section className="section faqs-section">
        <div className="container">
          <nav className="faq-contents" aria-labelledby="faq-contents-heading" id="faq-contents">
            <h2 id="faq-contents-heading">Questions &amp; Answers by Topic</h2>
            <ul>{topics.map(topic => <li key={topic.id}><a href={`#${topic.id}`} onClick={() => setSearch('')}>{topic.title}</a></li>)}
              {aliases.map(alias => <li key={alias.target}><a href={`#${alias.target}`} onClick={() => setSearch('')}>{alias.title}</a></li>)}
            </ul>
          </nav>
          <div className="faq-search faq-reading">
            <label htmlFor="faq-search">Search questions, answers, or Scripture references</label>
            <input id="faq-search" type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Try salvation, prayer, or John 3" />
            <p role="status">{count} {count === 1 ? 'answer' : 'answers'}{query ? ' found' : ' across 36 topics'}.</p>
            {query && <button type="button" className="btn btn-secondary" onClick={() => setSearch('')}>Clear search</button>}
          </div>
          <div className="faq-reading">
            {count === 0 && <p>No answers match your search. Try another word or Scripture reference, or <Link to="/contact">send us your question</Link>.</p>}
            {matches.map(topic => (
              <section className="faq-topic" id={topic.id} key={topic.id} aria-labelledby={`${topic.id}-heading`}>
                <h2 id={`${topic.id}-heading`}>{topic.title}</h2>
                {topic.questions.map(question => (
                  <details className="faq-item" id={question.id} key={`${question.id}-${query}`} open={query ? true : undefined}>
                    <summary>{question.question}</summary>
                    <div className="faq-answer">
                      {question.answer.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                      <h3>KJB References</h3>
                      {question.references.map((reference, index) => <p key={index}>{reference}</p>)}
                      {question.detail && <details className="faq-detail"><summary>Read the fuller explanation</summary>{question.detail.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</details>}
                    </div>
                  </details>
                ))}
                <a className="faq-back" href="#faq-contents">Back to topics</a>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="questions-cta section">
        <div className="container faq-reading">
          <h2>Still Have Questions?</h2>
          <p>Send us your questions. We will answer as promptly and simply as we can, using the Bible to explain our answers.</p>
          <Link to="/contact" className="btn btn-primary">Send a Question</Link>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
