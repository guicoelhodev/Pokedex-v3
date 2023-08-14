import styled from "styled-components";
import { keyframes } from "styled-components";

export const changeFill = keyframes`
  0% { opacity:0}
  10% {opacity:1}
  90% {opacity:1}
  100% {opacity:0}
`;
export const SvgComponent = styled.svg`
  z-index: -1;
  width: 100vw !important;
  position: absolute;
  top: 0;
  right: 0;
  transition: fill 10s linear;
  animation: ${changeFill} 10s infinite;

  * {
    width: 100vw !important;
  }
`;
