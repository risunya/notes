import './board.scss';

export const Board = () => {
    return (
       <>
        <div className="header">
            <div className="list">
                <div className='left-container'>
                    <a className='logo' href='#'>Notes</a>
                    <input className='input'></input>
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