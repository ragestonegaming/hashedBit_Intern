import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="keypad">
        <button onClick={clearInput} className="clear">C</button>
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={() => handleClick('/')} className="operator">/</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')} className="operator">x</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')} className="operator">-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')} className="operator">+</button>

        <button onClick={() => handleClick('0')} className="zero">0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculate} className="equals">=</button>
      </div>
    </div>
  );
}

export default App;
