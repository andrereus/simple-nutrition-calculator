import React, {Component} from 'react';
import _ from 'lodash';
import Eat from '../assets/eat.png';

class List extends Component {
  render() {
    return (
      <div>
        <table className="list__container">
          <tbody>
            {this.props.items.map(item => (
              <tr key={item.key}>
                <td className="list__name">{item.food}</td>
                <td className="list__value">{item.result} {this.props.nutrient}</td>
                <td>
                  <button className="list__delete" onClick={() => this.props.deleteItem(item.key)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
            {this.props.items.length > 1 &&
              <tr>
                <td className="list__name bold">Total</td>
                <td className="list__value bold">{_.sumBy(this.props.items, obj => Number(obj.result)).toFixed(2)} {this.props.nutrient}</td>
                <td className="list__action">
                  <a href="#" className="list__reset" onClick={this.props.resetAll}>Reset</a>
                </td>
              </tr>
            }
          </tbody>
        </table>
        {this.props.items.length === 0 &&
          <img src={Eat} className="list__eat" alt="Eat food"/>
        }
      </div>
    );
  }
}

export default List;
