import React, {Component} from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      currentItem: {
        food: '',
        weight: '',
        nutrition: '',
        result: 0,
        key: ''
      }
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.resetAll = this.resetAll.bind(this);
  }

  componentDidMount() {
    let loadedState = JSON.parse(localStorage.getItem('savedState'));
    let {items} = loadedState;

    // Override currentItem?
    if (loadedState) {
      this.setState({
        items: items,
        currentItem: {
          food: '',
          weight: '',
          nutrition: '',
          result: 0,
          key: ''
        }
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('savedState', JSON.stringify(this.state));
  }

  handleInput(e) {
    let {food, weight, nutrition} = this.state.currentItem;
    let foodInput = e.target.name === 'food' ? e.target.value : food;
    let weightInput = e.target.name === 'weight' ? e.target.value : weight;
    let nutritionInput = e.target.name === 'nutrition' ? e.target.value : nutrition;
    let newResult;

    if (weightInput !== '' && nutritionInput !== '') {
      let calcResult = Number(weightInput) / 100 * Number(nutritionInput);
      newResult = calcResult.toFixed(2);
    } else {
      newResult = 0;
    }

    let currentItem = {
      food: foodInput,
      weight: weightInput,
      nutrition: nutritionInput,
      result: newResult,
      key: Date.now()
    };

    this.setState({
      currentItem
    });
  }

  addItem(e) {
    e.preventDefault();
    let newItem = this.state.currentItem;

    if (newItem.food !== '' && newItem.result !== 0) {
      let items = [...this.state.items, newItem];

      this.setState({
        items: items,
        currentItem: {
          food: '',
          weight: '',
          nutrition: '',
          result: 0,
          key: ''
        }
      });
    }
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  }

  resetAll(e) {
    e.preventDefault();
    let reset = confirm('Reset app?');

    if (reset == true) {
      localStorage.clear();

      this.setState({
        items: [],
        currentItem: {
          food: '',
          weight: '',
          nutrition: '',
          result: 0,
          key: ''
        }
      });
    }
  }

  render() {
    return (
      <div className="app__container">
        <h1 className="app__title">Simple Nutrition Calculator</h1>
        <Form addItem={this.addItem} handleInput={this.handleInput} currentItem={this.state.currentItem} />
        <List items={this.state.items} deleteItem={this.deleteItem} resetAll={this.resetAll} />
      </div>
    );
  }
}

export default App;
