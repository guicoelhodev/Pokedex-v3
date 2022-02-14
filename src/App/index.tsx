import styled from "styled-components";
import { GlobalStyle } from "../components/style/globalStyle";
import PokedexContextData from "../context/usePokedexData";
import { PokemonData } from "../context/usePokemonData";
import HomePage from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import Pokemon from "../pages/Pokemon";

const EmptyDiv = styled.div`
  width: 100%;
  height: 300px;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
      <EmptyDiv />
      <PokedexContextData>
        <>
          <PokemonData>
            <Pokemon />
          </PokemonData>

          <Pokedex />
        </>
      </PokedexContextData>
    </>
  );
}

// PokemonData is a context.provider

export default App;
