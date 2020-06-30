import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_translate from './locales/en/translation.json';
import lt_translate from './locales/lt/translation.json';

i18n
  
  .use(Backend)
  
  .use(LanguageDetector)
  
  .use(initReactI18next)
  
  .init({


    ns: ['translation'],
    defaultNS: "translation" ,
    resources: {
      en:{
        translation: en_translate              
    },
      lt:{
        translation: lt_translate              
    }
},
    lng: "lt",
    fallbackLng: "lt",
    keySeparator: ".",
    debug: true,
    interpolation: {
      escapeValue: false
    }
});


export default i18n; 