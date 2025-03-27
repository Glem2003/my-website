import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'

import {
    en,
    zhTW
} from './locales';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ["localStorage", "cookie", "navigator"], 
            caches: ["localStorage", "cookie"],
        },
        resources: {
            en: { translation: en },
            'zh-TW': { translation: zhTW }
        },
    });

export default i18n;