import React, { useState } from 'react';

function NewGorilla(props) {
  const [name, setName]     = useState('');
  const [gender, setGender] = useState('');


  function createGorilla() {
    const gorilla = {name, gender};
    props.createGorilla(gorilla);
  }

  function updateName(event) {
    setName(event.target.value);
  }

  function updateGender(event) {
    setGender(event.target.value);
  }

  
  return <article>
            <header>
              <h3>Create a Gorilla</h3>
              <label htmlFor="new-gorilla" className="close">&times;</label>
            </header>
            <section className="content">
              <fieldset>
                <input type="text"
                      className="stack"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => updateName(e)} />
                <input type="text"
                      className="stack"
                      name="gender"
                      placeholder="Gender"
                      value={gender}
                      onChange={(e) => updateGender(e)} />
              </fieldset>
            </section>
            <footer>
              <button type="button"
                      className="button"
                      onClick={() => createGorilla()}>
                Create
              </button>
              <label htmlFor="new-gorilla" className="button dangerous">
                Cancel
              </label>
            </footer>
        </article>

}

export default NewGorilla;