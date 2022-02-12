/* eslint-disable prefer-const */
import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import SvgWave from "../../components/SvgElement";
import SvgWaveSmartphone from "../../components/SvgPhone";
import useWindowDimensions from "../../hook/useWindowDimensions";
import SearchPokemon from "../../components/SearchPokemon";
import { useContext } from "react";
import { PokemonContext, PokemonData } from "../../context/usePokemonData";
import { getColorPokemon } from "../../utils/getColorPokemon";
import Pikachu from "../../assets/img/pikachu.png";
import SinglePokemonStatus from "../../components/SinglePokemonStatus";

function Pokemon() {
  const { width } = useWindowDimensions();
  const { pokemonData } = useContext(PokemonContext);
  let colors: Array<string> = getColorPokemon(pokemonData.types);

  return (
    <S.ContainerPokemon>
      {width > 900 ? <SvgWave color={colors[0]} bg={"#fff"} /> : <></>}
      {width <= 500 ? <SvgWaveSmartphone color={colors[0]} bg={"#fff"} /> : <></>}

      <S.PokemonC>
        <SearchPokemon />
        <button onClick={() => console.log(pokemonData)}>click me</button>
        <SinglePokemonStatus color={colors} />
      </S.PokemonC>
      <S.GeneralInfo>
        <article>
          {pokemonData.name.length != 0 ? (
            <>
              <h2>{pokemonData.name}</h2>
              <ul>
                {pokemonData.types.map((item: string, index: number) => (
                  <S.TypeCard key={index} color={colors[index]}>
                    {item}
                  </S.TypeCard>
                ))}
              </ul>
            </>
          ) : (
            <></>
          )}
        </article>
        <aside>
          {pokemonData.name.length != 0 ? <img src={pokemonData.image} /> : <img src={Pikachu} />}
        </aside>
        <>
          {pokemonData.effect.map((obj: any) => (
            <>
              <h3>{obj.name}</h3>
              <p>
                <span>Effect</span> {obj.effect}
              </p>
              <p>
                <span>Short effect</span> {obj.shortEffect}
              </p>
            </>
          ))}
        </>
      </S.GeneralInfo>
    </S.ContainerPokemon>
  );
}

export default Pokemon;
