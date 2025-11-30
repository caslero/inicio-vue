import { createI18n } from "vue-i18n";
import en from "./en/en";
import es from "./es/es";

const i18n = createI18n({
  legacy: false,
  locale: "es",
  fallbackLocale: "en",
  messages: {
    en,
    es,
  },
});

export default i18n;
