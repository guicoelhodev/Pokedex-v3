import styled from "styled-components";
import { keyframes } from "styled-components";

export const changeFill = keyframes`
  0% { opacity:0}
  10% {opacity:1}
  90% {opacity:1}
  100% {opacity:0}
`;
export const SvgComponent = styled.svg`
  height: 100vh;
  width: 100%;
  position: absolute;
  transition: fill 10s linear;
  animation: ${changeFill} 10s infinite;
  aspect-ratio: inherit;
  z-index: 1;
`;
