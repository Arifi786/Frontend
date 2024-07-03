// CityDetail.js
import React from 'react';

function CityDetail({ city }) {
  return (
    <div>
      <h2>{city.city_name}</h2>
      <p>Population: {city.population}</p>
      <p>Pollution: {city.pollution}</p>
      <p>Education: {city.education}</p>
      <p>Health: {city.health}</p>
      <p>Transport: {city.transport}</p>
      <p>Literacy: {city.literacy}</p>
      <p>Crime: {city.crime}</p>
    </div>
  );
}

export default CityDetail;
