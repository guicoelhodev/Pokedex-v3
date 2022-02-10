import * as S from "./style";
import SvgWave from "../../components/SvgElement";
import SvgWaveSmartphone from "../../components/SvgPhone";
import useWindowDimensions from "../../hook/useWindowDimensions";
import SearchPokemon from "../../components/SearchPokemon";

function Pokemon() {
  const { width } = useWindowDimensions();
  return (
    <S.ContainerPokemon>
      {width > 900 ? <SvgWave color={"#DFEAC1"} bg={"#fff"} /> : <></>}
      {width <= 500 ? <SvgWaveSmartphone color={"DFEAC1"} bg={"#fff"} /> : <></>}

      <SearchPokemon />
    </S.ContainerPokemon>
  );
}

export default Pokemon;
