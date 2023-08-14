import * as S from "./style";
import { GiHealthNormal } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";
import { BsFillShieldFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { getColorPokemon } from "../../utils/getColorPokemon";
import { useGetPokemonAbility } from "../../service/http/GET/useGetPokemonAbility";
import { useState } from "react";
import { useGetPokemonInfo } from "../../service/http/GET/useGetPokemonInfo";
import SvgWave from "../../components/UI/SvgElement";
import { SearchPokemon } from "./SearchPokemon";
import useWindowDimensions from "../../hook/useWindowDimensions";
import { SvgWaveMobile } from "../../components/UI/SvgPhone";

const svgsByStat = {
  hp: <GiHealthNormal />,
  attack: <RiSwordFill />,
  defense: <BsFillShieldFill />,
  speed: <AiFillThunderbolt />
};

export function SinglePokemon() {
  const [currentPokemonName, setCurrentPokemonName] = useState("bulbasaur");

  const { data } = useGetPokemonInfo(currentPokemonName);
  const { width } = useWindowDimensions();

  const { data: allAbilities } = useGetPokemonAbility(
    data?.abilities.map((i) => i.ability.url) ?? null
  );

  const color = getColorPokemon(data?.types[0].type.name ?? "normal");
  return (
    <S.View bgColor={color}>
      <S.Container>
        <S.MainContent>
          {width > 900 && <SvgWave color={color} bg={"#fff"} />}
          {width <= 500 && <SvgWaveMobile color={color} bg={"#fff"} />}

          <section>
            <SearchPokemon
              pokemonName={currentPokemonName}
              setPokemonName={setCurrentPokemonName}
              color={color}
            />

            <S.Title color={color}>Pokemon stats</S.Title>
            {data && (
              <>
                <S.Text color={color}>Height {data.height / 10} m</S.Text>
                <S.Text color={color}>Weight {data.weight / 10} kg</S.Text>
              </>
            )}
            <S.StatsList>
              {data?.stats.map((item, index) => {
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
            <S.PokemonImage color={color}>
              <div>
                <h2>{data?.name}</h2>

                {data ? (
                  <img
                    src={
                      data?.sprites.other.dream_world.front_default ??
                      data?.sprites.other["official-artwork"].front_default
                    }
                  />
                ) : (
                  <aside />
                )}
              </div>
            </S.PokemonImage>
          </section>
        </S.MainContent>

        <S.EffectsContainer color={color}>
          {allAbilities?.map((item) => (
            <aside key={item.id}>
              <h3>{item.name}</h3>
              <div>
                <p>
                  <span>Effect</span>{" "}
                  {item.effect_entries.filter((i) => i.language.name === "en")[0]?.effect ??
                    "No data"}
                </p>
              </div>
              <div>
                <p>
                  <span>Short Effect</span>{" "}
                  {item.effect_entries.filter((i) => i.language.name === "en")[0]?.short_effect ??
                    "No data"}
                </p>
              </div>
            </aside>
          ))}
        </S.EffectsContainer>
      </S.Container>
    </S.View>
  );
}
