export default function JokeList({ jokes }) {
  return (
    <div className="jokes-list">
      <h1>Jokes:</h1>
      {jokes.map((joke, i) => (
        <h3 key={joke + i}>{joke}</h3>
      ))}
    </div>
  );
}
