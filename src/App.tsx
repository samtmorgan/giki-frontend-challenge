import React from 'react';
import './App.css';
import { Content } from './components/Content';

const data = {
  emissions: 7565,
  yearTarget: 5855,
  remainderToCut: 409,
  twenty30Target: 2500,
};

function App() {
  return (
    <Content
      twenty30Target={data.twenty30Target}
      emissions={data.emissions}
      yearTarget={data.yearTarget}
      remainderToCut={data.remainderToCut}
    />
  );
}

export default App;
