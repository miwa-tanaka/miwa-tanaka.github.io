import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./public/locales/en/common.json";
import jaCommon from "./public/locales/ja/common.json";
import enProjects from "./public/locales/en/projects.json";
import jaProjects from "./public/locales/ja/projects.json";

const detector = new LanguageDetector(null, {
  order: ["navigator", "localStorage"],
});

const options = {
  fallbackLng: "en",
  resources: {
    en: {
      Common: enCommon,
      Projects: enProjects,
    },
    ja: {
      Common: jaCommon,
      Projects: jaProjects,
    },
  },
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  react: {
    useSuspense: false, // This line is important for SSR
  },
};

i18next.use(detector).use(initReactI18next).init(options);

export default i18next;
