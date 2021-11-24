import React from 'react';
import './logic/calculate';
import calculate from './logic/calculate';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="main-container">
        <div id="calc-screen">
          <input type="number" className="calcscr previous-op" />
          <input type="number" className=" calcscr current-op" />
        </div>
        <div id="calc-buttons">
          <button type="button" className="AC grey-btn">AC</button>
          <button type="button" className="PlusMinus grey-btn">+/-</button>
          <button type="button" className="Percent grey-btn">%</button>
          <button type="button" className="Div ora-btn">÷</button>
          <button type="button" className="Num-btn grey-btn">7</button>
          <button type="button" className="Num-btn grey-btn">8</button>
          <button type="button" className="Num-btn grey-btn">9</button>
          <button type="button" className="Times ora-btn">x</button>
          <button type="button" className="Num-btn grey-btn">4</button>
          <button type="button" className="Num-btn grey-btn">5</button>
          <button type="button" className="Num-btn grey-btn">6</button>
          <button type="button" className="Minus ora-btn">-</button>
          <button type="button" className="Num-btn grey-btn">1</button>
          <button type="button" className="Num-btn grey-btn">2</button>
          <button type="button" className="Num-btn grey-btn">3</button>
          <button type="button" className="Plus ora-btn">+</button>
          <button type="button" className="Zero span-2">0</button>
          <button type="button" className="Dot grey-btn">.</button>
          <button type="button" className="Equal ora-btn">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
