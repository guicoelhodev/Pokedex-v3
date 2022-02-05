import * as S from "./style";
import HorizontalScroll from "react-scroll-horizontal";

function Pokemon() {
  const child = { width: `100vw`, height: `100vh` };
  return (
    <S.ContainerPokemon>
      <HorizontalScroll reverseScroll={true}>
        <main style={child}>
          <h1>Container 02</h1>
        </main>
        <main style={child}>
          <h1>Container 03</h1>
        </main>
      </HorizontalScroll>
    </S.ContainerPokemon>
  );
}

export default Pokemon;
