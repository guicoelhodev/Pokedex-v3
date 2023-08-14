import { useState } from "react";
import * as S from "./style";
import SvgWave from "../../components/SvgElement";
import Blastoise from "../../assets/img/blastoise.png";
import Entei from "../../assets/img/entei.png";
import Charizard from "../../assets/img/charizard.png";
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
            <ToolsComponent />
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

export default HomePage;
