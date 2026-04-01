import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./public/locales/en.json";
import hi from "./public/locales/hi.json";
import mr from "./public/locales/mr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      hi: { common: hi },
      mr: { common: mr },
    },
    lng: "en",
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
  });

export default i18n;