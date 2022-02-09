import { GlobalStyle } from "../components/style/globalStyle";
import HomePage from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import Pokemon from "../pages/Pokemon";

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
      <Pokemon />
      <Pokedex />
    </>
  );
}

export default App;
