import './App.css';
import PizzaList from './PizzaList/PizzaList';
import { pizzas } from './PizzaList/pizzas';

import TreeList from './TreeList/TreeList';
import { trees } from './TreeList/trees';

// import your arrays here

function App() {

  return (
    <div className="App">
      <PizzaList pizzas={pizzas} />
      <TreeList 
        coniferous={trees.coniferous} 
        deciduous={trees.deciduous}/>
    </div>
  );
}

export default App;
