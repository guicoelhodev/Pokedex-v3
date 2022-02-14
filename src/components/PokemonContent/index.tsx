import * as S from "./style";
import { ThreeCircles } from "react-loader-spinner";
import { GiHealthNormal } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";
import { BsFillShieldFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";

interface Props {
  structure: Array<string>;
  abilities: Array<{ ability: { name: string; url: string } }>;
  stats: Array<{ base_stat: string; effort: number; stat: { name: string; url: string } }>;
  request: boolean;
  color: string;
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

  return (
    <S.Container>
      {request ? (
        <>
          <button onClick={() => console.log(structure, abilities, stats)}>a</button>
          <S.Title color={color}>Pokemon stats</S.Title>

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
