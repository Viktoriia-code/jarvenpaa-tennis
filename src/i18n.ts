import fi from "./locales/fi.json";
import en from "./locales/en.json";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en
  },
  fi: {
    translation: fi
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || "fi",
    fallbackLng: "fi",

    interpolation: {
      escapeValue: false
    }
  });