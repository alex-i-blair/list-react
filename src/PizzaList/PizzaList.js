import Pizza from './Pizza';

// export default function PizzaList(props) {
//   return (
//     <div className="pizzas-list">
//       <h1>Pizza Styles:</h1>
//       {props.pizzas.map((pizza, i) => (
//         <Pizza key={pizza.details + i} {...pizza} />
//       ))}
//     </div>
//   );
// }

import { Component } from 'react';

export default class PizzaList extends Component {
  render() {
    return (
      <div className="pizzas-list">
        <h1>Pizza Styles:</h1>
        {this.props.pizzas.map((pizza, i) => (
          <Pizza key={pizza.details + i} {...pizza} />
        ))}
      </div>
    );
  }
}
