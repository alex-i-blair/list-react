import React from 'react';

// export default function Tree(props) {
//   return <div className='tree-card'>
//     <img className='tree-image' src={props.img}></img>
//     <h4>{props.name}</h4>
//   </div>;
// }

import { Component } from 'react';

export default class Tree extends Component {
  render() {
    return (
      <div className="tree-card">
        <img className="tree-image" src={this.props.img}></img>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
