import React from 'react';
import './App.css';
import Boxes from './Boxes';
import { Routes ,Route} from 'react-router-dom';
import MyComponent from './MyComponent';
import CityRankingForm from './CityRankingForm';
import RankingResult from './RankingResult';
import CityDetail from './CityDetails';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Boxes/>}></Route>
        <Route path='/comp' element={<MyComponent/>}/>
        <Route path='/cust' element={<CityRankingForm/>}/>
        <Route path='/Ranking' element={<RankingResult/>} />
        <Route path='/city/:cityId' element={<CityDetail />} />
      </Routes>
  );
}

export default App;

