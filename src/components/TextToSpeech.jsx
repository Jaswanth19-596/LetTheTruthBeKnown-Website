import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './TextToSpeech.css';

const TextToSpeech = ({ text, language = 'en-US', inline = false }) => {
  const { pathname } = useLocation();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported] = useState(() => 'speechSynthesis' in window);
  const [rate, setRate] = useState(0.8);
  const utteranceRef = useRef(null);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const cancelSpeech = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const getVoiceForLanguage = (langCode) => {
    const voices = window.speechSynthesis.getVoices();
    // Try exact match first
    let voice = voices.find(v => v.lang === langCode && /Daniel|David|James|George|Guy|Aaron/i.test(v.name)) || voices.find(v => v.lang === langCode);
    // Try base language match (e.g., 'sw' matches 'sw-KE')
    if (!voice) {
      const baseLang = langCode.split('-')[0];
      voice = voices.find(v => v.lang.startsWith(baseLang));
    }
    // Fallback to English if no match
    if (!voice) {
      voice = voices.find(v => v.lang.startsWith('en'));
    }
    return voice;
  };

  const handleSpeak = () => {
    if (!isSupported) return;

    if (isSpeaking) {
      cancelSpeech();
      return;
    }

    // Use provided text or fallback to page content
    const textToRead = text || getPageContent();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Set voice based on language prop
    const voice = getVoiceForLanguage(language);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.error('TTS Error:', e);
      setIsSpeaking(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const getPageContent = () => {
    const mainContent = document.querySelector('main') || document.body;
    return mainContent.innerText || 'No text found to read.';
  };

  if (!isSupported || (['/discipleship', '/resources'].includes(pathname) && !inline)) return null;

  return (
    <div className={`tts-controls${inline ? ' tts-controls-inline' : ''}`}>
    <label className="tts-speed">Reading speed
      <select value={rate} onChange={(e) => { cancelSpeech(); setRate(Number(e.target.value)); }}>
        <option value="0.65">Slower</option><option value="0.8">Gentle</option><option value="1">Normal</option>
      </select>
    </label>
    <button
      className={`tts-button ${isSpeaking ? 'speaking' : ''}`}
      onClick={handleSpeak}
      aria-label={isSpeaking ? 'Stop reading' : 'Listen'}
      title={isSpeaking ? 'Stop' : 'Listen'}
    >
      {isSpeaking ? (
        <>
          <span className="tts-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tts-svg-icon" style={{ verticalAlign: 'middle' }}>
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            </svg>
          </span>
          <span className="tts-label">Stop</span>
        </>
      ) : (
        <>
          <span className="tts-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tts-svg-icon" style={{ verticalAlign: 'middle' }}>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </span>
          <span className="tts-label">Listen</span>
        </>
      )}
    </button>
    </div>
  );
};

export default TextToSpeech;
