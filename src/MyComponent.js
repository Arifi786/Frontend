// MyComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch HTML content when component mounts
    fetchHtmlContent();
  }, []);

  const fetchHtmlContent = async () => {
    try {
      const response = await axios.get('city_ranking.html');
      setHtmlContent(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching HTML content:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render HTML content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default MyComponent;
