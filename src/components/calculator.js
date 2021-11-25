import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (value) => {
    const result = calculate({ total, next, operation }, value);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div id="main-container">
      <div id="calc-screen">
        <div className="calcscr previous-op" />
        <div className=" calcscr current-op">
          <p>
            { total }
            { operation }
            { next }
          </p>
        </div>
      </div>
      <div id="calc-buttons">
        <button type="button" className="AC grey-btn" id="AC" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" className="PlusMinus grey-btn" id="+/-" onClick={() => handleClick('+')}>+/-</button>
        <button type="button" className="Percent grey-btn" id="%" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="Div ora-btn" id="÷" onClick={() => handleClick('÷')}>÷</button>
        <button type="button" className="Num-btn grey-btn" id="7" onClick={() => handleClick('7')}>7</button>
        <button type="button" className="Num-btn grey-btn" id="8" onClick={() => handleClick('8')}>8</button>
        <button type="button" className="Num-btn grey-btn" id="9" onClick={() => handleClick('9')}>9</button>
        <button type="button" className="Times ora-btn" id="x" onClick={() => handleClick('x')}>x</button>
        <button type="button" className="Num-btn grey-btn" id="4" onClick={() => handleClick('4')}>4</button>
        <button type="button" className="Num-btn grey-btn" id="5" onClick={() => handleClick('5')}>5</button>
        <button type="button" className="Num-btn grey-btn" id="6" onClick={() => handleClick('6')}>6</button>
        <button type="button" className="Minus ora-btn" id="-" onClick={() => handleClick('-')}>-</button>
        <button type="button" className="Num-btn grey-btn" id="1" onClick={() => handleClick('1')}>1</button>
        <button type="button" className="Num-btn grey-btn" id="2" onClick={() => handleClick('2')}>2</button>
        <button type="button" className="Num-btn grey-btn" id="3" onClick={() => handleClick('3')}>3</button>
        <button type="button" className="Plus ora-btn" id="+" onClick={() => handleClick('+')}>+</button>
        <button type="button" className="Zero span-2" id="0" onClick={() => handleClick('0')}>0</button>
        <button type="button" className="Dot grey-btn" id="." onClick={() => handleClick('0')}>.</button>
        <button type="button" className="Equal ora-btn" id="=" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
