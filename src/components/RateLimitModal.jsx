import { useState, useEffect } from 'react';
import './RateLimitModal.css';

const RateLimitModal = ({ timeToWaitMs, onClose }) => {
  const [timeLeftMs, setTimeLeftMs] = useState(timeToWaitMs);

  useEffect(() => {
    if (timeLeftMs <= 0) {
      onClose();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeftMs(prev => {
        if (prev <= 1000) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeftMs, onClose]);

  // Format time remaining (e.g., "14m 23s" or "32s")
  const formatTime = (ms) => {
    const totalSeconds = Math.ceil(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    }
    return `${seconds}s`;
  };

  return (
    <div className="rate-limit-overlay" onClick={onClose}>
      <div className="rate-limit-modal" onClick={e => e.stopPropagation()}>
        <div className="rate-limit-icon-container">
          {/* An ancient-feeling SVG badge/shield instead of modern warning emoji */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h3 className="rate-limit-title">Limit Reached</h3>
        <p className="rate-limit-message">
          To protect our ministry resources and keep this website available to everyone, we limit the volume of download requests. Please take a moment to read or meditate, and try again in:
        </p>
        
        <div className="rate-limit-timer">
          {formatTime(timeLeftMs)}
        </div>

        <button className="btn btn-outline rate-limit-close-btn" onClick={onClose}>
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default RateLimitModal;
