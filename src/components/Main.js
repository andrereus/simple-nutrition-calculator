import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import About from './About';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="main__container">
          <div className="main__header">
            <Link to="/"><h1 className="main__title">Simple Nutrition Calculator</h1></Link>
            <Link to="/about"><a className="main__about">About</a></Link>
          </div>

          <Route path="/" exact component={App} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Main;
