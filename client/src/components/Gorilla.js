import React from 'react';
import { FaMars, FaVenus } from 'react-icons/fa'

class Gorilla extends React.Component {
  render() {
    return <div className="gorilla">
      <p><strong>name:</strong> {this.props.name}</p>
      <p><strong>gender:</strong> {this.props.gender === 'm' ? <FaMars/> : <FaVenus/> }</p>
      <p><strong>born:</strong> {new Date(this.props.birthDate).toDateString()}</p>
    </div>
  }
}

export default Gorilla;