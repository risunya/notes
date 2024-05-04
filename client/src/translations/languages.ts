import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    news:'News and 1.2.21 patch. ',
                    newslink:'Learn more.',
                    login: "Login",
                    signup: "Sign up",
                    board: 'Board',
                    coded: 'Coded by ',
                }
            },
            ru: {
                translation: {
                    news:'Новости и 1.2.21 патч. ',
                    newslink:'Узнать больше.',
                    login: "Логин",
                    signup: "Регнуться",
                    board: 'Доска', 
                    coded: 'Код написал ',                   
                }
            },
        }
    })

    
