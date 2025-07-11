import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import en from './locales/en.json';
import fr from './locales/fr.json';
// import ar from './locales/ar.json';
// import zh from './locales/zh.json';
// import es from './locales/es.json';
// import ptBR from './locales/pt-BR.json';
// import ru from './locales/ru.json';
// import de from './locales/de.json';
// import ja from './locales/ja.json';
// import ko from './locales/ko.json';
// import id from './locales/id.json';
// import it from './locales/it.json';

i18n
    .use(LanguageDetector) // detect browser language
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            // ar: { translation: ar },
            // zh: { translation: zh },
            // es: { translation: es },
            // "pt-BR": { translation: ptBR },
            // ru: { translation: ru },
            // de: { translation: de },
            // ja: { translation: ja },
            // ko: { translation: ko },
            // id: { translation: id },
            // it: { translation: it }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
