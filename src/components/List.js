import React, {Component} from 'react';
import _ from 'lodash';

class List extends Component {
  render() {
    return (
      <table className="list__container">
        <tbody>
          {this.props.items.map(item => (
            <tr key={item.key}>
              <td>{item.food}</td>
              <td>{item.result}</td>
              <td>
                <button className="list__delete" onClick={() => this.props.deleteItem(item.key)}>
                  X
                </button>
              </td>
            </tr>
          ))}
          {this.props.items.length > 1 &&
            <tr>
              <td className="bold">Total</td>
              <td className="bold">{_.sumBy(this.props.items, obj => Number(obj.result)).toFixed(2)}</td>
              <td>
                <a href="#" className="list__reset" onClick={this.props.resetAll}>Reset</a>
              </td>
            </tr>
          }
        </tbody>
      </table>
    );
  }
}

export default List;
