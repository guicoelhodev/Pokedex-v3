/* eslint-disable react/jsx-key */
import ViteJs from "../assets/svg/tools/vite-js.svg";
import SComponents from "../assets/svg/tools/styled-components.svg";
import Typescript from "../assets/svg/tools/typescript.svg";
import Figma from "../assets/svg/tools/figma.svg";
import ReactJs from "../assets/svg/tools/react-JS.svg";
import styled from "styled-components";

interface Props {
  type: number;
}
const SvgFilter = ({ type }: Props) => {
  const LibToolsSvg = styled.img`
    width: 60px;
    height: 100%;
    object-fit: contain;

    @media (max-width: 500px) {
      width: 40px;
      height: 40px;
    }
  `;

  const SvgObj = [
    <LibToolsSvg src={ViteJs} alt="ViteJS tool icon" />,
    <LibToolsSvg src={SComponents} alt="Styled-components tool icon" />,
    <LibToolsSvg src={Typescript} alt="Typescript tool icon" />,
    <LibToolsSvg src={Figma} alt="Figma tool icon" />,
    <LibToolsSvg src={ReactJs} alt="React js tool icon" />
  ];

  return SvgObj[type];
};

export default SvgFilter;
