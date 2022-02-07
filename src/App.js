import './App.css';
import CocktailList from './CocktailList/CocktailList';
import PizzaList from './PizzaList/PizzaList';
import { pizzas } from './PizzaList/pizzas';
import { cocktails } from './CocktailList/cocktails';
import TreeList from './TreeList/TreeList';
import { trees } from './TreeList/trees';
import JokeList from './JokeList/JokeList';
import { jokes } from './JokeList/jokes';

// import your arrays here

function App() {
  return (
    <div className="App">
      <PizzaList pizzas={pizzas} />
      <TreeList coniferous={trees.coniferous} deciduous={trees.deciduous} />
      <CocktailList cocktails={cocktails} />
      <div className="jokes-container">
        <JokeList jokes={jokes} />
      </div>
    </div>
  );
}

export default App;
