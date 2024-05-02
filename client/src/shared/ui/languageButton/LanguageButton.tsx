import { useTranslation } from 'react-i18next';
import './languagebutton.scss';
import { useState } from 'react';


export const LanguageButton = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (langitem: string) => {
        i18n.changeLanguage(langitem);
    }
    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
      setIsOpen(isOpen === false ? true : false);
    }

    const LanguageList = () => {
        return (
            <ul className='popup-menu'>
                <li className='item'><a onClick={() => changeLanguage('ru')}>Russian</a></li>
                <li className='item'><a onClick={() => changeLanguage('en')}>English</a></li>
                <li className='item'><a onClick={() => changeLanguage('es')}>Spanish</a></li>
            </ul>
        )
    }


    return (
        <>
            <button className='language-button' onClick={toggle}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-globe">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            </button>
            {isOpen && <LanguageList/>}
        </>
    );
};
