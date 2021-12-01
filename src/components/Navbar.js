import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navStyle = {
    listStyleType: 'none',
    textDecoration: 'none',
  };

  return (
    <ul className="nav-container">
      <h3 className="app-title">Math Magicians</h3>
      <Link to="/" style={navStyle}>
        <li className="nav-el">Home</li>
      </Link>
      <Link to="/calculator" style={navStyle}>
        <li className="nav-el">Calculator</li>
      </Link>
      <Link to="/quote" style={navStyle}>
        <li className="nav-el">Quote</li>
      </Link>
    </ul>
  );
}

export default Navbar;
