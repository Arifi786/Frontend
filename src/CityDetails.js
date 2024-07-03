// // CityDetail.js
// import React from 'react';

// function CityDetail({ city }) {
//   return (
//     <div>
//       <h2>{city.city_name}</h2>
//       <p>Population: {city.population}</p>
//       <p>Pollution: {city.pollution}</p>
//       <p>Education: {city.education}</p>
//       <p>Health: {city.health}</p>
//       <p>Transport: {city.transport}</p>
//       <p>Literacy: {city.literacy}</p>
//       <p>Crime: {city.crime}</p>
//     </div>
//   );
// }

// export default CityDetail;
// CityDetail.js



// CityDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CityDetail() {
    const { cityId } = useParams();
    const [cityData, setCityData] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/city/${cityId}`)
            .then(response => response.json())
            .then(data => setCityData(data))
            .catch(error => console.error('Error fetching city data:', error));
    }, [cityId]);

    if (!cityData) {
        return <div>Loading...7575</div>;
    }

    return (
        <div>
           <h1>{cityData.City_Name}</h1>
           <p>City Name: {cityData.City_Name}</p>
            <p>Population: {cityData.Population}</p>
            <p>Education: {cityData.Education}</p>
            <p>Transportation: {cityData.Transportation}</p>
            <p>Crime: {cityData.Crime}</p>
            <p>Literacy: {cityData.Literacy}</p>
            <p>Salary: {cityData.Salary}</p>
            <p>Living Cost: {cityData.Living_Cost}</p>
            <p>Pollution: {cityData.Pollution}</p>
            {/* Add other city attributes as needed... */}
        </div>
    );
}

export default CityDetail;
