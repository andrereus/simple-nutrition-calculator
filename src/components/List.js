import React, {Component} from 'react';

class List extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.entries.map(item => (
          <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
            <span className="bold">{item.food}:</span> {item.result}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
