import React, {Component} from 'react';

class About extends Component {
  render() {
    let part1 = 'simple.nutrition.calculator',
      part2 = 'gmail',
      part3 = 'com';

    return (
      <div className="about__wrapper">
        <h2 className="about__title">About</h2>
        <p>Andre Reus</p><br />
        <p>
          {part1}@<span className="hidden">null</span>
          {part2}.{part3}
        </p>
      </div>
    );
  }
}

export default About;
