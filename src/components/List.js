import React, {Component} from 'react';

class List extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.entries.map(item => (
          <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
            {item.food}: {item.result}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
