import React from 'react';
import { LanguageButton } from '../../../shared/ui/languageButton';
import { SearchButton } from '../../../shared/ui/searchButton';
import { ThemeButton } from '../../../shared/ui/themeButton';
import './header.scss';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
    handleClick: () => void;
    isOpenLoginForm: boolean;
}

export const Header: React.FC<HeaderProps> = ({ handleClick, isOpenLoginForm }) => {
    const { t } = useTranslation();

    return (
        <div className='header'>
            <div className="navbar">
                <a className='logo' href='#'>Notes</a>
                <div className='left-container'>
                    <ThemeButton />   
                    <LanguageButton />
                    <SearchButton />
                </div>
                <div className='right-container'>
                    {isOpenLoginForm ? (
                        <a className='allsides' href='#' onClick={handleClick}>{t("login")}</a>
                    ) : (
                        <>
                            <a className='allsides' href='#'>{t("signup")}</a>
                            {/* Other elements or logic based on isOpenLoginForm */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
