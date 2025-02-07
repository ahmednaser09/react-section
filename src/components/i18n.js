import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import TranslateEn from "./en.json";
import TranslateAr from "./ar.json";

const resources = {
  en: {
    translation: TranslateEn,
  },
  ar: {
    translation: TranslateAr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;