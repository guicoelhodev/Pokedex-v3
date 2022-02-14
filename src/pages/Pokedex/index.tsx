import * as S from "./style";
import HorizontalScroll from "react-scroll-horizontal";
import PikachuGif from "../../assets/img/gif/pikachu.gif";
function Pokedex() {
  const child = { width: `100vw`, height: `100vh` };
  return (
    <S.ContainerPokemon>
      <HorizontalScroll reverseScroll={true}>
        <main style={child}>
          <img src={PikachuGif} loading="lazy" />
        </main>
        <main style={child}>
          <h1>Container 03</h1>
        </main>
      </HorizontalScroll>
    </S.ContainerPokemon>
  );
}

export default Pokedex;
