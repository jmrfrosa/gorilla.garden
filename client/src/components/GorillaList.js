import React from 'react';
import connector from '../scripts/connector';
import Gorilla from './Gorilla';
import NewGorilla from './NewGorilla';

class GorillaList extends React.Component {
  constructor() {
    super();

    this.createGorilla = this.createGorilla.bind(this);
  }
  
  state = {
    gorillas: []
  }

  componentDidMount() {
    this.fetchGorillas();
  }

  fetchGorillas() {
    console.log("fetching gorillas!");
    connector.getGorillas()
             .then(jsonResponse => {
                console.log(jsonResponse);
                this.setState({ gorillas: jsonResponse });
              });
  }

  async createGorilla(gorilla) {
    console.log("creating gorilla", gorilla);
    //await connector.addGorilla(gorilla);
    await this.fetchGorillas();
  }

  render() {
    return <div>
             <div className="gorilla-list">
                {this.state.gorillas.map(gorilla => <Gorilla key={gorilla.id}
                                                            name={gorilla.name}
                                                            gender={gorilla.gender}
                                                            birthDate={gorilla.created_at}/>)
                }
             </div>

             <hr/>
             <div>
                <label htmlFor="new-gorilla" className="button">
                  Create gorilla
                </label>

                <div className="modal">
                  <input id="new-gorilla" type="checkbox" />
                  <label htmlFor="new-gorilla" className="overlay"></label>
                  <NewGorilla createGorilla={this.createGorilla} />
                </div>
             </div>
    </div>
  }
}

export default GorillaList;