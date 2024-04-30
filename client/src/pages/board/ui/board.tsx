import { Button } from '../../../shared/ui/button';
import './board.scss';

export const Board = () => {
    
    return (
       <>
        <div className="header">
            <div className="list">
                <div className='left-container'>
                    <a className='logo' href='#'>Notes</a>
                    <input className='input'></input>
                    <Button/>
                    <button className='language-button'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </button>
                   
                    
                </div>
                <div className='right-container'>
                    <a className='allsides' href='#'>Login</a>
                    <a className='allsides' href='#'>Create account</a>
                </div>
            </div>
        </div>
       </>
    )
}