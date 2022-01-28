

export default function TextureList({ textures }) {
  return 
  <li >
    { textures.map((texture, i ) => key={texture + i} {texture} />) }
  </li>
} 