import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import enLng from "./en/index.json";
import kgLng from "./kg/index.json";
import ruLng from "./ru/index.json";




i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: enLng
            },
            kg: {
                translation: kgLng
            },
            ru: {
                translation: ruLng
            }
        },
        fallbackLng: "ru",

        interpolation: {
            escapeValue: false
        }
    });


export default i18n;