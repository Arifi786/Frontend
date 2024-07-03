// MyComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyComponent.css';
import Header from './Header'; // Make sure this import statement is present

function MyComponent() {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHtmlContent();
  }, []);

  const fetchHtmlContent = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/city_ranking1/');
      setHtmlContent(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch data');
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <Header /> {/* Use the Header component here */}
      <div className="box">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      <div style={{ height: '1000px' }}>Extra content for scrolling</div>
    </div>
  );
}

export default MyComponent;
