import React from 'react';
import TextureList from './TextureList';

export default function Pizza({
  style,
  img,
  crust,
  details
}) {
  return <div className='pizza-items'>
    <h2>{style}</h2>
    <img src={img}></img>
    <h4>{`The crust is ${crust.thickness}.`}</h4>
    <ul>Crust Texture:
      {crust.texture.map((t, i) => {
        <li key={t + i}>
          {t}
        </li>;
      })}
    </ul>
  </div>;
}
