import React from 'react';
import './App.scss';

import GorillaList from './components/GorillaList';

function App() {
  return (
    <div className="App">
      <h1>Welcome to gorilla.garden</h1>
      <hr/>
      <GorillaList/>
    </div>
  );
}

export default App;
