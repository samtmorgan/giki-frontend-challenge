import React from 'react';
// import logo from "./logo.svg";
import './App.css';

import { Footprint } from './components/Footprint';

const data = {
  emissions: 7565,
  yearTarget: 5855,
  remainderToCut: 409,
  '2030Target': 2500,
  unit: 'kg',
};

function App() {
  return (
    <div className="App">
      <Footprint unit={data.unit} emissions={data.emissions} />
    </div>
  );
}

export default App;
