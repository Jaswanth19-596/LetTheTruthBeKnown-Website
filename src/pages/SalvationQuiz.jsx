import { useState } from 'react';
import './SalvationQuiz.css';

const SalvationQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Have you ever sinned (told a lie, stolen anything, had impure thoughts)?",
      verse: "Romans 3:23 - For all have sinned, and come short of the glory of God.",
      correctAnswer: "yes"
    },
    {
      question: "Do you believe that Jesus Christ is the Son of God?",
      verse: "John 3:16 - For God so loved the world, that he gave his only begotten Son...",
      correctAnswer: "yes"
    },
    {
      question: "Do you believe Jesus died on the cross for your sins?",
      verse: "1 Peter 2:24 - Who his own self bare our sins in his own body on the tree.",
      correctAnswer: "yes"
    },
    {
      question: "Do you believe Jesus rose from the dead?",
      verse: "Romans 10:9 - If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
      correctAnswer: "yes"
    },
    {
      question: "Have you ever personally asked Jesus Christ to save you?",
      verse: "Romans 10:13 - For whosoever shall call upon the name of the Lord shall be saved.",
      correctAnswer: "yes"
    },
    {
      question: "Are you trusting in your good works to get you to heaven?",
      verse: "Ephesians 2:8-9 - For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
      correctAnswer: "no"
    },
    {
      question: "Are you trusting in Jesus Christ ALONE for your salvation?",
      verse: "Acts 4:12 - Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.",
      correctAnswer: "yes"
    },
    {
      question: "If you died today, do you KNOW for certain you would go to heaven?",
      verse: "1 John 5:13 - These things have I written unto you that believe on the name of the Son of God; that ye may KNOW that ye have eternal life.",
      correctAnswer: "yes"
    },
    {
      question: "Do you believe that eternal life is a free gift from God?",
      verse: "Romans 6:23 - For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
      correctAnswer: "yes"
    },
    {
      question: "Have you placed your complete trust in Jesus Christ as your personal Savior?",
      verse: "John 1:12 - But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.",
      correctAnswer: "yes"
    }
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
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
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
  const isLikelySaved = percentage >= 80;

  return (
    <div className="quiz-page">
      {/* Hero */}
      <section className="page-hero quiz-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">Self-Examination</span>
            <h1>Salvation <span className="gradient-text">Quiz</span></h1>
            <p>Answer these 10 questions based on Bible verses to examine your understanding of salvation.</p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="quiz-section section">
        <div className="container">
          {!showResults ? (
            <div className="quiz-card">
              {/* Progress */}
              <div className="quiz-progress">
                <div className="progress-text">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="quiz-question">
                <h2>{questions[currentQuestion].question}</h2>
                <div className="quiz-verse">
                  <p>{questions[currentQuestion].verse}</p>
                </div>
              </div>

              {/* Answers */}
              <div className="quiz-answers">
                <button 
                  className="answer-btn yes"
                  onClick={() => handleAnswer('yes')}
                >
                  ✓ Yes
                </button>
                <button 
                  className="answer-btn no"
                  onClick={() => handleAnswer('no')}
                >
                  ✗ No
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-results">
              <div className={`results-card ${isLikelySaved ? 'saved' : 'unsaved'}`}>
                <div className="results-icon">
                  {isLikelySaved ? '✝️' : '⚠️'}
                </div>
                <h2 className="results-title">
                  {isLikelySaved ? 'Likely Saved' : 'Examine Your Heart'}
                </h2>
                <div className="results-score">
                  <span className="score-number">{score}</span>
                  <span className="score-total">/ {questions.length}</span>
                </div>
                <p className="results-percentage">{percentage}% Biblical Answers</p>
                
                <div className="results-message">
                  {isLikelySaved ? (
                    <p>
                      Based on your answers, it appears you understand and have accepted the Biblical plan of salvation. 
                      Continue to grow in your faith through prayer, Bible study, and fellowship with other believers.
                    </p>
                  ) : (
                    <p>
                      Based on your answers, you may want to examine what the Bible says about salvation. 
                      Salvation is by grace through faith in Jesus Christ alone, not by works. 
                      We encourage you to read our gospel tracts to learn more.
                    </p>
                  )}
                </div>

                <div className="results-verse">
                  <p>"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."</p>
                  <span>— Ephesians 2:8-9</span>
                </div>

                <div className="results-actions">
                  <button className="btn btn-primary" onClick={resetQuiz}>
                    Take Again
                  </button>
                  <a href="/gospel-tracts" className="btn btn-secondary">
                    Read Gospel Tracts
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      {!showResults && (
        <section className="quiz-info section">
          <div className="container">
            <div className="info-grid">
              <div className="info-item">
                <h4>Bible-Based</h4>
                <p>Each question is supported by Scripture</p>
              </div>
              <div className="info-item">
                <h4>Private</h4>
                <p>Your answers are not stored anywhere</p>
              </div>
              <div className="info-item">
                <h4>Educational</h4>
                <p>Learn what the Bible says about salvation</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SalvationQuiz;
