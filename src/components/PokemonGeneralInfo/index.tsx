import * as S from "./style";
import { GiHealthNormal } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";
import { BsFillShieldFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { IResponsePokemonInfo } from "../../service/http/GET/useGetPokemonInfo/types";
import { getColorPokemon } from "../../utils/getColorPokemon";
import { useGetPokemonAbility } from "../../service/http/GET/useGetPokemonAbility";

interface IPokemonContent {
  data: IResponsePokemonInfo | undefined;
}

const svgsByStat = {
  hp: <GiHealthNormal />,
  attack: <RiSwordFill />,
  defense: <BsFillShieldFill />,
  speed: <AiFillThunderbolt />
};

export function PokemonGeneralInfo({ data }: IPokemonContent) {
  const { data: allAbilities } = useGetPokemonAbility(
    data?.abilities.map((i) => i.ability.url) ?? null
  );

  const color = getColorPokemon(data?.types[0].type.name ?? "normal");
  return (
    <S.Container>
      {!data ? (
        <p>Loading</p>
      ) : (
        <S.GridContainer>
          <section>
            <S.Title color={color}>Pokemon stats</S.Title>
            <S.Span color={color}>Height {data.height / 10} m</S.Span>
            <S.Span color={color}>Weight {data.weight / 10} kg</S.Span>
            <S.StatsList>
              {data.stats.map((item, index) => {
                const statName = item.stat.name;
                if (!Object.keys(svgsByStat).includes(statName)) return;

                return (
                  <S.ItemStat key={index} color={color}>
                    <article>
                      <p>{statName}</p>
                      {svgsByStat[statName as keyof typeof svgsByStat]}
                    </article>
                    <section>
                      <span>{item.base_stat}</span>
                      <S.Progress value={item.base_stat} max="200" color={color} />
                      <span>200</span>
                    </section>
                  </S.ItemStat>
                );
              })}
            </S.StatsList>
          </section>
          <section>
            <S.PokemonImage>
              <img
                src={
                  data.sprites.other.dream_world.front_default ??
                  data.sprites.other["official-artwork"].front_default
                }
              />
            </S.PokemonImage>
          </section>

          <S.EffectsContainer color={color}>
            {allAbilities?.map((item) => (
              <aside key={item.id}>
                <h3>{item.name}</h3>
                <div>
                  <p>
                    <span>Effect</span>{" "}
                    {item.effect_entries.filter((i) => i.language.name === "en")[0].effect}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Short Effect</span>{" "}
                    {item.effect_entries.filter((i) => i.language.name === "en")[0].short_effect}
                  </p>
                </div>
              </aside>
            ))}
          </S.EffectsContainer>
        </S.GridContainer>
      )}
    </S.Container>
  );
}
