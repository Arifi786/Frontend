// import React, { useState } from 'react';
// import './CityRankingForm.css';
// import Header from './Header';

// function CityRankingForm() {
//   const [weights, setWeights] = useState({
//     health_weight: 5,
//     education_weight: 5,
//     salary_weight: 5,
//     transportation_weight: 2,
//     literacy_weight: 2,
//     crime_weight: 2,
//     living_cost_weight: 2,
//     population_weight: 1,
//     pollution_weight: 1,
//   });

//   const [cities, setCities] = useState([]);

//   const handleChange = (e) => {
//     setWeights({
//       ...weights,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const fetchRankings = () => {
//     const queryString = Object.keys(weights)
//       .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(weights[key]))
//       .join('&');

//     fetch(`http://127.0.0.1:8000/city-ranking2/?${queryString}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('API response:', data);
//         setCities(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching the rankings:', error);
//       });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchRankings();
//   };

//   return (
//     <div>
//       <Header />
//       <div className="form-container">
//         <h1>City Ranking</h1>
//         <form onSubmit={handleSubmit} className="form">
//           {Object.keys(weights).map((key) => (
//             <div className="input-group" key={key}>
//               <label htmlFor={key}>{key.replace('_weight', ' Weight')}:</label>
//               <input
//                 type="number"
//                 id={key}
//                 name={key}
//                 value={weights[key]}
//                 onChange={handleChange}
//                 className="input-field"
//               />
//             </div>
//           ))}
//           <button type="submit" className="submit-button">Calculate Rankings</button>
//         </form>

//         <h2>Ranked Cities</h2>
//         {Array.isArray(cities) && cities.length > 0 ? (
//           <table className="cities-table">
//             <thead>
//               <tr>
//                 <th>Rank</th>
//                 <th>City</th>
//                 <th>State</th>
//                 <th>Overall Rank</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cities.map((city, index) => (
//                 <tr key={index}>
//                   <td>{city.rank}</td>
//                   <td>{city.name}</td>
//                   <td>{city.state}</td>
//                   <td>{city.overall_rank.toFixed(2)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No cities to display.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CityRankingForm;
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './CityRankingForm.css';
import Header from './Header';

function CityRankingForm() {
  const [weights, setWeights] = useState({
    health_weight: 5,
    education_weight: 5,
    salary_weight: 5,
    transportation_weight: 2,
    literacy_weight: 2,
    crime_weight: 2,
    living_cost_weight: 2,
    population_weight: 1,
    pollution_weight: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setWeights({
      ...weights,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryString = Object.keys(weights)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(weights[key]))
      .join('&');

    fetch(`http://127.0.0.1:8000/city-ranking2/?${queryString}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API response:', data);
        navigate('/Ranking', { state: { cities: data } });
      })
      .catch((error) => {
        console.error('Error fetching the rankings:', error);
      });
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <h1>City Ranking</h1>
        <form onSubmit={handleSubmit} className="form">
          {Object.keys(weights).map((key) => (
            <div className="input-group" key={key}>
              <label htmlFor={key}>{key.replace('_weight', ' Weight')}:</label>
              <input
                type="number"
                id={key}
                name={key}
                value={weights[key]}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          ))}
          <button type="submit" className="submit-button">Calculate Rankings</button>
        </form>
      </div>
    </div>
  );
}

export default CityRankingForm;
