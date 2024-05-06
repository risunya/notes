import './home.scss';
import { Header } from '../../../widgets/header/ui/header';
import { PatchHeader } from '../../../widgets/patch-header';
import { Footer } from '../../../widgets/footer';
import { Board } from '../../../widgets/board';
import { useState } from 'react';
import { LoginMenu } from '../../../widgets/loginmenu';

export const Home = () => {
    const [isOpenLoginForm, setIsOpenLoginForm] = useState(false);

    const OpenLoginForm = () => {
        setIsOpenLoginForm(!isOpenLoginForm);
    };

    const CloseLoginForm = () => {
        setIsOpenLoginForm(!isOpenLoginForm);
    };

    return (
        <>
            <PatchHeader/>
            <Header handleClick={OpenLoginForm} isOpenLoginForm={isOpenLoginForm} />
            <Board/>
            <Footer/>
            {isOpenLoginForm && <LoginMenu handleClick={CloseLoginForm} isOpenLoginForm={isOpenLoginForm}/>}
        </>
    );
};