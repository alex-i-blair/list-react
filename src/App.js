import './App.css';
import PizzaList from './PizzaList/PizzaList';
import { pizzas } from './PizzaList/pizzas';

// import your arrays here

function App() {

  return (
    <div className="App">
      <PizzaList pizzas={pizzas} />
    </div>
  );
}

export default App;
