import { NavBar } from "../components/NavBar/style";
import { GlobalStyle } from "../components/style/globalStyle";
import HomePage from "../pages/Home";
import Pokemon from "../pages/Pokemon";

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
      <Pokemon />
    </>
  );
}

export default App;
