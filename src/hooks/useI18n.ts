import { useTranslation as useI18nextTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { resources } from '@/i18n/config';

export type Language = 'en' | 'ar';

// Extract translation keys from your translation files
export type TranslationKeys = keyof typeof resources.en.translation;

export const useTranslation = () => {
  const { t, i18n } = useI18nextTranslation();

  useEffect(() => {
    // Set RTL for Arabic
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return {
    t,
    language: i18n.language as Language,
    isArabic: i18n.language === 'ar',
    isEnglish: i18n.language === 'en',
    changeLanguage: (lang: Language) => i18n.changeLanguage(lang),
  };
};