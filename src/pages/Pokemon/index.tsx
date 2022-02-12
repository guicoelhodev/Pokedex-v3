/* eslint-disable prefer-const */
import * as S from "./style";
import SvgWave from "../../components/SvgElement";
import SvgWaveSmartphone from "../../components/SvgPhone";
import useWindowDimensions from "../../hook/useWindowDimensions";
import SearchPokemon from "../../components/SearchPokemon";
import { useContext } from "react";
import { PokemonContext, PokemonData } from "../../context/usePokemonData";
import { getColorPokemon } from "../../utils/getColorPokemon";

function Pokemon() {
  const { pokemonData } = useContext(PokemonContext);
  const { width } = useWindowDimensions();
  let color: Array<string> = getColorPokemon(pokemonData.types);
  return (
    <S.ContainerPokemon>
      {width > 900 ? <SvgWave color={color[0]} bg={"#fff"} /> : <></>}
      {width <= 500 ? <SvgWaveSmartphone color={"DFEAC1"} bg={"#fff"} /> : <></>}

      <main>
        <section>
          <SearchPokemon />
          <button onClick={() => console.log("a")}>Sasssaaa</button>
          <p>hu</p>as
        </section>
        <S.PokemonInfo>
          <article>
            <h2>{pokemonData.name}</h2>
            <ul>
              {pokemonData.types.map((item: string, index: number) => (
                <S.TypeCard key={index} color={color[index]}>
                  {item}
                </S.TypeCard>
              ))}
            </ul>
          </article>
          <aside>
            <img src={pokemonData.image} />
          </aside>
        </S.PokemonInfo>
      </main>
    </S.ContainerPokemon>
  );
}

export default Pokemon;
