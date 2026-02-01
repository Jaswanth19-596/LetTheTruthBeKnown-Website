import { createContext, useContext, useState, useEffect } from 'react';
import { translations, availableLanguages, getTranslation } from '../locales';

const LanguageContext = createContext();

const STORAGE_KEY = 'ltbtk-language';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem(STORAGE_KEY, language);
    // Update document lang attribute for accessibility
    document.documentElement.lang = language;
    // Update text direction if needed (for RTL languages like Arabic)
    const langData = availableLanguages.find(l => l.code === language);
    document.documentElement.dir = langData?.direction || 'ltr';
  }, [language]);

  // Translation function with dot notation support
  // Usage: t('nav.home') or t('home.badge')
  const t = (key) => {
    return getTranslation(language, key);
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: changeLanguage, 
      t,
      availableLanguages 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
