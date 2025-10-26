import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Import translation files
import enTranslations from './locales/en/translation.json';
import arTranslations from './locales/ar/translation.json';

export const defaultNS = 'translation';
export const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  }
} as const;

i18n
  .use(HttpApi) // Load translations using http
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.DEV, // Enable debug in development
    
    defaultNS,
    ns: ['translation'],
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // Use static imports instead of backend for better performance
    resources,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language', // Keep same localStorage key
    },
    
    react: {
      useSuspense: false, // Disable suspense for smoother migration
    },
  });

export default i18n;