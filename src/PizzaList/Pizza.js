export default function Pizza({ style, img, crust, details }) {
  return (
    <div className="pizza-items">
      <h2>{style}</h2>
      <img src={img} className="pizza-image" />
      <p>
        {`The crust is ${crust.thickness}. `}
        {details}
      </p>
      <div className="textures">
        <h4>Crust Texture:</h4>
        <ul className="texture-list">
          {crust.texture.map((t, i) => (
            <li key={t + i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
