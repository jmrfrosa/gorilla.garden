import React, { useState, useEffect } from 'react';
import connector from '../scripts/connector';
import Gorilla from './Gorilla';
import NewGorilla from './NewGorilla';

function GorillaList() {
  const [gorillas, setGorillas] = useState([]);

  useEffect(() => {
    fetchGorillas();
  }, []);

  function fetchGorillas() {
    connector.getGorillas()
             .then(response => {
                console.log(response);
                setGorillas(response.data);
              })
              .catch((error) => connector.handleError(error));
  }

  function createGorilla(gorilla) {
    connector.addGorilla(gorilla)
             .then(response => {
               fetchGorillas();
             })
             .catch((error) => connector.handleError(error));
  }

  function renderGorillas() {
    if (gorillas.length) {
      return <div className="gorilla-list">
              {gorillas.map(gorilla => <Gorilla key={gorilla.id}
                                                name={gorilla.name}
                                                gender={gorilla.gender}
                                                birthDate={gorilla.created_at}
              />)}
            </div>
    }

    return <div>Looks like there aren't any gorillas in the garden</div>
  }

  return <div>
            {renderGorillas()}
            <hr/>
            <div>
              <label htmlFor="new-gorilla" className="button">
                Create gorilla
              </label>

              <div className="modal">
                <input id="new-gorilla" type="checkbox" />
                <label htmlFor="new-gorilla" className="overlay"></label>
                <NewGorilla createGorilla={createGorilla} />
              </div>
            </div>
  </div>
}

export default GorillaList;