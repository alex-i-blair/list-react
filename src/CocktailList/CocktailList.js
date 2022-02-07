import Cocktail from './Cocktail';

export default function CocktailList(props) {
  return (
    <div className="cocktails-list">
      <h1>Cocktails:</h1>
      {props.cocktails.map((cocktail, i) => (
        <Cocktail key={cocktail + i} {...cocktail} />
      ))}
    </div>
  );
}
