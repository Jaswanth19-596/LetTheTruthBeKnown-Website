import { useState, useEffect, useRef } from 'react';
import './IntroScreen.css';

function IntroScreen({ onComplete }) {
  const [timeLeft, setTimeLeft] = useState(70);
  const [isFading, setIsFading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const finishingRef = useRef(false);
  const fadeTimerRef = useRef(null);
  const completeTimerRef = useRef(null);

  useEffect(() => () => {
    clearInterval(fadeTimerRef.current);
    clearTimeout(completeTimerRef.current);
  }, []);

  const handleTransition = () => {
    if (finishingRef.current) return;
    finishingRef.current = true;
    setIsFading(true);
    fadeTimerRef.current = setInterval(() => {
      if (audioRef.current) audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.1);
    }, 100);
    completeTimerRef.current = setTimeout(() => {
      clearInterval(fadeTimerRef.current);
      audioRef.current?.pause();
      videoRef.current?.pause();
      onComplete();
    }, 1500);
  };

  const updateProgress = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    const elapsed = video.currentTime / video.duration * 70;
    setTimeLeft(Math.max(0, Math.ceil(70 - elapsed)));
    if (audioRef.current && !finishingRef.current) {
      audioRef.current.volume = Math.min(1, Math.max(0, (70 - elapsed) / 5));
    }
    if (elapsed >= 68.5) handleTransition();
  };

  const handleScreenClick = async () => {
    if (!isMuted || !audioRef.current || finishingRef.current) return;
    try {
      const video = videoRef.current;
      audioRef.current.currentTime = video?.duration ? video.currentTime / video.duration * 70 : 0;
      await audioRef.current.play();
      setIsMuted(false);
    } catch {
      // Keep the sound control available if the browser refuses playback.
    }
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
          onLoadedMetadata={() => { videoRef.current.playbackRate = videoRef.current.duration / 70; }}
          onTimeUpdate={updateProgress}
          onEnded={handleTransition}
          onError={handleTransition}
          playsInline
        >
          <source src="/final_video.mp4" type="video/mp4" />
        </video>
      </div>

      <audio ref={audioRef} src="/In Christ Alone - piano instrumental cover.mp3" preload="none" />
      <div className="intro-text-overlay">
        <h1 className="intro-title">
          Let the <span className="highlight">Truth</span> be Known
        </h1>
      </div>

      {isMuted && (
        <button type="button" className="audio-hint" onClick={(e) => { e.stopPropagation(); handleScreenClick(); }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="audio-hint-icon" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          Enable music
        </button>
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



