import React, {Component} from 'react';

class Form extends Component {
  render() {
    let {nutrient, food, weight, nutrition, result} = this.props.currentItem;

    return (
      <div className="form__container">
        <form onSubmit={this.props.addItem}>
          <div className="form__input form__input-names">
            <input
              type="text"
              name="food"
              placeholder="Food name"
              value={food}
              onChange={this.props.handleInput}
              className="form__food"
              autoComplete="off"
            />
            <input
              type="text"
              name="nutrient"
              placeholder="Nutrient name"
              value={nutrient}
              onChange={this.props.handleInput}
              className="form__nutrient"
              autoComplete="off"
            />
          </div>
          <div className="form__input form__input-values">
            <input
              type="number"
              name="weight"
              placeholder="Weight in g"
              value={weight}
              onChange={this.props.handleInput}
              className="form__weight"
              autoComplete="off"
            />
            <input
              type="number"
              name="nutrition"
              placeholder={nutrient ? nutrient + ' per 100g' : 'Value per 100g'}
              value={nutrition}
              onChange={this.props.handleInput}
              className="form__nutrition"
              autoComplete="off"
            />
          </div>
          <div className="form__action">
            <span className="form__result">= {result} {nutrient}</span>
            <button type="submit" className="form__button">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
