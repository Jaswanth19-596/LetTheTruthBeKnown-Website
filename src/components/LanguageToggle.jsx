import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const currentLang = availableLanguages.find(l => l.code === language) || availableLanguages[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="lang-floating" ref={ref}>
      {/* Trigger pill */}
      <button
        className="lang-trigger"
        onClick={() => setIsOpen(o => !o)}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="lang-globe">🌐</span>
        <span className="lang-current-flag">{currentLang.flag}</span>
        <span className="lang-current-code">{currentLang.code.toUpperCase()}</span>
        <svg
          className={`lang-caret ${isOpen ? 'open' : ''}`}
          width="11" height="11" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {/* Dropdown — opens to the right */}
      {isOpen && (
        <div className="lang-menu">
          <p className="lang-menu-label">Select Language</p>
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${lang.code === language ? 'active' : ''}`}
              onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
              <span className="lang-native">{lang.nativeName}</span>
              {lang.code === language && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
