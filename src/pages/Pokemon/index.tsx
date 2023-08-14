import * as S from "./style";
import SvgWave from "../../components/SvgElement";
import SearchPokemon from "../../components/SearchPokemon";
import { useState } from "react";
import { getColorPokemon } from "../../utils/getColorPokemon";
import { PokemonGeneralInfo } from "../../components/PokemonGeneralInfo";

import { useGetPokemonInfo } from "../../service/http/GET/useGetPokemonInfo";
function Pokemon() {
  const [currentPokemonName, setCurrentPokemonName] = useState("bulbasaur");

  const { data: pokemonInfo } = useGetPokemonInfo(currentPokemonName);

  console.log("currentPokemonInfo", pokemonInfo);
  const color = getColorPokemon(pokemonInfo?.types[0].type.name ?? "normal");

  return (
    <S.View bgColor={color}>
      <S.Container>
        <div className="svg wave">
          <SvgWave color={color} bg={"#fff"} />
        </div>

        {/* <div className="svg phone">
          <SvgWaveSmartphone color={color} bg={"transparent"} />
        </div> */}

        <section>
          <SearchPokemon
            color={color}
            pokemonName={currentPokemonName}
            setPokemonName={setCurrentPokemonName}
          />
          <PokemonGeneralInfo data={pokemonInfo} />
        </section>
      </S.Container>
    </S.View>
  );
}

export default Pokemon;
