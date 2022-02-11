// export default function Cocktail({ name, image }) {
//   return (
//     <div className="cocktail-items">
//       <h2>{name}</h2>
//       <img className="cocktail-image" src={image} />
//     </div>
//   );
// }
import { Component } from 'react';

export default class Cocktail extends Component {
  render() {
    return (
      <div className="cocktail-items">
        <h2>{this.props.name}</h2>
        <img className="cocktail-image" src={this.props.image} />
      </div>
    );
  }
}
