import styled from "styled-components";
import { keyframes } from "styled-components";

const changeFill = keyframes`
  0% { opacity:0}
  20% {opacity:1}
  80% {opacity:1}
  100% {opacity:0}
`;
export const SvgComponent = styled.svg`
  height: 100vh;
  width: 100%;
  position: absolute;
  transition: fill 7s linear;
  animation: ${changeFill} 7s infinite;
`;
