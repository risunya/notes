import React from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './app/App'

import './index.css'

import global_en from "./translations/en/global.json";
import global_ru from "./translations/ru/global.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'en',
    resources: {
        en: {
            global: global_en,
        },
        ru: {
            global: global_ru,
        },
    }
})

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
         <App />
        </I18nextProvider>
    </React.StrictMode>
)
