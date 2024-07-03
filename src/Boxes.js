import React from 'react';
import './Boxes.css'; // Import your CSS file for styling

function Boxes() {
  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to discover the best cities to live in</h1>
        <p> as forecasted by our advanced AI model, revealing ideal destinations for your lifestyle and preferences.</p>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="box-content">
            <button className="button">Button 1</button>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <button className="button">Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
