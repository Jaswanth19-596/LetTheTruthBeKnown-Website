import { useState, useEffect, useRef } from 'react';
import './IntroScreen.css';

function IntroScreen({ onComplete }) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFading, setIsFading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Start countdown timer immediately
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTransition();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleScreenClick = () => {
    if (isMuted && videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleTransition = () => {
    setIsFading(true);
    // Fade out video audio
    if (videoRef.current && !videoRef.current.muted) {
      const fadeAudio = setInterval(() => {
        if (videoRef.current && videoRef.current.volume > 0.1) {
          videoRef.current.volume -= 0.1;
        } else {
          clearInterval(fadeAudio);
        }
      }, 100);
    }
    // Wait for fade animation then complete
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    handleTransition();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={`intro-screen ${isFading ? 'fade-out' : ''}`}
      onClick={handleScreenClick}
    >
      <div className="intro-video-container">
        <video 
          ref={videoRef}
          className="intro-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/final_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="intro-text-overlay">
        <h1 className="intro-title">
          Let the <span className="highlight">Truth</span> be Known
        </h1>
      </div>

      {isMuted && (
        <div className="audio-hint">
          🔊 Tap anywhere for sound
        </div>
      )}

      <div className="intro-controls">
        <div className="intro-timer">
          {formatTime(timeLeft)}
        </div>
        <button className="skip-button" onClick={handleSkip}>
          Skip Intro
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="5 4 15 12 5 20 5 4"></polygon>
            <line x1="19" y1="5" x2="19" y2="19"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default IntroScreen;



