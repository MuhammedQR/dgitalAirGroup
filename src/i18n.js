import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation JSON files
import dataEn from "../locales/en.json";
import dataAr from "../locales/ar.json";

const resources = {
  en: {
    translation: dataEn,
  },
  ar: { // Use "ar" for Arabic
    translation: dataAr,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar", // Default language (can be changed dynamically)
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

// Function to change language dynamically (optional)
const changeLanguage = (newLng) => {
  i18n.changeLanguage(newLng);
};

export { i18n, changeLanguage }; // Export both i18n and changeLanguage
