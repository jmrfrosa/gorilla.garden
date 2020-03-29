import React from 'react';
import { A } from 'hookrouter';

function NavBar() {
  return <nav>
           <A href="/" className="brand">
             <span role="img" aria-label="gorilla">🦍</span>
             <span>gorilla.garden</span>
           </A>

           <input id="bmenub" type="checkbox" className="show"/>
           <label htmlFor="bmenub" className="burger pseudo button">menu</label>
           <div className="menu">
             <A href="login" className="pseudo button">Login</A>
           </div>
        </nav>
}

export default NavBar;