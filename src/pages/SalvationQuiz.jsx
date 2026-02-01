import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './SalvationQuiz.css';

const SalvationQuiz = () => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { questionKey: 'salvationQuiz.q1', verseKey: 'salvationQuiz.v1', correctAnswer: 'yes' },
    { questionKey: 'salvationQuiz.q2', verseKey: 'salvationQuiz.v2', correctAnswer: 'yes' },
    { questionKey: 'salvationQuiz.q3', verseKey: 'salvationQuiz.v3', correctAnswer: 'yes' },
    { questionKey: 'salvationQuiz.q4', verseKey: 'salvationQuiz.v4', correctAnswer: 'yes' },
    { questionKey: 'salvationQuiz.q5', verseKey: 'salvationQuiz.v5', correctAnswer: 'yes' },
    { questionKey: 'salvationQuiz.q6', verseKey: 'salvationQuiz.v6', correctAnswer: 'no' },
    { questionKey: 'salvationQuiz.q7', verseKey: 'salvationQuiz.v7', correctAnswer: 'yes' },
    { questionKey: 'salvationQuiz.q8', verseKey: 'salvationQuiz.v8', correctAnswer: 'yes' },
    { questionKey: 'salvationQuiz.q9', verseKey: 'salvationQuiz.v9', correctAnswer: 'yes' },
    { questionKey: 'salvationQuiz.q10', verseKey: 'salvationQuiz.v10', correctAnswer: 'yes' }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) correct++;
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);
  const isSaved = score === questions.length;

  return (
    <div className="quiz-page">
      <section className="page-hero quiz-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">{t('salvationQuiz.badge')}</span>
            <h1>{t('salvationQuiz.title')}</h1>
            <p>{t('salvationQuiz.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="quiz-section section">
        <div className="container">
          {!showResults ? (
            <div className="quiz-card">
              <div className="quiz-progress">
                <div className="progress-text">
                  {t('salvationQuiz.question')} {currentQuestion + 1} {t('common.of')} {questions.length}
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
                </div>
              </div>
              <div className="quiz-question">
                <h2>{t(questions[currentQuestion].questionKey)}</h2>
                <div className="quiz-verse"><p>{t(questions[currentQuestion].verseKey)}</p></div>
              </div>
              <div className="quiz-answers">
                <button className="answer-btn yes" onClick={() => handleAnswer('yes')}>✓ {t('salvationQuiz.yes')}</button>
                <button className="answer-btn no" onClick={() => handleAnswer('no')}>✗ {t('salvationQuiz.no')}</button>
              </div>
            </div>
          ) : (
            <div className="quiz-results">
              <div className={`results-card ${isSaved ? 'saved' : 'unsaved'}`}>
                <div className="results-icon">{isSaved ? '✝️' : '⚠️'}</div>
                <h2 className="results-title">{isSaved ? t('salvationQuiz.saved') : t('salvationQuiz.notSaved')}</h2>
                <div className="results-score">
                  <span className="score-number">{score}</span>
                  <span className="score-total">/ {questions.length}</span>
                </div>
                <p className="results-percentage">{percentage}% {t('salvationQuiz.biblicalAnswers')}</p>
                <div className="results-message">
                  <p>{isSaved ? t('salvationQuiz.savedMessage') : t('salvationQuiz.notSavedMessage')}</p>
                </div>
                <div className="results-verse">
                  <p>{t('salvationQuiz.resultsVerse')}</p>
                  <span>{t('salvationQuiz.resultsVerseRef')}</span>
                </div>
                <div className="results-actions">
                  {isSaved ? (
                    <>
                      <a href="/next-steps" className="btn btn-primary">{t('salvationQuiz.whatsNext')} →</a>
                      <a href="/gospel-tracts" className="btn btn-secondary">{t('salvationQuiz.readGospelTracts')}</a>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-primary" onClick={resetQuiz}>{t('salvationQuiz.takeAgain')}</button>
                      <a href="/gospel-tracts" className="btn btn-secondary">{t('salvationQuiz.readGospelTracts')}</a>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {!showResults && (
        <section className="quiz-info section">
          <div className="container">
            <div className="info-grid">
              <div className="info-item">
                <h4>{t('salvationQuiz.featureBibleBased')}</h4>
                <p>{t('salvationQuiz.featureBibleBasedDesc')}</p>
              </div>
              <div className="info-item">
                <h4>{t('salvationQuiz.featurePrivate')}</h4>
                <p>{t('salvationQuiz.featurePrivateDesc')}</p>
              </div>
              <div className="info-item">
                <h4>{t('salvationQuiz.featureEducational')}</h4>
                <p>{t('salvationQuiz.featureEducationalDesc')}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SalvationQuiz;
