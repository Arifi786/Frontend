// Boxes.js
import React from 'react';
import './Boxes.css';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './Header';

function Boxes() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <h1>Welcome to discover the best cities to live in</h1>
        <p>As forecasted by our advanced AI model, revealing ideal destinations for your lifestyle and preferences.</p>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="box-content">
            <Link to="/comp"><button className="button">Default Rank</button></Link>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <Link to="/cust"><button className="button">Custom Rank</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
