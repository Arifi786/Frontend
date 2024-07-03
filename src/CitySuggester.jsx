import React, { useState } from 'react';

function CitySuggester() {
  // State to store user preferences
  const [preferences, setPreferences] = useState({
    costOfLiving: '',
    climate: '',
    jobOpportunities: '',
    qualityOfLife: ''
  });

  // Function to handle changes in user preferences
  const handlePreferenceChange = (event) => {
    const { name, value } = event.target;
    setPreferences(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to suggest a city based on user preferences
  const suggestCity = () => {
    // Implement logic to suggest a city based on user preferences
    // For simplicity, returning a static suggestion
    return "Austin, Texas";
  };

  return (
    <div className="city-suggester">
      <h1>City Suggester</h1>
      <form>
        <label>
          Cost of Living:
          <input type="text" name="costOfLiving" value={preferences.costOfLiving} onChange={handlePreferenceChange} />
        </label>
        <label>
          Climate:
          <input type="text" name="climate" value={preferences.climate} onChange={handlePreferenceChange} />
        </label>
        <label>
          Job Opportunities:
          <input type="text" name="jobOpportunities" value={preferences.jobOpportunities} onChange={handlePreferenceChange} />
        </label>
        <label>
          Quality of Life:
          <input type="text" name="qualityOfLife" value={preferences.qualityOfLife} onChange={handlePreferenceChange} />
        </label>
        <button type="button" onClick={suggestCity}>Suggest City</button>
      </form>
      {preferences.costOfLiving && preferences.climate && preferences.jobOpportunities && preferences.qualityOfLife && (
        <div>
          <h2>Suggested City:</h2>
          <p>{suggestCity()}</p>
        </div>
      )}
    </div>
  );
}

export default CitySuggester;
