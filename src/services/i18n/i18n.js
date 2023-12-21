import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLangs: ["ar", "en"],
    fallbackLang: "en",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
    backend: { loadPath: "/locales/{{lng}}.json" },
    react: { useSuspanse: false },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
