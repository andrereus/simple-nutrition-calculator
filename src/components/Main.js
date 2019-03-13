import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import Install from './Install';
import About from './About';
import Logo from '../assets/logo.png';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="main__container">
          <div className="main__header">
            <Link to="/"><img src={Logo} className="main__logo" alt="Simple Nutrition Calculator"/></Link>
            <div>
              <Link to="/install"><span className="main__install">Install</span></Link>
              <Link to="/about"><span className="main__about">About</span></Link>
            </div>
          </div>

          <Route path="/" exact component={App} />
          <Route path="/install" component={Install} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Main;
