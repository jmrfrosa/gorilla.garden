import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './router';
import './App.scss';
import NavBar from './components/NavBar';

function App() {
  const routeMatch = useRoutes(routes);

  return (
    <div className="App">
      <NavBar />
      <section>
        <h1>Welcome to gorilla.garden</h1>
        <hr/>
        {routeMatch}
      </section>
    </div>
  );
}

export default App;
