import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator.js';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
