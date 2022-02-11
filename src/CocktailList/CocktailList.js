import Cocktail from './Cocktail';
import { Component } from 'react';

// export default function CocktailList(props) {
//   return (
//     <div className="cocktails-list">
//       <h1>Cocktails:</h1>
//       {props.cocktails.map((cocktail, i) => (
//         <Cocktail key={cocktail + i} {...cocktail} />
//       ))}
//     </div>
//   );
// }

export default class CocktailList extends Component {
  render() {
    return (
      <div className="cocktails-list">
        <h1>Cocktails:</h1>
        {this.props.cocktails.map((cocktail, i) => (
          <Cocktail key={cocktail + i} {...cocktail} />
        ))}
      </div>
    );
  }
}
