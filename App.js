import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <input type="text" value={input} readOnly />
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
        ))}
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => handleClick(op)}>{op}</button>
        ))}
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
      {result && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;

