import Pizza from './Pizza';

export default function PizzaList(props) {
  return <div>
    {
      props.pizzas.map((pizza, i) =>
        <Pizza
          key={pizza.details + i}
          {...pizza}
          
        />)
    }
  </div>;
}