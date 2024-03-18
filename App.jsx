import React, { useState } from "react";
import './App.css';

const Calculadora = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput('');
  };
  
  return (
    <div className="calculadora-container">
      <div>
        <input type="text" className="calculadora-input" value={input} readOnly />
        <div className="calculadora-botoes">
          <button className="calculadora-botao" onClick={() => handleButtonClick('1')}>1</button>
          <button className="calculadora-botao" onClick={() => handleButtonClick('2')}>2</button>
          <button className="calculadora-botao" onClick={() => handleButtonClick('3')}>3</button>
          <button className="calculadora-operador" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="calculadora-botoes">
          <button className="calculadora-botao" onClick={() => handleButtonClick('4')}>4</button>
          <button className="calculadora-botao" onClick={() => handleButtonClick('5')}>5</button>
          <button className="calculadora-botao" onClick={() => handleButtonClick('6')}>6</button>
          <button className="calculadora-operador" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="calculadora-botoes">
          <button className="calculadora-botao" onClick={() => handleButtonClick('7')}>7</button>
          <button className="calculadora-botao" onClick={() => handleButtonClick('8')}>8</button>
          <button className="calculadora-botao" onClick={() => handleButtonClick('9')}>9</button>
          <button className="calculadora-operador" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="calculadora-botoes">
          <button className="calculadora-botao calculadora-botao-0" onClick={() => handleButtonClick('0')}>0</button>
          <button className="calculadora-botao calculadora-botao-clear" onClick={handleClear}>C</button>
          <button className="calculadora-botao calculadora-botao-igual" onClick={handleCalculate}>=</button>
          <button className="calculadora-operador" onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
