import { GlobalStyle } from "../components/style/globalStyle";
import { PokemonData } from "../context/usePokemonData";
import HomePage from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import Pokemon from "../pages/Pokemon";

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
      <PokemonData>
        <Pokemon />
      </PokemonData>

      <Pokedex />
    </>
  );
}

// PokemonData is a context.provider

export default App;
