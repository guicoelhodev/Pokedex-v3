import { memo, useEffect, useState } from "react";
import api from "../../service/api";
import { getColorPokemon } from "../../utils/getColorPokemon";
import { TailSpin } from "react-loader-spinner";
import * as S from "./style";

interface Props {
  name: string;
}
interface TypePokemonData {
  name: string;
  id: number;
  typeColors: Array<{ nameT: string; color: string }>;
  height: number;
  weight: number;
  image: string;
}

function PokedexItem({ name }: Props) {
  const [pokemonData, setPokemonData] = useState<TypePokemonData>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      api.get(`pokemon/${name}`).then((res) => {
        let tmpData = res.data;
        let image = "";
        // console.log(tmpData);
        let tmpColors: Array<{ nameT: string; color: string }> = [];

        tmpData.types.forEach((obj: any) => {
          let typeName = getColorPokemon(obj.type.name);
          tmpColors.push({
            nameT: obj.type.name,
            color: typeName
          });
        });

        if (tmpData.sprites.other?.["official-artwork"].front_default !== null) {
          image = tmpData.sprites.other?.["official-artwork"].front_default;
        } else if (tmpData.sprites.front_default !== null) {
          image = tmpData.sprites.front_default;
        } else {
          image = "empty";
        }
        setPokemonData({
          name: tmpData.name,
          id: tmpData.id,
          typeColors: tmpColors,
          height: tmpData.height / 10, // convert to m
          weight: tmpData.weight / 10, // convert to kg
          image: image
        });
      });
    }
    if (name.length !== 0 && name != undefined) getData();
    setLoading(false);
  }, [name]);
  return (
    <S.ItemContainer color={pokemonData?.typeColors?.[0].color}>
      {isLoading ? (
        <S.LoadingContainer>
          <TailSpin ariaLabel="loading-indicator" />
        </S.LoadingContainer>
      ) : (
        <>
          <header>
            <h4>{pokemonData?.name}</h4>
            <span>#{pokemonData?.id}</span>
          </header>
          <main>
            <S.Information>
              <article>
                {pokemonData?.typeColors.map((item) => (
                  <S.type key={item.nameT} color={item.color}>
                    {item.nameT}
                  </S.type>
                ))}
              </article>
              <article>
                <div>
                  <span>height </span>
                  <p>{pokemonData?.height} m</p>
                </div>
                <div>
                  <span>weight </span>
                  <p>{pokemonData?.weight} kg</p>
                </div>
              </article>
            </S.Information>
            <S.Image src={pokemonData?.image} alt="pokemon image" loading="lazy" />
          </main>
        </>
      )}
    </S.ItemContainer>
  );
}

export default memo(PokedexItem);
