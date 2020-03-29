import React from 'react';
import { FaMars, FaVenus } from 'react-icons/fa'

function Gorilla(props) {
  return <div className="gorilla">
    <p><strong>name:</strong> {props.name}</p>
    <p><strong>gender:</strong> {props.gender === 'm' ? <FaMars/> : <FaVenus/> }</p>
    <p><strong>born:</strong> {new Date(props.birthDate).toDateString()}</p>
  </div>
}

export default Gorilla;