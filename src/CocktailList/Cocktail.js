export default function Cocktail({ name, image }) {
  return (
    <div className="cocktail-items">
      <h2>{name}</h2>
      <img className="cocktail-image" src={image} />
    </div>
  );
}
