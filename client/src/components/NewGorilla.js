import React, { useState } from 'react';

function NewGorilla(props) {
  const [name, setName]     = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail]   = useState('');
  const [password, setPassword] = useState('');


  function createGorilla() {
    const gorilla = {name, gender, email, password};
    props.createGorilla(gorilla);
  }

  function updateName(event) {
    setName(event.target.value);
  }

  function updateGender(event) {
    setGender(event.target.value);
  }

  function updateEmail(event) {
    setEmail(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
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
                <input type="email"
                      className="stack"
                      name="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => updateEmail(e)} />
                <input type="password"
                      className="stack"
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => updatePassword(e)} />
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