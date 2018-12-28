import React, {Component} from 'react';

class Form extends Component {
  render() {
    let {food, weight, nutrition, result} = this.props.currentItem;

    return (
      <div className="form">
        <form onSubmit={this.props.addItem}>
          <input type="text" name="food" placeholder="Food name" value={food} onChange={this.props.handleInput} />
          <input
            type="number"
            name="weight"
            placeholder="Weight in g"
            value={weight}
            onChange={this.props.handleInput}
          />
          <br />
          <input
            type="number"
            name="nutrition"
            placeholder="Nutrition value per 100g"
            value={nutrition}
            onChange={this.props.handleInput}
          />
          <span className="bold"> = {result}</span>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
