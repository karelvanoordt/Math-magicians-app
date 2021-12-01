import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navStyle = {
    listStyleType: 'none',
  };

  return (
    <ul className="nav-container">
      <h3 className="app-title">Math Magicians</h3>
      <Link to="/">
        <li className="nav-el" style={navStyle}>Home</li>
      </Link>
      <Link to="/calculator">
        <li className="nav-el" style={navStyle}>Calculator</li>
      </Link>
      <Link to="/quote">
        <li className="nav-el" style={navStyle}>Quote</li>
      </Link>
    </ul>
  );
}

export default Navbar;
