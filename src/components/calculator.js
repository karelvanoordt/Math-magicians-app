import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((previousState) => calculate(previousState, e));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="main-container">
        <div id="calc-screen">
          {/* "Previous operator screen not used for now" */}
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
          <button type="button" className="AC grey-btn" id="AC" onClick={() => this.handleClick('AC')}>AC</button>
          <button type="button" className="PlusMinus grey-btn" id="+/-" onClick={() => this.handleClick('+')}>+/-</button>
          <button type="button" className="Percent grey-btn" id="%" onClick={() => this.handleClick('%')}>%</button>
          <button type="button" className="Div ora-btn" id="÷" onClick={() => this.handleClick('÷')}>÷</button>
          <button type="button" className="Num-btn grey-btn" id="7" onClick={() => this.handleClick('7')}>7</button>
          <button type="button" className="Num-btn grey-btn" id="8" onClick={() => this.handleClick('8')}>8</button>
          <button type="button" className="Num-btn grey-btn" id="9" onClick={() => this.handleClick('9')}>9</button>
          <button type="button" className="Times ora-btn" id="x" onClick={() => this.handleClick('x')}>x</button>
          <button type="button" className="Num-btn grey-btn" id="4" onClick={() => this.handleClick('4')}>4</button>
          <button type="button" className="Num-btn grey-btn" id="5" onClick={() => this.handleClick('5')}>5</button>
          <button type="button" className="Num-btn grey-btn" id="6" onClick={() => this.handleClick('6')}>6</button>
          <button type="button" className="Minus ora-btn" id="-" onClick={() => this.handleClick('-')}>-</button>
          <button type="button" className="Num-btn grey-btn" id="1" onClick={() => this.handleClick('1')}>1</button>
          <button type="button" className="Num-btn grey-btn" id="2" onClick={() => this.handleClick('2')}>2</button>
          <button type="button" className="Num-btn grey-btn" id="3" onClick={() => this.handleClick('3')}>3</button>
          <button type="button" className="Plus ora-btn" id="+" onClick={() => this.handleClick('+')}>+</button>
          <button type="button" className="Zero span-2" id="0" onClick={() => this.handleClick('0')}>0</button>
          <button type="button" className="Dot grey-btn" id="." onClick={() => this.handleClick('0')}>.</button>
          <button type="button" className="Equal ora-btn" id="=" onClick={() => this.handleClick('=')}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
