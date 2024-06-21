import { useState } from "react";
import './plusbutton.scss';

type PlusButtonProps = {
  onSubmit: (input: string) => void;
};

export const PlusButton: React.FC<PlusButtonProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSumbit = () => {
    if (!input) return;

    onSubmit(input);

    setInput('');
  };

  return (
    <div className="container">
      <input 
        type="text" 
        className="input" 
        value={input} 
        onChange={e => setInput(e.target.value)} 
      />
      <button onClick={handleSumbit}>Add new note</button>
    </div>
  );
};


