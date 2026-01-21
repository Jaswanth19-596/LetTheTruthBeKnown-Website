import { useState, useEffect, useRef } from 'react';
import './IntroScreen.css';

function IntroScreen({ onComplete }) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFading, setIsFading] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Try to start audio immediately
    tryPlayAudio();

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
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const tryPlayAudio = () => {
    if (audioRef.current && !audioPlaying) {
      audioRef.current.volume = 0.7;
      audioRef.current.play()
        .then(() => {
          setAudioPlaying(true);
        })
        .catch(e => {
          console.log('Audio autoplay blocked, waiting for user interaction');
        });
    }
  };

  const handleScreenClick = () => {
    if (!audioPlaying) {
      tryPlayAudio();
    }
  };

  const handleTransition = () => {
    setIsFading(true);
    // Fade out audio
    if (audioRef.current) {
      const fadeAudio = setInterval(() => {
        if (audioRef.current && audioRef.current.volume > 0.1) {
          audioRef.current.volume -= 0.1;
        } else {
          clearInterval(fadeAudio);
          if (audioRef.current) {
            audioRef.current.pause();
          }
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
      <audio
        ref={audioRef}
        src="/In Christ Alone - piano instrumental cover.mp3"
        preload="auto"
        autoPlay
      />
      
      <div className="intro-image-container">
        <img 
          src="/intro_image.jpeg" 
          alt="Let the Truth be Known" 
          className="intro-image"
        />
      </div>

      <div className="intro-text-overlay">
        <h1 className="intro-title">
          Let the <span className="highlight">Truth</span> be Known
        </h1>
      </div>

      {!audioPlaying && (
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


