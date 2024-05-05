import { useState } from "react";
import './plusbutton.scss';

export const PlusButton = ({onSubmit}) => {

    const [input, setInput] = useState('');

    const handleSumbit = () => {
        if(!input) return 

        onSubmit(input)

        setInput('')
    }
    return (
        <div className="container">
            <input type="text" className="input" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={handleSumbit}>Add new note</button>
        </div>
    )
}



