// // Header.js
// import React from 'react';
// import './Header.css';

// function Header() {
//   return (
//     <div className="header">
//       <div className="search-bar">
//         <input type="text" className="search-input" placeholder="Search..." />
//       </div>
//     </div>
//   );
// }

// export default Header;
// Header.js
// Header.js

// Header.js

import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    if (searchQuery.length > 2) {
      fetch(`http://127.0.0.1:8000/api/search/?city_name=${searchQuery}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch search results');
          }
          return response.json();
        })
        .then(data => {
          setResults(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      setResults([]);
    }
  };

  return (
    <div className="header">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
        />
        {results.length > 0 && (
          <ul className="search-results">
            {results.map((city) => (
              <li key={city.city_id}>
                <Link to={`/city/${city.city_id}`}>{city.city_name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
