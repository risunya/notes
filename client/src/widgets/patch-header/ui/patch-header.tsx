import { useTranslation } from 'react-i18next';
import "./patch-header.scss";

export const PatchHeader = () => {
    const {t} = useTranslation();
    return (
        <div className="patch-header">
            <div className="patch-heder__text">
                {t("news")}
                <span>
                    <a href="./patch" className="patch-heder__text link">
                        {t("newslink")}
                    </a>
                </span>
            </div>
        </div>
    )
}