import { useState } from 'react';
import './search.scss';


export const SearchButton = () => {
    const Input = () => {
        return (
            <input className='input'></input>
        )
    }
    
    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
      setIsOpen(isOpen === false ? true : false);
    }

    return (
        <button className='search-button' onMouseEnter={toggle} onMouseLeave={toggle} > 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            {isOpen && <Input />}
        </button>      
    );
};


