import React from 'react';

export default function Tree(props) {
  return <div className='tree-card'>
    <img className='tree-image' src={props.img}></img>
    <h4>{props.name}</h4>
  </div>;
}
