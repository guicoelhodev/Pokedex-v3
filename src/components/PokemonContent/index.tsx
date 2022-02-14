/* eslint-disable prefer-const */
import * as S from "./style";
import { ThreeCircles } from "react-loader-spinner";
import { GiHealthNormal } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";
import { BsFillShieldFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  structure: Array<number>;
  abilities: Array<{ ability: { name: string; url: string } }>;
  stats: Array<{ base_stat: string; effort: number; stat: { name: string; url: string } }>;
  request: boolean;
  color: string;
}

interface PropsEffect {
  name: string;
  effect: string;
  short_effect: string;
}
function PokemonContent({ structure, abilities, stats, request, color }: Props) {
  const statsSvg = [
    <GiHealthNormal key="hp" />,
    <RiSwordFill key="attack" />,
    <BsFillShieldFill key="defense" />,
    <></>, // index 3 don't have any item
    <></>, // index 4 don't have any item
    <AiFillThunderbolt key="thunder" />
  ];
  const [effects, setEffects] = useState<Array<any>>([]);

  useEffect(() => {
    async function getEffects() {
      let tmpEffect: any = [];
      abilities.forEach((obj: any) => {
        axios.get(obj.ability.url).then((res) => {
          let data = res.data;

          data.effect_entries.forEach((item: any) => {
            if (item.language.name === "en") {
              tmpEffect.push({
                name: data.name,
                effect: item.effect,
                short_effect: item.short_effect
              });
            }
          });
        });
      });
      setEffects(tmpEffect);
    }
    getEffects();
    console.log(effects);
  }, [abilities]);

  return (
    <S.Container>
      {request ? (
        <>
          <S.Title color={color}>Pokemon stats</S.Title>

          <S.Span color={color}>Height {structure[1] / 10} m</S.Span>
          <S.Span color={color}>Weight {structure[0] / 10} kg</S.Span>
          <S.StatsList>
            {stats.map((obj: any, index) => {
              if (index !== 3 && index != 4) {
                return (
                  <S.ItemStat key={index} color={color}>
                    <article>
                      <p>{obj.stat.name}</p>
                      {statsSvg[index]}
                    </article>
                    <section>
                      <span>{obj.base_stat}</span>
                      <S.Progress value={obj.base_stat} max="200" color={color} />
                      <span>200</span>
                    </section>
                  </S.ItemStat>
                );
              }
            })}
          </S.StatsList>
          <S.EffectsContainer color={color}>
            {effects.map((item: any) => (
              <aside key={item}>
                <h3>{item.name}</h3>
                <div>
                  <p>
                    <span>Effect</span> {item.effect}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Short Effect</span> {item.short_effect}
                  </p>
                </div>
              </aside>
            ))}
          </S.EffectsContainer>
        </>
      ) : (
        <S.Loading>
          <ThreeCircles
            height="80"
            width="80"
            color="grey"
            outerCircleColor="#4877cb"
            innerCircleColor="#D44000"
          />
          <span>Loading</span>
        </S.Loading>
      )}
    </S.Container>
  );
}

export default PokemonContent;
