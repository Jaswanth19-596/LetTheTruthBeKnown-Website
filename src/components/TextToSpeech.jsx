import { useState, useRef, useEffect } from 'react';
import './TextToSpeech.css';

const TextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const utteranceRef = useRef(null);

  useEffect(() => {
    // Check if Web Speech API is supported
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
    }

    // Cleanup on unmount
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const getPageContent = () => {
    // Get the main content of the page
    const mainContent = document.querySelector('main') || document.querySelector('.home') || document.body;
    
    // Get all readable text elements
    const textElements = mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span.nav-label');
    
    let text = '';
    textElements.forEach((el) => {
      // Skip hidden elements and navigation
      if (el.offsetParent !== null && !el.closest('nav')) {
        text += el.textContent + '. ';
      }
    });

    return text.trim() || 'Welcome to Let the Truth be Known. Browse our resources to learn more.';
  };

  const handleSpeak = () => {
    if (!isSupported) {
      alert('Text-to-Speech is not supported in your browser. Please try using Chrome, Safari, or Edge.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = getPageContent();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure speech settings
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Try to use a natural-sounding voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith('en') && voice.name.includes('Google')
    ) || voices.find(voice => voice.lang.startsWith('en'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  if (!isSupported) {
    return null; // Don't render if not supported
  }

  return (
    <button
      className={`tts-button ${isSpeaking ? 'speaking' : ''}`}
      onClick={handleSpeak}
      aria-label={isSpeaking ? 'Stop reading aloud' : 'Read page content aloud'}
      title={isSpeaking ? 'Stop reading' : 'Listen to this page'}
    >
      {isSpeaking ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
      )}
      <span className="tts-label">{isSpeaking ? 'Stop' : 'Listen'}</span>
    </button>
  );
};

export default TextToSpeech;
