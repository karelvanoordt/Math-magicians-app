import React from 'react';
import './index.css';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-body">
        <Calculator />
      </div>
    );
  }
}

export default App;
