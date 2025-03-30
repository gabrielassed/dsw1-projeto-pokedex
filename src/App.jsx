import { useEffect, useState } from 'react';
import './style.css';

async function loadAPI(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState('charizard');

  useEffect(() => {
    (async () => {
      const data = await loadAPI('charizard');
      setPokemon(data);
    })();
  }, []);

  async function loadPokemon() {
    const data = await loadAPI(search);
    setPokemon(data);
  }

  return (
    <div className="container">
      <header>
        <strong>Pokemon API</strong>
      </header>
      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={loadPokemon}>Buscar</button>
      </div>
      {pokemon && (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div>Name: {pokemon.name}</div>
          <div>Nº {pokemon.id}</div>
          <div>Peso: {pokemon.weight / 10}kg</div>
          <div>Altura: {pokemon.height / 10}m</div>
        </div>
      )}
    </div>
  );
}

export default App;
