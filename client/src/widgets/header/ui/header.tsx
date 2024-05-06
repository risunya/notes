import { LanguageButton } from '../../../shared/ui/languageButton';
import { SearchButton } from '../../../shared/ui/searchButton';
import { ThemeButton } from '../../../shared/ui/themeButton';
import './header.scss';
import { useTranslation } from 'react-i18next';

export const Header = ({ handleClick, isOpenLoginForm }) => {
    const { t } = useTranslation();

    return (
       <div className='header'>
        <div className="navbar">
                <a className='logo' href='#'>Notes</a>
                <div className='left-container'>
                    <ThemeButton/>   
                    <LanguageButton/>
                    <SearchButton/>
                </div>
                <div className='right-container'>
                    <a className='allsides' href='#' onClick={handleClick}>{t("login")}</a>
                    <a className='allsides' href='#'>{t("signup")}</a>
                </div>
            </div>
       </div>
    );
};