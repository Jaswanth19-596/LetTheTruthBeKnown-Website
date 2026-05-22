import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './SalvationQuiz.css';

const questions = [
  {
    id: 1,
    question: 'Have you ever sinned — told a lie, stolen, had impure thoughts?',
    verse: 'Romans 3:23 — "For all have sinned, and come short of the glory of God."',
    correctAnswer: true,
  },
  {
    id: 2,
    question: 'Do you believe that Jesus Christ is the Son of God?',
    verse: 'John 3:16 — "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."',
    correctAnswer: true,
  },
  {
    id: 3,
    question: 'Do you believe Jesus died on the cross for your sins?',
    verse: '1 Peter 2:24 — "Who his own self bare our sins in his own body on the tree."',
    correctAnswer: true,
  },
  {
    id: 4,
    question: 'Do you believe Jesus rose from the dead?',
    verse: 'Romans 10:9 — "If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved."',
    correctAnswer: true,
  },
  {
    id: 5,
    question: 'Have you personally asked Jesus Christ to save you?',
    verse: 'Romans 10:13 — "For whosoever shall call upon the name of the Lord shall be saved."',
    correctAnswer: true,
  },
  {
    id: 6,
    question: 'Are you trusting in your good works to get you to Heaven?',
    verse: 'Ephesians 2:8-9 — "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."',
    correctAnswer: false, // correct biblical answer is NO
  },
  {
    id: 7,
    question: 'Are you trusting in Jesus Christ ALONE for your salvation?',
    verse: 'Acts 4:12 — "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved."',
    correctAnswer: true,
  },
  {
    id: 8,
    question: 'If you died today, do you KNOW for certain you would go to Heaven?',
    verse: '1 John 5:13 — "These things have I written unto you that believe on the name of the Son of God; that ye may KNOW that ye have eternal life."',
    correctAnswer: true,
  },
  {
    id: 9,
    question: 'Do you believe that eternal life is a free gift from God?',
    verse: 'Romans 6:23 — "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord."',
    correctAnswer: true,
  },
  {
    id: 10,
    question: 'Have you placed your complete trust in Jesus Christ as your personal Saviour?',
    verse: 'John 1:12 — "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name."',
    correctAnswer: true,
  },
];

const SalvationQuiz = () => {
  const { t } = useLanguage();
  const [answers, setAnswers]         = useState({});   // { [id]: true|false }
  const [submitted, setSubmitted]     = useState(false);
  const [showVerses, setShowVerses]   = useState({});   // { [id]: bool }

  const totalAnswered = Object.keys(answers).length;
  const progress      = (totalAnswered / questions.length) * 100;

  const handleAnswer = (id, val) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const toggleVerse = (id) =>
    setShowVerses((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleSubmit = () => {
    if (totalAnswered < questions.length) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setShowVerses({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Score: how many matched the biblical answer */
  const correctCount = submitted
    ? questions.filter((q) => answers[q.id] === q.correctAnswer).length
    : 0;
  const isSaved = submitted && correctCount >= 9;

  return (
    <div className="sq-page">

      {/* ── Header ── */}
      <section className="sq-header">
        <span className="sq-tag">Self-Examination</span>
        <h1 className="sq-title">Salvation Quiz</h1>
        <p className="sq-subtitle">
          Answer honestly — this is between you and God.
        </p>
        <blockquote className="sq-verse-header">
          "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God."
          <cite>— Ephesians 2:8</cite>
        </blockquote>
      </section>

      {/* ── Result banner (after submit) ── */}
      {submitted && (
        <section className={`sq-result ${isSaved ? 'sq-result-saved' : 'sq-result-unsaved'}`}>
          <div className="sq-result-inner">
            <div className="sq-result-icon">{isSaved ? '✓' : '!'}</div>
            <div>
              <h2 className="sq-result-title">
                {isSaved ? 'Your answers align with Scripture.' : 'Some answers need reflection.'}
              </h2>
              <p className="sq-result-desc">
                {isSaved
                  ? 'You understand God\'s plan of salvation. Continue to grow through prayer, Bible study, and fellowship.'
                  : 'Salvation is by grace through faith in Jesus Christ alone — not by works. Review the verses below and consider reading our Gospel tracts.'}
              </p>
              <div className="sq-result-actions">
                {!isSaved && (
                  <Link to="/seeking-truth" className="sq-btn sq-btn-primary">
                    Learn More About Salvation →
                  </Link>
                )}
                {isSaved && (
                  <Link to="/next-steps" className="sq-btn sq-btn-primary">
                    Your Next Steps →
                  </Link>
                )}
                <button className="sq-btn sq-btn-ghost" onClick={handleReset}>
                  Take Again
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Progress bar ── */}
      {!submitted && (
        <div className="sq-progress-bar-wrap">
          <div className="sq-progress-meta">
            <span>{totalAnswered} of {questions.length} answered</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="sq-progress-track">
            <div className="sq-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {/* ── Questions ── */}
      <div className="sq-questions">
        {questions.map((q, idx) => {
          const ans       = answers[q.id];
          const answered  = ans !== undefined;
          const isCorrect = submitted && ans === q.correctAnswer;
          const isWrong   = submitted && ans !== q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`sq-card ${answered ? 'sq-card-answered' : ''} ${isCorrect ? 'sq-card-correct' : ''} ${isWrong ? 'sq-card-wrong' : ''}`}
            >
              {/* Number + Question */}
              <div className="sq-card-head">
                <span className="sq-card-num">{String(idx + 1).padStart(2, '0')}</span>
                <p className="sq-card-q">{q.question}</p>
                {submitted && (
                  <span className={`sq-card-badge ${isCorrect ? 'badge-ok' : 'badge-err'}`}>
                    {isCorrect ? '✓ Biblical' : '✗ Review'}
                  </span>
                )}
              </div>

              {/* Yes / No buttons */}
              <div className="sq-card-btns">
                <button
                  className={`sq-ans-btn sq-ans-yes ${ans === true ? 'selected' : ''}`}
                  onClick={() => handleAnswer(q.id, true)}
                  disabled={submitted}
                >
                  Yes
                </button>
                <button
                  className={`sq-ans-btn sq-ans-no ${ans === false ? 'selected' : ''}`}
                  onClick={() => handleAnswer(q.id, false)}
                  disabled={submitted}
                >
                  No
                </button>

                {/* Show verse toggle */}
                <button
                  className="sq-verse-toggle"
                  onClick={() => toggleVerse(q.id)}
                >
                  {showVerses[q.id] ? 'Hide verse' : 'Show verse'}
                </button>
              </div>

              {/* Verse */}
              {showVerses[q.id] && (
                <div className="sq-card-verse">
                  <p><strong>Scripture:</strong> {q.verse}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Submit ── */}
      {!submitted && (
        <div className="sq-submit-wrap">
          <button
            className={`sq-submit-btn ${totalAnswered < questions.length ? 'disabled' : ''}`}
            onClick={handleSubmit}
            disabled={totalAnswered < questions.length}
          >
            {totalAnswered < questions.length
              ? `Answer all ${questions.length - totalAnswered} remaining questions`
              : 'See My Results →'}
          </button>
          <p className="sq-submit-note">Your answers are never stored or shared.</p>
        </div>
      )}

    </div>
  );
};

export default SalvationQuiz;
