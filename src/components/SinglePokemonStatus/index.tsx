import { useContext } from "react";
import { PokemonContext } from "../../context/usePokemonData";
import * as S from "./style";

interface Props {
  color: Array<string>;
}
function SinglePokemonStatus({ color }: Props) {
  const { pokemonData, boolean } = useContext(PokemonContext);

  return boolean === false ? (
    <S.AllInfoPokemon color={color[0]}>
      {pokemonData.effect.map((obj: any) => (
        <div key={obj.name}>
          <h3>{obj.name}</h3>
          <p>
            <span>Effect</span> {obj.effect}
          </p>
          <p>
            <span>Short effect</span> {obj.shortEffect}
          </p>
        </div>
      ))}
    </S.AllInfoPokemon>
  ) : (
    <></>
  );
}

export default SinglePokemonStatus;
