import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import './RankingResults.css';

function RankingResults() {
  const location = useLocation();
  const { cities } = location.state || { cities: [] };

  return (
    <div>
      <Header />
      <div className="results-container">
        <h1>Ranked Cities</h1>
        {Array.isArray(cities) && cities.length > 0 ? (
          <table className="cities-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>City</th>
                <th>State</th>
                <th>Overall Rank</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((city, index) => (
                <tr key={index}>
                  <td>{city.rank}</td>
                  <td>{city.name}</td>
                  <td>{city.state}</td>
                  <td>{city.overall_rank.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No cities to display.</p>
        )}
      </div>
    </div>
  );
}

export default RankingResults;
