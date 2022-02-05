import { useState, useEffect } from "react";
import SvgWave from "../../components/SvgElement";
import * as S from "./style";

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
    }, 7000);
  };

  changeColorSvg();

  return (
    <S.ContainerHome>
      <SvgWave color={colors[i]} bg={"#fff"} />
      <h1>Salve</h1>
    </S.ContainerHome>
  );
}

export default HomePage;
