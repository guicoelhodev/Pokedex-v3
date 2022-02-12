/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import * as S from "./style";
import SvgWave from "../../components/SvgElement";
import SvgWaveSmartphone from "../../components/SvgPhone";
import useWindowDimensions from "../../hook/useWindowDimensions";
import SearchPokemon from "../../components/SearchPokemon";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/usePokemonData";
import api from "../../service/api";
import { getColorPokemon } from "../../utils/getColorPokemon";
import Pikachu from "../../assets/img/pikachu.png";

function Pokemon() {
  const { width } = useWindowDimensions();
  const { info } = useContext(PokemonContext);
  const [ pokemonData, setPokemonData ] = useState<any>(null);
  const [ imgPokemon, setImagePokemon ] = useState<string>();
  const [colors, setColors ] = useState(["#DFEAC1"]);

  useEffect(() => {
    async function getData() {
      api.get(`pokemon/${info.id}`).then((res) => setPokemonData(res.data));
    }
    if (info.name !== "" && info.id !== null) getData();
  }, [info]);

  function getColors(array: any) {
    let tmpColors: any = [];
    array.forEach((obj: any) => {
      let tmpColor = getColorPokemon(obj.type.name);
        tmpColors.push(tmpColor)});
    setColors(tmpColors);

  }
  function checkImageIsAvaliable(data: any){
    if (data.sprites.other.dream_world.front_default != null) {
      return setImagePokemon(data.sprites.other.dream_world.front_default);
    } else {
      return setImagePokemon(data.sprites.front_default);
    }
  }
  useEffect(() => {
    if (pokemonData !== null) {
      checkImageIsAvaliable(pokemonData)
      getColors(pokemonData.types)
    }
   
  }, [pokemonData, info ]);

  return (
    <S.ContainerPokemon>
      {width > 900 ? <SvgWave color={colors[0]} bg={"#fff"} /> : <></>}
      {width <= 500 ? <SvgWaveSmartphone color={"#000"} bg={"#fff"} /> : <></>}
      <main>
        <SearchPokemon />
        <button onClick={() => console.log(colors)}>click</button>
      </main>
      <S.GeneralInfo>
        <article>
          { pokemonData != null ?
            <>
              <h2>{pokemonData.name}</h2>
              <ul>
                {pokemonData.types.map((obj: any, index: number) => (
                  <S.TypeCard key={obj.type.name} color={`${colors[index]}`}>
                    {obj.type.name}
                  </S.TypeCard>
                ))}
              </ul>
            </> : <></>
          }
        </article>
        <aside>
          {pokemonData != null ? <img src={imgPokemon} /> : <img src={Pikachu} />}
        </aside>
      </S.GeneralInfo>
    </S.ContainerPokemon>
  );
}

export default Pokemon;
