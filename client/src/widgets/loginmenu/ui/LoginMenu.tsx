import './loginmenu.scss';

export const LoginMenu = ({ handleClick, isOpenLoginForm }) => {
    return (
        <div className="login-menu-wrapper" onClick={handleClick}>
            <div className='login-menu'>
                    <div className='form-header'>Sign In</div> 
                    <div className="form">
                        <div className="inputBox"> 
                            <input type="text" value="Username"/>
                        </div> 
                        <div className="inputBox"> 
                            <input type="text" value="Password"/>
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
        </div>
    )
}

    