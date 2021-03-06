import React, {Component} from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      currentItem: {
        nutrient: '',
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

    if (loadedState) {
      let {items, currentItem: {nutrient}} = loadedState;
      
      this.setState({
        items: items,
        currentItem: {
          nutrient: nutrient,
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
    let {nutrient, food, weight, nutrition} = this.state.currentItem;

    let input = {
      nutrient: e.target.name === 'nutrient' ? e.target.value : nutrient,
      food: e.target.name === 'food' ? e.target.value : food,
      weight: e.target.name === 'weight' ? e.target.value : weight,
      nutrition: e.target.name === 'nutrition' ? e.target.value : nutrition
    };

    let newResult;

    if (input.weight !== '' && input.nutrition !== '') {
      let calcResult = Number(input.weight) * Number(input.nutrition) / 100;
      newResult = calcResult.toFixed(2);
    } else {
      newResult = 0;
    }

    let currentItem = {
      nutrient: input.nutrient,
      food: input.food,
      weight: input.weight,
      nutrition: input.nutrition,
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
          nutrient: newItem.nutrient,
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
          nutrient: '',
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
      <div className="app__wrapper">
        <Form addItem={this.addItem} handleInput={this.handleInput} currentItem={this.state.currentItem} />
        <List items={this.state.items} deleteItem={this.deleteItem} resetAll={this.resetAll} nutrient={this.state.currentItem.nutrient}/>
      </div>
    );
  }
}

export default App;
