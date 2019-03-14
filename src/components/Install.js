import React, {Component} from 'react';
import Instruction from '../assets/instruction.png';

class Install extends Component {
  render() {
    return (
      <div className="install__wrapper">
        <h2 className="install__title">How to install this Web App</h2>
        <p>Click "Install Simple Nutrition Calculator ..." or press "Add to homescreen" in the menu of the Google Chrome Browser.</p><br />
        <p>You can install it on any device (Windows, Android, macOS, iOS, Linux).</p><br />
        <div className="install__instruction">
          <img src={Instruction} alt="Install instruction"/>
        </div>
      </div>
    );
  }
}

export default Install;
