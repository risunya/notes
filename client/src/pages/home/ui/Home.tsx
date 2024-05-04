import './home.scss';
import { Header } from '../../../widgets/header/ui/header';
import { Board } from '../../../widgets/board';
import { PatchHeader } from '../../../widgets/patch-header';
import { Footer } from '../../../widgets/footer';

export const Home = () => {
    return (
        <>
            <PatchHeader/>
            <Header/>
            <Board/>
            <Footer/>
        </>
    )
}