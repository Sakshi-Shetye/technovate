import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './public/locales/en.json';
import hi from './public/locales/hi.json';

i18n
  .use(initReactI18next)
  .init({
    // The language to use if translations in user language are not available.
    fallbackLng: 'en',
    // The default language
    lng: 'en',
    debug: true,
    // Add all translation files here
    resources: {
      en: {
        translation: en,
      },
      hi: {
        translation: hi,
      },
    },
    interpolation: {
      escapeValue: false, // React already does this
    },
  });

export default i18n;
