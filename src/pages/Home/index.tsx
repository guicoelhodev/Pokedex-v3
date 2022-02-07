import { useState } from "react";
import SvgWave from "../../components/SvgElement";
import Blastoise from "../../assets/img/blastoise.png";
import Entei from "../../assets/img/entei.png";
import Charizard from "../../assets/img/charizard.png";

import * as S from "./style";
import NavBar from "../../components/NavBar";

function HomePage() {
  const colors = ["#DFCB98", "#81D3E5", "#AB9785"];
  const [i, setI] = useState(0);

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
      <SvgWave color={colors[i]} bg={"#fff"} />
      <main>
        <section>salve</section>
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
