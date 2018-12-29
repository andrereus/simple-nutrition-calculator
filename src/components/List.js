import React, {Component} from 'react';

class List extends Component {
  render() {
    return (
      <table className="list__container">
        <tbody>
          {this.props.entries.map(item => (
            <tr key={item.key}>
              <td>
                <span className="bold">{item.food}</span>
              </td>
              <td>{item.result}</td>
              <td>
                <button className="list__button" onClick={() => this.props.deleteItem(item.key)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default List;
