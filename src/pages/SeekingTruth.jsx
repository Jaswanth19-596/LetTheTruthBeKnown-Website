import { Link } from 'react-router-dom';
import './SeekingTruth.css';

const passages = [
  {
    id: 'our-need', title: 'Why do we need salvation?',
    text: 'The Bible teaches that we have all sinned and fallen short of God’s holiness. Salvation begins with recognising our need for His forgiveness.',
    verse: 'For all have sinned, and come short of the glory of God;', reference: 'Romans 3:23',
  },
  {
    id: 'jesus-christ', title: 'What has Jesus Christ done for us?',
    text: 'God sent His Son, Jesus Christ, who died for our sins and rose from the dead. The Gospel is the good news that eternal life is available through Him.',
    verse: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.', reference: 'Romans 6:23',
  },
  {
    id: 'faith', title: 'Can we earn salvation?',
    text: 'Salvation is God’s gift, received through faith in Jesus Christ. We cannot earn it through good deeds or religious activity.',
    verse: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.', reference: 'Ephesians 2:8–9',
  },
  {
    id: 'receive', title: 'How do I respond?',
    text: 'Turn to Jesus Christ in faith, believing that He died for your sins and rose again. Trust Him as your personal Saviour and call upon Him for salvation.',
    verse: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.', reference: 'Romans 10:9',
  },
];

export default function SeekingTruth() {
  return (
    <div className="st-page">
      <header className="st-reading-header">
        <h1>Understand the Gospel</h1>
        <p>What does the Bible say about salvation through Jesus Christ? Read the explanation and Scripture below at your own pace.</p>
        <Link to="/#gospel-message">Prefer to watch? Go to the Gospel video</Link>
      </header>
      <article className="st-reading" aria-label="A guide to salvation">
        {passages.map((passage) => (
          <section key={passage.id} aria-labelledby={passage.id}>
            <h2 id={passage.id}>{passage.title}</h2>
            <p>{passage.text}</p>
            <blockquote>“{passage.verse}”<cite>{passage.reference}</cite></blockquote>
          </section>
        ))}
        <section aria-labelledby="st-assurance">
          <h2 id="st-assurance">God’s promise</h2>
          <p>The assurance of salvation rests on God’s promise to those who believe in Jesus Christ.</p>
          <blockquote>“For whosoever shall call upon the name of the Lord shall be saved.”<cite>Romans 10:13</cite></blockquote>
        </section>
        <section className="st-questions" aria-labelledby="st-questions-title">
          <h2 id="st-questions-title">Still have questions?</h2>
          <p>You can take time to understand what you have read. Explore common questions about the Bible or contact us with your own.</p>
          <div className="st-reading-actions">
            <Link to="/faqs" className="btn btn-primary">Read common questions</Link>
            <Link to="/contact">Ask a question</Link>
          </div>
        </section>
        <section aria-labelledby="st-next-title">
          <h2 id="st-next-title">Continue from here</h2>
          <ul className="st-next-options">
            <li><Link to="/next-steps">First steps as a new believer</Link><p>If you have trusted Christ, find guidance for beginning your Christian life.</p></li>
            <li><Link to="/gospel-tracts">Gospel tracts in your language</Link><p>Read, download, or print a Gospel tract for yourself or to share.</p></li>
            <li><Link to="/salvation-quiz">Reflect with the salvation quiz</Link><p>An optional set of questions to consider alongside Scripture.</p></li>
          </ul>
        </section>
      </article>
    </div>
  );
}
