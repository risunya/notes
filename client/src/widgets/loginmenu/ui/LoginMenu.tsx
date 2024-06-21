import React from 'react';
import './loginmenu.scss';

interface LoginMenuProps {
    handleClick: () => void;
    isOpenLoginForm: boolean;
}

export const LoginMenu: React.FC<LoginMenuProps> = ({ handleClick, isOpenLoginForm }) => {
    return (
        <div className="login-menu-wrapper" onClick={handleClick}>
            {isOpenLoginForm && (
                <div className='login-menu'>
                    <div className='form-header'>Sign In</div> 
                    <div className="form">
                        <div className="inputBox"> 
                            <input type="text" defaultValue="Username"/>
                        </div> 
                        <div className="inputBox"> 
                            <input type="password" defaultValue="Password"/>
                        </div> 
                        <div className="links">
                            <a href="#">Forgot Password</a>
                            <a href="#">Signup</a>
                        </div> 
                        <div className="inputBox"> 
                            <input type="submit" value="Login"/> 
                        </div> 
                    </div>
                </div>
            )}
        </div>
    );
};

