import { useEffect, useState } from "react";
import * as S from "./style";
import SvgWave from "../UI/SvgElement";
import Blastoise from "../../assets/img/blastoise.png";
import Entei from "../../assets/img/entei.png";
import Charizard from "../../assets/img/charizard.png";
import SvgWaveSmartphone from "../UI/SvgPhone";
import useWindowDimensions from "../../hook/useWindowDimensions";

import { tools } from "./data";

export function Home() {
  const colors = ["#DFCB98", "#81D3E5", "#AB9785"];
  const [i, setI] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setI((prevI) => (prevI === 2 ? 0 : prevI + 1));
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <S.View bgColor={colors[i]}>
      <S.Container>
        {width > 900 ? <SvgWave color={colors[i]} bg={"#fff"} /> : <></>}
        {width <= 500 ? <SvgWaveSmartphone color={colors[i]} bg={"#fff"} /> : <></>}
        <S.MainContent>
          <S.ToolSection>
            <S.Title color={colors[i]}>Pokedex V3</S.Title>

            <S.PurposeContent color={colors[i]}>
              <div className="purpose-title">
                <h2> PURPOSE </h2>
              </div>
              <article>
                <p>
                  Re-create an old project, called{" "}
                  <a
                    href="https://pokedex-v2-coelho-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer">
                    pokedex V2
                  </a>
                  , with new tools, which include:
                </p>
              </article>
              <ul>
                <li>New animation effects with CSS</li>
                <li>User experience (UX)</li>
                <li>Horizontal scrolling</li>
                <li>Performance</li>
                <li>Acessibility & SEO</li>
              </ul>
            </S.PurposeContent>
            <S.ContainerTools>
              {tools.map((item) => (
                <li key={item.name}>
                  <img src={item.src} alt={item.name} />
                  <span>{item.name}</span>
                </li>
              ))}
            </S.ContainerTools>
          </S.ToolSection>
          <aside>
            {colors[i] === "#DFCB98" ? (
              <S.pokemonImg src={Charizard} />
            ) : colors[i] === "#81D3E5" ? (
              <S.pokemonImg src={Blastoise} />
            ) : colors[i] === "#AB9785" ? (
              <S.pokemonImg src={Entei} />
            ) : (
              <></>
            )}
          </aside>
        </S.MainContent>
      </S.Container>
    </S.View>
  );
}
