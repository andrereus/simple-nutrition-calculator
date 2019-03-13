import React, {Component} from 'react';
import Instruction from '../assets/instruction.png';

class Install extends Component {
  render() {
    return (
      <div className="install__wrapper">
        <h2 className="install__title">How to install this Web App</h2>
        <p>Press "Add to homescreen" in the menu of the Google Chrome Browser.</p><br />
        <div className="install__instruction">
          <img src={Instruction} alt="Install instruction"/>
        </div>
      </div>
    );
  }
}

export default Install;
