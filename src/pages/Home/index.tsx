/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import SvgWave from "../../components/SvgElement";
import Blastoise from "../../assets/img/blastoise.png";
import Entei from "../../assets/img/entei.png";
import Charizard from "../../assets/img/charizard.png";
import { AiFillSetting } from "react-icons/ai";

import * as S from "./style";
import NavBar from "../../components/NavBar";
import ToolsComponent from "../../components/Tools";
import SvgWaveSmartphone from "../../components/SvgPhone";
import useWindowDimensions from "../../hook/useWindowDimensions";

function HomePage() {
  const colors = ["#DFCB98", "#81D3E5", "#AB9785"];
  const [i, setI] = useState(0);
  const { width } = useWindowDimensions();

  const changeColorSvg = () => {
    console.log(i);

    setTimeout(() => {
      if (i == 2) {
        setI(0);
      } else {
        setI(i + 1);
      }
    }, 10000);
  };

  changeColorSvg();
  return (
    <S.ContainerHome>
      {width > 900 ? <SvgWave color={colors[i]} bg={"#fff"} /> : <></>}
      {width <= 500 ? <SvgWaveSmartphone color={colors[i]} bg={"#fff"} /> : <></>}
      <main>
        <section>
          <S.Title color={colors[i]}>Pokedex V3</S.Title>
          <S.Purpose color={colors[i]}>
            <div>
              <span />
              <h2> PURPOSE </h2>
              <span />
            </div>
            <aside>
              <p>
                Re-create an old project, called <span>pokedex V2</span>, with new tools, which
                include:
              </p>
              <ul>
                <li>New animation effects with CSS</li>
                <li>User experience (UX)</li>
                <li>Horizontal scrolling</li>
                <li>Performance</li>
                <li>Acessibility & SEO</li>
              </ul>
            </aside>
          </S.Purpose>
          <ToolsComponent />
        </section>
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
      </main>
      <NavBar color={colors[i]} />
    </S.ContainerHome>
  );
}

export default HomePage;
