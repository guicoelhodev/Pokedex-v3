import * as S from "./style";
import SvgWave from "../../components/SvgElement";
import SvgWaveSmartphone from "../../components/SvgPhone";
import useWindowDimensions from "../../hook/useWindowDimensions";
import SearchPokemon from "../../components/SearchPokemon";
import { useContext } from "react";
import { PokemonContext } from "../../context/usePokemonData";

function Pokemon() {
  const { pokemonData } = useContext(PokemonContext);
  const { width } = useWindowDimensions();
  return (
    <S.ContainerPokemon>
      {width > 900 ? <SvgWave color={"#DFEAC1"} bg={"#fff"} /> : <></>}
      {width <= 500 ? <SvgWaveSmartphone color={"DFEAC1"} bg={"#fff"} /> : <></>}

      <main>
        <section>
          <SearchPokemon />
          <button onClick={() => console.log(pokemonData, "oi")}>Sasssaaa</button>
          <p>hu</p>as
        </section>
        <section>asuh</section>
      </main>
    </S.ContainerPokemon>
  );
}

export default Pokemon;
