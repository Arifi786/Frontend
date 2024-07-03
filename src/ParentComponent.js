// ParentComponent.js

import React, { useState, useEffect } from 'react';
import { fetchCityData } from './api';
import CityDetail from './CityDetail';

function ParentComponent() {
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCityData();
        setCityData(data);
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {cityData ? (
        <CityDetail city={cityData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ParentComponent;
