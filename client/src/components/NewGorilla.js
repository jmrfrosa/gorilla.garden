import React from 'react';

class NewGorilla extends React.Component {
  state = {
    name: "",
    gender: ""
  }

  createGorilla() {
    const gorilla = {
      name: this.state.name,
      gender: this.state.gender
    }

    console.log("sending gorilla", gorilla);
    this.props.createGorilla(gorilla);
  }

  updateField(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return <article>
             <header>
               <h3>Create a Gorilla</h3>
               <label htmlFor="new-gorilla" className="close">&times;</label>
             </header>
             <section className="content">
               <fieldset>
                 <input type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => this.updateField(e)} />
                 <input type="text"
                        name="gender"
                        placeholder="Gender"
                        value={this.state.gender}
                        onChange={(e) => this.updateField(e)} />
               </fieldset>
             </section>
             <footer>
               <button type="button"
                       className="button"
                       onClick={() => this.createGorilla()}>
                 Create
               </button>
               <label htmlFor="new-gorilla" className="button dangerous">
                 Cancel
               </label>
             </footer>
          </article>
  }
}

export default NewGorilla;