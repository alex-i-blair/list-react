// export default function JokeList({ jokes }) {
//   return (
//     <div className="jokes-list">
//       <h1>Jokes:</h1>
//       {jokes.map((joke, i) => (
//         <h3 key={joke + i}>{joke}</h3>
//       ))}
//     </div>
//   );
// }

import { Component } from 'react';

export default class JokeList extends Component {
  render() {
    return (
      <div className="jokes-list">
        <h1>Jokes:</h1>
        {this.props.jokes.map((joke, i) => (
          <h3 key={joke + i}>{joke}</h3>
        ))}
      </div>
    );
  }
}
