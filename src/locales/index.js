// Translation system index
// To add a new language:
// 1. Create a new JSON file in this folder (e.g., es.json for Spanish)
// 2. Import it below and add it to the translations object
// 3. The language will automatically appear in the language selector

import en from './en.json';
import sw from './sw.json';
import fr from './fr.json';

// All available translations
export const translations = {
  en,
  sw,
  fr
};

// Get list of available languages from the loaded translations
export const availableLanguages = Object.entries(translations).map(([code, data]) => ({
  code,
  name: data.meta.name,
  nativeName: data.meta.nativeName,
  flag: data.meta.flag,
  direction: data.meta.direction || 'ltr'
}));

// Helper function to get a nested translation value
// Supports dot notation: t('home.badge') or t('nav.home')
export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return the key if not found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
};

export default translations;
