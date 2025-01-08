import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'de',
        debug: true,

        interpolation: {
            escapeValue: false,
        },

        detection: {
            order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        }
    });

export default i18n;
