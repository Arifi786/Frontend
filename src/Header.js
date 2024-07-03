// Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
    </div>
  );
}

export default Header;
